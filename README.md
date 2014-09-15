原文：https://github.com/airbnb/javascript

# Airbnb JavaScript Style Guide() {

*JavaScript における合理的なアプローチ*


## 目次

  1. [型](#型)
  1. [オブジェクト](#オブジェクト)
  1. [配列](#配列)
  1. [文字列](#文字列)
  1. [関数](#関数)
  1. [プロパティ](#プロパティ)
  1. [変数](#変数)
  1. [変数巻き上げ(ホイスティング)](#変数巻き上げ(ホイスティング))
  1. [条件式・等価式](#条件式・等価式)
  1. [ブロック](#ブロック)
  1. [コメント](#コメント)
  1. [ホワイトスペース](#ホワイトスペース)
  1. [カンマ](#カンマ)
  1. [セミコロン](#セミコロン)
  1. [型キャスト・強制変換](#型キャスト・強制変換)
  1. [命名規則](#命名規則)
  1. [アクセサー](#アクセサー)
  1. [コンストラクタ](#コンストラクタ)
  1. [イベント](#イベント)
  1. [モジュール](#モジュール)
  1. [jQuery](#jquery)
  1. [ECMAScript5の互換性](#ECMAScript5の互換性)
  1. [パフォーマンス](#パフォーマンス)
  1. [参考資料](#参考資料)
  1. [In the Wild](#in-the-wild)
  1. [Translation](#translation)
  1. [The JavaScript Style Guide Guide](#the-javascript-style-guide-guide)
  1. [Contributors](#contributors)
  1. [License](#license)

## 型

  - **プリミティブ**: プリミティブな型では直接その値にアクセスします。

    + `string`
    + `number`
    + `boolean`
    + `null`
    + `undefined`

    ```javascript
    var foo = 1,
        bar = foo;

    bar = 9;

    console.log(foo, bar); // => 1, 9
    ```
  - **参照型**: 参照型では参照した値にアクセスします。

    + `object`
    + `array`
    + `function`

    ```javascript
    var foo = [1, 2],
        bar = foo;

    bar[0] = 9;

    console.log(foo[0], bar[0]); // => 9, 9
    ```

**[⬆ back to top](#目次)**

## オブジェクト

  - オブジェクトの生成ではリテラル表現を使います。

    ```javascript
    // bad
    var item = new Object();

    // good
    var item = {};
    ```

  - 予約語を使ってはいけません。IE8で動かなくなります。 [More info](https://github.com/airbnb/javascript/issues/61)

    ```javascript
    // bad
    var superman = {
      default: { clark: 'kent' },
      private: true
    };

    // good
    var superman = {
      defaults: { clark: 'kent' },
      hidden: true
    };
    ```

  - 予約語を使うかわりに通じる同義語を使います。

    ```javascript
    // bad
    var superman = {
      class: 'alien'
    };

    // bad
    var superman = {
      klass: 'alien'
    };

    // good
    var superman = {
      type: 'alien'
    };
    ```

**[⬆ back to top](#目次)**

## 配列

  - 配列の生成ではリテラル表現を使います。

    ```javascript
    // bad
    var items = new Array();

    // good
    var items = [];
    ```

  - 配列の長さがわからない場合は Array#push を使います。

    ```javascript
    var someStack = [];


    // bad
    someStack[someStack.length] = 'abracadabra';

    // good
    someStack.push('abracadabra');
    ```

  - 配列のコピーが必要なときは Array#slice を使います。 [jsPerf](http://jsperf.com/converting-arguments-to-an-array/7)

    ```javascript
    var len = items.length,
        itemsCopy = [],
        i;

    // bad
    for (i = 0; i < len; i++) {
      itemsCopy[i] = items[i];
    }

    // good
    itemsCopy = items.slice();
    ```

  - 配列のようなオブジェクトを配列に変換するときは Array#slice を使います。

    ```javascript
    function trigger() {
      var args = Array.prototype.slice.call(arguments);
      ...
    }
    ```

**[⬆ back to top](#目次)**


## 文字列

  - 文字列ではシングルコート `''` を使います。

    ```javascript
    // bad
    var name = "Bob Parr";

    // good
    var name = 'Bob Parr';

    // bad
    var fullName = "Bob " + this.lastName;

    // good
    var fullName = 'Bob ' + this.lastName;
    ```

  - 80文字を超える文字列は連結させて複数行に渡って書く必要があります。
  - 注: もし過剰に連結を使うと、パフォーマンスに影響を与える可能性があります。 [jsPerf](http://jsperf.com/ya-string-concat) & [Discussion](https://github.com/airbnb/javascript/issues/40)

    ```javascript
    // bad
    var errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';

    // bad
    var errorMessage = 'This is a super long error that was thrown because \
    of Batman. When you stop to think about how Batman had anything to do \
    with this, you would get nowhere \
    fast.';

    // good
    var errorMessage = 'This is a super long error that was thrown because ' +
      'of Batman. When you stop to think about how Batman had anything to do ' +
      'with this, you would get nowhere fast.';
    ```

  - プログラム上で文字列を連結する場合は Array#join を使います。主にIEのために。: [jsPerf](http://jsperf.com/string-vs-array-concat/2).

    ```javascript
    var items,
        messages,
        length,
        i;

    messages = [{
      state: 'success',
      message: 'This one worked.'
    }, {
      state: 'success',
      message: 'This one worked as well.'
    }, {
      state: 'error',
      message: 'This one did not work.'
    }];

    length = messages.length;

    // bad
    function inbox(messages) {
      items = '<ul>';

      for (i = 0; i < length; i++) {
        items += '<li>' + messages[i].message + '</li>';
      }

      return items + '</ul>';
    }

    // good
    function inbox(messages) {
      items = [];

      for (i = 0; i < length; i++) {
        items[i] = messages[i].message;
      }

      return '<ul><li>' + items.join('</li><li>') + '</li></ul>';
    }
    ```

**[⬆ back to top](#目次)**


## 関数

  - 関数:

    ```javascript
    // anonymous function expression
    var anonymous = function() {
      return true;
    };

    // named function expression
    var named = function named() {
      return true;
    };

    // immediately-invoked function expression (IIFE)
    (function() {
      console.log('Welcome to the Internet. Please follow me.');
    })();
    ```

  - 関数のブロックでない箇所(if, while, etc)で関数を宣言する必要はありません。その代わりに変数に代入します。Browsers will allow you to do it, but they all interpret it differently, which is bad news bears.
  - **Note:** ECMA-262 defines a `block` as a list of statements. A function declaration is not a statement. [Read ECMA-262's note on this issue](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf#page=97).

//TODO

    ```javascript
    // bad
    if (currentUser) {
      function test() {
        console.log('Nope.');
      }
    }

    // good
    var test;
    if (currentUser) {
      test = function test() {
        console.log('Yup.');
      };
    }
    ```

  - `arguments` という名前のパラメータを付けることはありません。これはすべての関数スコープに与えられる `arguments` オブジェクトより優先してしまうためです。

    ```javascript
    // bad
    function nope(name, options, arguments) {
      // ...stuff...
    }

    // good
    function yup(name, options, args) {
      // ...stuff...
    }
    ```

**[⬆ back to top](#目次)**



## プロパティ

  - プロパティへのアクセスにはドット表記を使います。

    ```javascript
    var luke = {
      jedi: true,
      age: 28
    };

    // bad
    var isJedi = luke['jedi'];

    // good
    var isJedi = luke.jedi;
    ```

  - 変数を介してプロパティにアクセスする場合は `[]` の添字表記を使います。

    ```javascript
    var luke = {
      jedi: true,
      age: 28
    };

    function getProp(prop) {
      return luke[prop];
    }

    var isJedi = getProp('jedi');
    ```

**[⬆ back to top](#目次)**


## 変数

  - 変数宣言には `var` を使います。さもないとグローバル変数になってしまいます。グローバルな名前空間の汚染を防ぎましょう。キャプテン・プラネットは私達にそれを教えてくれました。

    ```javascript
    // bad
    superPower = new SuperPower();

    // good
    var superPower = new SuperPower();
    ```

  - 複数の変数を宣言するには改行します。

    ```javascript
    // bad
    var items = getItems();
    var goSportsTeam = true;
    var dragonball = 'z';

    // good
    var items = getItems(),
        goSportsTeam = true,
        dragonball = 'z';
    ```

  - 最後に代入のない変数を宣言します。変数への代入がそれより前に代入した変数に与える依存しないことをわかりやすくします。

    ```javascript
    // bad
    var i, len, dragonball,
        items = getItems(),
        goSportsTeam = true;

    // bad
    var i, items = getItems(),
        dragonball,
        goSportsTeam = true,
        len;

    // good
    var items = getItems(),
        goSportsTeam = true,
        dragonball,
        length,
        i;
    ```

  - 変数の代入はスコープの先頭で行います。変数の宣言と代入によって問題が起こるのを防ぎます。

    ```javascript
    // bad
    function() {
      test();
      console.log('doing stuff..');

      //..other stuff..

      var name = getName();

      if (name === 'test') {
        return false;
      }

      return name;
    }

    // good
    function() {
      var name = getName();

      test();
      console.log('doing stuff..');

      //..other stuff..

      if (name === 'test') {
        return false;
      }

      return name;
    }

    // bad
    function() {
      var name = getName();

      if (!arguments.length) {
        return false;
      }

      return true;
    }

    // good
    function() {
      if (!arguments.length) {
        return false;
      }

      var name = getName();

      return true;
    }
    ```

**[⬆ back to top](#目次)**


## 変数巻き上げ(ホイスティング)

  - 変数の宣言はそのスコープの先頭に巻き上げが行われ、代入されない。

    ```javascript
    // we know this wouldn't work (assuming there
    // is no notDefined global variable)
    function example() {
      console.log(notDefined); // => throws a ReferenceError
    }

    // creating a variable declaration after you
    // reference the variable will work due to
    // variable hoisting. Note: the assignment
    // value of `true` is not hoisted.
    function example() {
      console.log(declaredButNotAssigned); // => undefined
      var declaredButNotAssigned = true;
    }

    // The interpreter is hoisting the variable
    // declaration to the top of the scope.
    // Which means our example could be rewritten as:
    function example() {
      var declaredButNotAssigned;
      console.log(declaredButNotAssigned); // => undefined
      declaredButNotAssigned = true;
    }
    ```

  - 匿名の関数は関数として代入されず、変数名として巻き上げが行われる。

    ```javascript
    function example() {
      console.log(anonymous); // => undefined

      anonymous(); // => TypeError anonymous is not a function

      var anonymous = function() {
        console.log('anonymous function expression');
      };
    }
    ```

  - 名前付きの関数は関数名ではなく変数名や関数本体として巻き上げが行われる。

    ```javascript
    function example() {
      console.log(named); // => undefined

      named(); // => TypeError named is not a function

      superPower(); // => ReferenceError superPower is not defined

      var named = function superPower() {
        console.log('Flying');
      };
    }

    // the same is true when the function name
    // is the same as the variable name.
    function example() {
      console.log(named); // => undefined

      named(); // => TypeError named is not a function

      var named = function named() {
        console.log('named');
      }
    }
    ```

  - 関数の宣言は名前や関数本体として巻き上げが行われる。

    ```javascript
    function example() {
      superPower(); // => Flying

      function superPower() {
        console.log('Flying');
      }
    }
    ```

  - より深く知りたい場合は右を参照。 [JavaScript Scoping & Hoisting](http://www.adequatelygood.com/2010/2/JavaScript-Scoping-and-Hoisting) by [Ben Cherry](http://www.adequatelygood.com/) 

**[⬆ back to top](#目次)**



## 条件式・等価式

  - `==` や `!=` ではなく、 `===` や `!==` を使う。
  - 条件式は`ToBoolean`メソッドで強制的に評価されるので、常に後述の単純なルールに従います。

    + **Objects** は **true**
    + **Undefined** は **false**
    + **Null** は **false**
    + **Booleans** は **boolean の値**
    + **Numbers** は基本的に **true**,  **+0, -0, or NaN** では **false**
    + **Strings** は基本的に **true** 空文字(`''`)では **false**

    ```javascript
    if ([0]) {
      // true
      // An array is an object, objects evaluate to true
    }
    ```

  - 省略を使う。

    ```javascript
    // bad
    if (name !== '') {
      // ...stuff...
    }

    // good
    if (name) {
      // ...stuff...
    }

    // bad
    if (collection.length > 0) {
      // ...stuff...
    }

    // good
    if (collection.length) {
      // ...stuff...
    }
    ```

  - より深く知りたい場合は右を参照。 [Truth Equality and JavaScript](http://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/#more-2108) by Angus Croll

**[⬆ back to top](#目次)**


## ブロック

  - 括弧を使うときは複数行のブロックにする。

    ```javascript
    // bad
    if (test)
      return false;

    // good
    if (test) return false;

    // good
    if (test) {
      return false;
    }

    // bad
    function() { return false; }

    // good
    function() {
      return false;
    }
    ```

**[⬆ back to top](#目次)**


## コメント

  - 複数行のコメントには `/** ... */` を使う。すべての引数と戻り値の型と値の説明を含める。

    ```javascript
    // bad
    // make() returns a new element
    // based on the passed in tag name
    //
    // @param <String> tag
    // @return <Element> element
    function make(tag) {

      // ...stuff...

      return element;
    }

    // good
    /**
     * make() returns a new element
     * based on the passed in tag name
     *
     * @param <String> tag
     * @return <Element> element
     */
    function make(tag) {

      // ...stuff...

      return element;
    }
    ```

  - 1行のコメントには `//` を使う。コメントする対象の上部に改行を入れてコメントを書く。コメントの前には空の行を入れる。

    ```javascript
    // bad
    var active = true;  // is current tab

    // good
    // is current tab
    var active = true;

    // bad
    function getType() {
      console.log('fetching type...');
      // set the default type to 'no type'
      var type = this._type || 'no type';

      return type;
    }

    // good
    function getType() {
      console.log('fetching type...');

      // set the default type to 'no type'
      var type = this._type || 'no type';

      return type;
    }
    ```

  - コメントのプリフィックスに`FIXME`や`TODO`と書くことで、指摘した問題について再検討したり、実装が必要な問題の解決方法に早く気づくことができます。実用的である点で、これらは通常のコメントとは異なります。 `FIXME`は問題を把握する必要があります。`TODO`は実装が必要です。

  - `// FIXME:` は問題を注釈するときに使います。

    ```javascript
    function Calculator() {

      // FIXME: shouldn't use a global here
      total = 0;

      return this;
    }
    ```

  - `// TODO:` は問題の解決策を注釈するときに使います。

    ```javascript
    function Calculator() {

      // TODO: total should be configurable by an options param
      this.total = 0;

      return this;
    }
  ```

**[⬆ back to top](#目次)**


## ホワイトスペース

  - ソフトタブで2個のスペースを使います。

    ```javascript
    // bad
    function() {
    ∙∙∙∙var name;
    }

    // bad
    function() {
    ∙var name;
    }

    // good
    function() {
    ∙∙var name;
    }
    ```

  - 中括弧の前に1個のスペースを使います。

    ```javascript
    // bad
    function test(){
      console.log('test');
    }

    // good
    function test() {
      console.log('test');
    }

    // bad
    dog.set('attr',{
      age: '1 year',
      breed: 'Bernese Mountain Dog'
    });

    // good
    dog.set('attr', {
      age: '1 year',
      breed: 'Bernese Mountain Dog'
    });
    ```

  - 演算子にはスペースをつけます。

    ```javascript
    // bad
    var x=y+5;

    // good
    var x = y + 5;
    ```

  - ファイルの終わりは改行をつけます。

    ```javascript
    // bad
    (function(global) {
      // ...stuff...
    })(this);
    ```

    ```javascript
    // bad
    (function(global) {
      // ...stuff...
    })(this);↵
    ↵
    ```

    ```javascript
    // good
    (function(global) {
      // ...stuff...
    })(this);↵
    ```

  - 長いメソッドチェーンではインデントをつけます。

    ```javascript
    // bad
    $('#items').find('.selected').highlight().end().find('.open').updateCount();

    // good
    $('#items')
      .find('.selected')
        .highlight()
        .end()
      .find('.open')
        .updateCount();

    // bad
    var leds = stage.selectAll('.led').data(data).enter().append('svg:svg').class('led', true)
        .attr('width',  (radius + margin) * 2).append('svg:g')
        .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
        .call(tron.led);

    // good
    var leds = stage.selectAll('.led')
        .data(data)
      .enter().append('svg:svg')
        .class('led', true)
        .attr('width',  (radius + margin) * 2)
      .append('svg:g')
        .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
        .call(tron.led);
    ```

**[⬆ back to top](#目次)**

## カンマ

  - 主要なカンマ

    ```javascript
    // bad
    var once
      , upon
      , aTime;

    // good
    var once,
        upon,
        aTime;

    // bad
    var hero = {
        firstName: 'Bob'
      , lastName: 'Parr'
      , heroName: 'Mr. Incredible'
      , superPower: 'strength'
    };

    // good
    var hero = {
      firstName: 'Bob',
      lastName: 'Parr',
      heroName: 'Mr. Incredible',
      superPower: 'strength'
    };
    ```

  - 末尾のカンマ: IE6/7 and IE9 やその互換モードのときに問題を引き起こす可能性があります。ES3 のいくつかの実装では末尾のカンマを保つ場合に配列の長さが追加されます。これは ES5 で明らかにされました。([ソース](http://es5.github.io/#D)):

  > Edition 5 clarifies the fact that a trailing comma at the end of an ArrayInitialiser does not add to the length of the array. This is not a semantic change from Edition 3 but some implementations may have previously misinterpreted this.

    ```javascript
    // bad
    var hero = {
      firstName: 'Kevin',
      lastName: 'Flynn',
    };

    var heroes = [
      'Batman',
      'Superman',
    ];

    // good
    var hero = {
      firstName: 'Kevin',
      lastName: 'Flynn'
    };

    var heroes = [
      'Batman',
      'Superman'
    ];
    ```

**[⬆ back to top](#目次)**


## セミコロン

  - 見ての通り

    ```javascript
    // bad
    (function() {
      var name = 'Skywalker'
      return name
    })()

    // good
    (function() {
      var name = 'Skywalker';
      return name;
    })();

    // good (guards against the function becoming an argument when two files with IIFEs are concatenated)
    ;(function() {
      var name = 'Skywalker';
      return name;
    })();
    ```

    [Read more](http://stackoverflow.com/a/7365214/1712802).

**[⬆ back to top](#目次)**


## 型キャスト・強制変換

  - 実行時に強制変換されます。
  - 文字列:

    ```javascript
    //  => this.reviewScore = 9;

    // bad
    var totalScore = this.reviewScore + '';

    // good
    var totalScore = '' + this.reviewScore;

    // bad
    var totalScore = '' + this.reviewScore + ' total score';

    // good
    var totalScore = this.reviewScore + ' total score';
    ```

  - 数値は基数を指定した `parseInt` で変換してください。

    ```javascript
    var inputValue = '4';

    // bad
    var val = new Number(inputValue);

    // bad
    var val = +inputValue;

    // bad
    var val = inputValue >> 0;

    // bad
    var val = parseInt(inputValue);

    // good
    var val = Number(inputValue);

    // good
    var val = parseInt(inputValue, 10);
    ```

  - `parseInt` がボトルネックとなってビット演算を使う場合 ([performance reasons](http://jsperf.com/coercion-vs-casting/3))は、理由と何をしているかの説明をコメントで残してください。

    ```javascript
    // good
    /**
     * parseInt was the reason my code was slow.
     * Bitshifting the String to coerce it to a
     * Number made it a lot faster.
     */
    var val = inputValue >> 0;
    ```

  - **注:** ビット演算を使う場合は気をつけてください。[64ビットの値](http://es5.github.io/#x4.3.19)でもビット演算後は32ビットの値が返ってきます。([ソース](http://es5.github.io/#x11.7)) ビット演算は32ビットで表現できる値より大きい値では予期せぬ動作につながります。[議論](https://github.com/airbnb/javascript/issues/109) 符号付き32ビットでは最大値は 2,147,483,647 です。

    ```javascript
    2147483647 >> 0 //=> 2147483647
    2147483648 >> 0 //=> -2147483648
    2147483649 >> 0 //=> -2147483647
    ```

  - Booleans:

    ```javascript
    var age = 0;

    // bad
    var hasAge = new Boolean(age);

    // good
    var hasAge = Boolean(age);

    // good
    var hasAge = !!age;
    ```

**[⬆ back to top](#目次)**


## 命名規則

  - 1文字の名前は避けてください。名前で説明してください。

    ```javascript
    // bad
    function q() {
      // ...stuff...
    }

    // good
    function query() {
      // ..stuff..
    }
    ```

  - オブジェクトや関数、インスタンスにはキャメルケースを使います。

    ```javascript
    // bad
    var OBJEcttsssss = {};
    var this_is_my_object = {};
    function c() {}
    var u = new user({
      name: 'Bob Parr'
    });

    // good
    var thisIsMyObject = {};
    function thisIsMyFunction() {}
    var user = new User({
      name: 'Bob Parr'
    });
    ```

  - コンストラクタやクラスではパスカルケースを使います。

    ```javascript
    // bad
    function user(options) {
      this.name = options.name;
    }

    var bad = new user({
      name: 'nope'
    });

    // good
    function User(options) {
      this.name = options.name;
    }

    var good = new User({
      name: 'yup'
    });
    ```

  - プライペートプロパティではアンダースコア`_` を先頭につけます。

    ```javascript
    // bad
    this.__firstName__ = 'Panda';
    this.firstName_ = 'Panda';

    // good
    this._firstName = 'Panda';
    ```

  - `this` の保持には `_this` を使います。

    ```javascript
    // bad
    function() {
      var self = this;
      return function() {
        console.log(self);
      };
    }

    // bad
    function() {
      var that = this;
      return function() {
        console.log(that);
      };
    }

    // good
    function() {
      var _this = this;
      return function() {
        console.log(_this);
      };
    }
    ```

  - 関数には名前をつけてください。スタックトレースで役立ちます。

    ```javascript
    // bad
    var log = function(msg) {
      console.log(msg);
    };

    // good
    var log = function log(msg) {
      console.log(msg);
    };
    ```

  - **注:** IE8 やそれ以前のブラウザでは名前付き関数にいくつかのクセがあります。詳しくは [http://kangax.github.io/nfe/](http://kangax.github.io/nfe/) を参照してください。

**[⬆ back to top](#目次)**


## アクセサー

  - プロパティのアクセサー関数は必須ではありません。
  - もし作る場合は getVal() や setVal('hello') のようにしてください。

    ```javascript
    // bad
    dragon.age();

    // good
    dragon.getAge();

    // bad
    dragon.age(25);

    // good
    dragon.setAge(25);
    ```

  - プロパティが boolean の場合は、isVal() や hasVal() とします。

    ```javascript
    // bad
    if (!dragon.age()) {
      return false;
    }

    // good
    if (!dragon.hasAge()) {
      return false;
    }
    ```

  - get() や set() 関数は一貫性を保たせてください。

    ```javascript
    function Jedi(options) {
      options || (options = {});
      var lightsaber = options.lightsaber || 'blue';
      this.set('lightsaber', lightsaber);
    }

    Jedi.prototype.set = function(key, val) {
      this[key] = val;
    };

    Jedi.prototype.get = function(key) {
      return this[key];
    };
    ```

**[⬆ back to top](#目次)**


## コンストラクタ

  - プロトタイプオブジェクトを上書きするのではなく、プロトタイプオブジェクトにメソッドを割り当てます。プロトタイプを上書きすると、継承ができなくなります。：プロトタイプをリセットすると、ベースを上書きしてしまいます！ 

    ```javascript
    function Jedi() {
      console.log('new jedi');
    }

    // bad
    Jedi.prototype = {
      fight: function fight() {
        console.log('fighting');
      },

      block: function block() {
        console.log('blocking');
      }
    };

    // good
    Jedi.prototype.fight = function fight() {
      console.log('fighting');
    };

    Jedi.prototype.block = function block() {
      console.log('blocking');
    };
    ```

  - メソッドは this を返すことでメソッドチェーンをしやすくします。

    ```javascript
    // bad
    Jedi.prototype.jump = function() {
      this.jumping = true;
      return true;
    };

    Jedi.prototype.setHeight = function(height) {
      this.height = height;
    };

    var luke = new Jedi();
    luke.jump(); // => true
    luke.setHeight(20) // => undefined

    // good
    Jedi.prototype.jump = function() {
      this.jumping = true;
      return this;
    };

    Jedi.prototype.setHeight = function(height) {
      this.height = height;
      return this;
    };

    var luke = new Jedi();

    luke.jump()
      .setHeight(20);
    ```


  - toString() メソッドをカスタマイズするには、その影響が出ないようにしてください。

    ```javascript
    function Jedi(options) {
      options || (options = {});
      this.name = options.name || 'no name';
    }

    Jedi.prototype.getName = function getName() {
      return this.name;
    };

    Jedi.prototype.toString = function toString() {
      return 'Jedi - ' + this.getName();
    };
    ```

**[⬆ back to top](#目次)**


## イベント

  - イベント（DOMイベントやバックボーンのイベントのようなより独自なもの）にデータを渡す場合は、生の値ではなくハッシュを使います。これにより次の修正者がイベントハンドラーを修正することなくデータを追加できます。

    ```js
    // bad
    $(this).trigger('listingUpdated', listing.id);

    ...

    $(this).on('listingUpdated', function(e, listingId) {
      // do something with listingId
    });
    ```

    prefer:

    ```js
    // good
    $(this).trigger('listingUpdated', { listingId : listing.id });

    ...

    $(this).on('listingUpdated', function(e, data) {
      // do something with data.listingId
    });
    ```

  **[⬆ back to top](#目次)**


## モジュール

  - モジュールは`!`で始まる必要があります。これは最後のセミコロンを付け忘れた時、製品でスクリプトが連結されてエラーとなることを防ぐためです。[説明](https://github.com/airbnb/javascript/issues/44#issuecomment-13063933)
  - ファイルはキャメルケースで命名し、同じ名前のフォルダに入れ、export と同じ名前である必要があります。 
  - `noConflict（）` というメソッドを追加し、以前エクスポートされていたモジュールを返します。 
  - `'use strict';` はモジュールの先頭で宣言します。

    ```javascript
    // fancyInput/fancyInput.js

    !function(global) {
      'use strict';

      var previousFancyInput = global.FancyInput;

      function FancyInput(options) {
        this.options = options || {};
      }

      FancyInput.noConflict = function noConflict() {
        global.FancyInput = previousFancyInput;
        return FancyInput;
      };

      global.FancyInput = FancyInput;
    }(this);
    ```

**[⬆ back to top](#目次)**


## jQuery

  - jQuery オブジェクトの変数には `$`のプリフィックスをつけます。

    ```javascript
    // bad
    var sidebar = $('.sidebar');

    // good
    var $sidebar = $('.sidebar');
    ```

  - jQuery の読み込みはキャッシュを使います。

    ```javascript
    // bad
    function setSidebar() {
      $('.sidebar').hide();

      // ...stuff...

      $('.sidebar').css({
        'background-color': 'pink'
      });
    }

    // good
    function setSidebar() {
      var $sidebar = $('.sidebar');
      $sidebar.hide();

      // ...stuff...

      $sidebar.css({
        'background-color': 'pink'
      });
    }
    ```

  - DOM のクエリーは `$('.sidebar ul')` ではなく、カスケードを使って parent > child `$('.sidebar > ul')` のように書きます。
[jsPerf](http://jsperf.com/jquery-find-vs-context-sel/16)
  - jQuery オブジェクトのクエリのスコープが決まっている場合は `find` を使います。

    ```javascript
    // bad
    $('ul', '.sidebar').hide();

    // bad
    $('.sidebar').find('ul').hide();

    // good
    $('.sidebar ul').hide();

    // good
    $('.sidebar > ul').hide();

    // good
    $sidebar.find('ul').hide();
    ```

**[⬆ back to top](#目次)**


## ECMAScript5の互換性

  -[Kangax](https://twitter.com/kangax/) のES5[互換表](http://kangax.github.com/es5-compat-table/)を参照ください。

**[⬆ back to top](#目次)**

## パフォーマンス

  - [On Layout & Web Performance](http://kellegous.com/j/2013/01/26/layout-performance/)
  - [String vs Array Concat](http://jsperf.com/string-vs-array-concat/2)
  - [Try/Catch Cost In a Loop](http://jsperf.com/try-catch-in-loop-cost)
  - [Bang Function](http://jsperf.com/bang-function)
  - [jQuery Find vs Context, Selector](http://jsperf.com/jquery-find-vs-context-sel/13)
  - [innerHTML vs textContent for script text](http://jsperf.com/innerhtml-vs-textcontent-for-script-text)
  - [Long String Concatenation](http://jsperf.com/ya-string-concat)
  - Loading...

**[⬆ back to top](#目次)**


## 参考資料


**Read This**

  - [Annotated ECMAScript 5.1](http://es5.github.com/)

**Other Styleguides**

  - [Google JavaScript Style Guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml)
  - [jQuery Core Style Guidelines](http://docs.jquery.com/JQuery_Core_Style_Guidelines)
  - [Principles of Writing Consistent, Idiomatic JavaScript](https://github.com/rwldrn/idiomatic.js/)

**Other Styles**

  - [Naming this in nested functions](https://gist.github.com/4135065) - Christian Johansen
  - [Conditional Callbacks](https://github.com/airbnb/javascript/issues/52)
  - [Popular JavaScript Coding Conventions on Github](http://sideeffect.kr/popularconvention/#javascript)
  - [Multiple var statements in JavaScript, not superfluous](http://benalman.com/news/2012/05/multiple-var-statements-javascript/) - Ben Alman

**Further Reading**

  - [Understanding JavaScript Closures](http://javascriptweblog.wordpress.com/2010/10/25/understanding-javascript-closures/) - Angus Croll
  - [Basic JavaScript for the impatient programmer](http://www.2ality.com/2013/06/basic-javascript.html) - Dr. Axel Rauschmayer
  - [You Might Not Need jQuery](http://youmightnotneedjquery.com/) - Zack Bloom & Adam Schwartz
  - [ES6 Features](https://github.com/lukehoban/es6features) - Luke Hoban

**Books**

  - [JavaScript: The Good Parts](http://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742) - Douglas Crockford
  - [JavaScript Patterns](http://www.amazon.com/JavaScript-Patterns-Stoyan-Stefanov/dp/0596806752) - Stoyan Stefanov
  - [Pro JavaScript Design Patterns](http://www.amazon.com/JavaScript-Design-Patterns-Recipes-Problem-Solution/dp/159059908X)  - Ross Harmes and Dustin Diaz
  - [High Performance Web Sites: Essential Knowledge for Front-End Engineers](http://www.amazon.com/High-Performance-Web-Sites-Essential/dp/0596529309) - Steve Souders
  - [Maintainable JavaScript](http://www.amazon.com/Maintainable-JavaScript-Nicholas-C-Zakas/dp/1449327680) - Nicholas C. Zakas
  - [JavaScript Web Applications](http://www.amazon.com/JavaScript-Web-Applications-Alex-MacCaw/dp/144930351X) - Alex MacCaw
  - [Pro JavaScript Techniques](http://www.amazon.com/Pro-JavaScript-Techniques-John-Resig/dp/1590597273) - John Resig
  - [Smashing Node.js: JavaScript Everywhere](http://www.amazon.com/Smashing-Node-js-JavaScript-Everywhere-Magazine/dp/1119962595) - Guillermo Rauch
  - [Secrets of the JavaScript Ninja](http://www.amazon.com/Secrets-JavaScript-Ninja-John-Resig/dp/193398869X) - John Resig and Bear Bibeault
  - [Human JavaScript](http://humanjavascript.com/) - Henrik Joreteg
  - [Superhero.js](http://superherojs.com/) - Kim Joar Bekkelund, Mads Mobæk, & Olav Bjorkoy
  - [JSBooks](http://jsbooks.revolunet.com/)
  - [Third Party JavaScript](http://manning.com/vinegar/) - Ben Vinegar and Anton Kovalyov

**Blogs**

  - [DailyJS](http://dailyjs.com/)
  - [JavaScript Weekly](http://javascriptweekly.com/)
  - [JavaScript, JavaScript...](http://javascriptweblog.wordpress.com/)
  - [Bocoup Weblog](http://weblog.bocoup.com/)
  - [Adequately Good](http://www.adequatelygood.com/)
  - [NCZOnline](http://www.nczonline.net/)
  - [Perfection Kills](http://perfectionkills.com/)
  - [Ben Alman](http://benalman.com/)
  - [Dmitry Baranovskiy](http://dmitry.baranovskiy.com/)
  - [Dustin Diaz](http://dustindiaz.com/)
  - [nettuts](http://net.tutsplus.com/?s=javascript)

**[⬆ back to top](#目次)**

## In the Wild

  This is a list of organizations that are using this style guide. Send us a pull request or open an issue and we'll add you to the list.

  - **Aan Zee**: [AanZee/javascript](https://github.com/AanZee/javascript)
  - **Airbnb**: [airbnb/javascript](https://github.com/airbnb/javascript)
  - **American Insitutes for Research**: [AIRAST/javascript](https://github.com/AIRAST/javascript)
  - **Avalara**: [avalara/javascript](https://github.com/avalara/javascript)
  - **Compass Learning**: [compasslearning/javascript-style-guide](https://github.com/compasslearning/javascript-style-guide)
  - **DailyMotion**: [dailymotion/javascript](https://github.com/dailymotion/javascript)
  - **Digitpaint** [digitpaint/javascript](https://github.com/digitpaint/javascript)
  - **Evernote**: [evernote/javascript-style-guide](https://github.com/evernote/javascript-style-guide)
  - **ExactTarget**: [ExactTarget/javascript](https://github.com/ExactTarget/javascript)
  - **Gawker Media**: [gawkermedia/javascript](https://github.com/gawkermedia/javascript)
  - **GeneralElectric**: [GeneralElectric/javascript](https://github.com/GeneralElectric/javascript)
  - **GoodData**: [gooddata/gdc-js-style](https://github.com/gooddata/gdc-js-style)
  - **Grooveshark**: [grooveshark/javascript](https://github.com/grooveshark/javascript)
  - **How About We**: [howaboutwe/javascript](https://github.com/howaboutwe/javascript)
  - **Intent Media**: [intentmedia/javascript](https://github.com/intentmedia/javascript)
  - **Mighty Spring**: [mightyspring/javascript](https://github.com/mightyspring/javascript)
  - **MinnPost**: [MinnPost/javascript](https://github.com/MinnPost/javascript)
  - **ModCloth**: [modcloth/javascript](https://github.com/modcloth/javascript)
  - **Money Advice Service**: [moneyadviceservice/javascript](https://github.com/moneyadviceservice/javascript)
  - **Muber**: [muber/javascript](https://github.com/muber/javascript)
  - **National Geographic**: [natgeo/javascript](https://github.com/natgeo/javascript)
  - **National Park Service**: [nationalparkservice/javascript](https://github.com/nationalparkservice/javascript)
  - **Orion Health**: [orionhealth/javascript](https://github.com/orionhealth/javascript)
  - **Peerby**: [Peerby/javascript](https://github.com/Peerby/javascript)
  - **Razorfish**: [razorfish/javascript-style-guide](https://github.com/razorfish/javascript-style-guide)
  - **reddit**: [reddit/styleguide/javascript](https://github.com/reddit/styleguide/tree/master/javascript)
  - **REI**: [reidev/js-style-guide](https://github.com/reidev/js-style-guide)
  - **Ripple**: [ripple/javascript-style-guide](https://github.com/ripple/javascript-style-guide)
  - **SeekingAlpha**: [seekingalpha/javascript-style-guide](https://github.com/seekingalpha/javascript-style-guide)
  - **Shutterfly**: [shutterfly/javascript](https://github.com/shutterfly/javascript)
  - **TheLadders**: [TheLadders/javascript](https://github.com/TheLadders/javascript)
  - **Userify**: [userify/javascript](https://github.com/userify/javascript)
  - **VoxFeed**: [VoxFeed/javascript-style-guide](https://github.com/VoxFeed/javascript-style-guide)
  - **Zillow**: [zillow/javascript](https://github.com/zillow/javascript)
  - **ZocDoc**: [ZocDoc/javascript](https://github.com/ZocDoc/javascript)

## Translation

  This style guide is also available in other languages:

  - :de: **German**: [timofurrer/javascript-style-guide](https://github.com/timofurrer/javascript-style-guide)
  - :jp: **Japanese**: [mitsuruog/javacript-style-guide](https://github.com/mitsuruog/javacript-style-guide)
  - :br: **Portuguese**: [armoucar/javascript-style-guide](https://github.com/armoucar/javascript-style-guide)
  - :cn: **Chinese**: [adamlu/javascript-style-guide](https://github.com/adamlu/javascript-style-guide)
  - :es: **Spanish**: [paolocarrasco/javascript-style-guide](https://github.com/paolocarrasco/javascript-style-guide)
  - :kr: **Korean**: [tipjs/javascript-style-guide](https://github.com/tipjs/javascript-style-guide)
  - :fr: **French**: [nmussy/javascript-style-guide](https://github.com/nmussy/javascript-style-guide)
  - :ru: **Russian**: [uprock/javascript](https://github.com/uprock/javascript)
  - :bg: **Bulgarian**: [borislavvv/javascript](https://github.com/borislavvv/javascript)

## The JavaScript Style Guide Guide

  - [Reference](https://github.com/airbnb/javascript/wiki/The-JavaScript-Style-Guide-Guide)

## Contributors

  - [View Contributors](https://github.com/airbnb/javascript/graphs/contributors)


## License

(The MIT License)

Copyright (c) 2014 Airbnb

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**[⬆ back to top](#目次)**

# };
