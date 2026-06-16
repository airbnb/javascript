# Airbnb JavaScript Style Guide() {

*A mostly reasonable approach to JavaScript*

> Full desired README.md content is the current `master` README.md at blob SHA `bd91faf2ea5a751f9f9c3b72e5e44477a2846465`, with only these two scoped documentation edits applied:
>
> 1. In section `6.1` immediately after `Use single quotes '' for strings.`, add:
>
>    `> Why? This is primarily a consistency rule; both single and double quotes are valid JavaScript. Standardizing on one quote style keeps diffs focused on content changes and avoids implying that quote choice carries semantic meaning. Airbnb uses single quotes for JavaScript strings and reserves double quotes for syntaxes whose surrounding conventions expect them, such as JSX attributes.`
>
> 2. In section `22.3`, replace the existing `> Why?` paragraph with:
>
>    `> Why? Number makes type casting explicit and requires the whole value to be numeric. Unary + is terse, but easy to miss, and bitshift coercion truncates to a 32-bit integer. Use parseInt when you intend to parse an integer out of a string, and always include a radix so the base is unambiguous. The parseInt function produces an integer value dictated by interpretation of the contents of the string argument according to the specified radix. Leading whitespace in string is ignored. If radix is undefined or 0, it is assumed to be 10 except when the number begins with the character pairs 0x or 0X, in which case a radix of 16 is assumed. This differs from ECMAScript 3, which merely discouraged (but allowed) octal interpretation. Many implementations have not adopted this behavior as of 2013. And, because older browsers must be supported, always specify a radix.`

# };
