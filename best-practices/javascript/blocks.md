---
---

# Blocks

- [16.1](#16.1) <a name='16.1'></a> Use braces with all multi-line blocks.

```javascript
// bad
if (test)
  return false;

// good
if (test) return false;

// good
if (test) {
  return false;
}

// bad
function() { return false; }

// good
function() {
  return false;
}
```


- [16.2](#16.2) <a name='16.2'></a> If you're using multi-line blocks with `if` and `else`, put `else` on the same line as your
`if` block's closing brace.

```javascript
// bad
if (test) {
  thing1();
  thing2();
}
else {
  thing3();
}

// good
if (test) {
  thing1();
  thing2();
} else {
  thing3();
}
```

