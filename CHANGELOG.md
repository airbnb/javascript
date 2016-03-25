1.0.0 / 2016-04-04
==================
Forked from [airbnb standards](https://github.com/airbnb/javascript/blob/master/README.md) and modified to suit our needs. Forked from [this commit hash](https://github.com/airbnb/javascript/commit/ff6e1d0d08c129db5876a897ee146ae801178809).

**General**
- All code snippets indented 4 spaces instead 2.
- Extraneous `function` keyword removed from examples where it didn't add value.
- Updated many examples for clarity in order to better focus on the point being made.
- Many rules renumbered.
- "Airbnb" references changed to "Nerdery"

**Overview**
- Added introduction
- Removed "Other Style Guides"
- Updated Table of Contents

**Types**
- Combined two sections together: `Types` and `Type Casting & Coercion`
- Added new rule `types--assign-consistent`.  Adds more reinforcement for strong typing.
- Added new rule `types--return-consistent`. Adds more reinforcement for strong typing.
- Added new rule `types--exceptions`. Prefer throwing typed exceptions.
- Changed wording on rule `types--comment-deviations` to make more general statement about "trick" operators.
- Changed rule `coercion-booleans` to remove recommended use of !!age since we consider this a "trick" operator.
- Removed rule `types--primitives`. This is more of a "how-it-works" than a standard.
- Removed rule `coercion--bitwise`. This is more of a "how-it-works" than a standard.

**Variables**
- Combines two sections together: `References` and `Variables`
- Rearranged order of rules in this section to flow more logically.
- Removed rule `references--block-scope`. This is more of a "how-it-works" than a standard.
- Renamed rule `variables--const` to `variables--always-declare` to more clearly discourage global variables.
- Changed wording on rule `variables--define-where-use` to be more clear about assigning variables near their first use.

**Objects**
- Combined rules `objects--reserved-words` and `objects--reserved-words-2` into a single rule.
- Changed rule `es6-object-concise` to be less prescriptive about using property shorthand. Use in certain situations, not all.

**Arrays**
- Changed rule `es6-array-spreads` to add slice() as a viable alternative.

**Destructuring**
- Added new rule `strings--sanitize` to ensure strings are sanitized before inserting into the DOM.

**Functions**
- Rearranged order of rules in this section to flow more logically.
- Added new rule `functions--too-many-parameters` to avoid functions with too many parameters.
- Changed rule `functions--default-parameters` to add an example of assigning default parameters to a destructured parameter list.
- Removed rule `functions--signature-spacing`. The same idea is covered in the `Spacing` section.

**Arrow Functions**
- Removed rule `arrows--implicit-return`. Don't need to be prescriptive about this -- there are cases  where single expression with curly braces may be preferred for better readability, debugging, etc.

**Classes**
- Renamed from section `Constructors`
- Added new rule `classes--static` to illustrate preferred syntax for static properties and methods.
- Removed rule `constructors--chaining`. This is more of a "how to" than a standard.

**Modules**
- Added new rule `modules--separate` to recommend separate files per module.
- Added new rule `modules--self-host` to recommend self-hosting of third-party scripts.

**Hosting**
- Removed this section. This is more of a "how-it-works" than a standard.

**Comparison**
- Renamed from section `Comparison Operators & Equality`
- Added new rule `comparison--eqeq-null` to allow for == only when doing null checks.
- Changed rule `comparison--eqeqeq` to remove "how-it-works" language about type casting.
- Split rule `comparison--shortcuts` into separate rules of `comparison--no-shortcuts` and `comparison--shortcuts-boolean`. Shortcuts mostly discouraged for anything but boolean comparisons.
- Removed rule `comparison--unneeded-ternary`. This contradicts other rules that discourage "trick" operators.
- Removed rule `comparison--moreinfo`. This is more of a "how-it-works" than a standard.

**Comments**
- Changed rule `comments--todo` to better state that these should "annotate refactoring recommendations"

**Whitespace**
- Changed rule `whitespace--spaces` from 2 spaces to 4 for better readability.
- Changed rule `whitespace--newline-at-end` to remove closure in the code sample that wasn't related to point we're trying to make.
- Changed rule `whitespace--chains` to remove code sample with chains indented multiple levels deep. Let's leave this style up to the developer.
- Changed rule `whitespace--max-len` to remove code sample talking about long strings (this is already covered in the `strings--line-length` rule).

**Naming Conventions**
- Added new rule `naming--verbs-nouns` to prescribe naming recommendations for class methods and properties.
- Added new rules `naming--constants` and `naming--constants-grouping` to prescribe ALL_CAPS convention for naming of constants.

**Accessors**
- Added new rule `accessors--use-them` to encourage use of native getters and setters.
- Added new rule `accessors--no-side-effects` to forbid side effects in getters.
- Removed rule `accessors--not-required` and `accessors--no-getters-setters` and `accessors--consistent`. We want to encourage use of native getters and setters.

**DOM Interaction**
- Renamed this section from `jQuery` to `DOM Interaction`
- Added new rule `dom--selector-prefix` to ensure selectors are prefixed by "js".
- Added new rule `dom--selector-match` to ensure selectors are named the same as the JavaScript class.

**Asynchronous Operations**
- Added this as a new section for additional rules around use of Promises

**Deployment**
- Added this as a new section for additional rules around code minification

**ECMAScript 5 Compatibility**
- Removed this section.

**ECMAScript 6 Styles**
- Removed this section.

**Testing**
- Removed this section. Type and degree of unit testing performed is up to the project.

**Performance**
- Removed this section. Performance best practices is another conversation -- Google is your friend.

**Resources**
- Removed this section.

**In the Wild**
- Removed this section.

**Translation**
- Removed this section.

**The JavaScript Style Guide Guide**
- Removed this section.

**Chat With Us About JavaScript**
- Removed this section.

**Contributors**
- Removed this section.

**Amendments**
- Removed this section.
