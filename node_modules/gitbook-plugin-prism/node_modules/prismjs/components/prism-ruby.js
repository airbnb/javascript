/**
 * Original by Samuel Flores
 *
 * Adds the following new token classes:
 * 		constant, builtin, variable, symbol, regex
 */
(function(Prism) {
	Prism.languages.ruby = Prism.languages.extend('clike', {
		'comment': /#(?!\{[^\r\n]*?\}).*/,
		'keyword': /\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/
	});

	var interpolation = {
		pattern: /#\{[^}]+\}/,
		inside: {
			'delimiter': {
				pattern: /^#\{|\}$/,
				alias: 'tag'
			},
			rest: Prism.util.clone(Prism.languages.ruby)
		}
	};

	Prism.languages.insertBefore('ruby', 'keyword', {
		'regex': [
			{
				pattern: /%r([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1[gim]{0,3}/,
				inside: {
					'interpolation': interpolation
				}
			},
			{
				pattern: /%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/,
				inside: {
					'interpolation': interpolation
				}
			},
			{
				// Here we need to specifically allow interpolation
				pattern: /%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,
				inside: {
					'interpolation': interpolation
				}
			},
			{
				pattern: /%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/,
				inside: {
					'interpolation': interpolation
				}
			},
			{
				pattern: /%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/,
				inside: {
					'interpolation': interpolation
				}
			},
			{
				pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,
				lookbehind: true
			}
		],
		'variable': /[@$]+[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/,
		'symbol': /:[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/
	});

	Prism.languages.insertBefore('ruby', 'number', {
		'builtin': /\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
		'constant': /\b[A-Z][a-zA-Z_0-9]*(?:[?!]|\b)/
	});

	Prism.languages.ruby.string = [
		{
			pattern: /%[qQiIwWxs]?([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1/,
			greedy: true,
			inside: {
				'interpolation': interpolation
			}
		},
		{
			pattern: /%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/,
			greedy: true,
			inside: {
				'interpolation': interpolation
			}
		},
		{
			// Here we need to specifically allow interpolation
			pattern: /%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,
			greedy: true,
			inside: {
				'interpolation': interpolation
			}
		},
		{
			pattern: /%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/,
			greedy: true,
			inside: {
				'interpolation': interpolation
			}
		},
		{
			pattern: /%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/,
			greedy: true,
			inside: {
				'interpolation': interpolation
			}
		},
		{
			pattern: /("|')(#\{[^}]+\}|\\(?:\r?\n|\r)|\\?.)*?\1/,
			greedy: true,
			inside: {
				'interpolation': interpolation
			}
		}
	];
}(Prism));