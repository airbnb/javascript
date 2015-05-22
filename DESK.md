
# Desk Javascript architecture

## Now

- use [React](https://facebook.github.io/react/) and [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) as our view engine
- use [Flux](https://facebook.github.io/flux/docs/overview.html) as our application architecture

### Modules

- use CommonJS style (node-like style via Browserify)
- use DI pattern

  ```js
  module.exports = function(dependency1, dependency2, dependency3) {
    return {};
  };
  ```
  
### Flux architecture

- organize your code in `services`, `stores`, and `views`

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
