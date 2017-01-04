# Керівництво по стилю React/JSX від Airbnb

*Найбільш обгрунтований підхід до React та JSX*

## Зміст

  1. [Основні правила](#basic-rules)
  1. [Class проти `React.createClass` проти безстейтового компонента](#class-vs-reactcreateclass-vs-stateless)
  1. [Іменування](#naming)
  1. [Оголошення](#declaration)
  1. [Вирівнювання](#alignment)
  1. [Лапки](#quotes)
  1. [Пробіли](#spacing)
  1. Властивосьті - [Props](#props)
  1. [Refs](#refs)
  1. [Дужки](#parentheses)
  1. [Теги](#tags)
  1. [Методи](#methods)
  1. [Послідовність](#ordering)
  1. [`isMounted`](#ismounted)

## Основні правила

  - Включайте лише один React компонент у файл.
    - Проте, дозволяється кілька [Безстейтових чи чистих компонент](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions) у файлі. eslint: [`react/no-multi-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md#ignorestateless).
  - Завжди використовуйте JSX синтаксис.
  - Не використовуйте `React.createElement`, якщо тільки ви не ініціалізуєте програму з файлу, який не є JSX.

## Class проти `React.createClass` проти безстейтового компоненту

  - Якщо у вас є внутрішній state та/або refs, віддавайте перевагу `class extends React.Component`, а не `React.createClass`, хіба що ви маєте надзвичайно вагомі причини використати міксіни. eslint: [`react/prefer-es6-class`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md) [`react/prefer-stateless-function`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md)

    ```jsx
    // погано
    const Listing = React.createClass({
      // ...
      render() {
        return <div>{this.state.hello}</div>;
      }
    });

    // добре
    class Listing extends React.Component {
      // ...
      render() {
        return <div>{this.state.hello}</div>;
      }
    }
    ```

    І якщо ви не маєте state чи refs, віддавайте перевагу звичайним функціям (не стрілочним функціям), а не класам:

    ```jsx
    // погано
    class Listing extends React.Component {
      render() {
        return <div>{this.props.hello}</div>;
      }
    }

    // погано (не рекомендується робити висновки спираючись на назву функції)
    const Listing = ({ hello }) => (
      <div>{hello}</div>
    );

    // добре
    function Listing({ hello }) {
      return <div>{hello}</div>;
    }
    ```

## Іменування

  - **Розширення**: Використовуйте `.jsx` розширення для React компонентів.
  - **Назва файлу**: Використовуйте PascalCase для назв файлів. Наприклад: `ReservationCard.jsx`.
  - **Іменування посиланнь**: Використовуйте PascalCase для React компонентів та camelCase для їх екземплярів. eslint: [`react/jsx-pascal-case`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

    ```jsx
    // погано
    import reservationCard from './ReservationCard';

    // добре
    import ReservationCard from './ReservationCard';

    // погано
    const ReservationItem = <ReservationCard />;

    // добре
    const reservationItem = <ReservationCard />;
    ```

  - **Іменування компонентів**: Використовуйте назву файла в якості назви компонента. Наприклад, назва файлу `ReservationCard.jsx` повинна посилатись на назву компонента `ReservationCard`. Проте, для кореневих компонентів директорії, використовуйте `index.jsx` як назву файла та використовуйте назву директорії в якості назви компонента:

    ```jsx
    // погано
    import Footer from './Footer/Footer';

    // погано
    import Footer from './Footer/index';

    // добре
    import Footer from './Footer';
    ```
  - **Іменування компонент верхнього порядку (Higher-order Component)**: Use a composite of the higher-order component's name and the passed-in component's name as the `displayName` on the generated component. For example, the higher-order component `withFoo()`, when passed a component `Bar` should produce a component with a `displayName` of `withFoo(Bar)`.

  > Чому? A component's `displayName` may be used by developer tools or in error messages, and having a value that clearly expresses this relationship helps people understand what is happening.

    ```jsx
    // погано
    export default function withFoo(WrappedComponent) {
      return function WithFoo(props) {
        return <WrappedComponent {...props} foo />;
      }
    }

    // добре
    export default function withFoo(WrappedComponent) {
      function WithFoo(props) {
        return <WrappedComponent {...props} foo />;
      }

      const wrappedComponentName = WrappedComponent.displayName
        || WrappedComponent.name
        || 'Component';

      WithFoo.displayName = `withFoo(${wrappedComponentName})`;
      return WithFoo;
    }
    ```

  - **Іменування властивостей (Props)**: Уникайте використання властивостей DOM компонента для різних цілией.

  > Чому? Люди очікуюсь, що властивості, такі як `style` та `className` означають одну конкретну річ. Використовуючи цей API для власних цілей робить код менш читабильним та менш підтримуваним, а також може призвести до багів.

    ```jsx
    // погано
    <MyComponent style="fancy" />

    // добре
    <MyComponent variant="fancy" />
    ```

## Оголошення

  - Не використовуйте `displayName` для іменування компонентів. Натомість, називайте компонент за посиланням.

    ```jsx
    // погано
    export default React.createClass({
      displayName: 'ReservationCard',
      // все інше тут
    });

    // добре
    export default class ReservationCard extends React.Component {
    }
    ```

## Вирівнювання

  - Використовуйте ці стилі вирівнювання для JSX синтаксису. eslint: [`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

    ```jsx
    // погано
    <Foo superLongParam="bar"
         anotherSuperLongParam="baz" />

    // добре
    <Foo
      superLongParam="bar"
      anotherSuperLongParam="baz"
    />

    // якщо властивості вміщуються у одну лінію, тоді лишайте їх на тій самій лінії
    <Foo bar="bar" />

    // нащадки вирівнюються нормально
    <Foo
      superLongParam="bar"
      anotherSuperLongParam="baz"
    >
      <Quux />
    </Foo>
    ```

## Лапки

  - Завжди використовуйте подвійні лапки (`"`) для JSX атрибутів, але одинарні лапки (`'`) для решти JS. eslint: [`jsx-quotes`](http://eslint.org/docs/rules/jsx-quotes)

  > Чому? Звичайні HTML атрибути також використовують подвійні лапки замість одинарних, тож JSX атрибути відзеркалюють цю конвенцію.

    ```jsx
    // погано
    <Foo bar='bar' />

    // добре
    <Foo bar="bar" />

    // погано
    <Foo style={{ left: "20px" }} />

    // добре
    <Foo style={{ left: '20px' }} />
    ```

## Пробіли

  - Завжди додавайте один пробіл у ваш самозакривающийся тег. eslint: [`no-multi-spaces`](http://eslint.org/docs/rules/no-multi-spaces), [`react/jsx-space-before-closing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md)

    ```jsx
    // погано
    <Foo/>

    // дуже погано
    <Foo                 />

    // погано
    <Foo
     />

    // добре
    <Foo />
    ```

  - Не робіть відступи пробілом усередині фігурних дужок JSX. eslint: [`react/jsx-curly-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)

    ```jsx
    // погано
    <Foo bar={ baz } />

    // добре
    <Foo bar={baz} />
    ```

## Властивості (Props)

  - Завжди використовуйте camelCase для назв властивостей.

    ```jsx
    // погано
    <Foo
      UserName="hello"
      phone_number={12345678}
    />

    //
    <Foo
      userName="hello"
      phoneNumber={12345678}
    />
    ```

  - Omit the value of the prop when it is explicitly `true`. eslint: [`react/jsx-boolean-value`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)

    ```jsx
    // погано
    <Foo
      hidden={true}
    />

    // добре
    <Foo
      hidden
    />
    ```

  - Завжди додавайте властивість `alt` до тегу `<img>`. Якщо зображення є презентаційним, `alt` може бути порожньою строчкою, або ж `<img>` мусить мати атрибут `role="presentation"`. eslint: [`jsx-a11y/img-has-alt`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-has-alt.md)

    ```jsx
    // погано
    <img src="hello.jpg" />

    // добре
    <img src="hello.jpg" alt="Me waving hello" />

    // добре
    <img src="hello.jpg" alt="" />

    // добре
    <img src="hello.jpg" role="presentation" />
    ```

  - Не використовуйте слова, такі як "image", "photo", чи "picture" у `<img>` в якості властивості `alt`. eslint: [`jsx-a11y/img-redundant-alt`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md)

  > Чому? Зчитувачі екранів вже оголошують `img` елементи як зображення, тож немає необхідності включати цю інформацію до атрибуту `alt`.

    ```jsx
    // погано
    <img src="hello.jpg" alt="Picture of me waving hello" />

    // добре
    <img src="hello.jpg" alt="Me waving hello" />
    ```

  - Використовуйте лише валідні, не абстрактні [ARIA roles](https://www.w3.org/TR/wai-aria/roles#role_definitions). eslint: [`jsx-a11y/aria-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md)

    ```jsx
    // погано - не є ARIA role
    <div role="datepicker" />

    // погано - абстрактний ARIA role
    <div role="range" />

    // добре
    <div role="button" />
    ```

  - Не використовуйте `accessKey` на елементах. eslint: [`jsx-a11y/no-access-key`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md)

  > Чому? Невідповідності між поєднанням комбінацій клавіш та командами з клавіатури,  ускладнюють доступ для людей, котрі користуються екранними зчитувачами та клавіатурами.

  ```jsx
  // погано
  <div accessKey="h" />

  // добре
  <div />
  ```

  - Уникайте використання індексів елементів масиву в якості властивості `key`, та віддавайте перевагу унікальному ID. ([Чому?](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318))

  ```jsx
  // погано
  {todos.map((todo, index) =>
    <Todo
      {...todo}
      key={index}
    />
  )}

  // добре
  {todos.map(todo => (
    <Todo
      {...todo}
      key={todo.id}
    />
  ))}
  ```

  - Завжди зазначайте явні defaultProps для всіх властивостей, котрі не зазначені як необхідні (не зазначені як `isRequired`).

  > Чому? propTypes - це спосіб документації і зазначення defaultProps дає змогу читачеві вашого коду не бути вимушеним припускати забагато. Окрім того, це може означати, що ваш код може пропустити певні перевірки типів.

  ```jsx
  // погано
  function SFC({ foo, bar, children }) {
    return <div>{foo}{bar}{children}</div>;
  }
  SFC.propTypes = {
    foo: PropTypes.number.isRequired,
    bar: PropTypes.string,
    children: PropTypes.node,
  };

  // добре
  function SFC({ foo, bar }) {
    return <div>{foo}{bar}</div>;
  }
  SFC.propTypes = {
    foo: PropTypes.number.isRequired,
    bar: PropTypes.string,
  };
  SFC.defaultProps = {
    bar: '',
    children: null,
  };
  ```

## Refs

  - Always use ref callbacks. eslint: [`react/no-string-refs`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md)

    ```jsx
    // bad
    <Foo
      ref="myRef"
    />

    // good
    <Foo
      ref={(ref) => { this.myRef = ref; }}
    />
    ```

## Дужки

  - Обгортайте JSX теги дужками, коли вони займають більше ніж одну лінію. eslint: [`react/wrap-multilines`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md)

    ```jsx
    // погано
    render() {
      return <MyComponent className="long body" foo="bar">
               <MyChild />
             </MyComponent>;
    }

    // добре
    render() {
      return (
        <MyComponent className="long body" foo="bar">
          <MyChild />
        </MyComponent>
      );
    }

    // добре, коли одна строчка
    render() {
      const body = <div>hello</div>;
      return <MyComponent>{body}</MyComponent>;
    }
    ```

## Теги

  - Завжди самозакривайте теги, котрі не мають нащадків. eslint: [`react/self-closing-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)

    ```jsx
    // погано
    <Foo className="stuff"></Foo>

    // добре
    <Foo className="stuff" />
    ```

  - Якщо ваш компонент має властивості, котрі займають кілька строчок, закривайте тег на новій строчці. eslint: [`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

    ```jsx
    // погано
    <Foo
      bar="bar"
      baz="baz" />

    // добре
    <Foo
      bar="bar"
      baz="baz"
    />
    ```

## Методи

  - Використовуйте стрілочні функції для замкнення логальних змінних.

    ```jsx
    function ItemList(props) {
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

  - Прив’язуйте обробники подій для метода render у конструкторі. eslint: [`react/jsx-no-bind`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)

  > Чому? Виклик bind у render створює при кожному рендері нову функцію.

    ```jsx
    // погано
    class extends React.Component {
      onClickDiv() {
        // щось виконується
      }

      render() {
        return <div onClick={this.onClickDiv.bind(this)} />
      }
    }

    // добре
    class extends React.Component {
      constructor(props) {
        super(props);

        this.onClickDiv = this.onClickDiv.bind(this);
      }

      onClickDiv() {
        // щось виконується
      }

      render() {
        return <div onClick={this.onClickDiv} />
      }
    }
    ```

  - Не використовуйте префікс підкреслення для внутрішніх методів у React компоненті.
  > Чому? Префікси підкреслення інколи використовуються у інших мовах як конвенція з відзначення приватності. Але, на відміну від тих мов, у JavaScript немає рідної підтримки приватності, тому все - публічне. Regardless of your intentions, adding underscore prefixes to your properties does not actually make them private, and any property (underscore-prefixed or not) should be treated as being public. See issues [#1024](https://github.com/airbnb/javascript/issues/1024), та [#490](https://github.com/airbnb/javascript/issues/490) for a more in-depth discussion.

    ```jsx
    // погано
    React.createClass({
      _onClickSubmit() {
        // щось виконується
      },

      // виконується ще щось
    });

    // добре
    class extends React.Component {
      onClickSubmit() {
        // щось виконується
      }

      // виконується ще щось
    }
    ```

  - Переконайтесь, що ви повертаєте значення у ваших `render` методах. eslint: [`react/require-render-return`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md)

    ```jsx
    // погано
    render() {
      (<div />);
    }

    // добре
    render() {
      return (<div />);
    }
    ```

## Послідовність

  - Послідовність для `class extends React.Component`:

  1. Довільні `static` методи
  1. `constructor`
  1. `getChildContext`
  1. `componentWillMount`
  1. `componentDidMount`
  1. `componentWillReceiveProps`
  1. `shouldComponentUpdate`
  1. `componentWillUpdate`
  1. `componentDidUpdate`
  1. `componentWillUnmount`
  1. *обробники кліків та подій* такі як `onClickSubmit()`чи `onChangeDescription()`
  1. *getter методи для `render`* такі як `getSelectReason()` чи `getFooterContent()`
  1. *довільні render методи* такі як `renderNavigation()` або `renderProfilePicture()`
  1. `render`

  - Як зазначати `propTypes`, `defaultProps`, `contextTypes`, і т.д.

    ```jsx
    import React, { PropTypes } from 'react';

    const propTypes = {
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      text: PropTypes.string,
    };

    const defaultProps = {
      text: 'Hello World',
    };

    class Link extends React.Component {
      static methodsAreOk() {
        return true;
      }

      render() {
        return <a href={this.props.url} data-id={this.props.id}>{this.props.text}</a>
      }
    }

    Link.propTypes = propTypes;
    Link.defaultProps = defaultProps;

    export default Link;
    ```

  -  для `React.createClass`: eslint: [`react/sort-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md)

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
  1. *обробники кліків чи подій* такі як `onClickSubmit()` або `onChangeDescription()`
  1. *getter методи для `render`* такі як `getSelectReason()` чи `getFooterContent()`
  1. *довільні render методи* такі як `renderNavigation()` чи `renderProfilePicture()`
  1. `render`

## `isMounted`

  - Не використовуйте `isMounted`. eslint: [`react/no-is-mounted`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md)

  > Чому? [`isMounted` це анти-паттерн][anti-pattern], і він не доступний при використанні ES6 класів, і його планується офіційно скасувати.

  [anti-pattern]: https://facebook.github.io/react/blog/2015/12/16/ismounted-antipattern.html

## Переклад

  Це керівництво JSX/React стилями також доступне іншими мовами:

  - ![cn](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/United-Kingdom.png) **English**: [airbnb/javascript](https://github.com/airbnb/javascript/tree/master/react)
  - ![cn](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/China.png) **Chinese (Simplified)**: [JasonBoy/javascript](https://github.com/JasonBoy/javascript/tree/master/react)
  - ![pl](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Poland.png) **Polish**: [pietraszekl/javascript](https://github.com/pietraszekl/javascript/tree/master/react)
  - ![kr](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/South-Korea.png) **Korean**: [apple77y/javascript](https://github.com/apple77y/javascript/tree/master/react)
  - ![Br](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Brazil.png) **Portuguese**: [ronal2do/javascript](https://github.com/ronal2do/airbnb-react-styleguide)
  - ![jp](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Japan.png) **Japanese**: [mitsuruog/javascript-style-guide](https://github.com/mitsuruog/javascript-style-guide/tree/master/react)
  - ![es](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Spain.png) **Español**: [agrcrobles/javascript](https://github.com/agrcrobles/javascript/tree/master/react)
  - ![ua](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Ukraine.png) **Ukrainian**: [ivanzusko/javascript](https://github.com/ivanzusko/javascript/tree/master/react)

**[⬆ back to top](#table-of-contents)**
