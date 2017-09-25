# Coveo React/Redux - Cloud Platform Standards {

Other Standards  

- [TypeScript](../README.md)  
- [CSS & Sass](../css_sass)

## Table of Contents

  1. [Basic Rules](#basic-rules)
  1. [Class vs `React.createClass` vs stateless](#class-vs-reactcreateclass-vs-stateless)
  1. [Mixins](#mixins)
  1. [Naming](#naming)
  1. [Declaration](#declaration)
  1. [Alignment](#alignment)
  1. [Quotes](#quotes)
  1. [Spacing](#spacing)
  1. [Props](#props)
  1. [Refs](#refs)
  1. [Parentheses](#parentheses)
  1. [Tags](#tags)
  1. [Methods](#methods)
  1. [Ordering](#ordering)
  1. [`isMounted`](#ismounted)
  1. [Redux](#redux)

## Basic Rules

  - Only include one React component per file.
    - However, multiple [Stateless, or Pure, Components](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions) are allowed per file. 
  - Always use JSX/TSX syntax.
  - Do not use `React.createElement` unless you're initializing the app from a file that is not JSX.

## Class vs `React.createClass` vs stateless

  - If you have internal state and/or refs, prefer `class extends React.Component` over `React.createClass`. 

    ```typescript
    // bad
    const Listing = React.createClass({
      // ...
      render(): JSX.Element {
        return <div>{this.state.hello}</div>;
      }
    });

    // good
    class Listing extends React.Component {
      // ...
      render(): JSX.Element {
        return <div>{this.state.hello}</div>;
      }
    }
    ```

    And if you don't have state or refs, use arrow functions over classes:

    ```typescript
    // bad
    class Listing extends React.Component<Props, void> {
      render(): JSX.Element {
        return <div>{this.props.hello}</div>;
      }
    }

    // good
    const Listing = (props: Props) => (
      <div>{props.hello}</div>
    );
    ```

## Mixins

  - [Do not use mixins](https://facebook.github.io/react/blog/2016/07/13/mixins-considered-harmful.html).

  > Why? Mixins introduce implicit dependencies, cause name clashes, and cause snowballing complexity. Most use cases for mixins can be accomplished in better ways via components, higher-order components, or utility modules.

## Naming

  - **Extensions**: Use `.tsx` extension for React components.
  - **Filename**: Use PascalCase for filenames. E.g., `ReservationCard.tsx`.
  - **Reference Naming**: Use PascalCase for React components and camelCase for their instances. 

    ```typescript
    // bad
    const ReservationItem = <ReservationCard />;

    // good
    const reservationItem = <ReservationCard />;
    ```

  - **Component Naming**: Use the filename as the component name. For example, `ReservationCard.tsx` should have a reference name of `ReservationCard`.

    ```typescript
    // bad
    import { Footer } from './Footer/index';

    // good
    import { Footer } from './Footer/Footer';
    ```

  - **Props Naming**: Avoid using DOM component prop names for different purposes.

    > Why? People expect props like `style` and `className` to mean one specific thing. Varying this API for a subset of your app makes the code less readable and less maintainable, and may cause bugs.

    ```typescript
    // bad
    <MyComponent style="fancy" />

    // good
    <MyComponent variant="fancy" />
    ```

## Declaration

  - Do not use `displayName` for naming components. Instead, name the component by reference.

    ```typescript
    // bad
    export React.createClass({
      displayName: 'ReservationCard',
      // stuff goes here
    });

    // good
    export class ReservationCard extends React.Component<Props, void> {
    }
    ```

## Alignment

  - Follow these alignment styles for JSX syntax. 

    ```typescript
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
      <Quux />
    </Foo>
    ```

## Quotes

  - Always use single quotes (`'`) for JSX attributes, and all other JS. 

    > Why? Using the same quote style everywhere is more readable and less dangerous.

    ```typescript
    // bad
    <Foo bar="bar" />

    // good
    <Foo bar='bar' />

    // bad
    <Foo style={{ left: "20px" }} />

    // good
    <Foo style={{ left: '20px' }} />
    ```

## Spacing

  - Always include a single space in your self-closing tag. 

    ```typescript
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

  - Do not pad JSX curly braces with spaces. 

    ```typescript
    // bad
    <Foo bar={ baz } />

    // good
    <Foo bar={baz} />
    ```

## Props

  - Always use camelCase for prop names.

    ```typescript
    // bad
    <Foo
      UserName='hello'
      phone_number={12345678}
    />

    // good
    <Foo
      userName='hello'
      phoneNumber={12345678}
    />
    ```

  - Omit the value of the prop when it is explicitly `true`. 

    ```typescript
    // bad
    <Foo
      hidden={true}
    />

    // good
    <Foo
      hidden
    />
    ```

  - Always include an `alt` prop on `<img>` tags. If the image is presentational, `alt` can be an empty string or the `<img>` must have `role='presentation'`. 

    ```typescript
    // bad
    <img src='hello.jpg' />

    // good
    <img src='hello.jpg' alt='Me waving hello' />

    // good
    <img src='hello.jpg' alt='' />

    // good
    <img src='hello.jpg' role='presentation' />
    ```

  - Do not use words like 'image', 'photo', or 'picture' in `<img>` `alt` props. 

    > Why? Screenreaders already announce `img` elements as images, so there is no need to include this information in the alt text.

    ```typescript
    // bad
    <img src='hello.jpg' alt='Picture of me waving hello' />

    // good
    <img src='hello.jpg' alt='Me waving hello' />
    ```

  - Use only valid, non-abstract [ARIA roles](https://www.w3.org/TR/wai-aria/roles#role_definitions). 

    ```typescript
    // bad - not an ARIA role
    <div role='datepicker' />

    // bad - abstract ARIA role
    <div role='range' />

    // good
    <div role='button' />
    ```

  - Do not use `accessKey` on elements. 

  > Why? Inconsistencies between keyboard shortcuts and keyboard commands used by people using screenreaders and keyboards complicate accessibility.

  ```typescript
  // bad
  <div accessKey='h' />

  // good
  <div />
  ```

  - Avoid using an array index as `key` prop, prefer a unique ID. ([why?](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318))

  ```typescript
  // bad
  {todos.map((todo: Todo, index: number): JSX.Element =>
    <Todo
      {...todo}
      key={index}
    />
  )}

  // good
  {todos.map((todo: Todo): JSX.Element => (
    <Todo
      {...todo}
      key={todo.id}
    />
  ))}
  ```

  - Always define explicit defaultProps for all non-required props.

  > Why? propTypes are a form of documentation, and providing defaultProps means the reader of your code doesn’t have to assume as much. In addition, it can mean that your code can omit certain type checks.

## Refs

  - Always use ref callbacks. 

    ```typescript
    // bad
    <Foo
      ref='myRef'
    />

    // good
    <Foo
      ref={(ref) => { this.myRef = ref; }}
    />
    ```

## Parentheses

  - Wrap JSX tags in parentheses when they span more than one line. 

    ```typescript
    // bad
    render(): JSX.Element {
      return <MyComponent className='long body' foo='bar'>
               <MyChild />
             </MyComponent>;
    }

    // good
    render(): JSX.Element {
      return (
        <MyComponent className='long body' foo='bar'>
          <MyChild />
        </MyComponent>
      );
    }

    // good, when single line
    render(): JSX.Element {
      const body = <div>hello</div>;
      return <MyComponent>{body}</MyComponent>;
    }
    ```

## Tags

  - Always self-close tags that have no children. 

    ```typescript
    // bad
    <Foo className='stuff'></Foo>

    // good
    <Foo className='stuff' />
    ```

  - If your component has multi-line properties, close its tag on a new line. 

    ```typescript
    // bad
    <Foo
      bar='bar'
      baz='baz' />

    // good
    <Foo
      bar='bar'
      baz='baz'
    />
    ```

## Methods

  - Use arrow functions to close over local variables.

  > Why? It creates a new function on each render, which is desirable.

    ```typescript
    const ItemList = (props: Props): JSX.Element => {
      return (
        <ul>
          {props.items.map((item, index) => (
            <Item
              key={item.key}
              onClick={() => doSomethingWith(item.name, index)}
            />
          ))}
        </ul>
      );
    }
    ```

  - Use arrow functions for the render method in the constructor. 

    ```typescript
    // bad
    class extends React.Component<Props, void> {
      private onClickDiv() {
        // do stuff
      }

      render(): JSX.Element {
        return <div onClick={this.onClickDiv} />;
      }
    }

    // good
    class extends React.Component<Props, void> {
      private onClickDiv() {
        // do stuff
      }

      render(): JSX.Element {
        return <div onClick={() => this.onClickDiv()} />;
      }
    }
    ```

  - Do not use underscore prefix for internal methods of a React component.
    > Why? Underscore prefixes are sometimes used as a convention in other languages to denote privacy. But, unlike those languages, TypeScript supports the `private` keyword to design an entity as private.

    ```typescript
    // bad
    React.createClass({
      _onClickSubmit() {
        // do stuff
      },

      // other stuff
    });

    // good
    class extends React.Component<Props, void> {
      private onClickSubmit() {
        // do stuff
      }

      // other stuff
    }
    ```

  - Be sure to return a value in your `render` methods. 

    ```typescript
    // bad
    render(): JSX.Element {
      (<div />);
    }

    // good
    render(): JSX.Element {
      return (<div />);
    }
    ```

## Ordering

  - Ordering for `class extends React.Component`:

  1. optional `static` methods
  1. `constructor`
  1. `getChildContext`
  1. `componentWillMount`
  1. `componentDidMount`
  1. `componentWillReceiveProps`
  1. `shouldComponentUpdate`
  1. `componentWillUpdate`
  1. `componentDidUpdate`
  1. `componentWillUnmount`
  1. *clickHandlers or eventHandlers* like `onClickSubmit()` or `onChangeDescription()`
  1. *getter methods for `render`* like `getSelectReason()` or `getFooterContent()`
  1. *optional render methods* like `renderNavigation()` or `renderProfilePicture()`
  1. `render`

  - Ordering for `React.createClass`: 

  1. `displayName`
  1. `propTypes`
  1. `contextTypes`
  1. `childContextTypes`
  1. `mixins`
  1. `statics`
  1. `defaultProps`
  1. `getDefaultProps`
  1. `getInitialState`
  1. `getChildContext`
  1. `componentWillMount`
  1. `componentDidMount`
  1. `componentWillReceiveProps`
  1. `shouldComponentUpdate`
  1. `componentWillUpdate`
  1. `componentDidUpdate`
  1. `componentWillUnmount`
  1. *clickHandlers or eventHandlers* like `onClickSubmit()` or `onChangeDescription()`
  1. *getter methods for `render`* like `getSelectReason()` or `getFooterContent()`
  1. *optional render methods* like `renderNavigation()` or `renderProfilePicture()`
  1. `render`

## `isMounted`

  - Do not use `isMounted`. 

  > Why? [`isMounted` is an anti-pattern][anti-pattern], is not available when using ES6 classes, and is on its way to being officially deprecated.

  [anti-pattern]: https://facebook.github.io/react/blog/2015/12/16/ismounted-antipattern.html

## Redux  

  - Seperate components from their actions and reducers. Thus, you should have one file for your actions, one for your reducers, and one for your component.

  - The file name for your actions should be the name of the component + the suffix `Actions`.

  - The file name for your reducers should be the name of the component + the suffix `Reducers`.

**[⬆ back to top](#table-of-contents)**

# };
