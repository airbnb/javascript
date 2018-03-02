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
				inside: 'inside',
				before: 'punctuation',
				root: Prism.languages.sass && Prism.languages.sass['variable-line']
			},
			{
				lang: 'sass',
				inside: 'inside',
				root: Prism.languages.sass && Prism.languages.sass['property-line']
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
						'easing': /\bcubic-bezier\((?:-?\d*\.?\d+,\s*){3}-?\d*\.?\d+\)\B|\b(?:linear|ease(?:-in)?(?:-out)?)(?=\s|[;}]|$)/i
					}, root);
					env.grammar = Prism.languages[lang];

					languages[env.language] = {initialized: true};
				}
			});
		}
	});

	if (Prism.plugins.Previewer) {
		new Prism.plugins.Previewer('easing', function (value) {

			value = {
				'linear': '0,0,1,1',
				'ease': '.25,.1,.25,1',
				'ease-in': '.42,0,1,1',
				'ease-out': '0,0,.58,1',
				'ease-in-out':'.42,0,.58,1'
			}[value] || value;

			var p = value.match(/-?\d*\.?\d+/g);

			if(p.length === 4) {
				p = p.map(function(p, i) { return (i % 2? 1 - p : p) * 100; });

				this.querySelector('path').setAttribute('d', 'M0,100 C' + p[0] + ',' + p[1] + ', ' + p[2] + ',' + p[3] + ', 100,0');

				var lines = this.querySelectorAll('line');
				lines[0].setAttribute('x2', p[0]);
				lines[0].setAttribute('y2', p[1]);
				lines[1].setAttribute('x2', p[2]);
				lines[1].setAttribute('y2', p[3]);

				return true;
			}

			return false;
		}, '*', function () {
			this._elt.innerHTML = '<svg viewBox="-20 -20 140 140" width="100" height="100">' +
				'<defs>' +
					'<marker id="prism-previewer-easing-marker" viewBox="0 0 4 4" refX="2" refY="2" markerUnits="strokeWidth">' +
						'<circle cx="2" cy="2" r="1.5" />' +
					'</marker>' +
				'</defs>' +
				'<path d="M0,100 C20,50, 40,30, 100,0" />' +
				'<line x1="0" y1="100" x2="20" y2="50" marker-start="url(' + location.href + '#prism-previewer-easing-marker)" marker-end="url(' + location.href + '#prism-previewer-easing-marker)" />' +
				'<line x1="100" y1="0" x2="40" y2="30" marker-start="url(' + location.href + '#prism-previewer-easing-marker)" marker-end="url(' + location.href + '#prism-previewer-easing-marker)" />' +
			'</svg>';
		});
	}

}());