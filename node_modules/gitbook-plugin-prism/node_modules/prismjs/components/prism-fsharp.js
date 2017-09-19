Prism.languages.fsharp = Prism.languages.extend('clike', {
	'comment': [
		{
			pattern: /(^|[^\\])\(\*[\w\W]*?\*\)/,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true
		}
	],
	'keyword': /\b(?:let|return|use|yield)(?:!\B|\b)|\b(abstract|and|as|assert|base|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|global|if|in|inherit|inline|interface|internal|lazy|match|member|module|mutable|namespace|new|not|null|of|open|or|override|private|public|rec|select|static|struct|then|to|true|try|type|upcast|val|void|when|while|with|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|include|method|mixin|object|parallel|process|protected|pure|sealed|tailcall|trait|virtual|volatile)\b/,
	'string': /(?:"""[\s\S]*?"""|@"(?:""|[^"])*"|("|')(?:\\\1|\\?(?!\1)[\s\S])*\1)B?/,
	'number': [
		/\b-?0x[\da-fA-F]+(un|lf|LF)?\b/,
		/\b-?0b[01]+(y|uy)?\b/,
		/\b-?(\d*\.?\d+|\d+\.)([fFmM]|[eE][+-]?\d+)?\b/,
		/\b-?\d+(y|uy|s|us|l|u|ul|L|UL|I)?\b/
	]
});
Prism.languages.insertBefore('fsharp', 'keyword', {
	'preprocessor': {
		pattern: /^[^\r\n\S]*#.*/m,
		alias: 'property',
		inside: {
			'directive': {
				pattern: /(\s*#)\b(else|endif|if|light|line|nowarn)\b/,
				lookbehind: true,
				alias: 'keyword'
			}
		}
	}
});
