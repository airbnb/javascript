Prism.languages.eiffel = {
	'string': [
		// Aligned-verbatim-strings
		/"([^[]*)\[[\s\S]+?\]\1"/,
		// Non-aligned-verbatim-strings
		/"([^{]*)\{[\s\S]+?\}\1"/,
		// Single-line string
		/"(?:%\s+%|%"|.)*?"/
	],
	// (comments including quoted strings not supported)
	'comment': /--.*/,
	// normal char | special char | char code
	'char': /'(?:%'|.)+?'/,
	'keyword': /\b(?:across|agent|alias|all|and|attached|as|assign|attribute|check|class|convert|create|Current|debug|deferred|detachable|do|else|elseif|end|ensure|expanded|export|external|feature|from|frozen|if|implies|inherit|inspect|invariant|like|local|loop|not|note|obsolete|old|once|or|Precursor|redefine|rename|require|rescue|Result|retry|select|separate|some|then|undefine|until|variant|Void|when|xor)\b/i,
	'boolean': /\b(?:True|False)\b/i,
	'number': [
		// hexa | octal | bin
		/\b0[xcb][\da-f](?:_*[\da-f])*\b/i,
		// Decimal
		/(?:\d(?:_*\d)*)?\.(?:(?:\d(?:_*\d)*)?[eE][+-]?)?\d(?:_*\d)*|\d(?:_*\d)*\.?/
	],
	'punctuation': /:=|<<|>>|\(\||\|\)|->|\.(?=\w)|[{}[\];(),:?]/,
	'operator': /\\\\|\|\.\.\||\.\.|\/[~\/=]?|[><]=?|[-+*^=~]/
};
