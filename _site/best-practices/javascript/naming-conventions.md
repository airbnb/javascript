# Naming Conventions

- [22.1](#22.1) <a name='22.1'></a> Avoid single letter names. Be descriptive with your naming.

```javascript
// bad
function q() {
  // ...stuff...
}

// good
function query() {
  // ..stuff..
}
```


- [22.2](#22.2) <a name='22.2'></a> Use camelCase when naming objects, functions, and instances.

```javascript
// bad
const OBJEcttsssss = {};
const this_is_my_object = {};
function c() {}

// good
const thisIsMyObject = {};
function thisIsMyFunction() {}
```


- [22.3](#22.3) <a name='22.3'></a> Use PascalCase when naming constructors or classes.

```javascript
// bad
function user(options) {
  this.name = options.name;
}

const bad = new user({
  name: 'nope',
});

// good
class User {
  constructor(options) {
    this.name = options.name;
  }
}

const good = new User({
  name: 'yup',
});
```


- [22.4](#22.4) <a name='22.4'></a> Use a leading underscore `_` when naming private properties.

```javascript
// bad
this.__firstName__ = 'Panda';
this.firstName_ = 'Panda';

// good
this._firstName = 'Panda';
```


- [22.5](#22.5) <a name='22.5'></a> Don't save references to `this`. Use arrow functions or Function#bind.

```javascript
// bad
function foo() {
  const self = this;
  return function() {
    console.log(self);
  };
}

// bad
function foo() {
  const that = this;
  return function() {
    console.log(that);
  };
}

// good
function foo() {
  return () => {
    console.log(this);
  };
}
```


- [22.6](#22.6) <a name='22.6'></a> If your file exports a single class, your filename should be exactly the name of the class.

```javascript
// file contents
class CheckBox {
  // ...
}
export default CheckBox;

// in some other file
// bad
import CheckBox from './checkBox';

// bad
import CheckBox from './check_box';

// good
import CheckBox from './CheckBox';
```


- [22.7](#22.7) <a name='22.7'></a> Use camelCase when you export-default a function. Your filename should be identical to your function's name.

```javascript
function makeStyleGuide() {
}

export default makeStyleGuide;
```


- [22.8](#22.8) <a name='22.8'></a> Use PascalCase when you export a singleton / function library / bare object.

```javascript
const AirbnbStyleGuide = {
  es6: {
  }
};

export default AirbnbStyleGuide;
```

