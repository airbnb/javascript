Prism.languages.ada = {
	'comment': /--.*/,
	'string': /"(?:""|[^"\r\f\n])*"/i,
	'number': [
		{
			pattern: /\b[0-9](?:_?[0-9])*#[0-9A-F](?:_?[0-9A-F])*(?:\.[0-9A-F](?:_?[0-9A-F])*)?#(?:E[+-]?[0-9](?:_?[0-9])*)?/i
		},
		{
			pattern: /\b[0-9](?:_?[0-9])*(?:\.[0-9](?:_?[0-9])*)?(?:E[+-]?[0-9](?:_?[0-9])*)?\b/i
		}
	],
	'attr-name': /\b'\w+/i,
	'keyword': /\b(?:abort|abs|abstract|accept|access|aliased|all|and|array|at|begin|body|case|constant|declare|delay|delta|digits|do|else|new|return|elsif|end|entry|exception|exit|for|function|generic|goto|if|in|interface|is|limited|loop|mod|not|null|of|others|out|overriding|package|pragma|private|procedure|protected|raise|range|record|rem|renames|requeue|reverse|select|separate|some|subtype|synchronized|tagged|task|terminate|then|type|until|use|when|while|with|xor)\b/i,
	'boolean': /\b(?:true|false)\b/i,
	'operator': /<[=>]?|>=?|=>?|:=|\/=?|\*\*?|[&+-]/,
	'punctuation': /\.\.?|[,;():]/,
	'char': /'.'/,
	'variable': /\b[a-z](?:[_a-z\d])*\b/i
};