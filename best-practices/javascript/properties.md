---
---

# Properties

- [12.1](#12.1) <a name='12.1'></a> Use dot notation when accessing properties.

```javascript
const luke = {
  jedi: true,
  age: 28,
};

// bad
const isJedi = luke['jedi'];

// good
const isJedi = luke.jedi;
```


- [12.2](#12.2) <a name='12.2'></a> Use subscript notation `[]` when accessing properties with a variable.

```javascript
const luke = {
  jedi: true,
  age: 28,
};

function getProp(prop) {
  return luke[prop];
}

const isJedi = getProp('jedi');
```
