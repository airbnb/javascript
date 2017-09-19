#nth-check [![Build Status](https://travis-ci.org/fb55/nth-check.png)](https://travis-ci.org/fb55/nth-check)

A performant nth-check parser & compiler.

###About

This module can be used to parse & compile nth-checks, as they are found in CSS 3's `nth-child()` and `nth-last-of-type()`.

`nth-check` focusses on speed, providing optimized functions for different kinds of nth-child formulas, while still following the [spec](http://www.w3.org/TR/css3-selectors/#nth-child-pseudo).

###API

```js
var nthCheck = require("nth-check");
```

#####`nthCheck(formula)`

First parses, then compiles the formula.

#####`nthCheck.parse(formula)`

Parses the expression, throws a `SyntaxError` if it fails, otherwise returns an array containing two elements.

__Example:__

```js
nthCheck.parse("2n+3") //[2, 3]
```

#####`nthCheck.compile([a, b])`

Takes an array with two elements (as returned by `.parse`) and returns a highly optimized function.

If the formula doesn't match any elements, it returns [`boolbase`](https://github.com/fb55/boolbase)'s `falseFunc`, otherwise, a function accepting an _index_ is returned, which returns whether or not a passed _index_ matches the formula. (Note: The spec starts counting at `1`, the returned function at `0`).

__Example:__
```js
var check = nthCheck.compile([2, 3]);

check(0) //false
check(1) //false
check(2) //true
check(3) //false
check(4) //true
check(5) //false
check(6) //true
```

---
License: BSD
