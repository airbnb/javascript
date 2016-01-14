# Quri React/JSX Style Guide

*A mostly reasonable approach to React and JSX*

## Table of Contents

  1. [Basic Rules](#basic-rules)
  1. [Class vs `React.createClass`](#class-vs-reactcreateclass)
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
  1. [`isMounted`](#ismounted)
  1. [Using ES7 Features](#using-es7-features)

## Basic Rules

  - Only include one React component per file.
    - However, multiple [Stateless, or Pure, Components](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions) are allowed per file. eslint rule: [`react/no-multi-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md#ignorestateless).
  - Always use JSX syntax.
  - Do not use `React.createElement` unless you're initializing the app from a file that is not JSX.

## Class vs `React.createClass`

  - Use `class extends Component` unless you have a very good reason to use mixins.

  eslint rules: [`react/prefer-es6-class`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md).

    ```javascript
    // bad
    const Listing = React.createClass({
      render() {
        return <div />;
      }
    });

    // good
    class Listing extends Component {
      render() {
        return <div />;
      }
    }
    ```

## Naming

  - **Extensions**: Use `.js` extension for React components.
  - **Filename**: Use PascalCase for filenames. E.g., `ReservationCard.js`.
  - **Reference Naming**: Use PascalCase for React components and camelCase for their instances.

  eslint rules: [`react/jsx-pascal-case`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md).

    ```javascript
    // bad
    import reservationCard from './ReservationCard';

    // good
    import ReservationCard from './ReservationCard';

    // bad
    const ReservationItem = <ReservationCard />;

    // good
    const reservationItem = <ReservationCard />;
    ```

  - **Component Naming**: Use the filename as the component name. For example, `ReservationCard.jsx` should have a reference name of `ReservationCard`. However, for root components of a directory, use `index.jsx` as the filename and use the directory name as the component name:

    ```javascript
    // bad
    import Footer from './Footer/Footer';

    // bad
    import Footer from './Footer/index';

    // good
    import Footer from './Footer';
    ```

## Declaration

  - Do not use `displayName` for naming components. Instead, name the component by reference.

    ```javascript
    // bad
    export default React.createClass({
      displayName: 'ReservationCard',
      // stuff goes here
    });

    // good
    export default class ReservationCard extends Component {
    }
    ```

## Alignment

  - Follow these alignment styles for JSX syntax

  eslint rules: [`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md).

    ```javascript
    // bad
    <Foo superLongParam="bar"
         anotherSuperLongParam="baz" />

    // good
    <Foo
      superLongParam="bar"
      anotherSuperLongParam="baz"
    />

    // if props fit in one line then keep it on the same line
    <Foo bar="bar" />

    // children get indented normally
    <Foo
      superLongParam="bar"
      anotherSuperLongParam="baz"
    >
      <Spazz />
    </Foo>
    ```

## Quotes

  - Always use double quotes (`"`).

  > Why? JSX attributes [can't contain escaped quotes](http://eslint.org/docs/rules/jsx-quotes), so double quotes make conjunctions like `"don't"` easier to type.
  > Regular HTML attributes also typically use double quotes instead of single, so JSX attributes mirror this convention.

  eslint rules: [`jsx-quotes`](http://eslint.org/docs/rules/jsx-quotes).

    ```javascript
    // bad
    <Foo bar='bar' />

    // good
    <Foo bar="bar" />

    // bad
    <Foo style={{ left: '20px' }} />

    // good
    <Foo style={{ left: "20px" }} />
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
      phone_number={12345678}
    />

    // good
    <Foo
      userName="hello"
      phoneNumber={12345678}
    />
    ```

  - Omit the value of the prop when it is explicitly `true`.

  eslint rules: [`react/jsx-boolean-value`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md).

    ```javascript
    // bad
    <Foo
      hidden={true}
    />

    // good
    <Foo
      hidden
    />
    ```

## Parentheses

  - Wrap JSX tags in parentheses when they span more than one line.

  eslint rules: [`react/wrap-multilines`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md).

    ```javascript
    // bad
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

  eslint rules: [`react/self-closing-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md).

    ```javascript
    // bad
    <Foo className="stuff"></Foo>

    // good
    <Foo className="stuff" />
    ```

  - If your component has multi-line properties, close its tag on a new line.

  eslint rules: [`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md).

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

## Methods

  - Bind event handlers for the render method in the constructor.

  > Why? A bind call in a the render path creates a brand new function on every single render.

  eslint rules: [`react/jsx-no-bind`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md).

    ```javascript
    // bad
    class extends React.Component {
      onClickDiv() {
        // do stuff
      }

      render() {
        return <div onClick={this.onClickDiv.bind(this)} />
      }
    }

    // good
    class extends React.Component {
      constructor(props) {
        super(props);

        this.onClickDiv = this.onClickDiv.bind(this);
      }

      onClickDiv() {
        // do stuff
      }

      render() {
        return <div onClick={this.onClickDiv} />
      }
    }
    ```

  - Do not use underscore prefix for internal methods of a React component.

    ```javascript
    // bad
    React.createClass({
      _onClickSubmit() {
        // do stuff
      },

      // other stuff
    });

    // good
    class extends Component {
      onClickSubmit() {
        // do stuff
      }

      // other stuff
    }
    ```

## Ordering

  - Ordering for `class extends Component`:

  1. `mixins`
  1. `displayName`
  1. `propTypes`
  1. `paginationId`
  1. `headers`
  1. `scopesDef`
  1. `contextTypes`
  1. `childContextTypes`
  1. optional static methods
  1. `defaultProps`
  1. `constructor`
  1. `getDefaultProps`
  1. `getInitialState`
  1. `state`
  1. `getChildContext`
  1. `componentWillMount`
  1. `componentDidMount`
  1. `componentWillReceiveProps`
  1. `shouldComponentUpdate`
  1. `componentWillUpdate`
  1. `componentDidUpdate`
  1. `componentWillUnmount`
  1. `render`


  - How to define `propTypes`, `defaultProps`, `contextTypes`, etc...

    Use ES7 static class properties : [documentation](https://github.com/jeffmo/es-class-fields-and-static-properties#part-2-class-static-properties) / [babel support](http://babeljs.io/docs/plugins/syntax-class-properties/)

    ```javascript
    import React, { PropTypes } from 'react';

    export default class Link extends React.Component {
      static propTypes = {
        id: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        text: PropTypes.string,
      };

      static defaultProps = {
        text: 'Hello World',
      };


      static methodsAreOk() {
        return true;
      }

      render() {
        return <a href={this.props.url} data-id={this.props.id}>{this.props.text}</a>
      }
    }

    ```

## `isMounted`

  - Do not use `isMounted`.

  > Why? [`isMounted` is an anti-pattern][anti-pattern], is not available when using ES6 classes, and is on its way to being officially deprecated.

  [anti-pattern]: https://facebook.github.io/react/blog/2015/12/16/ismounted-antipattern.html

  eslint rules: [`react/no-is-mounted`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md).

**[⬆ back to top](#table-of-contents)**

## Using ES7 features

We use a few useful features that were not included in ES2015 final specification. Thanks to Babel and its plugin system we can use them today:

  - [transform-object-rest-spread](http://babeljs.io/docs/plugins/transform-object-rest-spread/)
  - [syntax-trailing-function-commas](http://babeljs.io/docs/plugins/syntax-trailing-function-commas/)
  - [transform-class-properties](http://babeljs.io/docs/plugins/transform-class-properties/)

  The one feature to highlight is `transform-class-properties`. With the [ES6 class syntax](https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html), React component functions are not auto-bound to `this` (see [explanation](https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding)). Class properties combined with arrow functions allows us to bind class member to `this` without having  to bind every single function in the constructor. They also let us put our `propTypes` and `defaultProps` back into the class declaration.

```javascript
  // bad
  class Card extends Component {

    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }

    handleChange() {
      this.props.onChange({do: "something"});
    }

    handleClick() {
    	this.props.onClick({click: "somewhere"});
    }

    render() {
      return <span onClick={this.handleClick} onChange={this.handleChange}>I am a Card !</span>;
    }

  }

  Card.propTypes = {
    onChange: PropType.func.isRequired,
    onClick: PropTypes.func.isRequired
  }
```

```javascript
  // Good
  class Card extends Component {

    static propTypes = {
      onChange: PropType.func.isRequired,
      onClick: PropTypes.func.isRequired
    }

    handleChange = () => {
      this.props.onChange({do: "something"});
    }

    handleClick = () => {
    	this.props.onClick({click: "somewhere"});
    }

    render() {
      return <span onClick={this.handleClick} onChange={this.handleChange}>I am a Card !</span>;
    }

  }

```
