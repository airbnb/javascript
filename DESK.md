
# Desk Javascript architecture

## Now

- use [React](https://facebook.github.io/react/) and [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) as our view engine
- use [Flux](https://facebook.github.io/flux/docs/overview.html) as our application architecture

### Naming conventions

- Use `PascalCase` when naming constructors or classes (i.e. something you can instantiate with `new`)
  
    ```javascript
    // bad
    function user() {}

    var bad = new user();

    // good
    function User() {}

    var good = new User();
    ```
  
- Use `CAPITALIZE_CASE` when naming constants
    
    ```js
      // bad
      var pi = 3.1416;
      
      // good
      var PI = 3.1416;
    ```
    
- Use `camelCase` for all the other things

### Modules

- use CommonJS style (node-like style via Browserify)
- the file should match the name and the case of the single export
    
    ```js
    // bad
    // filename = "MyModule.js"
    var myModule = {};
    module.exports = myModule;
    
    // bad
    // filename = "myClass.js"
    function MyClass() {}
    module.exports = MyClass;
    
    // good
    // filename = "myModule.js"
    var myModule = {};
    module.exports = myModule;
    
    // good
    // filename = "MyClass.js"
    function MyClass() {}
    module.exports = MyClass;
    ```
    
- use DI pattern

    ```js
    // bad
    function Car() {
      this.engine = new Engine();
      this.tires = Tires.getInstance();
      this.doors = app.get('doors');
      this.milesDriven = 0;
    }
    
    // good
    function Car(engine, tires, doors) {
      this.engine = engine;
      this.tires = tires;
      this.doors = doors;
      this.milesDriven = 0;
    }
    ```

### Follow object oriented programming encapsulation principle (in a larger sense) in file structure and naming: 

```
// before
/profilePanel
  /views
    - logoutButton.js
    - profilePanel.js
    - profilePicture.js
    - profilePictureUpdater.js
    - profileStatistics.js
    - rankingWidget.js
    - userProfile.js
    - userProfileEditor.js
    - userStatus.js
    - (cette ligne)
  /services
    - gravatarService.js
    - profileStatisticsService.js
    - siteService.js
    - userProfileService.js
  /stores
    - statisticsStore.js
    - userStore.js

// after
/ProfilePanel
  /Statistics
    - StatisticsStore.jsx
    - ProfileStatistics.jsx
    - ProfileStatisticsService.jsx
    - index.jsx
  /UserProfile
    - UserProfileView.jsx
    - UserProfileEditorView.jsx
    - UserStatusView.jsx
    - UserProfileService.jsx
    - UserStore.jsx
    - index.jsx
  /...
...
``

- don't `require('../xxx')` back in the tree hierarchy. Use DI pattern instead.

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


### exports inside index.js

Each "package" (folder) should have a `index.js` that exports publicly available dependencies at the package level. That way parent packages will be able to require the package via its name since require will always use index.js by default.

```javascript
// /LiveFeed/index.js
module.exports = function (dispatcher, events, action, publications, loggedUserStore) {
  var LiveFeedTogglerView = require('./LiveFeedTogglerView.jsx')(actions);
  var LiveFeedStore = require('./LiveFeedStore')(dispatcher, events);
  var LiveFeedPanelView = require('./LiveFeedPanelView.jsx')(events, dispatcher, actions, LiveFeedStore, publications, loggedUserStore);

  return {
    LiveFeedTogglerView: LiveFeedTogglerView,
    LiveFeedStore: LiveFeedStore,
    LiveFeedPanelView: LiveFeedPanelView
  };
};

// /app.js
// [...]
var LiveFeed = require('./LiveFeed')(dispatcher, events, action, publications, loggedUserStore);
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
