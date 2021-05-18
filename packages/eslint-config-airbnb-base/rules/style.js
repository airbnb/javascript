module.exports = {
  rules: {
    // enforce line breaks after opening and before closing array brackets
    // https://eslint.org/docs/rules/array-bracket-newline
    // TODO: enable? semver-major
    // KEEP AS IS
    "array-bracket-newline": ["off", "consistent"], // object option alternative: { multiline: true, minItems: 3 }

    // enforce line breaks between array elements
    // https://eslint.org/docs/rules/array-element-newline
    // TODO: enable? semver-major
    // KEEP, SITUATIONAL ANALYSIS NEEDED
    // Need to determine how many items to allow on single line before breaking out to 1 per line
    "array-element-newline": ["off", { multiline: true, minItems: 3 }],

    // enforce spacing inside array brackets
    // KEEP, move to 'warn' to allow auto-fix on save
    "array-bracket-spacing": ["warn", "never"],

    // enforce spacing inside single-line blocks
    // https://eslint.org/docs/rules/block-spacing
    // DISABLE - can be replaced by Prettier's configuration: bracketSpacing: true
    "block-spacing": ["error", "always"],

    // enforce one true brace style
    // KEEP, move to 'warn' to allow auto-fix on save
    "brace-style": ["warn", "1tbs", { allowSingleLine: true }],

    // require camel case names
    // KEEP, would prefer to keep as 'error' to disallow auto-fix. Force the developer to manually choose a proper variable name
    camelcase: ["error", { properties: "never", ignoreDestructuring: false }],

    // enforce or disallow capitalization of the first letter of a comment
    // https://eslint.org/docs/rules/capitalized-comments
    // DISABLE - I'm not particularly bothered one way or the other on comment capitalization.
    "capitalized-comments": [
      "off",
      "never",
      {
        line: {
          ignorePattern: ".*",
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true,
        },
        block: {
          ignorePattern: ".*",
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true,
        },
      },
    ],

    // require trailing commas in multiline object literals
    // DISABLE - I'm very anti-comma-dangling
    // Can be managed by Prettier configuration: trailingComma: 'none'
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline",
      },
    ],

    // enforce spacing before and after comma
    // KEEP - Move to 'warn' to allow for auto-fix
    "comma-spacing": ["warn", { before: false, after: true }],

    // enforce one true comma style
    // KEEP, move to 'warn' to allow for auto-fix
    "comma-style": [
      "warn",
      "last",
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false,
        },
      },
    ],

    // disallow padding inside computed properties
    // KEEP, move to 'warn' to allow for auto-fix
    "computed-property-spacing": ["warn", "never"],

    // enforces consistent naming when capturing the current execution context
    // DISABLE: We can keep this off, we don't do any aliasing of 'this', since we use arrow functions everywhere and those inherit the parent scope
    "consistent-this": "off",

    // enforce newline at the end of file, with no multiple empty lines
    // KEEP, move to 'warn' to allow for auto-fix
    "eol-last": ["warn", "always"],

    // https://eslint.org/docs/rules/function-call-argument-newline
    // TODO: enable, semver-minor, once eslint v6.2 is required (which is a major)
    // SITUATIONAL ANALYSIS NEEDED: For functions that have many arguments, I see value in assigning them each a new line
    // for readability, but overall I don't agree with the rule. I think off/consistent actually may be the best bet here
    "function-call-argument-newline": ["off", "consistent"],

    // enforce spacing between functions and their invocations
    // https://eslint.org/docs/rules/func-call-spacing
    // KEEP, move to 'warn' to allow for auto-fix
    "func-call-spacing": ["warn", "never"],

    // requires function names to match the name of the variable or property to which they are
    // assigned
    // https://eslint.org/docs/rules/func-name-matching
    // // KEEP
    "func-name-matching": [
      "off",
      "always",
      {
        includeCommonJSModuleExports: false,
        considerPropertyDescriptor: true,
      },
    ],

    // require function expressions to have a name
    // https://eslint.org/docs/rules/func-names
    // KEEP
    "func-names": "warn",

    // enforces use of function declarations or expressions
    // https://eslint.org/docs/rules/func-style
    // TODO: enable
    // KEEP
    "func-style": ["off", "expression"],

    // enforce consistent line breaks inside function parentheses
    // https://eslint.org/docs/rules/function-paren-newline
    // KEEP, move to 'warn' to allow for auto-fix
    "function-paren-newline": ["warn", "consistent"],

    // Blacklist certain identifiers to prevent them being used
    // https://eslint.org/docs/rules/id-blacklist
    // TODO: semver-major, remove once eslint v7.4+ is required
    // KEEP
    "id-blacklist": "off",

    // disallow specified identifiers
    // https://eslint.org/docs/rules/id-denylist
    // KEEP
    "id-denylist": "off",

    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    // KEEP
    "id-length": "off",

    // require identifiers to match the provided regular expression
    // KEEP
    "id-match": "off",

    // Enforce the location of arrow function bodies with implicit returns
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    // KEEP, move to 'warn' to allow for autofix
    // Generally I agree with this rule, if an anonymous function returns an implicit expression, I'd prefer to see that stay on the same line
    // ex: const bleh = (arg) => someFunc(arg);
    "implicit-arrow-linebreak": ["warn", "beside"],

    // this option sets a specific tab width for your code
    // https://eslint.org/docs/rules/indent
    // DISABLE: Manage via Prettier configuration: {
    //   tabWidth: 2,
    //   useTabs: true
    // }
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        // MemberExpression: null,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
        ignoredNodes: [
          "JSXElement",
          "JSXElement > *",
          "JSXAttribute",
          "JSXIdentifier",
          "JSXNamespacedName",
          "JSXMemberExpression",
          "JSXSpreadAttribute",
          "JSXExpressionContainer",
          "JSXOpeningElement",
          "JSXClosingElement",
          "JSXFragment",
          "JSXOpeningFragment",
          "JSXClosingFragment",
          "JSXText",
          "JSXEmptyExpression",
          "JSXSpreadChild",
        ],
        ignoreComments: false,
      },
    ],

    // specify whether double or single quotes should be used in JSX attributes
    // https://eslint.org/docs/rules/jsx-quotes
    // KEEP, don't care about jsx
    "jsx-quotes": ["off", "prefer-double"],

    // enforces spacing between keys and values in object literal properties
    // SITUATIONAL ANALYSIS: Personally I prefer this, I think it makes the code more readable, but this is entirely subjective
    // To break this rule down, it means that
    //
    // const bleh = {
    //   someProp: 1
    //   someOtherProp: 2
    // }
    //
    // would become
    //
    // const bleh = {
    //   someProp:      1
    //   someOtherProp: 2
    // }
    //
    // or even
    //
    // const bleh = {
    //   someProp      : 1
    //   someOtherProp : 2
    // }
    //
    // I'm personally a fan of the second option, but this should probably be discussed by the group to see what everyone's preferences are
    "key-spacing": ["error", { beforeColon: false, afterColon: true }],

    // require a space before & after certain keywords
    // KEEP, move to 'warn' to allow auto-fix
    "keyword-spacing": [
      "warn",
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true },
        },
      },
    ],

    // enforce position of line comments
    // https://eslint.org/docs/rules/line-comment-position
    // TODO: enable?
    // KEEP, leave it off
    "line-comment-position": [
      "off",
      {
        position: "above",
        ignorePattern: "",
        applyDefaultPatterns: true,
      },
    ],

    // disallow mixed 'LF' and 'CRLF' as linebreaks
    // https://eslint.org/docs/rules/linebreak-style
    // KEEP, although we may want to discuss whether we want to use CR or CRLF (at least until we all get MacBooks and then we can go unix style :D )
    "linebreak-style": ["error", "unix"],

    // require or disallow an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    // KEEP, move to 'warn' to allow auto-fix
    "lines-between-class-members": [
      "warn",
      "always",
      { exceptAfterSingleLine: false },
    ],

    // enforces empty lines around comments
    // KEEP, leave it off
    "lines-around-comment": "off",

    // require or disallow newlines around directives
    // https://eslint.org/docs/rules/lines-around-directive
    // DISABLE: we don't use any directives (ie. 'use strict' or 'use asm'). We can enable strict mode at the TS compiler level via the tsconfig
    "lines-around-directive": [
      "error",
      {
        before: "always",
        after: "always",
      },
    ],

    // specify the maximum depth that blocks can be nested
    // SITUATIONAL ANALYSIS NEEDED: Deep levels of nesting to me is a code smell that suggests the logic should be broken up into smaller functions, but
    // this should warrant a discussion with the team
    "max-depth": ["off", 4],

    // specify the maximum length of a line in your program
    // https://eslint.org/docs/rules/max-len
    // DISABLE, can be managed by Prettier configuration: printWidth: 100
    // Personally I think 100 is fine, we're in 2021 and widescreen monitors exist, so 80 character limits are archaic now,
    // but if we set it to 120 I worry about lines getting a bit too long for readability..
    "max-len": [
      "error",
      100,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],

    // specify the max number of lines in a file
    // https://eslint.org/docs/rules/max-lines
    // KEEP OFF
    "max-lines": [
      "off",
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],

    // enforce a maximum function length
    // https://eslint.org/docs/rules/max-lines-per-function
    // KEEP OFF, at least until EQE can be revisited :P
    "max-lines-per-function": [
      "off",
      {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
      },
    ],

    // specify the maximum depth callbacks can be nested
    // KEEP
    "max-nested-callbacks": "off",

    // limits the number of parameters that can be used in the function declaration.
    // KEEP
    "max-params": ["off", 3],

    // specify the maximum number of statement allowed in a function
    // KEEP
    "max-statements": ["off", 10],

    // restrict the number of statements per line
    // https://eslint.org/docs/rules/max-statements-per-line
    // KEEP
    "max-statements-per-line": ["off", { max: 1 }],

    // enforce a particular style for multiline comments
    // https://eslint.org/docs/rules/multiline-comment-style
    // ENABLE, may need conversation for enforcing JSDoc type comments
    "multiline-comment-style": ["warn", "starred-block"],

    // require multiline ternary
    // https://eslint.org/docs/rules/multiline-ternary
    // TODO: enable?
    // KEEP OFF, may warrant a conversation if we want to enforce ternary styling
    // Essentially, this will enforce whether we want to standardize on
    //
    // const value = if a ? b : c
    //
    // or
    //
    // const value = if a
    //   ? b
    //   : c
    //
    // or
    //
    // const value = if a ?
    //   b :
    //   c
    //
    // I'm a fan of either leaving this off, or option #2
    "multiline-ternary": ["off", "never"],

    // require a capital letter for constructors
    // DISABLE: Shouldn't apply to TypeScript
    "new-cap": [
      "error",
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: [
          "Immutable.Map",
          "Immutable.Set",
          "Immutable.List",
        ],
      },
    ],

    // disallow the omission of parentheses when invoking a constructor with no arguments
    // https://eslint.org/docs/rules/new-parens
    // KEEP, move to 'warn' to allow auto-fix
    "new-parens": "warn",

    // allow/disallow an empty newline after var statement
    // KEEP OFF
    "newline-after-var": "off",

    // https://eslint.org/docs/rules/newline-before-return
    // KEEP OFF
    "newline-before-return": "off",

    // enforces new line after each method call in the chain to make it
    // more readable and easy to maintain
    // https://eslint.org/docs/rules/newline-per-chained-call
    // SITUATIONAL ANALYSIS NEEDED:
    // Personally, I prefer this. What this means is that
    //
    // const value: any[] = [].filter(x => x.isThing)
    //   .map(x => x.value)
    //   .filter(x => x !== 3)
    //
    // is enforced rather than allowing
    //
    // const value: any[] = [].filter(x.xIsThing).map(x => x.value).filter(x => x!== 3);
    //
    // But this should probably be a conversation, because we have one-line chains throughout the app, and we also need to consider
    // whether or not chains of RxJS operators within a pipe operator should fall into this convention
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 4 }],

    // disallow use of the Array constructor
    // KEEP, we usually just manually instantiate arrays anyways
    "no-array-constructor": "warn",

    // disallow use of bitwise operators
    // https://eslint.org/docs/rules/no-bitwise
    // KEEP
    "no-bitwise": "error",

    // disallow use of the continue statement
    // https://eslint.org/docs/rules/no-continue
    // SITUATIONAL ANALYSIS NEEDED: do we use continues inside for loops anywhere? If not, we should keep this
    "no-continue": "error",

    // disallow comments inline after code
    // KEEP
    "no-inline-comments": "off",

    // disallow if as the only statement in an else block
    // https://eslint.org/docs/rules/no-lonely-if
    // KEEP, we should be using an else if in this scenario
    "no-lonely-if": "error",

    // disallow un-paren'd mixes of different operators
    // https://eslint.org/docs/rules/no-mixed-operators
    // SITUATIONAL ANALYSIS NEEDED: I like this rule, but not sure if we use this anywhere in our codebase
    "no-mixed-operators": [
      "error",
      {
        // the list of arithmetic groups disallows mixing `%` and `**`
        // with other arithmetic operators.
        groups: [
          ["%", "**"],
          ["%", "+"],
          ["%", "-"],
          ["%", "*"],
          ["%", "/"],
          ["/", "*"],
          ["&", "|", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!=="],
          ["&&", "||"],
        ],
        allowSamePrecedence: false,
      },
    ],

    // disallow mixed spaces and tabs for indentation
    // KEEP
    "no-mixed-spaces-and-tabs": "error",

    // disallow use of chained assignment expressions
    // https://eslint.org/docs/rules/no-multi-assign
    // KEEP
    "no-multi-assign": ["error"],

    // disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
    // https://eslint.org/docs/rules/no-multiple-empty-lines
    // KEEP, move to 'warn' to allow auto fix
    "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],

    // disallow negated conditions
    // https://eslint.org/docs/rules/no-negated-condition
    // KEEP
    "no-negated-condition": "off",

    // disallow nested ternary expressions
    // KEEP, nested ternaries are extremely difficult to parse and other expressions can accomplish the same thing in a more readable manner
    "no-nested-ternary": "error",

    // disallow use of the Object constructor
    // KEEP, I don't believe we do this anywhere
    "no-new-object": "error",

    // disallow use of unary operators, ++ and --
    // https://eslint.org/docs/rules/no-plusplus
    // DISABLE, I prefer having this capability with respect to iterators
    "no-plusplus": "error",

    // disallow certain syntax forms
    // https://eslint.org/docs/rules/no-restricted-syntax
    // SITUATIONAL ANALYSIS NEEDED: I like for... in loops, and believe we have plenty of examples of them. Need further discussion.
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message:
          "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      },
      {
        selector: "ForOfStatement",
        message:
          "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.",
      },
      {
        selector: "LabeledStatement",
        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message:
          "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],

    // disallow space between function identifier and application
    // KEEP, move to 'warn' to allow auto fix
    "no-spaced-func": "error",

    // disallow tab characters entirely
    // DISABLE, Prettier will handle this
    "no-tabs": "error",

    // disallow the use of ternary operators
    // KEEP OFF
    "no-ternary": "off",

    // disallow trailing whitespace at the end of lines
    // KEEP, move to 'warn' to allow auto fix
    "no-trailing-spaces": [
      "warn",
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],

    // disallow dangling underscores in identifiers
    // https://eslint.org/docs/rules/no-underscore-dangle
    // KEEP
    "no-underscore-dangle": [
      "error",
      {
        allow: [],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true,
      },
    ],

    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    // https://eslint.org/docs/rules/no-unneeded-ternary
    // KEEP, move to 'warn' to allow auto-fix
    "no-unneeded-ternary": ["warn", { defaultAssignment: false }],

    // disallow whitespace before properties
    // https://eslint.org/docs/rules/no-whitespace-before-property
    // KEEP, move to 'warn' to allow auto-fix
    "no-whitespace-before-property": "warn",

    // enforce the location of single-line statements
    // https://eslint.org/docs/rules/nonblock-statement-body-position
    // SITUATIONAL ANALYSIS NEEDED: Need team input on what they prefer
    "nonblock-statement-body-position": ["error", "beside", { overrides: {} }],

    // require padding inside curly braces
    // KEEP, this necessitates further discussion. Per Mike's comments on the ES6 style guide, this rule is going to cover the standard
    // for not only object expressions, but also for reproducing our TypeScript Hero standard for import formatting.
    // I'd like to cover that in a separate pull request
    "object-curly-spacing": ["error", "always"],

    // enforce line breaks between braces
    // https://eslint.org/docs/rules/object-curly-newline
    // KEEP, this necessitates further discussion. Per Mike's comments on the ES6 style guide, this rule is going to cover the standard
    // for not only object expressions, but also for reproducing our TypeScript Hero standard for import formatting.
    // I'd like to cover that in a separate pull request
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
        ImportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ExportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
      },
    ],

    // enforce "same line" or "multiple line" on object properties.
    // https://eslint.org/docs/rules/object-property-newline
    // KEEP, this necessitates further discussion. Per Mike's comments on the ES6 style guide, this rule is going to cover the standard
    // for not only object expressions, but also for reproducing our TypeScript Hero standard for import formatting.
    // I'd like to cover that in a separate pull request
    "object-property-newline": [
      "error",
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],

    // allow just one var statement per function
    // DISABLE, not applicable
    "one-var": ["error", "never"],

    // require a newline around variable declaration
    // https://eslint.org/docs/rules/one-var-declaration-per-line
    // DISABLE, not applicable
    "one-var-declaration-per-line": ["error", "always"],

    // require assignment operator shorthand where possible or prohibit it entirely
    // https://eslint.org/docs/rules/operator-assignment
    // SITUATIONAL ANALYSIS NEEDED; Need team input on what they prefer
    "operator-assignment": ["error", "always"],

    // Requires operator at the beginning of the line in multiline statements
    // https://eslint.org/docs/rules/operator-linebreak
    // SITUATIONAL ANALYSIS NEEDED: Need team input.
    // This partners with the above rule, where if we decie if we want operators in multiline statements to be the delimiting character for a new line,
    // this rule decides where we want them to be
    "operator-linebreak": ["error", "before", { overrides: { "=": "none" } }],

    // disallow padding within blocks
    // DISABLE, adds unnecessary whitespace
    "padded-blocks": [
      "error",
      {
        blocks: "never",
        classes: "never",
        switches: "never",
      },
      {
        allowSingleLineBlocks: true,
      },
    ],

    // Require or disallow padding lines between statements
    // https://eslint.org/docs/rules/padding-line-between-statements
    // KEEP OFF
    "padding-line-between-statements": "off",

    // Disallow the use of Math.pow in favor of the ** operator
    // https://eslint.org/docs/rules/prefer-exponentiation-operator
    // TODO: enable, semver-major when eslint 5 is dropped
    // KEEP OFF
    "prefer-exponentiation-operator": "off",

    // Prefer use of an object spread over Object.assign
    // https://eslint.org/docs/rules/prefer-object-spread
    // KEEP, move to 'warn' to allow auto-fix
    "prefer-object-spread": "warn",

    // require quotes around object literal property names
    // https://eslint.org/docs/rules/quote-props.html
    // DISABLE, can be managed by Prettier configuration: quoteProps: 'asNeeded'
    "quote-props": [
      "error",
      "as-needed",
      { keywords: false, unnecessary: true, numbers: false },
    ],

    // specify whether double or single quotes should be used
    // DISABLE, can be managed by Prettier configuration: singleQuote: 'true'
    quotes: ["error", "single", { avoidEscape: true }],

    // do not require jsdoc
    // https://eslint.org/docs/rules/require-jsdoc
    // SITUATIONAL ANALYSIS NEEDED: Do we want to require JSDoc at least for libraries?
    "require-jsdoc": "off",

    // require or disallow use of semicolons instead of ASI
    // DISABLE: can be managed by Prettier configuration: semi: true
    semi: ["error", "always"],

    // enforce spacing before and after semicolons
    // KEEP, move to 'warn' to allow auto-fix
    "semi-spacing": ["warn", { before: false, after: true }],

    // Enforce location of semicolons
    // https://eslint.org/docs/rules/semi-style
    // KEEP, move to 'warn' to allow auto-fix
    // Would like to have a discussion though, I believe Nate has thoughts on this in terms of how this affects the emitted JavaScript
    "semi-style": ["error", "last"],

    // requires object keys to be sorted
    // KEEP OFF
    "sort-keys": ["off", "asc", { caseSensitive: false, natural: true }],

    // sort variables within the same declaration block
    // KEEP OFF
    "sort-vars": "off",

    // require or disallow space before blocks
    // KEEP, move to 'warn' to allow auto-fix
    "space-before-blocks": "warn",

    // require or disallow space before function opening parenthesis
    // https://eslint.org/docs/rules/space-before-function-paren
    // DISABLE
    // would require
    //
    // function myFunction ()
    //
    // instead of
    //
    // function myFunction()
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],

    // require or disallow spaces inside parentheses
    // KEEP, move to 'warn' to allow auto-fix
    "space-in-parens": ["warn", "never"],

    // require spaces around operators
    // KEEP, move to 'warn' to allow auto-fix
    "space-infix-ops": "warn",

    // Require or disallow spaces before/after unary operators
    // https://eslint.org/docs/rules/space-unary-ops
    // KEEP, move to 'warn' to allow auto-fix
    "space-unary-ops": [
      "warn",
      {
        words: true,
        nonwords: false,
        overrides: {},
      },
    ],

    // require or disallow a space immediately following the // or /* in a comment
    // https://eslint.org/docs/rules/spaced-comment
    // KEEP, move to 'warn' to allow auto-fix
    "spaced-comment": [
      "warn",
      "always",
      {
        line: {
          exceptions: ["-", "+"],
          markers: ["=", "!", "/"], // space here to support sprockets directives, slash for TS /// comments
        },
        block: {
          exceptions: ["-", "+"],
          markers: ["=", "!", ":", "::"], // space here to support sprockets directives and flow comment types
          balanced: true,
        },
      },
    ],

    // Enforce spacing around colons of switch statements
    // https://eslint.org/docs/rules/switch-colon-spacing
    // KEEP, move to 'warn' to allow auto-fix
    "switch-colon-spacing": ["warn", { after: true, before: false }],

    // Require or disallow spacing between template tags and their literals
    // https://eslint.org/docs/rules/template-tag-spacing
    // SITUATIONAL ANALYSIS REQUIRED: I don't believe we use tagged template literals, but if we do, this may be worth keeping and dropping to a 'warn'
    "template-tag-spacing": ["warn", "never"],

    // require or disallow the Unicode Byte Order Mark
    // https://eslint.org/docs/rules/unicode-bom
    // DISABLE: I don't believe we have a need to specify endianness for our code units
    "unicode-bom": ["error", "never"],

    // require regex literals to be wrapped in parentheses
    // KEEP OFF
    "wrap-regex": "off",
  },
};
