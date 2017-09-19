# Strings

- [6.1](#6.1) <a name='6.1'></a> Use single quotes `''` for strings.

```javascript
// bad
const name = "Capt. Janeway";

// good
const name = 'Capt. Janeway';
```


- [6.2](#6.2) <a name='6.2'></a> Strings longer than 80 characters should be written across multiple lines using string concatenation.


- [6.3](#6.3) <a name='6.3'></a> Note: If overused, long strings with concatenation could impact performance. [jsPerf](http://jsperf.com/ya-string-concat) & [Discussion](https://github.com/airbnb/javascript/issues/40).

```javascript
// bad
const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';

// bad
const errorMessage = 'This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.';

// good
const errorMessage = 'This is a super long error that was thrown because ' +
  'of Batman. When you stop to think about how Batman had anything to do ' +
  'with this, you would get nowhere fast.';
```


<a name="es6-template-literals"></a>
- [6.4](#6.4) <a name='6.4'></a> When programmatically building up strings, use template strings instead of concatenation.

> Why? Template strings give you a readable, concise syntax with proper newlines and string interpolation features.

```javascript
// bad
function sayHi(name) {
  return 'How are you, ' + name + '?';
}

// bad
function sayHi(name) {
  return ['How are you, ', name, '?'].join();
}

// good
function sayHi(name) {
  return `How are you, ${name}?`;
}
```
