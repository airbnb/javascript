---
---

# Objects

- [3.1](#3.1) <a name='3.1'></a> Use the literal syntax for object creation.

```javascript
// bad
const item = new Object();

// good
const item = {};
```


- [3.2](#3.2) <a name='3.2'></a> Don't use [reserved words](http://es5.github.io/#x7.6.1) as keys. It won't work in IE8. [More info](https://github.com/airbnb/javascript/issues/61).

```javascript
// bad
const superman = {
  default: { clark: 'kent' },
  private: true
};

// good
const superman = {
  defaults: { clark: 'kent' },
  hidden: true
};
```


- [3.3](#3.3) <a name='3.3'></a> Use readable synonyms in place of reserved words.

```javascript
// bad
const superman = {
  class: 'alien'
};

// bad
const superman = {
  klass: 'alien'
};

// good
const superman = {
  type: 'alien'
};
```


<a name="es6-computed-properties"></a>
- [3.4](#3.4) <a name='3.4'></a> Use computed property names when creating objects with dynamic property names.

> Why? They allow you to define all the properties of an object in one place.

```javascript

function getKey(k) {
  return `a key named ${k}`;
}

// bad
const obj = {
  id: 5,
  name: 'San Francisco',
};
obj[getKey('enabled')] = true;

// good
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true,
};
```


<a name="es6-object-shorthand"></a>
- [3.5](#3.5) <a name='3.5'></a> Use object method shorthand.

```javascript
// bad
const atom = {
  value: 1,

  addValue: function (value) {
    return atom.value + value;
  },
};

// good
const atom = {
  value: 1,

  addValue(value) {
    return atom.value + value;
  },
};
```


<a name="es6-object-concise"></a>
- [3.6](#3.6) <a name='3.6'></a> Use property value shorthand.

> Why? It is shorter to write and descriptive.

```javascript
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  lukeSkywalker: lukeSkywalker
};

// good
const obj = {
  lukeSkywalker
};
```


- [3.7](#3.7) <a name='3.7'></a> Group your shorthand properties at the beginning of your object declaration.

> Why? It's easier to tell which properties are using the shorthand.

```javascript
const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  episodeOne: 1,
  twoJedisWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};

// good
const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJedisWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
};
```

