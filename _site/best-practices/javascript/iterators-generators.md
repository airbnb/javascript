# Iterators and Generators

- [11.1](#11.1) <a name='11.1'></a> Don't use iterators. Prefer JavaScript's higher-order functions like `map()` and `reduce()` instead of loops like `for-of`.

> Why? This enforces our immutable rule. Dealing with pure functions that return values is easier to reason about than side-effects.

```javascript
const numbers = [1, 2, 3, 4, 5];

// bad
let sum = 0;
for (let num of numbers) {
  sum += num;
}

sum === 15;

// good
let sum = 0;
numbers.forEach((num) => sum += num);
sum === 15;

// best (use the functional force)
const sum = numbers.reduce((total, num) => total + num, 0);
sum === 15;
```


- [11.2](#11.2) <a name='11.2'></a> Don't use generators for now.

> Why? They don't transpile well to ES5.
