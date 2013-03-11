# Sublime Text Snippets

Keyboard Karate that matches our [mostly reasonable approach to JavaScript](https://github.com/airbnb/javascript)

## Installation

Move the `javascript` folder to `~/Library/Application Support/Sublime Text 2/Packages/User/`

## Guide

Sublime Text snippets work when you type some letters (let's call them commands), then you hit `enter` to insert the snippet. Then additional `tabs` will move your cursor to the next anchor point. Anchor points are illustrated in this guide as sequential number counts. `1` is where the cursor will start, pressing `tab` will take you to `2` and so on.

## <a name='TOC'>Table of Contents</a>

  1. [vo](#vo): var object
  1. [va](#va): var array
  1. [vs](#vs): var string
  1. [if](#if): if statement
  1. [ife](#ife): if/else statement
  1. [whi](#whi): while loop
  1. [vf](#vf): var function
  1. [af](#af): anonymous function
  1. [nf](#nf): named function
  1. [pf](#pf): property function
  1. [iife](#iife): immediately invoked function expression
  1. [mod](#mod): module
  1. [args](#args): arguments array
  1. [tr](#tr): `this` reference
  1. [con](#con): console.log



## <a name='vo'>`vo`</a>

```javascript
var 1 = {2};
```

## <a name='va'>`va`</a>

```javascript
var 1 = [2];
```

## <a name='vs'>`vs`</a>

```javascript
var 1 = '2';
```

## <a name='if'>`if`</a>

```javascript
if (1) {
  2
}
```

## <a name='ife'>`ife`</a>

```javascript
if (1) {
  2
} else {
  3
}
```

## <a name='whi'>`whi`</a>

```javascript
while (1) {
  2
}
```

## <a name='vf'>`vf`</a>

```javascript
var 1 = function2() {
  3
};
```

## <a name='af'>`af`</a>

```javascript
function(1) {
  2
}3
```

## <a name='nf'>`nf`</a>

```javascript
function 1(2) {
  3
}4
```

## <a name='pf'>`pf`</a>

```javascript
1: function(2) {
  3
}4
```

## <a name='iife'>`iife`</a>

```javascript
(function(1) {
  2
})(3);
```

## <a name='mod'>`mod`</a>

```javascript
!function() {
  'use strict';

  1
}();
```

## <a name='args'>`args`</a>

```javascript
var args = Array.prototype.slice.apply(arguments);
```

## <a name='tr'>`tr`</a>

```javascript
var _this = this;
```

## <a name='con'>`con`</a>

```javascript
console.log(1);
```
