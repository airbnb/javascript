# Arrays

- [4.1](#4.1) <a name='4.1'></a> Use the literal syntax for array creation.

```javascript
// bad
const items = new Array();

// good
const items = [];
```


- [4.2](#4.2) <a name='4.2'></a> Use Array#push instead of direct assignment to add items to an array.

```javascript
const someStack = [];


// bad
someStack[someStack.length] = 'abracadabra';

// good
someStack.push('abracadabra');
```


<a name="es6-array-spreads"></a>
- [4.3](#4.3) <a name='4.3'></a> Use array spreads `...` to copy arrays.

```javascript
// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];
```


- [4.4](#4.4) <a name='4.4'></a> To convert an array-like object to an array, use Array#from.

```javascript
const foo = document.querySelectorAll('.foo');
const nodes = Array.from(foo);
```
