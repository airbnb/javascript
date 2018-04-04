# Airbnb JavaScript Style Guide() {

*Javascript'e kabul edilebilir bir yaklaşım.*

> **Not**: Bu rehber [Babel](https://babeljs.io) ile birlikte [babel-preset-airbnb](https://npmjs.com/babel-preset-airbnb) ya da benzeri bir aracı kullandığınızı varsaymaktadır. Bununla birlikte uygulamanızda da [airbnb-browser-shims](https://npmjs.com/airbnb-browser-shims) ya da bir benzeri araç ile shims/polyfills bulundurduğunuzu varsaymaktadır.

[![Downloads](https://img.shields.io/npm/dm/eslint-config-airbnb.svg)](https://www.npmjs.com/package/eslint-config-airbnb)
[![Downloads](https://img.shields.io/npm/dm/eslint-config-airbnb-base.svg)](https://www.npmjs.com/package/eslint-config-airbnb-base)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/airbnb/javascript?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Bu rehber farklı dillerde de bulunmaktadır. [Çeviri](#ceviri)

Diğer Rehberler

  - [ES5 (Kullanımdan Kaldırıldı)](https://github.com/airbnb/javascript/tree/es5-deprecated/es5)
  - [React](react/)
  - [CSS-in-JavaScript](css-in-javascript/)
  - [CSS & Sass](https://github.com/airbnb/css)
  - [Ruby](https://github.com/airbnb/ruby)

## İçindekiler

  1. [Türler](#turler)
  1. [Referanslar](#referanslar)
  1. [Nesneler](#nesneler)
  1. [Diziler](#diziler)
  1. [Destructuring](#destructuring)
  1. [Strings](#strings)
  1. [Functions](#functions)
  1. [Arrow Functions](#arrow-functions)
  1. [Classes & Constructors](#classes--constructors)
  1. [Modules](#modules)
  1. [Iterators and Generators](#iterators-and-generators)
  1. [Properties](#properties)
  1. [Variables](#variables)
  1. [Hoisting](#hoisting)
  1. [Comparison Operators & Equality](#comparison-operators--equality)
  1. [Blocks](#blocks)
  1. [Control Statements](#control-statements)
  1. [Comments](#comments)
  1. [Whitespace](#whitespace)
  1. [Commas](#commas)
  1. [Semicolons](#semicolons)
  1. [Type Casting & Coercion](#type-casting--coercion)
  1. [Naming Conventions](#naming-conventions)
  1. [Accessors](#accessors)
  1. [Events](#events)
  1. [jQuery](#jquery)
  1. [ECMAScript 5 Compatibility](#ecmascript-5-compatibility)
  1. [ECMAScript 6+ (ES 2015+) Styles](#ecmascript-6-es-2015-styles)
  1. [Standard Library](#standard-library)
  1. [Testing](#testing)
  1. [Performance](#performance)
  1. [Resources](#resources)
  1. [In the Wild](#in-the-wild)
  1. [Translation](#translation)
  1. [The JavaScript Style Guide Guide](#the-javascript-style-guide-guide)
  1. [Chat With Us About JavaScript](#chat-with-us-about-javascript)
  1. [Contributors](#contributors)
  1. [License](#license)
  1. [Amendments](#amendments)

## Türler

  <a name="types--primitives"></a><a name="1.1"></a>
  - [1.1](#types--primitives) **İlkel**: İlkel bir türe eriştiğinizde doğrudan değer ile karşılaşırsınız.

    - `string`
    - `number`
    - `boolean`
    - `null`
    - `undefined`
    - `symbol`

    ```javascript
    const foo = 1;
    let bar = foo;

    bar = 9;

    console.log(foo, bar); // => 1, 9
    ```

    - Symbol türü kararlı polyfill edilemez. Bu yüzden doğal olarak türü desteklemeyen tarayıcı ve benzeri ortamlarda kullanılmamalıdır.

  <a name="types--complex"></a><a name="1.2"></a>
  - [1.2](#types--complex)  **Karmaşık**: Karmaşık türlere eriştiğinizde değeri işaret eden referans ile karşılaşırsınız.

    - `object`
    - `array`
    - `function`

    ```javascript
    const foo = [1, 2];
    const bar = foo;

    bar[0] = 9;

    console.log(foo[0], bar[0]); // => 9, 9
    ```

**[⬆ başa dön](#icindekiler)**

## Referanslar

  <a name="references--prefer-const"></a><a name="2.1"></a>
  - [2.1](#references--prefer-const) Tüm referanslarda `const` kullanın. `var` kullanmaktan kaçının. eslint: [`prefer-const`](https://eslint.org/docs/rules/prefer-const.html), [`no-const-assign`](https://eslint.org/docs/rules/no-const-assign.html)

    > Neden? Bu şekilde referansların değiştirilmesi engellenecek; bunun sonucu olarak hatalar önlenecek ve kodun anlaşılabilirliği artacaktır.

    ```javascript
    // kötü
    var a = 1;
    var b = 2;

    // iyi
    const a = 1;
    const b = 2;
    ```

  <a name="references--disallow-var"></a><a name="2.2"></a>
  - [2.2](#references--disallow-var) Eğer referansları yeniden tanımlayacaksanız, `var` yerine `let` kullanın. eslint: [`no-var`](https://eslint.org/docs/rules/no-var.html) jscs: [`disallowVar`](http://jscs.info/rule/disallowVar)

    > Neden? `let` function-scope `var`'ın aksine block-scope'dur.

    ```javascript
    // kötü
    var count = 1;
    if (true) {
      count += 1;
    }

    // iyi, let'i kullan.
    let count = 1;
    if (true) {
      count += 1;
    }
    ```

  <a name="references--block-scope"></a><a name="2.3"></a>
  - [2.3](#references--block-scope) Unutmayın; `let` ve `const`'un her ikiside block-scope'dur.

    ```javascript
    // const ve let sadece tanımlandıkları yaşam alanında erişilebilir olacaktır.
    {
      let a = 1;
      const b = 1;
    }
    console.log(a); // ReferenceError (Referans Hatası)
    console.log(b); // ReferenceError (Referans Hatası)
    ```

**[⬆ başa dön](icindekiler)**

## Nesneler

  <a name="objects--no-new"></a><a name="3.1"></a>
  - [3.1](#objects--no-new) Nesne yaratırken literal sözdizimini kullanın. eslint: [`no-new-object`](https://eslint.org/docs/rules/no-new-object.html)

    ```javascript
    // kötü
    const item = new Object();

    // iyi
    const item = {};
    ```

  <a name="es6-computed-properties"></a><a name="3.4"></a>
  - [3.2](#es6-computed-properties) Nesne property isimlerini dinamik şekilde oluştururken, property'leri block içerisinde oluşturun.

    > Neden? Nesnenin tüm property'lerini aynı yerde tanımlayabilmenize olanak tanır.

    ```javascript

    function getKey(k) {
      return `a key named ${k}`;
    }

    // kötü
    const obj = {
      id: 5,
      name: 'San Francisco',
    };
    obj[getKey('enabled')] = true;

    // iyi
    const obj = {
      id: 5,
      name: 'San Francisco',
      [getKey('enabled')]: true,
    };
    ```

  <a name="es6-object-shorthand"></a><a name="3.5"></a>
  - [3.3](#es6-object-shorthand) Metodlarda shorthand yöntemini kullanın. eslint: [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand.html) jscs: [`requireEnhancedObjectLiterals`](http://jscs.info/rule/requireEnhancedObjectLiterals)

    ```javascript
    // kötü
    const atom = {
      value: 1,

      addValue: function (value) {
        return atom.value + value;
      },
    };

    // iyi
    const atom = {
      value: 1,

      addValue(value) {
        return atom.value + value;
      },
    };
    ```

  <a name="es6-object-concise"></a><a name="3.6"></a>
  - [3.4](#es6-object-concise) Property'lerde shorthand yöntemini kullanın. eslint: [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand.html) jscs: [`requireEnhancedObjectLiterals`](http://jscs.info/rule/requireEnhancedObjectLiterals)

    > Why? It is shorter to write and descriptive.

    ```javascript
    const lukeSkywalker = 'Luke Skywalker';

    // bad
    const obj = {
      lukeSkywalker: lukeSkywalker,
    };

    // good
    const obj = {
      lukeSkywalker,
    };
    ```

  <a name="objects--grouped-shorthand"></a><a name="3.7"></a>
  - [3.5](#objects--grouped-shorthand) Shortend property'lerinize objenin en başında yer verin.

    > Neden? Bu şekilde hangi property'nin shorthand'i kullandığını anlamak kolaylaşacaktır.

    ```javascript
    const anakinSkywalker = 'Anakin Skywalker';
    const lukeSkywalker = 'Luke Skywalker';

    // kötü
    const obj = {
      episodeOne: 1,
      twoJediWalkIntoACantina: 2,
      lukeSkywalker,
      episodeThree: 3,
      mayTheFourth: 4,
      anakinSkywalker,
    };

    // iyi
    const obj = {
      lukeSkywalker,
      anakinSkywalker,
      episodeOne: 1,
      twoJediWalkIntoACantina: 2,
      episodeThree: 3,
      mayTheFourth: 4,
    };
    ```

  <a name="objects--quoted-props"></a><a name="3.8"></a>
  - [3.6](#objects--quoted-props) Sadece geçersiz tanımları tırnak içine alın. eslint: [`quote-props`](https://eslint.org/docs/rules/quote-props.html) jscs: [`disallowQuotedKeysInObjects`](http://jscs.info/rule/disallowQuotedKeysInObjects)

    > Neden? Genelde bu şekilde okunmasının daha kolay olacağını düşünüyoruz. Ayrıca sözdizimi vurgusunun artmasını ve JS engine'ler tarafından daha kolay optimize edilmesini sağlayacaktır.

    ```javascript
    // kötü
    const bad = {
      'foo': 3,
      'bar': 4,
      'data-blah': 5,
    };

    // iyi
    const good = {
      foo: 3,
      bar: 4,
      'data-blah': 5,
    };
    ```

  <a name="objects--prototype-builtins"></a>
  - [3.7](#objects--prototype-builtins) `hasOwnProperty`, `propertyIsEnumerable`, ve `isPrototypeOf` gibi `Object.prototype` metodlarını doğrudan kullanmayın.

    > Neden? Bu metodlar nesnedeki property'ler tarafından gölgelenebilirler (`{ hasOwnProperty: false }`) ya da nesne null olabilir (`Object.create(null)`).

    ```javascript
    // kötü
    console.log(object.hasOwnProperty(key));

    // iyi
    console.log(Object.prototype.hasOwnProperty.call(object, key));

    // çok iyi
    const has = Object.prototype.hasOwnProperty; // scope'da önbelleğe alın.
    /* ya da */
    import has from 'has'; // https://www.npmjs.com/package/has
    // ...
    console.log(has.call(object, key));
    ```

  <a name="objects--rest-spread"></a>
  - [3.8](#objects--rest-spread) Sığ nesne kopyalamada [`Object.assign`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) yerine spread operatorünü kullanın. Yeni bir nesne oluştururken dahil etmek istemediğiniz property'ler ile birlikte rest operatorünü kullanın.

    ```javascript
    // çok kötü
    const original = { a: 1, b: 2 };
    const copy = Object.assign(original, { c: 3 }); // `original`'i de değiştirir.  ಠ_ಠ
    delete copy.a; // burasıda.

    // kötü
    const original = { a: 1, b: 2 };
    const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

    // iyi
    const original = { a: 1, b: 2 };
    const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

    const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
    ```

**[⬆ başa dön](#içindekiler)**

## Diziler

  <a name="arrays--literals"></a><a name="4.1"></a>
  - [4.1](#arrays--literals) Dizi yaratırken literal sözdizimini kullanın. eslint: [`no-array-constructor`](https://eslint.org/docs/rules/no-array-constructor.html)

    ```javascript
    // kötü
    const items = new Array();

    // iyi
    const items = [];
    ```

  <a name="arrays--push"></a><a name="4.2"></a>
  - [4.2](#arrays--push) Dizilere doğrudan eleman atamak yerine [Array#push](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push)'u kullanın.

    ```javascript
    const someStack = [];

    // kötü
    someStack[someStack.length] = 'abracadabra';

    // iyi
    someStack.push('abracadabra');
    ```

  <a name="es6-array-spreads"></a><a name="4.3"></a>
  - [4.3](#es6-array-spreads) Dizileri kopyalamak için spread `...` operatörünü kullanın.

    ```javascript
    // kötü
    const len = items.length;
    const itemsCopy = [];
    let i;

    for (i = 0; i < len; i += 1) {
      itemsCopy[i] = items[i];
    }

    // iyi
    const itemsCopy = [...items];
    ```

  <a name="arrays--from"></a><a name="4.4"></a>
  - [4.4](#arrays--from) Dizi-benzeri bir nesneyi diziye dönüştürürken [Array.from](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from) yerine `...` spread operatörünü kullanın.

    ```javascript
    const foo = document.querySelectorAll('.foo');

    // good
    const nodes = Array.from(foo);

    // best
    const nodes = [...foo];
    ```

  <a name="arrays--mapping"></a>
  - [4.5](#arrays--mapping) Use [Array.from](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from) instead of spread `...` for mapping over iterables, because it avoids creating an intermediate array.

    ```javascript
    // bad
    const baz = [...foo].map(bar);

    // good
    const baz = Array.from(foo, bar);
    ```

  <a name="arrays--callback-return"></a><a name="4.5"></a>
  - [4.6](#arrays--callback-return) Dizi metodlarının callback'lerinde return ifadesini kullanın. Eğer fonksiyon içeriği [8.2](#arrows--implicit-return) de olduğu gibi tek bir ifadeyi içeriyorsa return kullanılmayabilir. eslint: [`array-callback-return`](https://eslint.org/docs/rules/array-callback-return)

    ```javascript
    // iyi
    [1, 2, 3].map((x) => {
      const y = x + 1;
      return x * y;
    });

    // kötü
    [1, 2, 3].map(x => x + 1);

    // kötü - dönen değerin bulunmaması `acc`'nin ilk tekrardan sonra undefined olmasına neden olur
    [[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
      const flatten = acc.concat(item);
      acc[index] = flatten;
    });

    // iyi
    [[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
      const flatten = acc.concat(item);
      acc[index] = flatten;
      return flatten;
    });

    // kötü
    inbox.filter((msg) => {
      const { subject, author } = msg;
      if (subject === 'Mockingbird') {
        return author === 'Harper Lee';
      } else {
        return false;
      }
    });

    // good
    inbox.filter((msg) => {
      const { subject, author } = msg;
      if (subject === 'Mockingbird') {
        return author === 'Harper Lee';
      }

      return false;
    });
    ```

  <a name="arrays--bracket-newline"></a>
  - [4.7](#arrays--bracket-newline) Eğer dizide birden fazla satır varsa köşeli parantezleri açtıktan sonra ve kapatmadan önce yeni satıra geçin.

    ```javascript
    // kötü
    const arr = [
      [0, 1], [2, 3], [4, 5],
    ];

    const objectInArray = [{
      id: 1,
    }, {
      id: 2,
    }];

    const numberInArray = [
      1, 2,
    ];

    // iyi
    const arr = [[0, 1], [2, 3], [4, 5]];

    const objectInArray = [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ];

    const numberInArray = [
      1,
      2,
    ];
    ```

**[⬆ başa dön](#icindekiler)**

## Destructuring

  <a name="destructuring--object"></a><a name="5.1"></a>
  - [5.1](#destructuring--object) Bir nesnede birden fazla property'e erişirken destructuring yöntemini kullanın. eslint: [`prefer-destructuring`](https://eslint.org/docs/rules/prefer-destructuring) jscs: [`requireObjectDestructuring`](http://jscs.info/rule/requireObjectDestructuring)

    > Neden ? Destructuring, property'ler için geçici referanslar oluşturmanızın önüne geçer.

    ```javascript
    // kötü
    function getFullName(user) {
      const firstName = user.firstName;
      const lastName = user.lastName;

      return `${firstName} ${lastName}`;
    }

    // iyi
    function getFullName(user) {
      const { firstName, lastName } = user;
      return `${firstName} ${lastName}`;
    }

    // çok iyi
    function getFullName({ firstName, lastName }) {
      return `${firstName} ${lastName}`;
    }
    ```

  <a name="destructuring--array"></a><a name="5.2"></a>
  - [5.2](#destructuring--array) Dizilerde de destructuring yöntemini kullanın. eslint: [`prefer-destructuring`](https://eslint.org/docs/rules/prefer-destructuring) jscs: [`requireArrayDestructuring`](http://jscs.info/rule/requireArrayDestructuring)

    ```javascript
    const arr = [1, 2, 3, 4];

    // kötü
    const first = arr[0];
    const second = arr[1];

    // iyi
    const [first, second] = arr;
    ```

  <a name="destructuring--object-over-array"></a><a name="5.3"></a>
  - [5.3](#destructuring--object-over-array) Birden fazla dönen değer olması durumunda diziler yerine nesneler ile destructuring yapın. jscs: [`disallowArrayDestructuringReturn`](http://jscs.info/rule/disallowArrayDestructuringReturn)

    > Neden? Zamanla yeni property'ler eklendiğinde ya da sıralama değiştiğinde çağrıyı yapan kod betikleri bozulmayacaktır.

    ```javascript
    // kötü
    function processInput(input) {
      // then a miracle occurs
      return [left, right, top, bottom];
    }

    // çağrıyı yapan kısım dönen değerlerin sıralamasını dikkate almalıdır
    const [left, __, top] = processInput(input);

    // iyi
    function processInput(input) {
      // then a miracle occurs
      return { left, right, top, bottom };
    }

    // çağıran bölüm sadece ihtiyacı olanı alır
    const { left, top } = processInput(input);
    ```

**[⬆ back to top](#table-of-contents)**

## Strings

  <a name="strings--quotes"></a><a name="6.1"></a>
  - [6.1](#strings--quotes) Stringlerde tek tırnak `''` kullanın. eslint: [`quotes`](https://eslint.org/docs/rules/quotes.html) jscs: [`validateQuoteMarks`](http://jscs.info/rule/validateQuoteMarks)

    ```javascript
    // kötü
    const name = "Capt. Janeway";

    // kötü - şablon enterpolasyon veya yeni satırlar içerir.
    const name = `Capt. Janeway`;

    // iyi
    const name = 'Capt. Janeway';
    ```

  <a name="strings--line-length"></a><a name="6.2"></a>
  - [6.2](#strings--line-length) 100 karakterden uzun stringler satırlara bölünüp birbirine bağlanmamalıdır.

    > Neden? Bölünmüş stringler ile çalışmak kodun okunabilirliğini düşürür. 

    ```javascript
    // kötü
    const errorMessage = 'This is a super long error that was thrown because \
    of Batman. When you stop to think about how Batman had anything to do \
    with this, you would get nowhere \
    fast.';

    // kötü
    const errorMessage = 'This is a super long error that was thrown because ' +
      'of Batman. When you stop to think about how Batman had anything to do ' +
      'with this, you would get nowhere fast.';

    // iyi
    const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';
    ```

  <a name="es6-template-literals"></a><a name="6.4"></a>
  - [6.3](#es6-template-literals) Programlanabilir stringler yaratırken string şablonlarını kullanın. eslint: [`prefer-template`](https://eslint.org/docs/rules/prefer-template.html) [`template-curly-spacing`](https://eslint.org/docs/rules/template-curly-spacing) jscs: [`requireTemplateStrings`](http://jscs.info/rule/requireTemplateStrings)

    > Neden? String şablonları; kısa, okunabilir, doğru sözdizimi ve string interpolasyon özelliklerine sahip bir kod betiği oluşturabilmenizi sağlar.

    ```javascript
    // kötü
    function sayHi(name) {
      return 'How are you, ' + name + '?';
    }

    // kötü
    function sayHi(name) {
      return ['How are you, ', name, '?'].join();
    }

    // kötü
    function sayHi(name) {
      return `How are you, ${ name }?`;
    }

    // iyi
    function sayHi(name) {
      return `How are you, ${name}?`;
    }
    ```

  <a name="strings--eval"></a><a name="6.5"></a>
  - [6.4](#strings--eval) Stringler ile asla `eval()` fonksiyonunu kullanmayın. Bu durum pek çok açığa neden olabilir. eslint: [`no-eval`](https://eslint.org/docs/rules/no-eval)

  <a name="strings--escaping"></a>
  - [6.5](#strings--escaping) Stringlerde gereksiz yere escape karakterlerini kullanmayın. eslint: [`no-useless-escape`](https://eslint.org/docs/rules/no-useless-escape)

    > Neden? Tersbölüler okunabilirliği düşürür ve sadece gerektiğinde kullanılmalıdır.

    ```javascript
    // kötü
    const foo = '\'this\' \i\s \"quoted\"';

    // iyi
    const foo = '\'this\' is "quoted"';
    const foo = `my name is '${name}'`;
    ```

**[⬆ back to top](#table-of-contents)**

## Fonksiyonlar

  <a name="functions--declarations"></a><a name="7.1"></a>
  - [7.1](#functions--declarations) Klasik fonksiyon tanımları yerine isimlendirilmiş fonksiyon ifadeleri kullanın. eslint: [`func-style`](https://eslint.org/docs/rules/func-style) jscs: [`disallowFunctionDeclarations`](http://jscs.info/rule/disallowFunctionDeclarations)

    > Neden? Fonksiyon tanımlamaları fazla basite kaçan bir çözümdür. Bu kullanım şekli okunabilirliği ve geliştirilebilirliği düşürür. Eğer fonksiyon kapsamlı ya da dosyadaki diğer betikler ile karışabilecek durumda ise ayrı bir modül haline getirin. Fonksiyon ifadesini açıklayıcı bir şekilde isimlendirmeyi unutmayın. ([Discussion](https://github.com/airbnb/javascript/issues/794))

    ```javascript
    // kötü
    function foo() {
      // ...
    }

    // kötü
    const foo = function () {
      // ...
    };

    // iyi
    // lexical name distinguished from the variable-referenced invocation(s)
    const short = function longUniqueMoreDescriptiveLexicalFoo() {
      // ...
    };
    ```

  <a name="functions--iife"></a><a name="7.2"></a>
  - [7.2](#functions--iife) Hemen çağrılan fonksiyonları (Immediately-invoked Function Expressions - IIFE) parantez içine alın. eslint: [`wrap-iife`](https://eslint.org/docs/rules/wrap-iife.html) jscs: [`requireParenthesesAroundIIFE`](http://jscs.info/rule/requireParenthesesAroundIIFE)

    > Neden? IIFE, blok bir betiktir. Betiği parantez içine alarak bu durum belirtilir. Not: Modüler bir yapı içerisinde neredeyse hiç IIFE kullanmaya ihtiyacınız olmayacaktır. 

    ```javascript
    // immediately-invoked function expression (IIFE)
    (function () {
      console.log('Welcome to the Internet. Please follow me.');
    }());
    ```

  <a name="functions--in-blocks"></a><a name="7.3"></a>
  - [7.3](#functions--in-blocks) Fonksiyonları asla fonksiyon harici bir blok (`if`, `while`, vb.). içinde tanımlamayın. Bunun yerine fonksiyonu bir değişkene atayın. Tarayıcılar bu tanıma izin verecektir fakat her biri farklı şekilde yorumlayabilir. eslint: [`no-loop-func`](https://eslint.org/docs/rules/no-loop-func.html)

  <a name="functions--note-on-blocks"></a><a name="7.4"></a>
  - [7.4](#functions--note-on-blocks) **Not:** ECMA-262 `block` kavramını ifadelerin listesi şeklinde tanımlar. Fonksiyon tanımlamak bir ifade değildir. 

    ```javascript
    // kötü
    if (currentUser) {
      function test() {
        console.log('Nope.');
      }
    }

    // iyi
    let test;
    if (currentUser) {
      test = () => {
        console.log('Yup.');
      };
    }
    ```

  <a name="functions--arguments-shadow"></a><a name="7.5"></a>
  - [7.5](#functions--arguments-shadow) Asla bir parametreye `arguments` adını vermeyin. Bu şekilde bir kullanım her fonksiyonun blok alanında bulunan `arguments` nesnesinin üzerinde kalacaktır.

    ```javascript
    // kötü
    function foo(name, options, arguments) {
      // ...
    }

    // iyi
    function foo(name, options, args) {
      // ...
    }
    ```

  <a name="es6-rest"></a><a name="7.6"></a>
  - [7.6](#es6-rest) Never use `arguments`, opt to use rest syntax `...` instead. eslint: [`prefer-rest-params`](https://eslint.org/docs/rules/prefer-rest-params)

    > Why? `...` is explicit about which arguments you want pulled. Plus, rest arguments are a real Array, and not merely Array-like like `arguments`.

    ```javascript
    // bad
    function concatenateAll() {
      const args = Array.prototype.slice.call(arguments);
      return args.join('');
    }

    // good
    function concatenateAll(...args) {
      return args.join('');
    }
    ```

  <a name="es6-default-parameters"></a><a name="7.7"></a>
  - [7.7](#es6-default-parameters) Fonksiyon parametrelerini değiştirmek yerine varsayılan parametre sözdizimini kullanın.

    ```javascript
    // çok kötü
    function handleThings(opts) {
      // Hayır! Fonksiyon argümanları değiştirilmemeli.
      // Ayrıca, argüman hatalıyken bir nesneye eşitlemek açık oluşturabilir.
      opts = opts || {};
      // ...
    }

    // kötü
    function handleThings(opts) {
      if (opts === void 0) {
        opts = {};
      }
      // ...
    }

    // iyi
    function handleThings(opts = {}) {
      // ...
    }
    ```

  <a name="functions--default-side-effects"></a><a name="7.8"></a>
  - [7.8](#functions--default-side-effects) Varsayılan parametrelerin yan etkilerini dikkate alın.

    > Neden? Kullanım amacına aykırıdır.

    ```javascript
    var b = 1;
    // kötü
    function count(a = b++) {
      console.log(a);
    }
    count();  // 1
    count();  // 2
    count(3); // 3
    count();  // 3
    ```

  <a name="functions--defaults-last"></a><a name="7.9"></a>
  - [7.9](#functions--defaults-last) Varsayılan parametreleri daima en sonda kullanın.

    ```javascript
    // kötü
    function handleThings(opts = {}, name) {
      // ...
    }

    // iyi
    function handleThings(name, opts = {}) {
      // ...
    }
    ```

  <a name="functions--constructor"></a><a name="7.10"></a>
  - [7.10](#functions--constructor) Yeni bir fonksiyon yaratmak için asla constructor'ları kullanmayın. eslint: [`no-new-func`](https://eslint.org/docs/rules/no-new-func)

    > Neden? Bu şekilde fonksiyon yaratmak güvenlik açıkları oluşturan eval()'e benzer bir durum oluşturur.

    ```javascript
    // kötü
    var add = new Function('a', 'b', 'return a + b');

    // kötü
    var subtract = Function('a', 'b', 'return a - b');
    ```

  <a name="functions--signature-spacing"></a><a name="7.11"></a>
  - [7.11](#functions--signature-spacing) Fonksiyon yapısında boşlukları doğru kullanın. eslint: [`space-before-function-paren`](https://eslint.org/docs/rules/space-before-function-paren) [`space-before-blocks`](https://eslint.org/docs/rules/space-before-blocks)

    > Neden? Tutarlılık iyidir ve bu şekilde bir isim eklerken veya silerken boşluk eklemenize, silmenize gerek kalmaz.

    ```javascript
    // kötü
    const f = function(){};
    const g = function (){};
    const h = function() {};

    // iyi
    const x = function () {};
    const y = function a() {};
    ```

  <a name="functions--mutate-params"></a><a name="7.12"></a>
  - [7.12](#functions--mutate-params) Asla parametreleri değiştirmeyin. eslint: [`no-param-reassign`](https://eslint.org/docs/rules/no-param-reassign.html)

    > Neden? Gelen nesneleri değiştirmek çağrıyı yapan bölümde istenmeyen yan etkilere neden olabilir.

    ```javascript
    // kötü
    function f1(obj) {
      obj.key = 1;
    }

    // iyi
    function f2(obj) {
      const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
    }
    ```

  <a name="functions--reassign-params"></a><a name="7.13"></a>
  - [7.13](#functions--reassign-params) Asla parametreleri yeniden tanımlamayın. eslint: [`no-param-reassign`](https://eslint.org/docs/rules/no-param-reassign.html)

    > Neden? Parametrelerin yeniden tanımlanması özellikle `arguments` nesnesine erişirken beklenmeyen davranışlara neden olabilir. Bunun yanında özellikle V8 motorunda optimizasyon sorunlarına neden olabilir.

    ```javascript
    // kötü
    function f1(a) {
      a = 1;
      // ...
    }

    function f2(a) {
      if (!a) { a = 1; }
      // ...
    }

    // iyi
    function f3(a) {
      const b = a || 1;
      // ...
    }

    function f4(a = 1) {
      // ...
    }
    ```

  <a name="functions--spread-vs-apply"></a><a name="7.14"></a>
  - [7.14](#functions--spread-vs-apply) Variadic fonksiyonlarda spread operatörünü `...` kullanmaya özen gösterin. eslint: [`prefer-spread`](https://eslint.org/docs/rules/prefer-spread)

    > Neden? Daha temiz bir kullanım şeklidir. İçeriği oluşturmanıza ve `new` ile `apply` kullanmanıza gerek kalmaz.

    ```javascript
    // kötü
    const x = [1, 2, 3, 4, 5];
    console.log.apply(console, x);

    // iyi
    const x = [1, 2, 3, 4, 5];
    console.log(...x);

    // kötü
    new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]));

    // iyi
    new Date(...[2016, 8, 5]);
    ```

  <a name="functions--signature-invocation-indentation"></a>
  - [7.15](#functions--signature-invocation-indentation) Çok satırlı tanımlardaki ve çağrılardaki argümanlar, bu kılavuzdaki diğer çok satırlı listeler gibi girintili olmalıdır; her öğe bir satırda, son öğe sonunda bir virgülle birlikte.

    ```javascript
    // kötü
    function foo(bar,
                 baz,
                 quux) {
      // ...
    }

    // iyi
    function foo(
      bar,
      baz,
      quux,
    ) {
      // ...
    }

    // kötü
    console.log(foo,
      bar,
      baz);

    // iyi
    console.log(
      foo,
      bar,
      baz,
    );
    ```

**[⬆ back to top](#table-of-contents)**

## Arrow Functions

  <a name="arrows--use-them"></a><a name="8.1"></a>
  - [8.1](#arrows--use-them) İsimsiz bir fonksiyon kullanırken (fonksiyon içi bir callback olarak) arrow (ok) fonksiyon notasyonunu kullanın. eslint: [`prefer-arrow-callback`](https://eslint.org/docs/rules/prefer-arrow-callback.html), [`arrow-spacing`](https://eslint.org/docs/rules/arrow-spacing.html) jscs: [`requireArrowFunctions`](http://jscs.info/rule/requireArrowFunctions)

    > Neden? Bu kullanım ihtiyaç duyulduğu gibi, `this` ile çalışan bir yapı oluşturur ve daha sade bir sözdizimine sahiptir.

    > Ne zaman kullanılmamalı? Fonksiyonun karmaşık bir işlevi bulunuyorsa isimlendirilmiş bir fonksiyon ifadesi kullanmalısınız.

    ```javascript
    // kötü
    [1, 2, 3].map(function (x) {
      const y = x + 1;
      return x * y;
    });

    // iyi
    [1, 2, 3].map((x) => {
      const y = x + 1;
      return x * y;
    });
    ```

  <a name="arrows--implicit-return"></a><a name="8.2"></a>
  - [8.2](#arrows--implicit-return) Eğer fonksiyon içeriği yan etkisi bulunmayan tek bir ifadeyi [expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions) geri döndürüyorsa süslü parantez kullanmadan satır içinde ifadeyi kullanın (implicit return). Aksi durumlarda süslü parantez ve `return` kullanın. eslint: [`arrow-parens`](https://eslint.org/docs/rules/arrow-parens.html), [`arrow-body-style`](https://eslint.org/docs/rules/arrow-body-style.html) jscs:  [`disallowParenthesesAroundArrowParam`](http://jscs.info/rule/disallowParenthesesAroundArrowParam), [`requireShorthandArrowFunctions`](http://jscs.info/rule/requireShorthandArrowFunctions)

    > Neden? Birden fazla fonksiyon zincir halinde kullanıldığında okunabilirliği artırır. 

    ```javascript
    // kötü
    [1, 2, 3].map(number => {
      const nextNumber = number + 1;
      `A string containing the ${nextNumber}.`;
    });

    // iyi
    [1, 2, 3].map(number => `A string containing the ${number}.`);

    // iyi
    [1, 2, 3].map((number) => {
      const nextNumber = number + 1;
      return `A string containing the ${nextNumber}.`;
    });

    // iyi
    [1, 2, 3].map((number, index) => ({
      [index]: number,
    }));

    // Yan etkiler içeren implicit return
    function foo(callback) {
      const val = callback();
      if (val === true) {
        // Do something if callback returns true
      }
    }

    let bool = false;

    // kötü
    foo(() => bool = true);

    // iyi
    foo(() => {
      bool = true;
    });
    ```

  <a name="arrows--paren-wrap"></a><a name="8.3"></a>
  - [8.3](#arrows--paren-wrap) İfade birden fazla satır içeriyorsa okunabilirliği artırmak için parantez kullanın.

    > Neden? Fonksiyonun nerede başlayıp bittiğini daha net şekilde gösterir.

    ```javascript
    // kötü
    ['get', 'post', 'put'].map(httpMethod => Object.prototype.hasOwnProperty.call(
        httpMagicObjectWithAVeryLongName,
        httpMethod,
      )
    );

    // iyi
    ['get', 'post', 'put'].map(httpMethod => (
      Object.prototype.hasOwnProperty.call(
        httpMagicObjectWithAVeryLongName,
        httpMethod,
      )
    ));
    ```

  <a name="arrows--one-arg-parens"></a><a name="8.4"></a>
  - [8.4](#arrows--one-arg-parens) Fonksiyonunuz tek bir parametre alıyorsa ve süslü parantez kullanmıyorsa, parantez de kullanmayın. Diğer durumlarda sadelik ve tutarlılık için daima parametreleri parantez içine alın. Not: Parantezlerin sürekli kullanımı da kabul edilebilirdir. Bunun için eslint de [“always” option](https://eslint.org/docs/rules/arrow-parens#always)  kullanın ya da jscs de [`disallowParenthesesAroundArrowParam`](http://jscs.info/rule/disallowParenthesesAroundArrowParam) dahil etmeyin. eslint: [`arrow-parens`](https://eslint.org/docs/rules/arrow-parens.html) jscs:  [`disallowParenthesesAroundArrowParam`](http://jscs.info/rule/disallowParenthesesAroundArrowParam)

    > Neden? Daha az görsel karmaşa.

    ```javascript
    // kötü
    [1, 2, 3].map((x) => x * x);

    // iyi
    [1, 2, 3].map(x => x * x);

    // iyi
    [1, 2, 3].map(number => (
      `A long string with the ${number}. It’s so long that we don’t want it to take up space on the .map line!`
    ));

    // kötü
    [1, 2, 3].map(x => {
      const y = x + 1;
      return x * y;
    });

    // iyi
    [1, 2, 3].map((x) => {
      const y = x + 1;
      return x * y;
    });
    ```

  <a name="arrows--confusing"></a><a name="8.5"></a>
  - [8.5](#arrows--confusing) Arrow fonksiyonları (`=>`) yazarken karşılaştırma operatörleri (`<=`, `>=`) ile karıştırmamaya dikkat edin. eslint: [`no-confusing-arrow`](https://eslint.org/docs/rules/no-confusing-arrow)

    ```javascript
    // kötü
    const itemHeight = item => item.height > 256 ? item.largeSize : item.smallSize;

    // kötü
    const itemHeight = (item) => item.height > 256 ? item.largeSize : item.smallSize;

    // iyi
    const itemHeight = item => (item.height > 256 ? item.largeSize : item.smallSize);

    // iyi
    const itemHeight = (item) => {
      const { height, largeSize, smallSize } = item;
      return height > 256 ? largeSize : smallSize;
    };
    ```

**[⬆ başa dön](#table-of-contents)**

## Sınıflar & Yapılandırıcılar

  <a name="constructors--use-class"></a><a name="9.1"></a>
  - [9.1](#constructors--use-class) Daima `class` kullanın. Direkt `prototype` manipulasyonundan kaçının.

    > Neden? `class` sözdizimi daha doğru ve kolaydır.

    ```javascript
    // kötü
    function Queue(contents = []) {
      this.queue = [...contents];
    }
    Queue.prototype.pop = function () {
      const value = this.queue[0];
      this.queue.splice(0, 1);
      return value;
    };

    // iyi
    class Queue {
      constructor(contents = []) {
        this.queue = [...contents];
      }
      pop() {
        const value = this.queue[0];
        this.queue.splice(0, 1);
        return value;
      }
    }
    ```

  <a name="constructors--extends"></a><a name="9.2"></a>
  - [9.2](#constructors--extends) Kalıtım için `extends`'i kullanın.

    > Neden? Prototip işlevselliğini `instanceof`'u bozmadan içselleştirmenin yerleşik olarak gelen yöntemidir.

    ```javascript
    // kötü
    const inherits = require('inherits');
    function PeekableQueue(contents) {
      Queue.apply(this, contents);
    }
    inherits(PeekableQueue, Queue);
    PeekableQueue.prototype.peek = function () {
      return this.queue[0];
    };

    // iyi
    class PeekableQueue extends Queue {
      peek() {
        return this.queue[0];
      }
    }
    ```

  <a name="constructors--chaining"></a><a name="9.3"></a>
  - [9.3](#constructors--chaining) Metodlar 'method chaining' için `this`'i return edebilir.

    ```javascript
    // kötü
    Jedi.prototype.jump = function () {
      this.jumping = true;
      return true;
    };

    Jedi.prototype.setHeight = function (height) {
      this.height = height;
    };

    const luke = new Jedi();
    luke.jump(); // => true
    luke.setHeight(20); // => undefined

    // iyi
    class Jedi {
      jump() {
        this.jumping = true;
        return this;
      }

      setHeight(height) {
        this.height = height;
        return this;
      }
    }

    const luke = new Jedi();

    luke.jump()
      .setHeight(20);
    ```

  <a name="constructors--tostring"></a><a name="9.4"></a>
  - [9.4](#constructors--tostring) Özel toString() metodları yazılabilir fakat doğru şekilde çalıştığına ve yan etkiler oluşturmadığına emin olunmalıdır.

    ```javascript
    class Jedi {
      constructor(options = {}) {
        this.name = options.name || 'no name';
      }

      getName() {
        return this.name;
      }

      toString() {
        return `Jedi - ${this.getName()}`;
      }
    }
    ```

  <a name="constructors--no-useless"></a><a name="9.5"></a>
  - [9.5](#constructors--no-useless) Eğer bir yapılandırıcı tanımlanmadıysa sınıfların varsayılan bir yapılandırıcısı bulunur. Boş bir yapılandırıcı ya da üst sınıfı temsil eden bir yapılandırıcı gereksizdir. eslint: [`no-useless-constructor`](https://eslint.org/docs/rules/no-useless-constructor)

    ```javascript
    // kötü
    class Jedi {
      constructor() {}

      getName() {
        return this.name;
      }
    }

    // kötü
    class Rey extends Jedi {
      constructor(...args) {
        super(...args);
      }
    }

    // iyi
    class Rey extends Jedi {
      constructor(...args) {
        super(...args);
        this.name = 'Rey';
      }
    }
    ```

  <a name="classes--no-duplicate-members"></a>
  - [9.6](#classes--no-duplicate-members) Sınıf üyelerini tekrarlamaktan kaçının. eslint: [`no-dupe-class-members`](https://eslint.org/docs/rules/no-dupe-class-members)

    > Neden? Sınıf üyelerinin tekrar deklare edilmesi durumunda son tekrarlanan üye dikkate alınır.

    ```javascript
    // kötü
    class Foo {
      bar() { return 1; }
      bar() { return 2; }
    }

    // iyi
    class Foo {
      bar() { return 1; }
    }

    // iyi
    class Foo {
      bar() { return 2; }
    }
    ```

**[⬆ başa dön](#table-of-contents)**

## Modules

  <a name="modules--use-them"></a><a name="10.1"></a>
  - [10.1](#modules--use-them) Standart bir yapıya sahip olmayan modül sistemlerinizde daima (`import`/`export`) kullanın. İstediğinizde tercih ettiğiniz modül sistemine transpile edebilirsiniz.

    > Neden? Modüller geleceğin teknolojisidir. Şimdiden kullanmaya başlamalıyız.

    ```javascript
    // kötü
    const AirbnbStyleGuide = require('./AirbnbStyleGuide');
    module.exports = AirbnbStyleGuide.es6;

    // normal
    import AirbnbStyleGuide from './AirbnbStyleGuide';
    export default AirbnbStyleGuide.es6;

    // iyi
    import { es6 } from './AirbnbStyleGuide';
    export default es6;
    ```

  <a name="modules--no-wildcard"></a><a name="10.2"></a>
  - [10.2](#modules--no-wildcard) Wildcard import'ları kullanmayın.

    > Neden? Böylece tek bir default export'unuz bulunacaktır.

    ```javascript
    // kötü
    import * as AirbnbStyleGuide from './AirbnbStyleGuide';

    // iyi
    import AirbnbStyleGuide from './AirbnbStyleGuide';
    ```

  <a name="modules--no-export-from-import"></a><a name="10.3"></a>
  - [10.3](#modules--no-export-from-import) Import üzerinden direkt export etmeyin.

    > Why? Tek satırda kullanmak daha sade gözüksede, import ve exportu farklı satırlara ayırmak daha temiz ve tutarlıdır.

    ```javascript
    // kötü
    // filename es6.js
    export { es6 as default } from './AirbnbStyleGuide';

    // iyi
    // filename es6.js
    import { es6 } from './AirbnbStyleGuide';
    export default es6;
    ```

  <a name="modules--no-duplicate-imports"></a>
  - [10.4](#modules--no-duplicate-imports) Aynı path üzerinden tüm importları aynı yerde yapın.
 eslint: [`no-duplicate-imports`](https://eslint.org/docs/rules/no-duplicate-imports)
    > Neden? Aynı path üzerinden farklı konumlarda import kullanmak kodun geliştirilmesini zorlaştıracaktır.

    ```javascript
    // kötü
    import foo from 'foo';
    // … some other imports … //
    import { named1, named2 } from 'foo';

    // iyi
    import foo, { named1, named2 } from 'foo';

    // iyi
    import foo, {
      named1,
      named2,
    } from 'foo';
    ```

  <a name="modules--no-mutable-exports"></a>
  - [10.5](#modules--no-mutable-exports) Değiştirilebilir binding'leri export etmeyin.
 eslint: [`import/no-mutable-exports`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md)
    > Neden? Değiştirmelerden genel olarak kaçınılmalıdır, özellikle de binding'lerde. Zaman zaman bu teknik görmezden gelinebilir ancak genellikle değişmeyen/sabit referanslar export edilmelidir.

    ```javascript
    // kötü
    let foo = 3;
    export { foo };

    // iyi
    const foo = 3;
    export { foo };
    ```

  <a name="modules--prefer-default-export"></a>
  - [10.6](#modules--prefer-default-export) Tek bir export'a sahip modüllerde isimlendirilmiş export yerine default export kullanın.
 eslint: [`import/prefer-default-export`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md)
    > Why? Tek bir export kullandığınız modüllerde default kullanımı okunabilirliği ve geliştirilebilirliği artırır.

    ```javascript
    // bad
    export function foo() {}

    // good
    export default function foo() {}
    ```

  <a name="modules--imports-first"></a>
  - [10.7](#modules--imports-first) Tüm `import`'ları diğer ifadelerin üzerinde kullanın.
 eslint: [`import/first`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md)
    > Neden? `import` kullanımından doğabilecek aksilikleri önleyecektir.

    ```javascript
    // kötü
    import foo from 'foo';
    foo.init();

    import bar from 'bar';

    // iyi
    import foo from 'foo';
    import bar from 'bar';

    foo.init();
    ```

  <a name="modules--multiline-imports-over-newlines"></a>
  - [10.8](#modules--multiline-imports-over-newlines) Import'larda çok satırlı diziler ve sabitler gibi kullanılmalıdır.

    > Neden? Süslü paramntezlere sahip bloklar stil rehberinin tamamında aynı yazım kurallarına sahiptir.

    ```javascript
    // kötü
    import {longNameA, longNameB, longNameC, longNameD, longNameE} from 'path';

    // iyi
    import {
      longNameA,
      longNameB,
      longNameC,
      longNameD,
      longNameE,
    } from 'path';
    ```

  <a name="modules--no-webpack-loader-syntax"></a>
  - [10.9](#modules--no-webpack-loader-syntax) Modül import ifadelerinde webpack loader sözdizimini kullanmayın.
 eslint: [`import/no-webpack-loader-syntax`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md)
    > Neden? Webpack sözdizimi module bundler'da importları çoğaltır. Bunun yerine loader sözdizimini `webpack.config.js` içerisinde kullanın.

    ```javascript
    // kötü
    import fooSass from 'css!sass!foo.scss';
    import barCss from 'style!css!bar.css';

    // iyi
    import fooSass from 'foo.scss';
    import barCss from 'bar.css';
    ```

**[⬆ başa dön](#table-of-contents)**

## Iterators and Generators

  <a name="iterators--nope"></a><a name="11.1"></a>
  - [11.1](#iterators--nope) Iterator kullanmayın. `for-in` ve `for-of` gibi döngülerde higher-order fonksiyonları tercih edin.. eslint: [`no-iterator`](https://eslint.org/docs/rules/no-iterator.html) [`no-restricted-syntax`](https://eslint.org/docs/rules/no-restricted-syntax)

    > Neden? Değerleri return eden sade fonksiyonların kullanılması yan etkileri önler ve bu kullanım şekli en önemli kurallardandır.

    > Diziler üzerinde `map()` / `every()` / `filter()` / `find()` / `findIndex()` / `reduce()` / `some()` kullanın. /  `Object.keys()` / `Object.values()` / `Object.entries()` kullanarak nesneler üzerinde çalışabilir ve diziler üretebilirsiniz.

    ```javascript
    const numbers = [1, 2, 3, 4, 5];

    // kötü
    let sum = 0;
    for (let num of numbers) {
      sum += num;
    }
    sum === 15;

    // iyi
    let sum = 0;
    numbers.forEach((num) => {
      sum += num;
    });
    sum === 15;

    // çok iyi
    const sum = numbers.reduce((total, num) => total + num, 0);
    sum === 15;

    // kötü
    const increasedByOne = [];
    for (let i = 0; i < numbers.length; i++) {
      increasedByOne.push(numbers[i] + 1);
    }

    // iyi
    const increasedByOne = [];
    numbers.forEach((num) => {
      increasedByOne.push(num + 1);
    });

    // çok iyi
    const increasedByOne = numbers.map(num => num + 1);
    ```

  <a name="generators--nope"></a><a name="11.2"></a>
  - [11.2](#generators--nope) Şimdilik generator kullanmayın.

    > Neden? ES5'e doğru şekilde transpile edilemezler.

  <a name="generators--spacing"></a>
  - [11.3](#generators--spacing) Eğer generator kullanmanız gerekiyorsa, ya da [önerimizi](#generators--nope) görmezden gelmek istiyorsanız fonksiyon tanımınızda boşluk karakterini doğru şekilde kullandığınıza emin olun. eslint: [`generator-star-spacing`](https://eslint.org/docs/rules/generator-star-spacing)

    > Neden? `function` ve `*` kavramsal terimlerdir. `*`, `function` için ir niteleyici değildir., `function*`, `function`'ın aksine eşsiz bir construct'tır.

    ```javascript
    // kötü
    function * foo() {
      // ...
    }

    // kötü
    const bar = function * () {
      // ...
    };

    // kötü
    const baz = function *() {
      // ...
    };

    // kötü
    const quux = function*() {
      // ...
    };

    // kötü
    function*foo() {
      // ...
    }

    // kötü
    function *foo() {
      // ...
    }

    // çok kötü
    function
    *
    foo() {
      // ...
    }

    // çok kötü
    const wat = function
    *
    () {
      // ...
    };

    // iyi
    function* foo() {
      // ...
    }

    // iyi
    const foo = function* () {
      // ...
    };
    ```

**[⬆ başa dön](#table-of-contents)**

## Properties

  <a name="properties--dot"></a><a name="12.1"></a>
  - [12.1](#properties--dot) Property'lere erişirken nokta notasyonunu kullanın. eslint: [`dot-notation`](https://eslint.org/docs/rules/dot-notation.html) jscs: [`requireDotNotation`](http://jscs.info/rule/requireDotNotation)

    ```javascript
    const luke = {
      jedi: true,
      age: 28,
    };

    // kötü
    const isJedi = luke['jedi'];

    // iyi
    const isJedi = luke.jedi;
    ```

  <a name="properties--bracket"></a><a name="12.2"></a>
  - [12.2](#properties--bracket) Bir değişken ile property'lere erişirken köşeli parantez `[]` kullanın.

    ```javascript
    const luke = {
      jedi: true,
      age: 28,
    };

    function getProp(prop) {
      return luke[prop];
    }

    const isJedi = getProp('jedi');
    ```
  <a name="es2016-properties--exponentiation-operator"></a>
  - [12.3](#es2016-properties--exponentiation-operator) Üstalma hesaplamalarında üstalma `**` operaötürünü kullanın. eslint: [`no-restricted-properties`](https://eslint.org/docs/rules/no-restricted-properties).

    ```javascript
    // kötü
    const binary = Math.pow(2, 10);

    // iyi
    const binary = 2 ** 10;
    ```

**[⬆ başa dön](#table-of-contents)**

## Variables

  <a name="variables--const"></a><a name="13.1"></a>
  - [13.1](#variables--const) Değişken tanımlarında daima `const` ve `let` kullanın. Aksi halde global değişkenler oluşacaktır ve global namespace'i kirletmekten kaçınmalısınız. eslint: [`no-undef`](https://eslint.org/docs/rules/no-undef) [`prefer-const`](https://eslint.org/docs/rules/prefer-const)

    ```javascript
    // kötü
    superPower = new SuperPower();

    // iyi
    const superPower = new SuperPower();
    ```

  <a name="variables--one-const"></a><a name="13.2"></a>
  - [13.2](#variables--one-const) Her değişkenke bir adet `const` ya da `let` kullanın. eslint: [`one-var`](https://eslint.org/docs/rules/one-var.html) jscs: [`disallowMultipleVarDecl`](http://jscs.info/rule/disallowMultipleVarDecl)

    > Neden? Bu şekilde yeni değişkenler tanımlamak kolaydır ve hata yapma olasılığınız daha azdır. Ayrıca bu şekilde değişkenler tek tek debug edilebilir.

    ```javascript
    // kötü
    const items = getItems(),
        goSportsTeam = true,
        dragonball = 'z';

    // kötü
    // (compare to above, and try to spot the mistake)
    const items = getItems(),
        goSportsTeam = true;
        dragonball = 'z';

    // iyi
    const items = getItems();
    const goSportsTeam = true;
    const dragonball = 'z';
    ```

  <a name="variables--const-let-group"></a><a name="13.3"></a>
  - [13.3](#variables--const-let-group) Önce `const` sonra `let` değişkenlerini gruplayın.

    > Neden? Bu şekilde daha önce tanımlanmış bir değişkeni farklı bir değişkene atamak daha kolaydır.

    ```javascript
    // kötü
    let i, len, dragonball,
        items = getItems(),
        goSportsTeam = true;

    // kötü
    let i;
    const items = getItems();
    let dragonball;
    const goSportsTeam = true;
    let len;

    // iyi
    const goSportsTeam = true;
    const items = getItems();
    let dragonball;
    let i;
    let length;
    ```

  <a name="variables--define-where-used"></a><a name="13.4"></a>
  - [13.4](#variables--define-where-used) Değişkenleri kullanmanız gereken yerlerde tanımlayın ancak kabul edilebilir bir alanda oluşturun.

    > Neden? `let` ve `const` fonksiyon scope'da değil blok scope'da çalışır.

    ```javascript
    // kötü
    function checkName(hasName) {
      const name = getName();

      if (hasName === 'test') {
        return false;
      }

      if (name === 'test') {
        this.setName('');
        return false;
      }

      return name;
    }

    // iyi
    function checkName(hasName) {
      if (hasName === 'test') {
        return false;
      }

      const name = getName();

      if (name === 'test') {
        this.setName('');
        return false;
      }

      return name;
    }
    ```
  <a name="variables--no-chain-assignment"></a><a name="13.5"></a>
  - [13.5](#variables--no-chain-assignment) Değişken tanımlarında chain kullanmayın. eslint: [`no-multi-assign`](https://eslint.org/docs/rules/no-multi-assign)

    > Neden? Chain kullanımı global değişkenler üretir.

    ```javascript
    // kötü
    (function example() {
      // JavaScript interprets this as
      // let a = ( b = ( c = 1 ) );
      // The let keyword only applies to variable a; variables b and c become
      // global variables.
      let a = b = c = 1;
    }());

    console.log(a); // throws ReferenceError
    console.log(b); // 1
    console.log(c); // 1

    // iyi
    (function example() {
      let a = 1;
      let b = a;
      let c = a;
    }());

    console.log(a); // throws ReferenceError
    console.log(b); // throws ReferenceError
    console.log(c); // throws ReferenceError

    // the same applies for `const`
    ```

  <a name="variables--unary-increment-decrement"></a><a name="13.6"></a>
  - [13.6](#variables--unary-increment-decrement) Eksiltme ve artırma operatörlerini kullanmaktan kaçının. (++, --). eslint [`no-plusplus`](https://eslint.org/docs/rules/no-plusplus)

    > Neden? Eslint dökümanın göre bu kullanım şeklinde otomatik noktalı virgüller eklenmekte ve gizli hataların oluşmasına neden olabilmektedir. Ayrıca `num++` ya da `num ++` yerine `num += 1` şeklinde bir kullanım daha anlamlıdır. Ayrıca bu kullanım öncül artırma ve azaltmaya neden olabilecek hatalarında önüne geçer.

    ```javascript
    // kötü

    const array = [1, 2, 3];
    let num = 1;
    num++;
    --num;

    let sum = 0;
    let truthyCount = 0;
    for (let i = 0; i < array.length; i++) {
      let value = array[i];
      sum += value;
      if (value) {
        truthyCount++;
      }
    }

    // iyi

    const array = [1, 2, 3];
    let num = 1;
    num += 1;
    num -= 1;

    const sum = array.reduce((a, b) => a + b, 0);
    const truthyCount = array.filter(Boolean).length;
    ```

<a name="variables--linebreak"></a>
  - [13.7](#variables--linebreak) Tanımlama işlemlerinde `=`'den sonra satır atlamayın. Eğer tanım [`max-len`](https://eslint.org/docs/rules/max-len.html) hatasına neden oluyorsa değeri paranteze alın. eslint [`operator-linebreak`](https://eslint.org/docs/rules/operator-linebreak.html).

    > Neden? Satır atlamak `=`'de hataya neden olabilir.

    ```javascript
    // kötü
    const foo =
      superLongLongLongLongLongLongLongLongFunctionName();

    // kötü
    const foo
      = 'superLongLongLongLongLongLongLongLongString';

    // iyi
    const foo = (
      superLongLongLongLongLongLongLongLongFunctionName()
    );

    // iyi
    const foo = 'superLongLongLongLongLongLongLongLongString';
    ```

**[⬆ back to top](#table-of-contents)**

## Hoisting

  <a name="hoisting--about"></a><a name="14.1"></a>
  - [14.1](#hoisting--about) `var` tanımlamaları en yakın fonksiyon scope'unun üstüne taşınır ancak atanan değerleri taşınmaz. `const` ve `let` ise [Temporal Dead Zones (TDZ)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_Dead_Zone_and_errors_with_let) adlı yeni bir konsept ile çalışır. [typeof kullanımı artık sağlıklı değildir](http://es-discourse.com/t/why-typeof-is-no-longer-safe/15) .

    ```javascript
    // we know this wouldn’t work (assuming there
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

    // the interpreter is hoisting the variable
    // declaration to the top of the scope,
    // which means our example could be rewritten as:
    function example() {
      let declaredButNotAssigned;
      console.log(declaredButNotAssigned); // => undefined
      declaredButNotAssigned = true;
    }

    // using const and let
    function example() {
      console.log(declaredButNotAssigned); // => throws a ReferenceError
      console.log(typeof declaredButNotAssigned); // => throws a ReferenceError
      const declaredButNotAssigned = true;
    }
    ```

  <a name="hoisting--anon-expressions"></a><a name="14.2"></a>
  - [14.2](#hoisting--anon-expressions) İsimsiz fonksiyon ifadelerinde isim yukarı taşınsada içerik taşınmaz.

    ```javascript
    function example() {
      console.log(anonymous); // => undefined

      anonymous(); // => TypeError anonymous is not a function

      var anonymous = function () {
        console.log('anonymous function expression');
      };
    }
    ```

  <a name="hoisting--named-expresions"></a><a name="hoisting--named-expressions"></a><a name="14.3"></a>
  - [14.3](#hoisting--named-expressions) Atanmış fonksiyon ifadelerinde değişken adı yukarı taşınsada, içerik ya da fonksiyon adı taşınmaz.

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
      };
    }
    ```

  <a name="hoisting--declarations"></a><a name="14.4"></a>
  - [14.4](#hoisting--declarations) Fonksiyon tanımlarında içerik ve isim yukarı taşınır.

    ```javascript
    function example() {
      superPower(); // => Flying

      function superPower() {
        console.log('Flying');
      }
    }
    ```

  - Daha fazla bilgi için [Ben Cherry](http://www.adequatelygood.com/)'nin kaleme aldığı [JavaScript Scoping & Hoisting](http://www.adequatelygood.com/2010/2/JavaScript-Scoping-and-Hoisting/) yazısı okunabilir.

**[⬆ başa dön](#table-of-contents)**

## Comparison Operators & Equality

  <a name="comparison--eqeqeq"></a><a name="15.1"></a>
  - [15.1](#comparison--eqeqeq) `==` ve `!=` yerine `===` ve `!==` kullanın. eslint: [`eqeqeq`](https://eslint.org/docs/rules/eqeqeq.html)

  <a name="comparison--if"></a><a name="15.2"></a>
  - [15.2](#comparison--if) `if` gibi koşullu ifadelerinde `ToBoolean` metodu aşağıdaki kurallar ile uygulanır:

    - **Objects**, **true** ile değerlendirilir.
    - **Undefined**, **false** ile değerlendirilir.
    - **Null**, **false** ile değerlendirilir.
    - **Booleans**, **the value of the boolean** ile değerlendirilir.
    - **Numbers**, **+0, -0, or NaN** için **false**, aksi halde **true** ile değerlendirilir.
    - **Strings**, boş `''` ise **false**, aksi halde **true** ile değerlendirilir.

    ```javascript
    if ([0] && []) {
      // true
      // an array (even an empty one) is an object, objects will evaluate to true
    }
    ```

  <a name="comparison--shortcuts"></a><a name="15.3"></a>
  - [15.3](#comparison--shortcuts) Boolean için kısayolları kullanabilirsiniz ancak strings ve number türlerinde kullanmamalısınız.

    ```javascript
    // kötü
    if (isValid === true) {
      // ...
    }

    // iyi
    if (isValid) {
      // ...
    }

    // kötü
    if (name) {
      // ...
    }

    // iyi
    if (name !== '') {
      // ...
    }

    // kötü
    if (collection.length) {
      // ...
    }

    // iyi
    if (collection.length > 0) {
      // ...
    }
    ```

  <a name="comparison--moreinfo"></a><a name="15.4"></a>
  - [15.4](#comparison--moreinfo) Daha fazla bilgi için Angus Croll tarafından kaleme alınan [Truth Equality and JavaScript](https://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/#more-2108) adlı yazısı inceleyin.

  <a name="comparison--switch-blocks"></a><a name="15.5"></a>
  - [15.5](#comparison--switch-blocks) Lexical tanımlar barındıran (`let`, `const`, `function`, ve `class` gibi) `case` ve `default` bloklarında süslü parantez kullanın. eslint: [`no-case-declarations`](https://eslint.org/docs/rules/no-case-declarations.html)

    > Neden? Lexical tanımlamalar tüm `switch` bloğunda görünür durumdadır ve herhangi bir `case` çalıştığında uygulanır. Bu durum birden fazla `case` bulunması halinde aynı tanımlamanın çalışmasına neden olur.

    ```javascript
    // kötü
    switch (foo) {
      case 1:
        let x = 1;
        break;
      case 2:
        const y = 2;
        break;
      case 3:
        function f() {
          // ...
        }
        break;
      default:
        class C {}
    }

    // iyi
    switch (foo) {
      case 1: {
        let x = 1;
        break;
      }
      case 2: {
        const y = 2;
        break;
      }
      case 3: {
        function f() {
          // ...
        }
        break;
      }
      case 4:
        bar();
        break;
      default: {
        class C {}
      }
    }
    ```

  <a name="comparison--nested-ternaries"></a><a name="15.6"></a>
  - [15.6](#comparison--nested-ternaries) Ternary operatorler tek satırda yazılmalıdır ve nested kullanımdan kaçınılmalıdır. eslint: [`no-nested-ternary`](https://eslint.org/docs/rules/no-nested-ternary.html)

    ```javascript
    // kötü
    const foo = maybe1 > maybe2
      ? "bar"
      : value1 > value2 ? "baz" : null;

    // split into 2 separated ternary expressions
    const maybeNull = value1 > value2 ? 'baz' : null;

    // iyi
    const foo = maybe1 > maybe2
      ? 'bar'
      : maybeNull;

    // çok iyi
    const foo = maybe1 > maybe2 ? 'bar' : maybeNull;
    ```

  <a name="comparison--unneeded-ternary"></a><a name="15.7"></a>
  - [15.7](#comparison--unneeded-ternary) Gerektis ternary ifadelerden kaçınılmalıdır. eslint: [`no-unneeded-ternary`](https://eslint.org/docs/rules/no-unneeded-ternary.html)

    ```javascript
    // kötü
    const foo = a ? a : b;
    const bar = c ? true : false;
    const baz = c ? false : true;

    // iyi
    const foo = a || b;
    const bar = !!c;
    const baz = !c;
    ```

  <a name="comparison--no-mixed-operators"></a>
  - [15.8](#comparison--no-mixed-operators) Operatörlerin karışması durumunda parantez kullanın. Standard aritmatik operatörlerde (`+`, `-`, `*`, & `/`) öncelik bilindiği için kullanılmasına gerek yoktur. eslint: [`no-mixed-operators`](https://eslint.org/docs/rules/no-mixed-operators.html)

    > Neden? Bu kullanım okunabilirliği artırır ve ifadeyi daha anlaşılır kılar.

    ```javascript
    // kötü
    const foo = a && b < 0 || c > 0 || d + 1 === 0;

    // kötü
    const bar = a ** b - 5 % d;

    // kötü
    // one may be confused into thinking (a || b) && c
    if (a || b && c) {
      return d;
    }

    // iyi
    const foo = (a && b < 0) || c > 0 || (d + 1 === 0);

    // iyi
    const bar = (a ** b) - (5 % d);

    // iyi
    if (a || (b && c)) {
      return d;
    }

    // iyi
    const bar = a + b / c * d;
    ```

**[⬆ başa dön](#table-of-contents)**

## Blocks

  <a name="blocks--braces"></a><a name="16.1"></a>
  - [16.1](#blocks--braces) Çok satırlı blokların tamamında süslü parantez kullanın. eslint: [`nonblock-statement-body-position`](https://eslint.org/docs/rules/nonblock-statement-body-position)

    ```javascript
    // kötü
    if (test)
      return false;

    // iyi
    if (test) return false;

    // iyi
    if (test) {
      return false;
    }

    // kötü
    function foo() { return false; }

    // iyi
    function bar() {
      return false;
    }
    ```

  <a name="blocks--cuddled-elses"></a><a name="16.2"></a>
  - [16.2](#blocks--cuddled-elses) `if` ve `else` içeren çok satırlı bloklarda, `else`', `if` bloğunun kapandığı satırda başlatın. eslint: [`brace-style`](https://eslint.org/docs/rules/brace-style.html) jscs:  [`disallowNewlineBeforeBlockStatements`](http://jscs.info/rule/disallowNewlineBeforeBlockStatements)

    ```javascript
    // kötü
    if (test) {
      thing1();
      thing2();
    }
    else {
      thing3();
    }

    // iyi
    if (test) {
      thing1();
      thing2();
    } else {
      thing3();
    }
    ```

  <a name="blocks--no-else-return"></a><a name="16.3"></a>
  - [16.3](#blocks--no-else-return) Eğer `if` bloğu daima bir `return` barındırıyorsa, `else` bloğunu kullanmayın. `return` barındıran `if` bloğunu takip eden, `return` barındıran `else if` blokları birden fazla `if` bloğuna dönüştürülebilir. eslint: [`no-else-return`](https://eslint.org/docs/rules/no-else-return)

    ```javascript
    // kötü
    function foo() {
      if (x) {
        return x;
      } else {
        return y;
      }
    }

    // kötü
    function cats() {
      if (x) {
        return x;
      } else if (y) {
        return y;
      }
    }

    // kötü
    function dogs() {
      if (x) {
        return x;
      } else {
        if (y) {
          return y;
        }
      }
    }

    // iyi
    function foo() {
      if (x) {
        return x;
      }

      return y;
    }

    // iyi
    function cats() {
      if (x) {
        return x;
      }

      if (y) {
        return y;
      }
    }

    //iyi
    function dogs(x) {
      if (x) {
        if (z) {
          return y;
        }
      } else {
        return z;
      }
    }
    ```

**[⬆ başa dön](#table-of-contents)**

## Control Statements

  <a name="control-statements"></a>
  - [17.1](#control-statements) Kontrol ifadelerinizin (`if`, `while` etc.) uzun olması ya da maksimum karakter sayısını aşması durumunda her ifade grubunu ayrı satıra yazın. Mantıksal operatörler satır başında yer almalıdır.

    > Neden? Karmaşık yapıyı sadeleştirerek okunabilirliği artıracaktır. Ayrıca metod chaining'e benzer bir kalıptır.

    ```javascript
    // kötü
    if ((foo === 123 || bar === 'abc') && doesItLookGoodWhenItBecomesThatLong() && isThisReallyHappening()) {
      thing1();
    }

    // kötü
    if (foo === 123 &&
      bar === 'abc') {
      thing1();
    }

    // kötü
    if (foo === 123
      && bar === 'abc') {
      thing1();
    }

    // kötü
    if (
      foo === 123 &&
      bar === 'abc'
    ) {
      thing1();
    }

    // iyi
    if (
      foo === 123
      && bar === 'abc'
    ) {
      thing1();
    }

    // iyi
    if (
      (foo === 123 || bar === 'abc')
      && doesItLookGoodWhenItBecomesThatLong()
      && isThisReallyHappening()
    ) {
      thing1();
    }

    // iyi
    if (foo === 123 && bar === 'abc') {
      thing1();
    }
    ```

  <a name="control-statement--value-selection"></a>
  - [17.2](#control-statements--value-selection) Selection operatörülerini kontrol ifadeleri içerisinde kullanmayın.

    ```javascript
    // kötü
    !isRunning && startRunning();

    // iyi
    if (!isRunning) {
      startRunning();
    }
    ```

**[⬆ başa dön](#table-of-contents)**

## Comments

  <a name="comments--multiline"></a><a name="17.1"></a>
  - [18.1](#comments--multiline) Çok satırlı yorumlarda `/** ... */` kullanın.

    ```javascript
    // kötü
    // make() returns a new element
    // based on the passed in tag name
    //
    // @param {String} tag
    // @return {Element} element
    function make(tag) {

      // ...

      return element;
    }

    // iyi
    /**
     * make() returns a new element
     * based on the passed-in tag name
     */
    function make(tag) {

      // ...

      return element;
    }
    ```

  <a name="comments--singleline"></a><a name="17.2"></a>
  - [18.2](#comments--singleline) Tek satırlı yorumlarda `//` kullanın. Yorumu, yorum yapılan betiğin üst satırına gelecek şekilde yazın. Eğer yorum bloğun en üstünde yer almıyorsa daima yorumdan önce boş bir satır bırakın.
  
    ```javascript
    // kötü
    const active = true;  // is current tab

    // iyi
    // is current tab
    const active = true;

    // kötü
    function getType() {
      console.log('fetching type...');
      // set the default type to 'no type'
      const type = this.type || 'no type';

      return type;
    }

    // iyi
    function getType() {
      console.log('fetching type...');

      // set the default type to 'no type'
      const type = this.type || 'no type';

      return type;
    }

    // iyi
    function getType() {
      // set the default type to 'no type'
      const type = this.type || 'no type';

      return type;
    }
    ```

  <a name="comments--spaces"></a>
  - [18.3](#comments--spaces) Yorumlardan önce okunabilirliği artırmak için bir boşluk karakteri kullanın. eslint: [`spaced-comment`](https://eslint.org/docs/rules/spaced-comment)

    ```javascript
    // kötü
    //is current tab
    const active = true;

    // iyi
    // is current tab
    const active = true;

    // kötü
    /**
     *make() returns a new element
     *based on the passed-in tag name
     */
    function make(tag) {

      // ...

      return element;
    }

    // iyi
    /**
     * make() returns a new element
     * based on the passed-in tag name
     */
    function make(tag) {

      // ...

      return element;
    }
    ```

  <a name="comments--actionitems"></a><a name="17.3"></a>
  - [18.4](#comments--actionitems) `FIXME` veya `TODO` kullanarak, geliştiricilere sorun hakkında bilgi verebilir ya da geliştiricilerin ilgili bölümde yapması gerekenler konusunda notlar bırakabilirsiniz. Bu kullanım standart yorumların aksine bir görevi işaret eder. Görevler; `FIXME: -- bu sorunun çözülmesi gerekiyor` veya `TODO: -- bu işlevin implemente edilmesi gerekiyor`.

  <a name="comments--fixme"></a><a name="17.4"></a>
  - [18.5](#comments--fixme) Sorunlara dikkat çekmek için `// FIXME:` kullanın.

    ```javascript
    class Calculator extends Abacus {
      constructor() {
        super();

        // FIXME: shouldn’t use a global here
        total = 0;
      }
    }
    ```

  <a name="comments--todo"></a><a name="17.5"></a>
  - [18.6](#comments--todo) Sorunlara çözüm önermek için `// TODO:` kullanın.

    ```javascript
    class Calculator extends Abacus {
      constructor() {
        super();

        // TODO: total should be configurable by an options param
        this.total = 0;
      }
    }
    ```

**[⬆ başa dön](#table-of-contents)**

## Whitespace

  <a name="whitespace--spaces"></a><a name="18.1"></a>
  - [19.1](#whitespace--spaces) Soft tab'ı(boşluk karakteri) 2 boşluğa ayarlayın. eslint: [`indent`](https://eslint.org/docs/rules/indent.html) jscs: [`validateIndentation`](http://jscs.info/rule/validateIndentation)

    ```javascript
    // kötü
    function foo() {
    ∙∙∙∙let name;
    }

    // kötü
    function bar() {
    ∙let name;
    }

    // iyi
    function baz() {
    ∙∙let name;
    }
    ```

  <a name="whitespace--before-blocks"></a><a name="18.2"></a>
  - [19.2](#whitespace--before-blocks) Bloğu kapsayan süslü parantez öncesinde bir adet boşluk karakteri kullanın. eslint: [`space-before-blocks`](https://eslint.org/docs/rules/space-before-blocks.html) jscs: [`requireSpaceBeforeBlockStatements`](http://jscs.info/rule/requireSpaceBeforeBlockStatements)

    ```javascript
    // kötü
    function test(){
      console.log('test');
    }

    // iyi
    function test() {
      console.log('test');
    }

    // kötü
    dog.set('attr',{
      age: '1 year',
      breed: 'Bernese Mountain Dog',
    });

    // iyi
    dog.set('attr', {
      age: '1 year',
      breed: 'Bernese Mountain Dog',
    });
    ```

  <a name="whitespace--around-keywords"></a><a name="18.3"></a>
  - [19.3](#whitespace--around-keywords) Kontrol ifadelerindeki (`if`, `while` vb.) parantez öncesinde bir adet boşluk karakteri kullanın. Fonksiyon çağrıları ve fonksiyon tanımlarındaki parametreler arasında ya da adlarda boşluk kullanmayın. eslint: [`keyword-spacing`](https://eslint.org/docs/rules/keyword-spacing.html) jscs: [`requireSpaceAfterKeywords`](http://jscs.info/rule/requireSpaceAfterKeywords)

    ```javascript
    // kötü
    if(isJedi) {
      fight ();
    }

    // iyi
    if (isJedi) {
      fight();
    }

    // kötü
    function fight () {
      console.log ('Swooosh!');
    }

    // iyi
    function fight() {
      console.log('Swooosh!');
    }
    ```

  <a name="whitespace--infix-ops"></a><a name="18.4"></a>
  - [19.4](#whitespace--infix-ops) Operatörleri boşluk karakteri ile ayırın. eslint: [`space-infix-ops`](https://eslint.org/docs/rules/space-infix-ops.html) jscs: [`requireSpaceBeforeBinaryOperators`](http://jscs.info/rule/requireSpaceBeforeBinaryOperators), [`requireSpaceAfterBinaryOperators`](http://jscs.info/rule/requireSpaceAfterBinaryOperators)

    ```javascript
    // kötü
    const x=y+5;

    // iyi
    const x = y + 5;
    ```

  <a name="whitespace--newline-at-end"></a><a name="18.5"></a>
  - [19.5](#whitespace--newline-at-end) Dosya sonlarında yeni satır karakterini kullanın. eslint: [`eol-last`](https://github.com/eslint/eslint/blob/master/docs/rules/eol-last.md)

    ```javascript
    // kötü
    import { es6 } from './AirbnbStyleGuide';
      // ...
    export default es6;
    ```

    ```javascript
    // kötü
    import { es6 } from './AirbnbStyleGuide';
      // ...
    export default es6;↵
    ↵
    ```

    ```javascript
    // iyi
    import { es6 } from './AirbnbStyleGuide';
      // ...
    export default es6;↵
    ```

  <a name="whitespace--chains"></a><a name="18.6"></a>
  - [19.6](#whitespace--chains) Uzun metod chain'lerinde (2 den fazla) girintiler oluşturun. Nokta ile başlayan satırlar satırın bir ifade değil bir metod çağrısı olduğunu belirtecektir. eslint: [`newline-per-chained-call`](https://eslint.org/docs/rules/newline-per-chained-call) [`no-whitespace-before-property`](https://eslint.org/docs/rules/no-whitespace-before-property)

    ```javascript
    // kötü
    $('#items').find('.selected').highlight().end().find('.open').updateCount();

    // kötü
    $('#items').
      find('.selected').
        highlight().
        end().
      find('.open').
        updateCount();

    // iyi
    $('#items')
      .find('.selected')
        .highlight()
        .end()
      .find('.open')
        .updateCount();

    // kötü
    const leds = stage.selectAll('.led').data(data).enter().append('svg:svg').classed('led', true)
        .attr('width', (radius + margin) * 2).append('svg:g')
        .attr('transform', `translate(${radius + margin},${radius + margin})`)
        .call(tron.led);

    // iyi
    const leds = stage.selectAll('.led')
        .data(data)
      .enter().append('svg:svg')
        .classed('led', true)
        .attr('width', (radius + margin) * 2)
      .append('svg:g')
        .attr('transform', `translate(${radius + margin},${radius + margin})`)
        .call(tron.led);

    // iyi
    const leds = stage.selectAll('.led').data(data);
    ```

  <a name="whitespace--after-blocks"></a><a name="18.7"></a>
  - [19.7](#whitespace--after-blocks) Bloklardan sonra yeni ifadeye geçmeden önce bir adet boş satır bırakın. jscs: [`requirePaddingNewLinesAfterBlocks`](http://jscs.info/rule/requirePaddingNewLinesAfterBlocks)

    ```javascript
    // kötü
    if (foo) {
      return bar;
    }
    return baz;

    // iyi
    if (foo) {
      return bar;
    }

    return baz;

    // kötü
    const obj = {
      foo() {
      },
      bar() {
      },
    };
    return obj;

    // iyi
    const obj = {
      foo() {
      },

      bar() {
      },
    };

    return obj;

    // kötü
    const arr = [
      function foo() {
      },
      function bar() {
      },
    ];
    return arr;

    // iyi
    const arr = [
      function foo() {
      },

      function bar() {
      },
    ];

    return arr;
    ```

  <a name="whitespace--padded-blocks"></a><a name="18.8"></a>
  - [19.8](#whitespace--padded-blocks) Bloklarda boş satır aralıkları bırakmayın. eslint: [`padded-blocks`](https://eslint.org/docs/rules/padded-blocks.html) jscs:  [`disallowPaddingNewlinesInBlocks`](http://jscs.info/rule/disallowPaddingNewlinesInBlocks)

    ```javascript
    // kötü
    function bar() {

      console.log(foo);

    }

    // kötü
    if (baz) {

      console.log(qux);
    } else {
      console.log(foo);

    }

    // kötü
    class Foo {

      constructor(bar) {
        this.bar = bar;
      }
    }

    // iyi
    function bar() {
      console.log(foo);
    }

    // iyi
    if (baz) {
      console.log(qux);
    } else {
      console.log(foo);
    }
    ```

  <a name="whitespace--in-parens"></a><a name="18.9"></a>
  - [19.9](#whitespace--in-parens) Parantez içlerinde boşluk kullanmayın. eslint: [`space-in-parens`](https://eslint.org/docs/rules/space-in-parens.html) jscs: [`disallowSpacesInsideParentheses`](http://jscs.info/rule/disallowSpacesInsideParentheses)

    ```javascript
    // kötü
    function bar( foo ) {
      return foo;
    }

    // iyi
    function bar(foo) {
      return foo;
    }

    // kötü
    if ( foo ) {
      console.log(foo);
    }

    // iyi
    if (foo) {
      console.log(foo);
    }
    ```

  <a name="whitespace--in-brackets"></a><a name="18.10"></a>
  - [19.10](#whitespace--in-brackets) Köşeli parantez içinde boşluk kullanmayın. eslint: [`array-bracket-spacing`](https://eslint.org/docs/rules/array-bracket-spacing.html) jscs: [`disallowSpacesInsideArrayBrackets`](http://jscs.info/rule/disallowSpacesInsideArrayBrackets)

    ```javascript
    // kötü
    const foo = [ 1, 2, 3 ];
    console.log(foo[ 0 ]);

    // iyi
    const foo = [1, 2, 3];
    console.log(foo[0]);
    ```

  <a name="whitespace--in-braces"></a><a name="18.11"></a>
  - [19.11](#whitespace--in-braces) Süslü parantez içinde boşluk kullanın. eslint: [`object-curly-spacing`](https://eslint.org/docs/rules/object-curly-spacing.html) jscs: [`requireSpacesInsideObjectBrackets`](http://jscs.info/rule/requireSpacesInsideObjectBrackets)

    ```javascript
    // kötü
    const foo = {clark: 'kent'};

    // iyi
    const foo = { clark: 'kent' };
    ```

  <a name="whitespace--max-len"></a><a name="18.12"></a>
  - [19.12](#whitespace--max-len) 100 karakterden uzun satırlar yazmayın. (whitespace dahil). Not: Uzun stringler [yukarıda](#strings--line-length) belirtildiği gibi bu kuraldan muaftır. eslint: [`max-len`](https://eslint.org/docs/rules/max-len.html) jscs: [`maximumLineLength`](http://jscs.info/rule/maximumLineLength)

    > Neden? Geliştirilebilirliği ve okunabilirliği artırmaktadır.

    ```javascript
    // kötü
    const foo = jsonData && jsonData.foo && jsonData.foo.bar && jsonData.foo.bar.baz && jsonData.foo.bar.baz.quux && jsonData.foo.bar.baz.quux.xyzzy;

    // kötü
    $.ajax({ method: 'POST', url: 'https://airbnb.com/', data: { name: 'John' } }).done(() => console.log('Congratulations!')).fail(() => console.log('You have failed this city.'));

    // iyi
    const foo = jsonData
      && jsonData.foo
      && jsonData.foo.bar
      && jsonData.foo.bar.baz
      && jsonData.foo.bar.baz.quux
      && jsonData.foo.bar.baz.quux.xyzzy;

    // iyi
    $.ajax({
      method: 'POST',
      url: 'https://airbnb.com/',
      data: { name: 'John' },
    })
      .done(() => console.log('Congratulations!'))
      .fail(() => console.log('You have failed this city.'));
    ```

**[⬆ başa dön](#table-of-contents)**

## Commas

  <a name="commas--leading-trailing"></a><a name="19.1"></a>
  - [20.1](#commas--leading-trailing) Leading commas: **Nope.** eslint: [`comma-style`](https://eslint.org/docs/rules/comma-style.html) jscs: [`requireCommaBeforeLineBreak`](http://jscs.info/rule/requireCommaBeforeLineBreak)

    ```javascript
    // bad
    const story = [
        once
      , upon
      , aTime
    ];

    // good
    const story = [
      once,
      upon,
      aTime,
    ];

    // bad
    const hero = {
        firstName: 'Ada'
      , lastName: 'Lovelace'
      , birthYear: 1815
      , superPower: 'computers'
    };

    // good
    const hero = {
      firstName: 'Ada',
      lastName: 'Lovelace',
      birthYear: 1815,
      superPower: 'computers',
    };
    ```

  <a name="commas--dangling"></a><a name="19.2"></a>
  - [20.2](#commas--dangling) Additional trailing comma: **Yup.** eslint: [`comma-dangle`](https://eslint.org/docs/rules/comma-dangle.html) jscs: [`requireTrailingComma`](http://jscs.info/rule/requireTrailingComma)

    > Why? This leads to cleaner git diffs. Also, transpilers like Babel will remove the additional trailing comma in the transpiled code which means you don’t have to worry about the [trailing comma problem](https://github.com/airbnb/javascript/blob/es5-deprecated/es5/README.md#commas) in legacy browsers.

    ```diff
    // bad - git diff without trailing comma
    const hero = {
         firstName: 'Florence',
    -    lastName: 'Nightingale'
    +    lastName: 'Nightingale',
    +    inventorOf: ['coxcomb chart', 'modern nursing']
    };

    // good - git diff with trailing comma
    const hero = {
         firstName: 'Florence',
         lastName: 'Nightingale',
    +    inventorOf: ['coxcomb chart', 'modern nursing'],
    };
    ```

    ```javascript
    // bad
    const hero = {
      firstName: 'Dana',
      lastName: 'Scully'
    };

    const heroes = [
      'Batman',
      'Superman'
    ];

    // good
    const hero = {
      firstName: 'Dana',
      lastName: 'Scully',
    };

    const heroes = [
      'Batman',
      'Superman',
    ];

    // bad
    function createHero(
      firstName,
      lastName,
      inventorOf
    ) {
      // does nothing
    }

    // good
    function createHero(
      firstName,
      lastName,
      inventorOf,
    ) {
      // does nothing
    }

    // good (note that a comma must not appear after a "rest" element)
    function createHero(
      firstName,
      lastName,
      inventorOf,
      ...heroArgs
    ) {
      // does nothing
    }

    // bad
    createHero(
      firstName,
      lastName,
      inventorOf
    );

    // good
    createHero(
      firstName,
      lastName,
      inventorOf,
    );

    // good (note that a comma must not appear after a "rest" element)
    createHero(
      firstName,
      lastName,
      inventorOf,
      ...heroArgs
    );
    ```

**[⬆ back to top](#table-of-contents)**

## Semicolons

  <a name="semicolons--required"></a><a name="20.1"></a>
  - [21.1](#semicolons--required) **Yup.** eslint: [`semi`](https://eslint.org/docs/rules/semi.html) jscs: [`requireSemicolons`](http://jscs.info/rule/requireSemicolons)

    > Why? When JavaScript encounters a line break without a semicolon, it uses a set of rules called [Automatic Semicolon Insertion](https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion) to determine whether or not it should regard that line break as the end of a statement, and (as the name implies) place a semicolon into your code before the line break if it thinks so. ASI contains a few eccentric behaviors, though, and your code will break if JavaScript misinterprets your line break. These rules will become more complicated as new features become a part of JavaScript. Explicitly terminating your statements and configuring your linter to catch missing semicolons will help prevent you from encountering issues.

    ```javascript
    // bad - raises exception
    const luke = {}
    const leia = {}
    [luke, leia].forEach(jedi => jedi.father = 'vader')

    // bad - raises exception
    const reaction = "No! That's impossible!"
    (async function meanwhileOnTheFalcon() {
      // handle `leia`, `lando`, `chewie`, `r2`, `c3p0`
      // ...
    }())

    // bad - returns `undefined` instead of the value on the next line - always happens when `return` is on a line by itself because of ASI!
    function foo() {
      return
        'search your feelings, you know it to be foo'
    }

    // good
    const luke = {};
    const leia = {};
    [luke, leia].forEach((jedi) => {
      jedi.father = 'vader';
    });

    // good
    const reaction = "No! That's impossible!";
    (async function meanwhileOnTheFalcon() {
      // handle `leia`, `lando`, `chewie`, `r2`, `c3p0`
      // ...
    }());

    // good
    function foo() {
      return 'search your feelings, you know it to be foo';
    }
    ```

    [Read more](https://stackoverflow.com/questions/7365172/semicolon-before-self-invoking-function/7365214#7365214).

**[⬆ back to top](#table-of-contents)**

## Type Casting & Coercion

  <a name="coercion--explicit"></a><a name="21.1"></a>
  - [22.1](#coercion--explicit) Perform type coercion at the beginning of the statement.

  <a name="coercion--strings"></a><a name="21.2"></a>
  - [22.2](#coercion--strings)  Strings: eslint: [`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers)

    ```javascript
    // => this.reviewScore = 9;

    // bad
    const totalScore = new String(this.reviewScore); // typeof totalScore is "object" not "string"

    // bad
    const totalScore = this.reviewScore + ''; // invokes this.reviewScore.valueOf()

    // bad
    const totalScore = this.reviewScore.toString(); // isn’t guaranteed to return a string

    // good
    const totalScore = String(this.reviewScore);
    ```

  <a name="coercion--numbers"></a><a name="21.3"></a>
  - [22.3](#coercion--numbers) Numbers: Use `Number` for type casting and `parseInt` always with a radix for parsing strings. eslint: [`radix`](https://eslint.org/docs/rules/radix) [`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers)

    ```javascript
    const inputValue = '4';

    // bad
    const val = new Number(inputValue);

    // bad
    const val = +inputValue;

    // bad
    const val = inputValue >> 0;

    // bad
    const val = parseInt(inputValue);

    // good
    const val = Number(inputValue);

    // good
    const val = parseInt(inputValue, 10);
    ```

  <a name="coercion--comment-deviations"></a><a name="21.4"></a>
  - [22.4](#coercion--comment-deviations) If for whatever reason you are doing something wild and `parseInt` is your bottleneck and need to use Bitshift for [performance reasons](https://jsperf.com/coercion-vs-casting/3), leave a comment explaining why and what you're doing.

    ```javascript
    // good
    /**
     * parseInt was the reason my code was slow.
     * Bitshifting the String to coerce it to a
     * Number made it a lot faster.
     */
    const val = inputValue >> 0;
    ```

  <a name="coercion--bitwise"></a><a name="21.5"></a>
  - [22.5](#coercion--bitwise) **Note:** Be careful when using bitshift operations. Numbers are represented as [64-bit values](https://es5.github.io/#x4.3.19), but bitshift operations always return a 32-bit integer ([source](https://es5.github.io/#x11.7)). Bitshift can lead to unexpected behavior for integer values larger than 32 bits. [Discussion](https://github.com/airbnb/javascript/issues/109). Largest signed 32-bit Int is 2,147,483,647:

    ```javascript
    2147483647 >> 0; // => 2147483647
    2147483648 >> 0; // => -2147483648
    2147483649 >> 0; // => -2147483647
    ```

  <a name="coercion--booleans"></a><a name="21.6"></a>
  - [22.6](#coercion--booleans) Booleans: eslint: [`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers)

    ```javascript
    const age = 0;

    // bad
    const hasAge = new Boolean(age);

    // good
    const hasAge = Boolean(age);

    // best
    const hasAge = !!age;
    ```

**[⬆ back to top](#table-of-contents)**

## Naming Conventions

  <a name="naming--descriptive"></a><a name="22.1"></a>
  - [23.1](#naming--descriptive) Avoid single letter names. Be descriptive with your naming. eslint: [`id-length`](https://eslint.org/docs/rules/id-length)

    ```javascript
    // bad
    function q() {
      // ...
    }

    // good
    function query() {
      // ...
    }
    ```

  <a name="naming--camelCase"></a><a name="22.2"></a>
  - [23.2](#naming--camelCase) Use camelCase when naming objects, functions, and instances. eslint: [`camelcase`](https://eslint.org/docs/rules/camelcase.html) jscs: [`requireCamelCaseOrUpperCaseIdentifiers`](http://jscs.info/rule/requireCamelCaseOrUpperCaseIdentifiers)

    ```javascript
    // bad
    const OBJEcttsssss = {};
    const this_is_my_object = {};
    function c() {}

    // good
    const thisIsMyObject = {};
    function thisIsMyFunction() {}
    ```

  <a name="naming--PascalCase"></a><a name="22.3"></a>
  - [23.3](#naming--PascalCase) Use PascalCase only when naming constructors or classes. eslint: [`new-cap`](https://eslint.org/docs/rules/new-cap.html) jscs: [`requireCapitalizedConstructors`](http://jscs.info/rule/requireCapitalizedConstructors)

    ```javascript
    // bad
    function user(options) {
      this.name = options.name;
    }

    const bad = new user({
      name: 'nope',
    });

    // good
    class User {
      constructor(options) {
        this.name = options.name;
      }
    }

    const good = new User({
      name: 'yup',
    });
    ```

  <a name="naming--leading-underscore"></a><a name="22.4"></a>
  - [23.4](#naming--leading-underscore) Do not use trailing or leading underscores. eslint: [`no-underscore-dangle`](https://eslint.org/docs/rules/no-underscore-dangle.html) jscs: [`disallowDanglingUnderscores`](http://jscs.info/rule/disallowDanglingUnderscores)

    > Why? JavaScript does not have the concept of privacy in terms of properties or methods. Although a leading underscore is a common convention to mean “private”, in fact, these properties are fully public, and as such, are part of your public API contract. This convention might lead developers to wrongly think that a change won’t count as breaking, or that tests aren’t needed. tl;dr: if you want something to be “private”, it must not be observably present.

    ```javascript
    // bad
    this.__firstName__ = 'Panda';
    this.firstName_ = 'Panda';
    this._firstName = 'Panda';

    // good
    this.firstName = 'Panda';

    // good, in environments where WeakMaps are available
    // see https://kangax.github.io/compat-table/es6/#test-WeakMap
    const firstNames = new WeakMap();
    firstNames.set(this, 'Panda');
    ```

  <a name="naming--self-this"></a><a name="22.5"></a>
  - [23.5](#naming--self-this) Don’t save references to `this`. Use arrow functions or [Function#bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind). jscs: [`disallowNodeTypes`](http://jscs.info/rule/disallowNodeTypes)

    ```javascript
    // bad
    function foo() {
      const self = this;
      return function () {
        console.log(self);
      };
    }

    // bad
    function foo() {
      const that = this;
      return function () {
        console.log(that);
      };
    }

    // good
    function foo() {
      return () => {
        console.log(this);
      };
    }
    ```

  <a name="naming--filename-matches-export"></a><a name="22.6"></a>
  - [23.6](#naming--filename-matches-export) A base filename should exactly match the name of its default export.

    ```javascript
    // file 1 contents
    class CheckBox {
      // ...
    }
    export default CheckBox;

    // file 2 contents
    export default function fortyTwo() { return 42; }

    // file 3 contents
    export default function insideDirectory() {}

    // in some other file
    // bad
    import CheckBox from './checkBox'; // PascalCase import/export, camelCase filename
    import FortyTwo from './FortyTwo'; // PascalCase import/filename, camelCase export
    import InsideDirectory from './InsideDirectory'; // PascalCase import/filename, camelCase export

    // bad
    import CheckBox from './check_box'; // PascalCase import/export, snake_case filename
    import forty_two from './forty_two'; // snake_case import/filename, camelCase export
    import inside_directory from './inside_directory'; // snake_case import, camelCase export
    import index from './inside_directory/index'; // requiring the index file explicitly
    import insideDirectory from './insideDirectory/index'; // requiring the index file explicitly

    // good
    import CheckBox from './CheckBox'; // PascalCase export/import/filename
    import fortyTwo from './fortyTwo'; // camelCase export/import/filename
    import insideDirectory from './insideDirectory'; // camelCase export/import/directory name/implicit "index"
    // ^ supports both insideDirectory.js and insideDirectory/index.js
    ```

  <a name="naming--camelCase-default-export"></a><a name="22.7"></a>
  - [23.7](#naming--camelCase-default-export) Use camelCase when you export-default a function. Your filename should be identical to your function’s name.

    ```javascript
    function makeStyleGuide() {
      // ...
    }

    export default makeStyleGuide;
    ```

  <a name="naming--PascalCase-singleton"></a><a name="22.8"></a>
  - [23.8](#naming--PascalCase-singleton) Use PascalCase when you export a constructor / class / singleton / function library / bare object.

    ```javascript
    const AirbnbStyleGuide = {
      es6: {
      },
    };

    export default AirbnbStyleGuide;
    ```

  <a name="naming--Acronyms-and-Initialisms"></a>
  - [23.9](#naming--Acronyms-and-Initialisms) Acronyms and initialisms should always be all capitalized, or all lowercased.

    > Why? Names are for readability, not to appease a computer algorithm.

    ```javascript
    // bad
    import SmsContainer from './containers/SmsContainer';

    // bad
    const HttpRequests = [
      // ...
    ];

    // good
    import SMSContainer from './containers/SMSContainer';

    // good
    const HTTPRequests = [
      // ...
    ];

    // also good
    const httpRequests = [
      // ...
    ];

    // best
    import TextMessageContainer from './containers/TextMessageContainer';

    // best
    const requests = [
      // ...
    ];
    ```

**[⬆ back to top](#table-of-contents)**

## Accessors

  <a name="accessors--not-required"></a><a name="23.1"></a>
  - [24.1](#accessors--not-required) Accessor functions for properties are not required.

  <a name="accessors--no-getters-setters"></a><a name="23.2"></a>
  - [24.2](#accessors--no-getters-setters) Do not use JavaScript getters/setters as they cause unexpected side effects and are harder to test, maintain, and reason about. Instead, if you do make accessor functions, use getVal() and setVal('hello').

    ```javascript
    // bad
    class Dragon {
      get age() {
        // ...
      }

      set age(value) {
        // ...
      }
    }

    // good
    class Dragon {
      getAge() {
        // ...
      }

      setAge(value) {
        // ...
      }
    }
    ```

  <a name="accessors--boolean-prefix"></a><a name="23.3"></a>
  - [24.3](#accessors--boolean-prefix) If the property/method is a `boolean`, use `isVal()` or `hasVal()`.

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

  <a name="accessors--consistent"></a><a name="23.4"></a>
  - [24.4](#accessors--consistent) It’s okay to create get() and set() functions, but be consistent.

    ```javascript
    class Jedi {
      constructor(options = {}) {
        const lightsaber = options.lightsaber || 'blue';
        this.set('lightsaber', lightsaber);
      }

      set(key, val) {
        this[key] = val;
      }

      get(key) {
        return this[key];
      }
    }
    ```

**[⬆ back to top](#table-of-contents)**

## Events

  <a name="events--hash"></a><a name="24.1"></a>
  - [25.1](#events--hash) When attaching data payloads to events (whether DOM events or something more proprietary like Backbone events), pass an object literal (also known as a "hash")  instead of a raw value. This allows a subsequent contributor to add more data to the event payload without finding and updating every handler for the event. For example, instead of:

    ```javascript
    // bad
    $(this).trigger('listingUpdated', listing.id);

    // ...

    $(this).on('listingUpdated', (e, listingID) => {
      // do something with listingID
    });
    ```

    prefer:

    ```javascript
    // good
    $(this).trigger('listingUpdated', { listingID: listing.id });

    // ...

    $(this).on('listingUpdated', (e, data) => {
      // do something with data.listingID
    });
    ```

  **[⬆ back to top](#table-of-contents)**

## jQuery

  <a name="jquery--dollar-prefix"></a><a name="25.1"></a>
  - [26.1](#jquery--dollar-prefix) Prefix jQuery object variables with a `$`. jscs: [`requireDollarBeforejQueryAssignment`](http://jscs.info/rule/requireDollarBeforejQueryAssignment)

    ```javascript
    // bad
    const sidebar = $('.sidebar');

    // good
    const $sidebar = $('.sidebar');

    // good
    const $sidebarBtn = $('.sidebar-btn');
    ```

  <a name="jquery--cache"></a><a name="25.2"></a>
  - [26.2](#jquery--cache) Cache jQuery lookups.

    ```javascript
    // bad
    function setSidebar() {
      $('.sidebar').hide();

      // ...

      $('.sidebar').css({
        'background-color': 'pink',
      });
    }

    // good
    function setSidebar() {
      const $sidebar = $('.sidebar');
      $sidebar.hide();

      // ...

      $sidebar.css({
        'background-color': 'pink',
      });
    }
    ```

  <a name="jquery--queries"></a><a name="25.3"></a>
  - [26.3](#jquery--queries) For DOM queries use Cascading `$('.sidebar ul')` or parent > child `$('.sidebar > ul')`. [jsPerf](http://jsperf.com/jquery-find-vs-context-sel/16)

  <a name="jquery--find"></a><a name="25.4"></a>
  - [26.4](#jquery--find) Use `find` with scoped jQuery object queries.

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

**[⬆ back to top](#table-of-contents)**

## ECMAScript 5 Compatibility

  <a name="es5-compat--kangax"></a><a name="26.1"></a>
  - [27.1](#es5-compat--kangax) Refer to [Kangax](https://twitter.com/kangax/)’s ES5 [compatibility table](https://kangax.github.io/es5-compat-table/).

**[⬆ back to top](#table-of-contents)**

<a name="ecmascript-6-styles"></a>
## ECMAScript 6+ (ES 2015+) Styles

  <a name="es6-styles"></a><a name="27.1"></a>
  - [28.1](#es6-styles) This is a collection of links to the various ES6+ features.

1. [Arrow Functions](#arrow-functions)
1. [Classes](#classes--constructors)
1. [Object Shorthand](#es6-object-shorthand)
1. [Object Concise](#es6-object-concise)
1. [Object Computed Properties](#es6-computed-properties)
1. [Template Strings](#es6-template-literals)
1. [Destructuring](#destructuring)
1. [Default Parameters](#es6-default-parameters)
1. [Rest](#es6-rest)
1. [Array Spreads](#es6-array-spreads)
1. [Let and Const](#references)
1. [Exponentiation Operator](#es2016-properties--exponentiation-operator)
1. [Iterators and Generators](#iterators-and-generators)
1. [Modules](#modules)

  <a name="tc39-proposals"></a>
  - [28.2](#tc39-proposals) Do not use [TC39 proposals](https://github.com/tc39/proposals) that have not reached stage 3.

    > Why? [They are not finalized](https://tc39.github.io/process-document/), and they are subject to change or to be withdrawn entirely. We want to use JavaScript, and proposals are not JavaScript yet.

**[⬆ back to top](#table-of-contents)**

## Standard Library

  The [Standard Library](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects)
  contains utilities that are functionally broken but remain for legacy reasons.

  <a name="standard-library--isnan"></a>
  - [29.1](#standard-library--isnan) Use `Number.isNaN` instead of global `isNaN`.
    eslint: [`no-restricted-globals`](https://eslint.org/docs/rules/no-restricted-globals)

    > Why? The global `isNaN` coerces non-numbers to numbers, returning true for anything that coerces to NaN.
    > If this behavior is desired, make it explicit.

    ```javascript
    // bad
    isNaN('1.2'); // false
    isNaN('1.2.3'); // true

    // good
    Number.isNaN('1.2.3'); // false
    Number.isNaN(Number('1.2.3')); // true
    ```

  <a name="standard-library--isfinite"></a>
  - [29.2](#standard-library--isfinite) Use `Number.isFinite` instead of global `isFinite`.
    eslint: [`no-restricted-globals`](https://eslint.org/docs/rules/no-restricted-globals)

    > Why? The global `isFinite` coerces non-numbers to numbers, returning true for anything that coerces to a finite number.
    > If this behavior is desired, make it explicit.

    ```javascript
    // bad
    isFinite('2e3'); // true

    // good
    Number.isFinite('2e3'); // false
    Number.isFinite(parseInt('2e3', 10)); // true
    ```

**[⬆ back to top](#table-of-contents)**

## Testing

  <a name="testing--yup"></a><a name="28.1"></a>
  - [30.1](#testing--yup) **Yup.**

    ```javascript
    function foo() {
      return true;
    }
    ```

  <a name="testing--for-real"></a><a name="28.2"></a>
  - [30.2](#testing--for-real) **No, but seriously**:
    - Whichever testing framework you use, you should be writing tests!
    - Strive to write many small pure functions, and minimize where mutations occur.
    - Be cautious about stubs and mocks - they can make your tests more brittle.
    - We primarily use [`mocha`](https://www.npmjs.com/package/mocha) at Airbnb. [`tape`](https://www.npmjs.com/package/tape) is also used occasionally for small, separate modules.
    - 100% test coverage is a good goal to strive for, even if it’s not always practical to reach it.
    - Whenever you fix a bug, _write a regression test_. A bug fixed without a regression test is almost certainly going to break again in the future.

**[⬆ back to top](#table-of-contents)**

## Performance

  - [On Layout & Web Performance](https://www.kellegous.com/j/2013/01/26/layout-performance/)
  - [String vs Array Concat](https://jsperf.com/string-vs-array-concat/2)
  - [Try/Catch Cost In a Loop](https://jsperf.com/try-catch-in-loop-cost)
  - [Bang Function](https://jsperf.com/bang-function)
  - [jQuery Find vs Context, Selector](https://jsperf.com/jquery-find-vs-context-sel/13)
  - [innerHTML vs textContent for script text](https://jsperf.com/innerhtml-vs-textcontent-for-script-text)
  - [Long String Concatenation](https://jsperf.com/ya-string-concat)
  - [Are Javascript functions like `map()`, `reduce()`, and `filter()` optimized for traversing arrays?](https://www.quora.com/JavaScript-programming-language-Are-Javascript-functions-like-map-reduce-and-filter-already-optimized-for-traversing-array/answer/Quildreen-Motta)
  - Loading...

**[⬆ back to top](#table-of-contents)**

## Resources

**Learning ES6+**

  - [Latest ECMA spec](https://tc39.github.io/ecma262/)
  - [ExploringJS](http://exploringjs.com/)
  - [ES6 Compatibility Table](https://kangax.github.io/compat-table/es6/)
  - [Comprehensive Overview of ES6 Features](http://es6-features.org/)

**Read This**

  - [Standard ECMA-262](http://www.ecma-international.org/ecma-262/6.0/index.html)

**Tools**

  - Code Style Linters
    - [ESlint](https://eslint.org/) - [Airbnb Style .eslintrc](https://github.com/airbnb/javascript/blob/master/linters/.eslintrc)
    - [JSHint](http://jshint.com/) - [Airbnb Style .jshintrc](https://github.com/airbnb/javascript/blob/master/linters/.jshintrc)
    - [JSCS](https://github.com/jscs-dev/node-jscs) - [Airbnb Style Preset](https://github.com/jscs-dev/node-jscs/blob/master/presets/airbnb.json) (Deprecated, please use [ESlint](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base))
  - Neutrino preset - [neutrino-preset-airbnb-base](https://neutrino.js.org/presets/neutrino-preset-airbnb-base/)

**Other Style Guides**

  - [Google JavaScript Style Guide](https://google.github.io/styleguide/javascriptguide.xml)
  - [jQuery Core Style Guidelines](https://contribute.jquery.org/style-guide/js/)
  - [Principles of Writing Consistent, Idiomatic JavaScript](https://github.com/rwaldron/idiomatic.js)

**Other Styles**

  - [Naming this in nested functions](https://gist.github.com/cjohansen/4135065) - Christian Johansen
  - [Conditional Callbacks](https://github.com/airbnb/javascript/issues/52) - Ross Allen
  - [Popular JavaScript Coding Conventions on GitHub](http://sideeffect.kr/popularconvention/#javascript) - JeongHoon Byun
  - [Multiple var statements in JavaScript, not superfluous](http://benalman.com/news/2012/05/multiple-var-statements-javascript/) - Ben Alman

**Further Reading**

  - [Understanding JavaScript Closures](https://javascriptweblog.wordpress.com/2010/10/25/understanding-javascript-closures/) - Angus Croll
  - [Basic JavaScript for the impatient programmer](http://www.2ality.com/2013/06/basic-javascript.html) - Dr. Axel Rauschmayer
  - [You Might Not Need jQuery](http://youmightnotneedjquery.com/) - Zack Bloom & Adam Schwartz
  - [ES6 Features](https://github.com/lukehoban/es6features) - Luke Hoban
  - [Frontend Guidelines](https://github.com/bendc/frontend-guidelines) - Benjamin De Cock

**Books**

  - [JavaScript: The Good Parts](https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742) - Douglas Crockford
  - [JavaScript Patterns](https://www.amazon.com/JavaScript-Patterns-Stoyan-Stefanov/dp/0596806752) - Stoyan Stefanov
  - [Pro JavaScript Design Patterns](https://www.amazon.com/JavaScript-Design-Patterns-Recipes-Problem-Solution/dp/159059908X)  - Ross Harmes and Dustin Diaz
  - [High Performance Web Sites: Essential Knowledge for Front-End Engineers](https://www.amazon.com/High-Performance-Web-Sites-Essential/dp/0596529309) - Steve Souders
  - [Maintainable JavaScript](https://www.amazon.com/Maintainable-JavaScript-Nicholas-C-Zakas/dp/1449327680) - Nicholas C. Zakas
  - [JavaScript Web Applications](https://www.amazon.com/JavaScript-Web-Applications-Alex-MacCaw/dp/144930351X) - Alex MacCaw
  - [Pro JavaScript Techniques](https://www.amazon.com/Pro-JavaScript-Techniques-John-Resig/dp/1590597273) - John Resig
  - [Smashing Node.js: JavaScript Everywhere](https://www.amazon.com/Smashing-Node-js-JavaScript-Everywhere-Magazine/dp/1119962595) - Guillermo Rauch
  - [Secrets of the JavaScript Ninja](https://www.amazon.com/Secrets-JavaScript-Ninja-John-Resig/dp/193398869X) - John Resig and Bear Bibeault
  - [Human JavaScript](http://humanjavascript.com/) - Henrik Joreteg
  - [Superhero.js](http://superherojs.com/) - Kim Joar Bekkelund, Mads Mobæk, & Olav Bjorkoy
  - [JSBooks](http://jsbooks.revolunet.com/) - Julien Bouquillon
  - [Third Party JavaScript](https://www.manning.com/books/third-party-javascript) - Ben Vinegar and Anton Kovalyov
  - [Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript](http://amzn.com/0321812182) - David Herman
  - [Eloquent JavaScript](http://eloquentjavascript.net/) - Marijn Haverbeke
  - [You Don’t Know JS: ES6 & Beyond](http://shop.oreilly.com/product/0636920033769.do) - Kyle Simpson

**Blogs**

  - [JavaScript Weekly](http://javascriptweekly.com/)
  - [JavaScript, JavaScript...](https://javascriptweblog.wordpress.com/)
  - [Bocoup Weblog](https://bocoup.com/weblog)
  - [Adequately Good](http://www.adequatelygood.com/)
  - [NCZOnline](https://www.nczonline.net/)
  - [Perfection Kills](http://perfectionkills.com/)
  - [Ben Alman](http://benalman.com/)
  - [Dmitry Baranovskiy](http://dmitry.baranovskiy.com/)
  - [nettuts](http://code.tutsplus.com/?s=javascript)

**Podcasts**

  - [JavaScript Air](https://javascriptair.com/)
  - [JavaScript Jabber](https://devchat.tv/js-jabber/)

**[⬆ back to top](#table-of-contents)**

## In the Wild

  This is a list of organizations that are using this style guide. Send us a pull request and we'll add you to the list.

  - **123erfasst**: [123erfasst/javascript](https://github.com/123erfasst/javascript)
  - **3blades**: [3Blades](https://github.com/3blades)
  - **4Catalyzer**: [4Catalyzer/javascript](https://github.com/4Catalyzer/javascript)
  - **Aan Zee**: [AanZee/javascript](https://github.com/AanZee/javascript)
  - **Adult Swim**: [adult-swim/javascript](https://github.com/adult-swim/javascript)
  - **Airbnb**: [airbnb/javascript](https://github.com/airbnb/javascript)
  - **AltSchool**: [AltSchool/javascript](https://github.com/AltSchool/javascript)
  - **Apartmint**: [apartmint/javascript](https://github.com/apartmint/javascript)
  - **Ascribe**: [ascribe/javascript](https://github.com/ascribe/javascript)
  - **Avalara**: [avalara/javascript](https://github.com/avalara/javascript)
  - **Avant**: [avantcredit/javascript](https://github.com/avantcredit/javascript)
  - **Axept**: [axept/javascript](https://github.com/axept/javascript)
  - **BashPros**: [BashPros/javascript](https://github.com/BashPros/javascript)
  - **Billabong**: [billabong/javascript](https://github.com/billabong/javascript)
  - **Bisk**: [bisk](https://github.com/Bisk/)
  - **Bonhomme**: [bonhommeparis/javascript](https://github.com/bonhommeparis/javascript)
  - **Brainshark**: [brainshark/javascript](https://github.com/brainshark/javascript)
  - **CaseNine**: [CaseNine/javascript](https://github.com/CaseNine/javascript)
  - **Chartboost**: [ChartBoost/javascript-style-guide](https://github.com/ChartBoost/javascript-style-guide)
  - **ComparaOnline**: [comparaonline/javascript](https://github.com/comparaonline/javascript-style-guide)
  - **Compass Learning**: [compasslearning/javascript-style-guide](https://github.com/compasslearning/javascript-style-guide)
  - **DailyMotion**: [dailymotion/javascript](https://github.com/dailymotion/javascript)
  - **DoSomething**: [DoSomething/eslint-config](https://github.com/DoSomething/eslint-config)
  - **Digitpaint** [digitpaint/javascript](https://github.com/digitpaint/javascript)
  - **Ecosia**: [ecosia/javascript](https://github.com/ecosia/javascript)
  - **Evernote**: [evernote/javascript-style-guide](https://github.com/evernote/javascript-style-guide)
  - **Evolution Gaming**: [evolution-gaming/javascript](https://github.com/evolution-gaming/javascript)
  - **EvozonJs**: [evozonjs/javascript](https://github.com/evozonjs/javascript)
  - **ExactTarget**: [ExactTarget/javascript](https://github.com/ExactTarget/javascript)
  - **Expensify** [Expensify/Style-Guide](https://github.com/Expensify/Style-Guide/blob/master/javascript.md)
  - **Flexberry**: [Flexberry/javascript-style-guide](https://github.com/Flexberry/javascript-style-guide)
  - **Gawker Media**: [gawkermedia](https://github.com/gawkermedia/)
  - **General Electric**: [GeneralElectric/javascript](https://github.com/GeneralElectric/javascript)
  - **Generation Tux**: [GenerationTux/javascript](https://github.com/generationtux/styleguide)
  - **GoodData**: [gooddata/gdc-js-style](https://github.com/gooddata/gdc-js-style)
  - **GreenChef**: [greenchef/javascript](https://github.com/greenchef/javascript)
  - **Grooveshark**: [grooveshark/javascript](https://github.com/grooveshark/javascript)
  - **Grupo-Abraxas**: [Grupo-Abraxas/javascript](https://github.com/Grupo-Abraxas/javascript)
  - **Honey**: [honeyscience/javascript](https://github.com/honeyscience/javascript)
  - **How About We**: [howaboutwe/javascript](https://github.com/howaboutwe/javascript-style-guide)
  - **Huballin**: [huballin](https://github.com/huballin/)
  - **HubSpot**: [HubSpot/javascript](https://github.com/HubSpot/javascript)
  - **Hyper**: [hyperoslo/javascript-playbook](https://github.com/hyperoslo/javascript-playbook/blob/master/style.md)
  - **InterCity Group**: [intercitygroup/javascript-style-guide](https://github.com/intercitygroup/javascript-style-guide)
  - **Jam3**: [Jam3/Javascript-Code-Conventions](https://github.com/Jam3/Javascript-Code-Conventions)
  - **JeopardyBot**: [kesne/jeopardy-bot](https://github.com/kesne/jeopardy-bot/blob/master/STYLEGUIDE.md)
  - **JSSolutions**: [JSSolutions/javascript](https://github.com/JSSolutions/javascript)
  - **Kaplan Komputing**: [kaplankomputing/javascript](https://github.com/kaplankomputing/javascript)
  - **KickorStick**: [kickorstick](https://github.com/kickorstick/)
  - **Kinetica Solutions**: [kinetica/javascript](https://github.com/kinetica/Javascript-style-guide)
  - **LEINWAND**: [LEINWAND/javascript](https://github.com/LEINWAND/javascript)
  - **Lonely Planet**: [lonelyplanet/javascript](https://github.com/lonelyplanet/javascript)
  - **M2GEN**: [M2GEN/javascript](https://github.com/M2GEN/javascript)
  - **Mighty Spring**: [mightyspring/javascript](https://github.com/mightyspring/javascript)
  - **MinnPost**: [MinnPost/javascript](https://github.com/MinnPost/javascript)
  - **MitocGroup**: [MitocGroup/javascript](https://github.com/MitocGroup/javascript)
  - **ModCloth**: [modcloth/javascript](https://github.com/modcloth/javascript)
  - **Money Advice Service**: [moneyadviceservice/javascript](https://github.com/moneyadviceservice/javascript)
  - **Muber**: [muber](https://github.com/muber/)
  - **National Geographic**: [natgeo](https://github.com/natgeo/)
  - **Nimbl3**: [nimbl3/javascript](https://github.com/nimbl3/javascript)
  - **Nulogy**: [nulogy/javascript](https://github.com/nulogy/javascript)
  - **Orange Hill Development**: [orangehill/javascript](https://github.com/orangehill/javascript)
  - **Orion Health**: [orionhealth/javascript](https://github.com/orionhealth/javascript)
  - **OutBoxSoft**: [OutBoxSoft/javascript](https://github.com/OutBoxSoft/javascript)
  - **Peerby**: [Peerby/javascript](https://github.com/Peerby/javascript)
  - **Razorfish**: [razorfish/javascript-style-guide](https://github.com/razorfish/javascript-style-guide)
  - **reddit**: [reddit/styleguide/javascript](https://github.com/reddit/styleguide/tree/master/javascript)
  - **React**: [facebook.github.io/react/contributing/how-to-contribute.html#style-guide](https://facebook.github.io/react/contributing/how-to-contribute.html#style-guide)
  - **REI**: [reidev/js-style-guide](https://github.com/rei/code-style-guides/)
  - **Ripple**: [ripple/javascript-style-guide](https://github.com/ripple/javascript-style-guide)
  - **Sainsbury's Supermarkets**: [jsainsburyplc](https://github.com/jsainsburyplc)
  - **SeekingAlpha**: [seekingalpha/javascript-style-guide](https://github.com/seekingalpha/javascript-style-guide)
  - **Shutterfly**: [shutterfly/javascript](https://github.com/shutterfly/javascript)
  - **Sourcetoad**: [sourcetoad/javascript](https://github.com/sourcetoad/javascript)
  - **Springload**: [springload](https://github.com/springload/)
  - **StratoDem Analytics**: [stratodem/javascript](https://github.com/stratodem/javascript)
  - **SteelKiwi Development**: [steelkiwi/javascript](https://github.com/steelkiwi/javascript)
  - **StudentSphere**: [studentsphere/javascript](https://github.com/studentsphere/guide-javascript)
  - **SwoopApp**: [swoopapp/javascript](https://github.com/swoopapp/javascript)
  - **SysGarage**: [sysgarage/javascript-style-guide](https://github.com/sysgarage/javascript-style-guide)
  - **Syzygy Warsaw**: [syzygypl/javascript](https://github.com/syzygypl/javascript)
  - **Target**: [target/javascript](https://github.com/target/javascript)
  - **TheLadders**: [TheLadders/javascript](https://github.com/TheLadders/javascript)
  - **The Nerdery**: [thenerdery/javascript-standards](https://github.com/thenerdery/javascript-standards)
  - **T4R Technology**: [T4R-Technology/javascript](https://github.com/T4R-Technology/javascript)
  - **VoxFeed**: [VoxFeed/javascript-style-guide](https://github.com/VoxFeed/javascript-style-guide)
  - **WeBox Studio**: [weboxstudio/javascript](https://github.com/weboxstudio/javascript)
  - **Weggo**: [Weggo/javascript](https://github.com/Weggo/javascript)
  - **Zillow**: [zillow/javascript](https://github.com/zillow/javascript)
  - **ZocDoc**: [ZocDoc/javascript](https://github.com/ZocDoc/javascript)

**[⬆ back to top](#table-of-contents)**

## Translation

  This style guide is also available in other languages:

  - ![br](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Brazil.png) **Brazilian Portuguese**: [armoucar/javascript-style-guide](https://github.com/armoucar/javascript-style-guide)
  - ![bg](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Bulgaria.png) **Bulgarian**: [borislavvv/javascript](https://github.com/borislavvv/javascript)
  - ![ca](https://raw.githubusercontent.com/fpmweb/javascript-style-guide/master/img/catala.png) **Catalan**: [fpmweb/javascript-style-guide](https://github.com/fpmweb/javascript-style-guide)
  - ![cn](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/China.png) **Chinese (Simplified)**: [yuche/javascript](https://github.com/yuche/javascript)
  - ![tw](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Taiwan.png) **Chinese (Traditional)**: [jigsawye/javascript](https://github.com/jigsawye/javascript)
  - ![fr](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/France.png) **French**: [nmussy/javascript-style-guide](https://github.com/nmussy/javascript-style-guide)
  - ![de](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Germany.png) **German**: [timofurrer/javascript-style-guide](https://github.com/timofurrer/javascript-style-guide)
  - ![it](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Italy.png) **Italian**: [sinkswim/javascript-style-guide](https://github.com/sinkswim/javascript-style-guide)
  - ![jp](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Japan.png) **Japanese**: [mitsuruog/javascript-style-guide](https://github.com/mitsuruog/javascript-style-guide)
  - ![kr](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/South-Korea.png) **Korean**: [ParkSB/javascript-style-guide](https://github.com/ParkSB/javascript-style-guide)
  - ![ru](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Russia.png) **Russian**: [leonidlebedev/javascript-airbnb](https://github.com/leonidlebedev/javascript-airbnb)
  - ![es](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Spain.png) **Spanish**: [paolocarrasco/javascript-style-guide](https://github.com/paolocarrasco/javascript-style-guide)
  - ![th](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Thailand.png) **Thai**: [lvarayut/javascript-style-guide](https://github.com/lvarayut/javascript-style-guide)
  - ![tr](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Turkey.png) **Turkish**: [eraycetinay/javascript](https://github.com/eraycetinay/javascript)
  - ![ua](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Ukraine.png) **Ukrainian**: [ivanzusko/javascript](https://github.com/ivanzusko/javascript)
  - ![vn](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Vietnam.png) **Vietnam**: [hngiang/javascript-style-guide](https://github.com/hngiang/javascript-style-guide)

## The JavaScript Style Guide Guide

  - [Reference](https://github.com/airbnb/javascript/wiki/The-JavaScript-Style-Guide-Guide)

## Chat With Us About JavaScript

  - Find us on [gitter](https://gitter.im/airbnb/javascript).

## Contributors

  - [View Contributors](https://github.com/airbnb/javascript/graphs/contributors)

## License

(The MIT License)

Copyright (c) 2012 Airbnb

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

**[⬆ back to top](#table-of-contents)**

## Amendments

We encourage you to fork this guide and change the rules to fit your team’s style guide. Below, you may list some amendments to the style guide. This allows you to periodically update your style guide without having to deal with merge conflicts.

# };
