# Accessors

- [23.1](#23.1) <a name='23.1'></a> Accessor functions for properties are not required.


- [23.2](#23.2) <a name='23.2'></a> If you do make accessor functions use getVal() and setVal('hello').

```javascript
// bad
dragon.age();

// good
dragon.getAge();

// bad
dragon.age(25);

// good
dragon.setAge(25);
```


- [23.3](#23.3) <a name='23.3'></a> If the property is a boolean, use isVal() or hasVal().

```javascript
// bad
if (!dragon.age()) {
  return false;
}

// good
if (!dragon.hasAge()) {
  return false;
}
```


- [23.4](#23.4) <a name='23.4'></a> It's okay to create get() and set() functions, but be consistent.

```javascript
class Jedi {
  constructor(options = {}) {
    const lightsaber = options.lightsaber || 'blue';
    this.set('lightsaber', lightsaber);
  }

  set(key, val) {
    this[key] = val;
  }

  get(key) {
    return this[key];
  }
}
```
