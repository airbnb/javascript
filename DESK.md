
# Desk Javascript architecture

## Now

- use [React](https://facebook.github.io/react/) and [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) as our view engine
- use [Flux](https://facebook.github.io/flux/docs/overview.html) as our application architecture

### Modules

- use CommonJS style (node-like style via Browserify)
- use DI pattern

  ```js
// before
function Car() {
  this.engine = new Engine();
  this.tires = Tires.getInstance();
  this.doors = app.get('doors');
  this.milesDriven = 0;
}

// after
function Car(engine, tires, doors) {
  this.engine = engine;
  this.tires = tires;
  this.doors = doors;
  this.milesDriven = 0;
}
```

- if you find yourself using `require('../xxx')` back in the tree hierarchy, you're doing it wrong. Use DI pattern instead.

  ```js
  // bad 
  var events = require('../events');
  
  // use events somewhere in the module
  
  module.exports = {...};
  ```
  
  ```js
  // good
  module.exports = function(events) {
    // use events somewhere in the module
  };
  ```
  
### Flux architecture

- organize you code by components
- Each component contains 3 folders : `stores`, `views`
- And 2 files `actions` and `events`
- At the root of src, we'll find an `events` file that will require every `events` file. This way we can communicate between components

#### Services

- access external APIs (similar to angular)

#### Stores

- "store" (mutable) models
 
#### Views

- written in React/JSX
- own only its view logic
- don't own any business logic

## Next

- use some ES6/2015 syntax

## To discuss

- use Reactive programming ([Rx.js](https://github.com/Reactive-Extensions/RxJS)?)
- use [Typescript](http://www.typescriptlang.org/)

### List of issues that we have been confronted to

Problem:
- When trying to loop on an array, there was a warning: 'Each child in an array should have a unique "key" prop. Check the render method of List.'

```jsx
{
  myArray.map(function(item) {
    return <div>{item.name}</div>
  })
}
```

Solution:
- Add the key attribute:

```jsx
{
  myArray.map(function(item) {
    return <div key={item.id}>{item.name}</div>
  })
}
```
