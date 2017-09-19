# Comparison Operators & Equality

- [15.1](#15.1) <a name='15.1'></a> Use `===` and `!==` over `==` and `!=`.


- [15.2](#15.2) <a name='15.2'></a> Conditional statements such as the `if` statement evaulate their expression using coercion with the `ToBoolean` abstract method and always follow these simple rules:


+ **Objects** evaluate to **true**
+ **Undefined** evaluates to **false**
+ **Null** evaluates to **false**
+ **Booleans** evaluate to **the value of the boolean**
+ **Numbers** evaluate to **false** if **+0, -0, or NaN**, otherwise **true**
+ **Strings** evaluate to **false** if an empty string `''`, otherwise **true**

```javascript
if ([0]) {
  // true
  // An array is an object, objects evaluate to true
}
```


- [15.3](#15.3) <a name='15.3'></a> Use shortcuts.

```javascript
// bad
if (name !== '') {
  // ...stuff...
}

// good
if (name) {
  // ...stuff...
}

// bad
if (collection.length > 0) {
  // ...stuff...
}

// good
if (collection.length) {
  // ...stuff...
}
```


- [15.4](#15.4) <a name='15.4'></a> For more information see [Truth Equality and JavaScript](http://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/#more-2108) by Angus Croll.
