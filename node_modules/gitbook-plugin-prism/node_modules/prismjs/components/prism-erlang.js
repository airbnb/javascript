Prism.languages.erlang = {
	'comment': /%.+/,
	'string': /"(?:\\?.)*?"/,
	'quoted-function': {
		pattern: /'(?:\\.|[^'\\])+'(?=\()/,
		alias: 'function'
	},
	'quoted-atom': {
		pattern: /'(?:\\.|[^'\\])+'/,
		alias: 'atom'
	},
	'boolean': /\b(?:true|false)\b/,
	'keyword': /\b(?:fun|when|case|of|end|if|receive|after|try|catch)\b/,
	'number': [
		/\$\\?./,
		/\d+#[a-z0-9]+/i,
		/(?:\b|-)\d*\.?\d+([Ee][+-]?\d+)?\b/
	],
	'function': /\b[a-z][\w@]*(?=\()/,
	'variable': {
		// Look-behind is used to prevent wrong highlighting of atoms containing "@"
		pattern: /(^|[^@])(?:\b|\?)[A-Z_][\w@]*/,
		lookbehind: true
	},
	'operator': [
		/[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:bnot|div|rem|band|bor|bxor|bsl|bsr|not|and|or|xor|orelse|andalso)\b/,
		{
			// We don't want to match <<
			pattern: /(^|[^<])<(?!<)/,
			lookbehind: true
		},
		{
			// We don't want to match >>
			pattern: /(^|[^>])>(?!>)/,
			lookbehind: true
		}
	],
	'atom': /\b[a-z][\w@]*/,
	'punctuation': /[()[\]{}:;,.#|]|<<|>>/

};