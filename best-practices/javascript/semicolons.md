---
---

# Semicolons

- [20.1](#20.1) <a name='20.1'></a> **Yup.**

```javascript
// bad
(function() {
  const name = 'Skywalker'
  return name
})()

// good
(() => {
  const name = 'Skywalker';
  return name;
})();

// good (guards against the function becoming an argument when two files with IIFEs are concatenated)
;(() => {
  const name = 'Skywalker';
  return name;
})();
```

[Read more](http://stackoverflow.com/a/7365214/1712802).
