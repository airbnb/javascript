# ~~Airbnb~~ ascribe React/JSX Style Guide

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

  - Only `default export` one React component per file.
  - Always use JSX syntax.
  - Use `React.createElement` instead of `class extends React.Component`
  - Prefer stateless components over stateful components
  - Don't use mixins

## Class vs React.createClass

  - Use `React.createClass`; don't use the ES6 class syntax for now

  ```javascript
  // bad
  class Listing extends React.Component {
      render() {
          return <div />;
      }
  }

  // good
  const Listing = React.createClass({
      render() {
          return <div />;
      }
  });
  ```

## Naming

  - **Extensions**: Use `.js` extension for React components.
  - **Filename**: Use snake_case for filenames. E.g., `reservation_card.js`.
  - **Reference Naming**: Use PascalCase for React components and camelCase for their instances:
    ```javascript
    // bad
    const reservationCard = require('./reservation_card');

    // good
    const ReservationCard = require('./reservation_card');

    // bad
    const ReservationItem = <ReservationCard />;

    // good
    const reservationItem = <ReservationCard />;
    ```

    **Component Naming**: Convert snake_case filename to PascalCase component name. For example, `reservation_card.js` should have a reference name of `ReservationCard`.
    ```javascript
    // bad
    const Footer = require('./footer_component.js');

    // good
    const FooterComponent = require('./footer_component.js');
    ```

    However, for root components of a directory, use `index.js` as the filename and use the directory name as the component name:
    ```javascript
    // bad
    const Footer = require('./footer/footer.js');

    // bad
    const FooterDir = require('./footer/index.js');

    // good
    const Footer = require('./footer/index.js');

    // better
    const Footer = require('./footer');
    ```

    **Note**: We typically allow our module loaders to resolve `.js` files without specifying the extension, so imports without the extension will also work (and are preferred):
    ```javascript
    const Footer = require('./footer'); // actual file is footer.js
    const Footer = require('./footer/index'); // actual file is index.js
    ```


## Declaration
  - Declare displayName for higher level components. Otherwise just name the component by reference.

    ```javascript
    // bad
    const ReservationCard = React.createClass({
        displayName: 'ReservationCard',
        // stuff goes here
    });

    // good
    function ReservationCard() {
        return React.createClass({
            displayName: 'ReservationCard',
            // stuff goes here
        });
    }

    // good
    const ReservationCard = React.createClass({
        // stuff goes here
    });
    ```

## Alignment
  - Follow these alignment styles for JSX syntax

    ```javascript
    // bad
    <Foo
        superLongParam="bar"
        anotherSuperLongParam="baz"
    />

    // good
    <Foo
        superLongParam="bar"
        anotherSuperLongParam="baz" />


    // if props fit in one line then keep it on the same line
    <Foo bar="bar" />

    // children get indented normally
    <Foo
        superLongParam="bar"
        anotherSuperLongParam="baz">
        <Spazz />
    </Foo>
    ```

## Quotes
  - Always use double quotes (`"`) for JSX attributes, but single quotes for all other JS.

  > Why? JSX attributes [can't contain escaped quotes](http://eslint.org/docs/rules/jsx-quotes), so double quotes make conjunctions like `"don't"` easier to type.
  > Regular HTML attributes also typically use double quotes instead of single, so JSX attributes mirror this convention.

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
  - Always use camelCase for prop names.
    ```javascript
    // bad
    <Foo
        phone_number={12345678}
        UserName="hello" />

    // good
    <Foo
        phoneNumber={12345678}
        userName="hello" />
    ```

  - Always specify the props in alphabetical order, and put shorthand boolean props before props whose values are explicitly declared
    ```javascript
    // bad
    <Foo
        userName="hello"
        phoneNumber={12345678}
        hidden />

    // good
    <Foo
        hidden
        phoneNumber={12345678}
        userName="hello />
    ```

## Parentheses
  - Wrap JSX tags in parentheses when they span more than one line:
    ```javascript
    /// bad
    render() {
        return <MyComponent className="long body" foo="bar">
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

## Ordering
  - Ordering for `React.createClass`:

  1. displayName
  1. propTypes, ordered by these rules:
    * Alphabetical order
    * Required props before optional ones
    * Injected props (ie. props implicitly passed down by a parent that should not be explicitly declared in jsx) should be last, preferrably with a comment
  1. contextTypes
  1. childContextTypes
  1. mixins
  1. getDefaultProps
  1. getInitialState
  1. getChildContext
  1. componentWillMount
  1. componentDidMount
  1. componentWillReceiveProps
  1. shouldComponentUpdate
  1. componentWillUpdate
  1. componentDidUpdate
  1. componentWillUnmount
  1. *exposed imperative API* (should be avoided, but sometimes you'll have no other choice but to provide an imperative API)
  1. *private helper methods*
  1. *clickHandlers or eventHandlers* like onClickSubmit() or onChangeDescription()
  1. *getter methods for render* like getSelectReason() or getFooterContent()
  1. *Optional render methods* like renderNavigation() or renderProfilePicture()
  1. render

  ```javascript
  import React from 'react';


  const Link = React.createClass({
      propTypes: {
          id: PropTypes.number.isRequired,
          url: PropTypes.string.isRequired,
          text: PropTypes.string
      },

      getDefaultProps() {
          return {
              text: 'Hello World'
          };
      },

      render() {
          return <a href={this.props.url} data-id={this.props.id}>{this.props.text}</a>;
      }
  });
  ```

# }
