# Airbnb React/JSX Style Guide

*A mostly reasonable approach to React and JSX*

## Table of Contents

  1. [Basic Rules](#basic-rules)
  1. [Naming](#naming)
  1. [Declaration](#declaration)
  1. [Alignment](#alignment)
  1. [Quotes](#quotes)
  1. [Spacing](#spacing)
  1. [Props](#props)
  1. [Parentheses](#parentheses)
  1. [Tags](#tags)
  1. [Ordering](#ordering)

## Basic Rules

  - Only include one React component per file.
  - Always use JSX syntax.
  - Do not use `React.createElement` unless you're initializing the app from a `.js` file.

## Naming

  - **Extensions**: Use `.jsx` extension for React components.
  - **Filename**: Use PascalCase for filenames. E.g., `ReservationCard.jsx`.
  - **Reference Naming**: Use PascalCase for React components and camelCase for their instances:
    ```javascript
    // bad
    const reservationCard = require('./ReservationCard');

    // good
    const ReservationCard = require('./ReservationCard');

    // bad
    const ReservationItem = <ReservationCard />;

    // good
    const reservationItem = <ReservationCard />;
    ```

    **Component Naming**: Use the filename as the component name. So `ReservationCard.jsx` should have a reference name of ReservationCard. However, for root components of a directory, use index.jsx as the filename and use the directory name as the component name:
    ```javascript
    // bad
    const Footer = require('./Footer/Footer.jsx')

    // bad
    const Footer = require('./Footer/index.jsx')

    // good
    const Footer = require('./Footer')
    ```


## Declaration
  - Do not use displayName for naming components, instead name the component by reference.

    ```javascript
    // bad
    export default React.createClass({
      displayName: 'ReservationCard',
      // stuff goes here
    });

    // good
    const ReservationCard = React.createClass({
      // stuff goes here
    });
    export default ReservationCard;
    ```

## Alignment
  - Follow these alignment styles for JSX syntax

    ```javascript
    // bad
    <Foo bar="bar"
         baz="baz" />

    // good
    <Foo
      bar="bar"
      baz="baz"
    />

    // if props fit in one line then keep it on the same line
    <Foo bar="bar" />

    // children get indented normally
    <Foo
      bar="bar"
      baz="baz"
    >
      <Spazz />
    </Foo>
    ```

## Quotes
  - Always use double quotes (`"`) for JSX attributes, but single quotes for all other JavaScript.
    ```javascript
    // bad
    <Foo bar='bar' />

    // good
    <Foo bar="bar" />

    // bad
    <Foo style={{ left: "20px" }} />

    // good
    <Foo style={{ left: '20px' }} />
    ```

## Spacing
  - Always include a single space in your self-closing tag.
    ```javascript
    // bad
    <Foo/>

    // very bad
    <Foo                 />

    // bad
    <Foo
     />

    // good
    <Foo />
    ```

## Props
  - Alphabetically order your props.
    ```javascript
    // bad
    <Foo
      className="bar baz"
      bar="bar"
    />

    // good
    <Foo
      bar="bar"
      className="bar baz"
    />
    ```

## Parentheses
  - Wrap JSX tags in parentheses when they span more than one line:
    ```javascript
    /// bad
    render() {
      return <MyComponent className="long body" foo="bar" >
               <MyChild />
             </MyComponent>;
    }

    // good
    render() {
      return (
        <MyComponent className="long body" foo="bar">
          <MyChild />
        </MyComponent>
      );
    }

    // good, when single line
    render() {
      const body = <div>hello</div>;
      return <MyComponent>{body}</MyComponent>;
    }
    ```

## Tags
  - Always self-close tags that have no children.
    ```javascript
    // bad
    <Foo className="stuff"></Foo>

    // good
    <Foo className="stuff" />
    ```

  - If your component has multi-line properties, close its tag on a new line.
    ```javascript
    // bad
    <Foo
      bar="bar"
      baz="baz" />

    // good
    <Foo
      bar="bar"
      baz="baz"
    />
    ```

## Ordering
  - Always follow the following order for methods in a react component:

  1. displayName
  2. mixins (as of React v0.13 mixins are deprecated)
  3. statics
  4. propTypes
  5. getDefaultProps
  6. getInitialState
  7. componentWillMount
  8. componentDidMount
  9. componentWillReceiveProps
  10. shouldComponentUpdate
  11. componentWillUpdate
  12. componentWillUnmount
  13. *clickHandlers or eventHandlers* like onClickSubmit() or onChangeDescription()
  14. *gettter methods for render* like getSelectReason() or getFooterContent()
  15. *Optional render methods* like renderNavigation() or renderProfilePicture()
  16. render

**[⬆ back to top](#table-of-contents)**
