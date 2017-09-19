(function() {

	if (
		typeof self !== 'undefined' && !self.Prism ||
		typeof global !== 'undefined' && !global.Prism
	) {
		return;
	}

	var languages = {
		'css': true,
		'less': true,
		'sass': [
			{
				lang: 'sass',
				before: 'punctuation',
				inside: 'inside',
				root: Prism.languages.sass && Prism.languages.sass['variable-line']
			},
			{
				lang: 'sass',
				before: 'punctuation',
				inside: 'inside',
				root: Prism.languages.sass && Prism.languages.sass['property-line']
			}
		],
		'scss': true,
		'stylus': [
			{
				lang: 'stylus',
				before: 'func',
				inside: 'rest',
				root: Prism.languages.stylus && Prism.languages.stylus['property-declaration'].inside
			},
			{
				lang: 'stylus',
				before: 'func',
				inside: 'rest',
				root: Prism.languages.stylus && Prism.languages.stylus['variable-declaration'].inside
			}
		]
	};

	Prism.hooks.add('before-highlight', function (env) {
		if (env.language && languages[env.language] && !languages[env.language].initialized) {
			var lang = languages[env.language];
			if (Prism.util.type(lang) !== 'Array') {
				lang = [lang];
			}
			lang.forEach(function(lang) {
				var before, inside, root, skip;
				if (lang === true) {
					// Insert before color previewer if it exists
					before = Prism.plugins.Previewer && Prism.plugins.Previewer.byType['color'] ? 'color' : 'important';
					inside = env.language;
					lang = env.language;
				} else {
					before = lang.before || 'important';
					inside = lang.inside || lang.lang;
					root = lang.root || Prism.languages;
					skip = lang.skip;
					lang = env.language;
				}

				if (!skip && Prism.languages[lang]) {
					Prism.languages.insertBefore(inside, before, {
						'gradient': {
							pattern: /(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\((?:(?:rgb|hsl)a?\(.+?\)|[^\)])+\)/gi,
							inside: {
								'function': /[\w-]+(?=\()/,
								'punctuation': /[(),]/
							}
						}
					}, root);
					env.grammar = Prism.languages[lang];

					languages[env.language] = {initialized: true};
				}
			});
		}
	});

	// Stores already processed gradients so that we don't
	// make the conversion every time the previewer is shown
	var cache = {};

	/**
	 * Returns a W3C-valid linear gradient
	 * @param {string} prefix Vendor prefix if any ("-moz-", "-webkit-", etc.)
	 * @param {string} func Gradient function name ("linear-gradient")
	 * @param {string[]} values Array of the gradient function parameters (["0deg", "red 0%", "blue 100%"])
	 */
	var convertToW3CLinearGradient = function(prefix, func, values) {
		// Default value for angle
		var angle = '180deg';

		if (/^(?:-?\d*\.?\d+(?:deg|rad)|to\b|top|right|bottom|left)/.test(values[0])) {
			angle = values.shift();
			if (angle.indexOf('to ') < 0) {
				// Angle uses old keywords
				// W3C syntax uses "to" + opposite keywords
				if (angle.indexOf('top') >= 0) {
					if (angle.indexOf('left') >= 0) {
						angle = 'to bottom right';
					} else if (angle.indexOf('right') >= 0) {
						angle = 'to bottom left';
					} else {
						angle = 'to bottom';
					}
				} else if (angle.indexOf('bottom') >= 0) {
					if (angle.indexOf('left') >= 0) {
						angle = 'to top right';
					} else if (angle.indexOf('right') >= 0) {
						angle = 'to top left';
					} else {
						angle = 'to top';
					}
				} else if (angle.indexOf('left') >= 0) {
					angle = 'to right';
				} else if (angle.indexOf('right') >= 0) {
					angle = 'to left';
				} else if (prefix) {
					// Angle is shifted by 90deg in prefixed gradients
					if (angle.indexOf('deg') >= 0) {
						angle = (90 - parseFloat(angle)) + 'deg';
					} else if (angle.indexOf('rad') >= 0) {
						angle = (Math.PI / 2 - parseFloat(angle)) + 'rad';
					}
				}
			}
		}

		return func + '(' + angle + ',' + values.join(',') + ')';
	};

	/**
	 * Returns a W3C-valid radial gradient
	 * @param {string} prefix Vendor prefix if any ("-moz-", "-webkit-", etc.)
	 * @param {string} func Gradient function name ("linear-gradient")
	 * @param {string[]} values Array of the gradient function parameters (["0deg", "red 0%", "blue 100%"])
	 */
	var convertToW3CRadialGradient = function(prefix, func, values) {
		if (values[0].indexOf('at') < 0) {
			// Looks like old syntax

			// Default values
			var position = 'center';
			var shape = 'ellipse';
			var size = 'farthest-corner';

			if (/\bcenter|top|right|bottom|left\b|^\d+/.test(values[0])) {
				// Found a position
				// Remove angle value, if any
				position = values.shift().replace(/\s*-?\d+(?:rad|deg)\s*/, '');
			}
			if (/\bcircle|ellipse|closest|farthest|contain|cover\b/.test(values[0])) {
				// Found a shape and/or size
				var shapeSizeParts = values.shift().split(/\s+/);
				if (shapeSizeParts[0] && (shapeSizeParts[0] === 'circle' || shapeSizeParts[0] === 'ellipse')) {
					shape = shapeSizeParts.shift();
				}
				if (shapeSizeParts[0]) {
					size = shapeSizeParts.shift();
				}

				// Old keywords are converted to their synonyms
				if (size === 'cover') {
					size = 'farthest-corner';
				} else if (size === 'contain') {
					size = 'clothest-side';
				}
			}

			return func + '(' + shape + ' ' + size + ' at ' + position + ',' + values.join(',') + ')';
		}
		return func + '(' + values.join(',') + ')';
	};

	/**
	 * Converts a gradient to a W3C-valid one
	 * Does not support old webkit syntax (-webkit-gradient(linear...) and -webkit-gradient(radial...))
	 * @param {string} gradient The CSS gradient
	 */
	var convertToW3CGradient = function(gradient) {
		if (cache[gradient]) {
			return cache[gradient];
		}
		var parts = gradient.match(/^(\b|\B-[a-z]{1,10}-)((?:repeating-)?(?:linear|radial)-gradient)/);
		// "", "-moz-", etc.
		var prefix = parts && parts[1];
		// "linear-gradient", "radial-gradient", etc.
		var func = parts && parts[2];

		var values = gradient.replace(/^(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\(|\)$/g, '').split(/\s*,\s*/);

		if (func.indexOf('linear') >= 0) {
			return cache[gradient] = convertToW3CLinearGradient(prefix, func, values);
		} else if (func.indexOf('radial') >= 0) {
			return cache[gradient] = convertToW3CRadialGradient(prefix, func, values);
		}
		return cache[gradient] = func + '(' + values.join(',') + ')';
	};



	if (Prism.plugins.Previewer) {
		new Prism.plugins.Previewer('gradient', function(value) {
			this.firstChild.style.backgroundImage = '';
			this.firstChild.style.backgroundImage = convertToW3CGradient(value);
			return !!this.firstChild.style.backgroundImage;
		}, '*', function () {
			this._elt.innerHTML = '<div></div>';
		});
	}

}());