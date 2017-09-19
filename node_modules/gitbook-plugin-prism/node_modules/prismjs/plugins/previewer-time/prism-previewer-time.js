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
		'markup': {
			lang: 'markup',
			before: 'punctuation',
			inside: 'inside',
			root: Prism.languages.markup && Prism.languages.markup['tag'].inside['attr-value']
		},
		'sass': [
			{
				lang: 'sass',
				inside: 'inside',
				root: Prism.languages.sass && Prism.languages.sass['property-line']
			},
			{
				lang: 'sass',
				before: 'operator',
				inside: 'inside',
				root: Prism.languages.sass && Prism.languages.sass['variable-line']
			}
		],
		'scss': true,
		'stylus': [
			{
				lang: 'stylus',
				before: 'hexcode',
				inside: 'rest',
				root: Prism.languages.stylus && Prism.languages.stylus['property-declaration'].inside
			},
			{
				lang: 'stylus',
				before: 'hexcode',
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
					before = 'important';
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
						'time': /(?:\b|\B-|(?=\B\.))\d*\.?\d+m?s\b/i
					}, root);
					env.grammar = Prism.languages[lang];

					languages[env.language] = {initialized: true};
				}
			});
		}
	});

	if (Prism.plugins.Previewer) {
		new Prism.plugins.Previewer('time', function(value) {
			var num = parseFloat(value);
			var unit = value.match(/[a-z]+$/i);
			if (!num || !unit) {
				return false;
			}
			unit = unit[0];
			this.querySelector('circle').style.animationDuration = 2 * num + unit;
			return true;
		}, '*', function () {
			this._elt.innerHTML = '<svg viewBox="0 0 64 64">' +
				'<circle r="16" cy="32" cx="32"></circle>' +
			'</svg>';
		});
	}

}());