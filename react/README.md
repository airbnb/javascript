# Airbnb React/JSX Style Guide

*まずまず適正なReactとJSXのアプローチ*

## 項目一覧

  1. [基本ルール](#basic-rules)
  1. [Class vs `React.createClass` vs stateless](#class-vs-reactcreateclass-vs-stateless)
  1. [ネーミング](#naming)
  1. [宣言](#declaration)
  1. [整列](#alignment)
  1. [Quotes](#quotes)
  1. [スペーシング](#spacing)
  1. [Props](#props)
  1. [カッコ（）](#parentheses)
  1. [タグ](#tags)
  1. [メソッド](#methods)
  1. [順番](#ordering)
  1. [`isMounted`](#ismounted)

## 基本ルール

  - 一ファイルごとにReactコンポーネントは一つ
    - ただし複数の [Stateless, または Pure, Components](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions) を使用する場合複数可能. eslint: [`react/no-multi-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md#ignorestateless).
  - JSXのsyntaxを必ず使う.
  - `React.createElement`は使わない。JSX以外のファイルタイプでアプリケーションをinitializeする場合は使っても良い。

## Class vs `React.createClass` vs stateless

  - 内部stateまたはレファレンスがある場合, `React.createClass`より`class extends React.Component`を優先するべき。どうしてもMixinを使うのが必要な場合は`React.createClass`を使用。 eslint: [`react/prefer-es6-class`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md) [`react/prefer-stateless-function`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md)

    ```jsx
    // 悪い例
    const Listing = React.createClass({
      // ...
      render() {
        return <div>{this.state.hello}</div>;
      }
    });

    // 良い例
    class Listing extends React.Component {
      // ...
      render() {
        return <div>{this.state.hello}</div>;
      }
    }
    ```

    stateまたはレファレンスが無い場合、通常の関数 (アロー関数では無い）をクラスより優先して使用する。

    ```jsx
    // 悪い例
    class Listing extends React.Component {
      render() {
        return <div>{this.props.hello}</div>;
      }
    }

    // 悪い例 (関数名のinferenceはオススメしない)
    const Listing = ({ hello }) => (
      <div>{hello}</div>
    );

    // 良い例
    function Listing({ hello }) {
      return <div>{hello}</div>;
    }
    ```

## ネーミング

  - **エクステンション**: Reactコンポーネントは`.jsx`エクステンションを使う。
  - **ファイル名**: ファイル名はパスカルケースを使用。例、`ReservationCard.jsx`。
  - **レファレンス名**: Reactコンポーネントはパスカルケース、コンポーネントのインスタンスはキャメルケース. eslint: [`react/jsx-pascal-case`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

    ```jsx
    // 悪い例
    import reservationCard from './ReservationCard';

    // 良い例
    import ReservationCard from './ReservationCard';

    // 悪い例
    const ReservationItem = <ReservationCard />;

    // 良い例
    const reservationItem = <ReservationCard />;
    ```

  - **コンポーネント名**: コンポーネント名はファイル名を使用。例えば、`ReservationCard.jsx` のレファレンス名は `ReservationCard`。 ただし、ディレクトリのルートコンポーネントは`index.jsx`をファイル名に使用し、コンポーネント名はディレクトリ名を使用する:

    ```jsx
    // 悪い例
    import Footer from './Footer/Footer';

    // 悪い例
    import Footer from './Footer/index';

    // 良い例
    import Footer from './Footer';
    ```

## 宣言

  - コンポーネントの名前に`displayName`は使わない。 コンポーネントはレファレンスの名前をつける。

    ```jsx
    // 悪い例
    export default React.createClass({
      displayName: 'ReservationCard',
      //　処理
    });

    // 良い例
    export default class ReservationCard extends React.Component {
    }
    ```

## 整列

  - 整列に関しては以下のスタイルとJSX syntaxを使用する。 eslint: [`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

    ```jsx
    // 悪い例
    <Foo superLongParam="bar"
         anotherSuperLongParam="baz" />

    // 良い例
    <Foo
      superLongParam="bar"
      anotherSuperLongParam="baz"
    />

    // propsが一行に収まる場合はそうする
    <Foo bar="bar" />

    // childrenは通常のインデント
    <Foo
      superLongParam="bar"
      anotherSuperLongParam="baz"
    >
      <Quux />
    </Foo>
    ```

## Quotes

  - JSXのattributeは (`"`) を使う。それ以外のJavascript内ではシングルクォートを使う。 eslint: [`jsx-quotes`](http://eslint.org/docs/rules/jsx-quotes)

  > なぜ？ JSX attributes [はエスケープquotesを含めることが出来ない](http://eslint.org/docs/rules/jsx-quotes), そのためダブルクォートのほうが `"don't"` などの場合書きやすい。
  >通常のHTML attributeもダブルクォートをシングルクォートより優先して使用するため、JSX attributeに関しても同じやり方。 

    ```jsx
    // 悪い例
    <Foo bar='bar' />

    // 良い例
    <Foo bar="bar" />

    // 悪い例
    <Foo style={{ left: "20px" }} />

    // 良い例
    <Foo style={{ left: '20px' }} />
    ```

## スペーシング

  - self-closingタグには必ずスペースを一つ入れる

    ```jsx
    // 悪い例
    <Foo/>

    // very bad
    <Foo                 />

    // 悪い例
    <Foo
     />

    // 良い例
    <Foo />
    ```

  - JSX内の{}には余分なスペースを入れない eslint: [`react/jsx-curly-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)

    ```jsx
    // 悪い例
    <Foo bar={ baz } />

    // 良い例
    <Foo bar={baz} />
    ```

## Props

  - Prop名は必ずキャメルケースを使用。

    ```jsx
    // 悪い例
    <Foo
      UserName="hello"
      phone_number={12345678}
    />

    // 良い例
    <Foo
      userName="hello"
      phoneNumber={12345678}
    />
    ```

  - propの値が明示的に`true`の場合、値は書かない。 eslint: [`react/jsx-boolean-value`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)

    ```jsx
    // 悪い例
    <Foo
      hidden={true}
    />

    // 良い例
    <Foo
      hidden
    />
    ```

  -　`<img>` タグには必ず `alt` propをつける。 イメージが表示用の場合, `alt`を空文字列にするか`<img>` タグに `role="presentation"`を設定する。 eslint: [`jsx-a11y/img-has-alt`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-has-alt.md)

    ```jsx
    // 悪い例
    <img src="hello.jpg" />

    // 良い例
    <img src="hello.jpg" alt="Me waving hello" />

    // 良い例
    <img src="hello.jpg" alt="" />

    // 良い例
    <img src="hello.jpg" role="presentation" />
    ```

  - `<img>`タグの`alt`propに"image"、"photo"、"picture"といった値は使わない。 eslint: [`jsx-a11y/img-redundant-alt`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md)

  > なぜ?　スクリーンリーダーは`img`elementをimagesとして読み上げるため、その情報をaltテキストに入れる必要は無い。

    ```jsx
    // 悪い例
    <img src="hello.jpg" alt="Picture of me waving hello" />

    // 良い例
    <img src="hello.jpg" alt="Me waving hello" />
    ```
    
  - 有効かつ、non-abstractな[ARIA roles](https://www.w3.org/TR/wai-aria/roles#role_definitions)を使用する。 eslint: [`jsx-a11y/aria-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md)

    ```jsx
    // 悪い例 - ARIA roleでは無い
    <div role="datepicker" />

    // 悪い例 - abstractな ARIA role
    <div role="range" />

    // 良い例
    <div role="button" />
    ```

  - elementsの`accessKey`は使わない。 eslint: [`jsx-a11y/no-access-key`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md)

  > なぜ? キーボードショートカットとキーボードコマンドの違い、さらにスクリーンリーダーかキーボードを利用するかによりaccessibilityが複雑になるため。

  ```jsx
  // 悪い例
  <div accessKey="h" />

  // 良い例
  <div />
  ```

  - `key` propに配列のインデックスを使用するのは避けるべき。`key` propはユニークなIDを利用する方が良い。 ([なぜ?](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318))

  ```jsx
  // 悪い例
  {todos.map((todo, index) =>
    <Todo
      {...todo}
      key={index}
    />
  )}

  // 良い例
  {todos.map((todo) =>
    <Todo
      {...todo}
      key={todo.id}
    />
  )}
  ```

## カッコ（）

  - JSXが一行以上の場合()でwrapする。eslint: [`react/wrap-multilines`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md)

    ```jsx
    // 悪い例
    render() {
      return <MyComponent className="long body" foo="bar">
               <MyChild />
             </MyComponent>;
    }

    // 良い例
    render() {
      return (
        <MyComponent className="long body" foo="bar">
          <MyChild />
        </MyComponent>
      );
    }

    // 良い例, 一行以内の場合
    render() {
      const body = <div>hello</div>;
      return <MyComponent>{body}</MyComponent>;
    }
    ```

## タグ

  - child nodeが無いタグは必ずself-closeする。 eslint: [`react/self-closing-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)

    ```jsx
    // 悪い例
    <Foo className="stuff"></Foo>

    // 良い例
    <Foo className="stuff" />
    ```

  - コンポーネントが複数行のプロパティを含む場合、新しい行でタグを閉じる。 eslint: [`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

    ```jsx
    // 悪い例
    <Foo
      bar="bar"
      baz="baz" />

    // 良い例
    <Foo
      bar="bar"
      baz="baz"
    />
    ```

## メソッド

  - アロー関数でローカル変数をクローズオーバーする。

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

  - render メソッドのイベントハンドラーはコンストラクター内でバインドする。 eslint: [`react/jsx-no-bind`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)

  > なぜ? Render パスのバインドコールにより、renderのたびに新しい関数が呼び出されるため。

    ```jsx
    // 悪い例
    class extends React.Component {
      onClickDiv() {
        // 処理
      }

      render() {
        return <div onClick={this.onClickDiv.bind(this)} />
      }
    }

    // 良い例
    class extends React.Component {
      constructor(props) {
        super(props);

        this.onClickDiv = this.onClickDiv.bind(this);
      }

      onClickDiv() {
        // 処理
      }

      render() {
        return <div onClick={this.onClickDiv} />
      }
    }
    ```

  - Reactコンポーネントのメソッド名にはアンダースコア "_" をつけない。

    ```jsx
    // 悪い例
    React.createClass({
      _onClickSubmit() {
        // 処理
      },

      // 他の処理
    });

    // 良い例
    class extends React.Component {
      onClickSubmit() {
        // 処理
      }

      // 他の処理
    }
    ```

  - `render`メソッドは必ず`return`する。 eslint: [`require-render-return`](https://github.com/yannickcr/eslint-plugin-react/pull/502)

    ```jsx
    // 悪い例
    render() {
      (<div />);
    }

    // 良い例
    render() {
      return (<div />);
    }
    ```

## 順番

  - `class extends React.Component`の順番:

  1. オプションナルな`static`メソッド
  1. `constructor`
  1. `getChildContext`
  1. `componentWillMount`
  1. `componentDidMount`
  1. `componentWillReceiveProps`
  1. `shouldComponentUpdate`
  1. `componentWillUpdate`
  1. `componentDidUpdate`
  1. `componentWillUnmount`
  1. *クリックハンドラーやイベントハンドラー* 例えば `onClickSubmit()` や `onChangeDescription()`
  1. *`render`用のGetterメソッド* 例えば `getSelectReason()` や `getFooterContent()`
  1. *オプショナルなrenderメソッド* 例えば `renderNavigation()` や `renderProfilePicture()`
  1. `render`

  - `propTypes`, `defaultProps`, `contextTypes`,...etc の定義の仕方

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

  - `React.createClass`の順番: eslint: [`react/sort-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md)

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
  1. *クリックハンドラーやイベントハンドラー* 例えば `onClickSubmit()` や `onChangeDescription()`
  1. *`render`用のGetterメソッド* 例えば `getSelectReason()` や `getFooterContent()`
  1. *オプショナルなrenderメソッド* 例えば `renderNavigation()` や `renderProfilePicture()`
  1. `render`

## `isMounted`

  - `isMounted`は使わない。 eslint: [`react/no-is-mounted`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md)

  > なぜ? [`isMounted` はアンチパターン][anti-pattern], ES6クラスを使う場合使用できない、そして、React libraryからも非推奨になる予定なため。

  [anti-pattern]: https://facebook.github.io/react/blog/2015/12/16/ismounted-antipattern.html

## 翻訳

  このJSX/React スタイルガイドは他の言語でも読めます：

  - ![cn](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/China.png) **中国語 (簡体字)**: [JasonBoy/javascript](https://github.com/JasonBoy/javascript/tree/master/react)
  - ![pl](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Poland.png) **ポーランド語**: [pietraszekl/javascript](https://github.com/pietraszekl/javascript/tree/master/react)
  - ![kr](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/South-Korea.png) **韓国語**: [apple77y/javascript](https://github.com/apple77y/javascript/tree/master/react)

**[⬆トップに戻る](#table-of-contents)**
