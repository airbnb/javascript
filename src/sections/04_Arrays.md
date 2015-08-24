# Arrays

## Use the literal syntax for array creation.

```javascript
// bad
const items = new Array();

// good
const items = [];
```

## Use Array#push instead of direct assignment to add items to an array.

```javascript
const someStack = [];

// bad
someStack[someStack.length] = 'abracadabra';

// good
someStack.push('abracadabra');
```

<a name="es6-array-spreads"></a>
## Use array spreads `...` to copy arrays.

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

## To convert an array-like object to an array, use Array#from.

```javascript-no-test
const foo = document.querySelectorAll('.foo');
const nodes = Array.from(foo);
```
