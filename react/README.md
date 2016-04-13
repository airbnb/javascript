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
  1. [Methods](#methods)
  1. [Ordering](#ordering)

## Basic Rules

  - Only `default export` one React component per file.
  - Always use JSX syntax.
  - Always use `React.createElement`
  - Don't use Mixins

## Class vs React.createClass

  - Use `React.createClass`, don't use the ES6 class syntax for now

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

    **Component Naming**: Convert snake_case filename to PascalCase component name. For example, `reservation_card.js` should have a reference name of `ReservationCard`. However, for root components of a directory, use `index.js` as the filename and use the directory name as the component name:
    ```javascript
    // bad
    const Footer = require('./Footer/footer.js')

    // bad
    const Footer = require('./Footer/index.js')

    // good
    const Footer = require('./footer')
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
        UserName="hello"
        phone_number={12345678} />

    // good
    <Foo
        userName="hello"
        phoneNumber={12345678} />
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
  - Ordering for React.createClass:

  1. displayName
  1. propTypes
  1. contextTypes
  1. childContextTypes
  1. mixins
  1. statics
  1. defaultProps
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
          return <a href={this.props.url} data-id={this.props.id}>{this.props.text}</a>
      }
  });
  ```

# }
