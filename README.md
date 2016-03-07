[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/airbnb/javascript?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

# Airbnb JavaScript Style Guide() {
**Bài viết gốc** [Airbnb](https://github.com/airbnb/javascript)


<a name="table-of-contents"></a>
## Table of Contents
  
  1. [Types](#types)
  1. [References](#references)
  1. [Objects](#objects)
  1. [Arrays](#arrays)
  1. [Destructuring](#destructuring)
  1. [Strings](#strings)
  1. [Functions](#functions)
  1. [Arrow Functions](#arrow-functions)
  1. [Constructors](#constructors)
  1. [Modules](#modules)
  1. [Iterators and Generators](#iterators-and-generators)
  1. [Properties](#properties)
  1. [Variables](#variables)
  1. [Hoisting](#hoisting)
  1. [Comparison Operators & Equality](#comparison-operators--equality)
  1. [Blocks](#blocks)
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
  1. [ECMAScript 6 Styles](#ecmascript-6-styles)
  1. [Testing](#testing)
  1. [Performance](#performance)
  1. [Resources](#resources)
  1. [In the Wild](#in-the-wild)
  1. [Translation](#translation)
  1. [The JavaScript Style Guide Guide](#the-javascript-style-guide-guide)
  1. [Chat With Us About JavaScript](#chat-with-us-about-javascript)
  1. [Contributors](#contributors)
  1. [License](#license)

## Types
  
  - [1.1](#1.1) <a name='1.1'></a> **Primitives**: Khi sử dụng biến có thể truy cập nó bằng cách tham chiếu đến các giá trị của biến.

    + `string`
    + `number`
    + `boolean`
    + `null`
    + `undefined`

    ```javascript
    const foo = 1;
    let bar = foo;

    bar = 9;

    console.log(foo, bar); // => 1, 9
    ```

  - [1.2](#1.2) <a name='1.2'></a> **Complex**: Khi biến rất phức tạp có thể truy cập nó bằng cách tham chiếu đến các giá trị của các biến khác.

    + `object`
    + `array`
    + `function`

    ```javascript
    const foo = [1, 2];
    const bar = foo;

    bar[0] = 9;

    console.log(foo[0], bar[0]); // => 9, 9
    ```

**[⬆ Trở lại đầu trang](#table-of-contents)**

## References

  - [2.1](#2.1) <a name='2.1'></a> Sử dụng `const` cho khai báo hằng; tránh sử dụng `var`.

  > Khi sử dụng `cost` chúng ta không thể thay đổi giá trị của nó. Điều này giúp chúng ta ngăn chặn các lỗi có thể xảy ra

    ```javascript
    // Không tốt
    var a = 1;
    var b = 2;

    // Tốt
    const a = 1;
    const b = 2;
    ```

  - [2.2](#2.2) <a name='2.2'></a> Để thay đổi các thông số, sử dụng `let` và tránh sử dụng `var`.

  > Vì `let` nó chỉ có nghĩa trong một phạm vi nhất định (Block-Scope), không giống như `var` có nghĩa trong một hàm (Funciton-Scope).

    ```javascript
    // Không tốt
    var count = 1;
    if (true) {
      count += 1;
    }

    // Tốt.
    let count = 1;
    if (true) {
      count += 1;
    }
    ```

  - [2.3](#2.3) <a name='2.3'></a> `let` và `const` có giá trị trong một phạm vi nhất định (Block-Scope).

    ```javascript
    {
      let a = 1;
      const b = 1;
    }
    console.log(a); // ReferenceError Khi ngoài phạm vị của biến sẽ không thể sử dụng biến đó.
    console.log(b); // ReferenceError Khi ngoài phạm vị của biến sẽ không thể sử dụng biến đó.
    ```

**[⬆ Trở lại đầu trang](#table-of-contents)**

## Objects

  - [3.1](#3.1) <a name='3.1'></a> Dùng `{}` để tạo một đối tượng.

    ```javascript
    // Không tốt
    const item = new Object();

    // Tốt
    const item = {};
    ```

  - [3.2](#3.2) <a name='3.2'></a> Không sử dụng các từ khoá mặc định để làm thuộc tính.

    ```javascript
    // Không tốt
    const superman = {
      default: { clark: 'kent' },
      private: true,
    };

    // Tốt
    const superman = {
      defaults: { clark: 'kent' },
      hidden: true,
    };
    ```

  - [3.3](#3.3) <a name='3.3'></a> Dùng những từ ngữ đồng nghĩa với thuật ngử dành riêng.

    ```javascript
    // Không tốt
    const superman = {
      class: 'alien', // `class` từ khoá của hệ thống
    };

    // Không tốt
    const superman = {
      klass: 'alien', `klass` không có ỹ nghĩa gì trong trường hợp này
    };

    // Tốt
    const superman = {
      type: 'alien',
    };
    ```

  <a name="es6-computed-properties"></a>
  - [3.4](#3.4) <a name='3.4'></a> Sử dụng tên thuộc tính khi tạo đối tượng với tên thuộc tính động.

  > Việc này giúp chúng ta định nghĩa tất cả các thuộc tính của đối tượng một lần duy nhất.

    ```javascript

    function getKey(k) {
      return `a key named ${k}`;
    }

    // Không tốt
    const obj = {
      id: 5,
      name: 'San Francisco',
    };
    obj[getKey('enabled')] = true;

    // 
    const obj = {
      id: 5,
      name: 'San Francisco',
      [getKey('enabled')]: true,
    };
    ```

  <a name="es6-object-shorthand"></a>
  - [3.5](#3.5) <a name='3.5'></a> Sử dụng cách khai báo phương thức rút ngắn (Property Value Shorthand).

    ```javascript
    // Không tốt
    const atom = {
      value: 1,

      addValue: function (value) {
        return atom.value + value;
      },
    };

    // Tốt
    const atom = {
      value: 1,

      addValue(value) {
        return atom.value + value;
      },
    };
    ```

  <a name="es6-object-concise"></a>
  - [3.6](#3.6) <a name='3.6'></a> Sử dụng cách khai báo rút ngắn cho thuộc tính (Object Method.

  > Cách viết ngắn gọn và dể hiểu hơn.

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

  - [3.7](#3.7) <a name='3.7'></a> Gom nhóm các thuộc tính được khai báo rút ngắn đặt lên đầu của mỗi đối tượng.

    ```javascript
    const anakinSkywalker = 'Anakin Skywalker';
    const lukeSkywalker = 'Luke Skywalker';

    // Không tốt
    const obj = {
      episodeOne: 1,
      twoJediWalkIntoACantina: 2,
      lukeSkywalker,
      episodeThree: 3,
      mayTheFourth: 4,
      anakinSkywalker,
    };

    // Tốt
    const obj = {
      lukeSkywalker, // Thuộc tính được khai báo ngắn gọn
      anakinSkywalker, // Thuộc tính được khai báo ngắn gọn
      episodeOne: 1,
      twoJediWalkIntoACantina: 2,
      episodeThree: 3,
      mayTheFourth: 4,
    };
    ```

**[⬆ Trở lại đầu trang](#table-of-contents)**

## Arrays

  - [4.1](#4.1) <a name='4.1'></a> Sử dụng `[]` để khai báo một mảng.

    ```javascript
    // Không tốt
    const items = new Array();

    // Tốt
    const items = [];
    ```

  - [4.2](#4.2) <a name='4.2'></a> Dùng `Array#push` để thêm một phần từ vào mảng thay vì thêm trực tiếp.

    ```javascript
    const someStack = [];

    // Không tốt
    someStack[someStack.length] = 'abracadabra';

    // Tốt
    someStack.push('abracadabra');
    ```

  <a name="es6-array-spreads"></a>
  - [4.3](#4.3) <a name='4.3'></a> Dùng `...` (Spreads) để sao chép mảng.

    ```javascript
    // Không tốt
    const len = items.length;
    const itemsCopy = [];
    let i;

    for (i = 0; i < len; i++) {
      itemsCopy[i] = items[i];
    }

    // Tốt
    const itemsCopy = [...items];
    ```
  - [4.4](#4.4) <a name='4.4'></a> Dùng `Array#from` để chuyển đổi từ đối tượng sang mảng.

    ```javascript
    const foo = document.querySelectorAll('.foo');
    const nodes = Array.from(foo);
    ```

**[⬆ Trở lại đầu trang](#table-of-contents)**

## Destructuring

  - [5.1](#5.1) <a name='5.1'></a> Dùng `Destructuring` để chuyển giá trị từng thuộc tính của đối tượng vào một biến.
  
  > Điều này giúp giảm bớt việc dùng các biến tạm thời để lưu các thuộc tính trong đối tượng.

    ```javascript
    // Không tốt
    function getFullName(user) {
      const firstName = user.firstName;
      const lastName = user.lastName;

      return `${firstName} ${lastName}`;
    }

    // Tốt
    function getFullName(obj) {
      const { firstName, lastName } = obj;
      return `${firstName} ${lastName}`;
    }

    // Tốt nhất
    function getFullName({ firstName, lastName }) {
      return `${firstName} ${lastName}`;
    }
    ```

  - [5.2](#5.2) <a name='5.2'></a> Dùng `destructuring` cho mảng.

    ```javascript
    const arr = [1, 2, 3, 4];

    // Không tốt
    const first = arr[0];
    const second = arr[1];

    // Tốt
    const [first, second] = arr;
    ```

  - [5.3](#5.3) <a name='5.3'></a> Dùng `destructuring` cho nhiều giá trị trả về, không dùng `destructuring` array.

  > Cách dùng này giúp chúng ta có thể thêm một thuộc tính mới hoặc sắp xếp thứ tự trả về mà không gây ảnh hưởng cho các hàm khác.

    ```javascript
    // Không tốt
    function processInput(input) {
      // then a miracle occurs
      return [left, right, top, bottom];
    }

    // the caller needs to think about the order of return data
    const [left, __, top] = processInput(input);

    // Tốt
    function processInput(input) {
      // then a miracle occurs
      return { left, right, top, bottom };
    }

    // the caller selects only the data they need
    const { left, right } = processInput(input);
    ```


**[⬆ Trở lại đầu trang](#table-of-contents)**

## Strings

  - [6.1](#6.1) <a name='6.1'></a> Sử dụng dầu nháy đơn `''` đối với chuỗi.

    ```javascript
    // Không tốt
    const name = "Capt. Janeway";

    // Tốt
    const name = 'Capt. Janeway';
    ```

  - [6.2](#6.2) <a name='6.2'></a> Khi chuỗi dài hơn 100 kí tự nên chia nhiều dòng và nối chuỗi đó lại.
  - [6.3](#6.3) <a name='6.3'></a> Ghi chú: Việc áp dụng nối chuỗi nhiều sẽ gây ảnh hưởng tới hiệu năng. [jsPerf](http://jsperf.com/ya-string-concat) & [Thảo luận](https://github.com/airbnb/javascript/issues/40).

    ```javascript
    // Không tốt
    const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';

    // Không tốt
    const errorMessage = 'This is a super long error that was thrown because \
    of Batman. When you stop to think about how Batman had anything to do \
    with this, you would get nowhere \
    fast.';

    // Tốt
    const errorMessage = 'This is a super long error that was thrown because ' +
      'of Batman. When you stop to think about how Batman had anything to do ' +
      'with this, you would get nowhere fast.';
    ```

  <a name="es6-template-literals"></a>
  - [6.4](#6.4) <a name='6.4'></a> Dùng `template` thay vì dùng cách nối chuỗi.

  > Dùng `template` sẽ giúp chúng ta dể đọc, cú pháp ngắn gọn.

    ```javascript
    // Không tốt
    function sayHi(name) {
      return 'How are you, ' + name + '?';
    }

    // Không tốt
    function sayHi(name) {
      return ['How are you, ', name, '?'].join();
    }

    // Tốt
    function sayHi(name) {
      return `How are you, ${name}?`;
    }
    ```
  - [6.5](#6.5) <a name='6.5'></a> Không bao giờ sử dụng `eval()` cho chuỗi.

**[⬆ Trở lại đầu trang](#table-of-contents)**


## Functions

  - [7.1](#7.1) <a name='7.1'></a> Sử dụng `Function declarations` thay vì `Function expressions`.

  > Function declarations được đặt tên rõ ràng, do đó có thể xác định nó ở `call stacks`. Luôn luôn dùng [Arrow Functions](#arrow-functions) với `Function expressions`.

    ```javascript
    // không tốt
    const foo = function () {
    };

    // Tốt
    function foo() {
    }
    ```

  - [7.2](#7.2) <a name='7.2'></a> Function expressions:

    ```javascript
    // immediately-invoked function expression (IIFE)
    (() => {
      console.log('Welcome to the Internet. Please follow me.');
    })();
    ```

  - [7.3](#7.3) <a name='7.3'></a> Không được khai báo một hàm khi sử dụng các câu điều kiện (if, while, ...). Thay vào đó lưu hàm vào một biến cụ thể.
  - [7.4](#7.4) <a name='7.4'></a> **Ghi chú:** ECMA-262 định nghĩa `block` như là danh sách các câu lệnh. [Read ECMA-262's note on this issue](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf#page=97).

    ```javascript
    // Không tốt
    if (currentUser) {
      function test() {
        console.log('Nope.');
      }
    }

    // Tốt
    let test;
    if (currentUser) {
      test = () => {
        console.log('Yup.');
      };
    }
    ```

  - [7.5](#7.5) <a name='7.5'></a> Không được khai báo các tham số của hàm trùng với `arguments`.

    ```javascript
    // Không tốt
    function nope(name, options, arguments) {
      // ...stuff...
    }

    // Tốt
    function yup(name, options, args) {
      // ...stuff...
    }
    ```

  <a name="es6-rest"></a>
  - [7.6](#7.6) <a name='7.6'></a> Không được dùng `arguments`, dùng `...` (Spreads) thay thế.

  > `...` sẽ chuyển các `arguments` thành một mảng các giá trị.

    ```javascript
    // Không tốt
    function concatenateAll() {
      const args = Array.prototype.slice.call(arguments);
      return args.join('');
    }

    // Tốt
    function concatenateAll(...args) {
      return args.join('');
    }
    ```

  <a name="es6-default-parameters"></a>
  - [7.7](#7.7) <a name='7.7'></a> Sử dụng cách truyền tham số mặc định.

    ```javascript
    // Không tốt, không bao giờ áp dụng kiểu này
    function handleThings(opts) {
      opts = opts || {};
      // ...
    }

    // Không tốt
    function handleThings(opts) {
      if (opts === void 0) {
        opts = {};
      }
      // ...
    }

    // Tốt
    function handleThings(opts = {}) {
      // ...
    }
    ```

  - [7.8](#7.8) <a name='7.8'></a> Tránh đặt nó là các thông số mặc định.

  ```javascript
  var b = 1;
  // Không tốt
  function count(a = b++) {
    console.log(a);
  }
  count();  // 1
  count();  // 2
  count(3); // Nó được định nghĩa như là tham số thứ ba, mặc định sẽ không được thực thi (= b++ ไม่ถูกเรียก)
  count();  // 3
  ```

  - [7.9](#7.9) <a name='7.9'></a> Luôn đặt tham số mặc định ở cuối.

    ```javascript
    // Không tốt
    function handleThings(opts = {}, name) {
      // ...
    }

    // Tốt
    function handleThings(name, opts = {}) {
      // ...
    }
    ```

- [7.10](#7.10) <a name='7.10'></a> Không bao giờ dùng cách khơi tạo một hàm bằng cách dùng `new Function`.

  > Cách này đồng nghĩa với việc dùng `eval()`.

  ```javascript
  // Không tốt
  var add = new Function('a', 'b', 'return a + b');

  // Không tốt
  var subtract = Function('a', 'b', 'return a - b');
  ```

**[⬆ Trở lại đầu trang](#table-of-contents)**

## Arrow Functions

  - [8.1](#8.1) <a name='8.1'></a> Một khi bạn sử dụng `Function expressions` (`Anonymous function`), thì nên dùng `Arrow Functions` hoặc `=>`.

    ```javascript
    // Không tốt
    [1, 2, 3].map(function (x) {
      const y = x + 1;
      return x * y;
    });

    // Tốt
    [1, 2, 3].map((x) => {
      const y = x + 1;
      return x * y;
    });
    ```

  - [8.2](#8.2) <a name='8.2'></a> Nếu chỉ một câu lệnh tính toán thì có thể không dùng `{}`, nhưng khi có nhiều câu lệnh thì nên dùng `{}` và dùng `return` để trả về kết quá cuối cùng.

    ```javascript
    // Tốt
    [1, 2, 3].map(number => `A string containing the ${number}.`);

    // Không tốt
    [1, 2, 3].map(number => {
      const nextNumber = number + 1;
      `A string containing the ${nextNumber}.`;
    });

    // Tốt
    [1, 2, 3].map(number => {
      const nextNumber = number + 1;
      return `A string containing the ${nextNumber}.`;
    });
    ```

  - [8.3](#8.3) <a name='8.3'></a> Khi có nhiều chuỗi có nhiều dòng nên bao chuỗi đó trong dấu `()`.

    ```js
    // Không tốt
    [1, 2, 3].map(number => 'As time went by, the string containing the ' +
      `${number} became much longer. So we needed to break it over multiple ` +
      'lines.'
    );

    // Tốt
    [1, 2, 3].map(number => (
      `As time went by, the string containing the ${number} became much ` +
      'longer. So we needed to break it over multiple lines.'
    ));
    ```


  - [8.4](#8.4) <a name='8.4'></a> Nếu trong hàm chỉ có một câu lệnh duy nhất có thể không cần dùng `()`.

    ```js
    // Tốt
    [1, 2, 3].map(x => x * x);

    // Tốt
    [1, 2, 3].reduce((y, x) => x + y);
    ```

**[⬆ Trở lại đầu trang](#table-of-contents)**


## Constructors

  - [9.1](#9.1) <a name='9.1'></a> Luôn luôn dùng `class`. Không nên dùng `prototype`.

    ```javascript
    // Không tốt
    function Queue(contents = []) {
      this._queue = [...contents];
    }
    Queue.prototype.pop = function() {
      const value = this._queue[0];
      this._queue.splice(0, 1);
      return value;
    }


    // Tốt
    class Queue {
      constructor(contents = []) {
        this._queue = [...contents];
      }
      pop() {
        const value = this._queue[0];
        this._queue.splice(0, 1);
        return value;
      }
    }
    ```

  - [9.2](#9.2) <a name='9.2'></a> Sử dụng `extends` để tạo một lớp kế thừa.

    ```javascript
    // Không tốt
    const inherits = require('inherits');
    function PeekableQueue(contents) {
      Queue.apply(this, contents);
    }
    inherits(PeekableQueue, Queue);
    PeekableQueue.prototype.peek = function() {
      return this._queue[0];
    }

    // Tốt
    class PeekableQueue extends Queue {
      peek() {
        return this._queue[0];
      }
    }
    ```

  - [9.3](#9.3) <a name='9.3'></a> Phương thức có thể trả về `this`.

    ```javascript
    // Không tốt
    Jedi.prototype.jump = function() {
      this.jumping = true;
      return true;
    };

    Jedi.prototype.setHeight = function(height) {
      this.height = height;
    };

    const luke = new Jedi();
    luke.jump(); // => true
    luke.setHeight(20); // => undefined

    // Tốt
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


  - [9.4](#9.4) <a name='9.4'></a> Có thể mở rộng phương thức `toString()`.

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

**[⬆ Trở lại đầu trang](#table-of-contents)**


## Modules

  - [10.1](#10.1) <a name='10.1'></a> Luôn luôn dùng (`import`/`export`) khi làm việc với `modules` thay thế kiểu `modules` truyền thống `require/module.exports`.

    ```javascript
    // Không tốt
    const AirbnbStyleGuide = require('./AirbnbStyleGuide');
    module.exports = AirbnbStyleGuide.es6;

    // ok
    import AirbnbStyleGuide from './AirbnbStyleGuide';
    export default AirbnbStyleGuide.es6;

    // Tốt nhất
    import { es6 } from './AirbnbStyleGuide';
    export default es6;
    ```

  - [10.2](#10.2) <a name='10.2'></a> Không được dùng `wildcard` imports.

    ```javascript
    // Không tốt
    import * as AirbnbStyleGuide from './AirbnbStyleGuide';

    // Tốt
    import AirbnbStyleGuide from './AirbnbStyleGuide';
    ```

  - [10.3](#10.3) <a name='10.3'></a>Không được dùng `export` trực tiếp từ `import`.

  > Bời vì tách `import` và `export` giúp cho việc đọc dể, có ý nghĩa hơn.

    ```javascript
    // Không tốt
    // filename es6.js
    export { es6 as default } from './airbnbStyleGuide';

    // Tốt
    // filename es6.js
    import { es6 } from './AirbnbStyleGuide';
    export default es6;
    ```

**[⬆ Trở lại đầu trang](#table-of-contents)**

## Iterators and Generators

  - [11.1](#11.1) <a name='11.1'></a> Không được dùng vòng lặp thay vào đó dùng `map()` hoặc `reduce` thay thế `for-of`.

    ```javascript
    const numbers = [1, 2, 3, 4, 5];

    // Không tốt
    let sum = 0;
    for (let num of numbers) {
      sum += num;
    }

    sum === 15;

    // Tốt
    let sum = 0;
    numbers.forEach((num) => sum += num);
    sum === 15;

    // Tốt nhất
    const sum = numbers.reduce((total, num) => total + num, 0);
    sum === 15;
    ```

  - [11.2](#11.2) <a name='11.2'></a> Không được dùng `generators` ở thời điểm hiện tại.

  > Có lỗi khi chuyển sang `ES5`.

**[⬆ Trở lại đầu trang](#table-of-contents)**


## Properties

  - [12.1](#12.1) <a name='12.1'></a> Sử dụng `.` khi truy cập vào một biến.

    ```javascript
    const luke = {
      jedi: true,
      age: 28,
    };

    // Không tốt
    const isJedi = luke['jedi'];

    // Tốt
    const isJedi = luke.jedi;
    ```

  - [12.2](#12.2) <a name='12.2'></a> Sử `[]` để truy cập thuộc tính đối với biến.

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

**[⬆ Trở lại đầu trang](#table-of-contents)**


## Variables

  - [13.1](#13.1) <a name='13.1'></a> Luôn luôn sử dụng `const` để khai báo một biến. 

    ```javascript
    // Không tốt
    superPower = new SuperPower();

    // Tốt
    const superPower = new SuperPower();
    ```

  - [13.2](#13.2) <a name='13.2'></a> Dùng mỗi `const` cho việc khai báo một biến.

    ```javascript
    // Không tốt
    const items = getItems(),
        goSportsTeam = true,
        dragonball = 'z';

    // Không tốt
    const items = getItems(),
        goSportsTeam = true;
        dragonball = 'z';

    // Tốt
    const items = getItems();
    const goSportsTeam = true;
    const dragonball = 'z';
    ```

  - [13.3](#13.3) <a name='13.3'></a> Gôm nhóm biến theo `const`s và `let`s.

    ```javascript
    // Không tốt
    let i, len, dragonball,
        items = getItems(),
        goSportsTeam = true;

    // Không tốt
    let i;
    const items = getItems();
    let dragonball;
    const goSportsTeam = true;
    let len;

    // Tốt
    const goSportsTeam = true;
    const items = getItems();
    let dragonball;
    let i;
    let length;
    ```

  - [13.4](#13.4) <a name='13.4'></a> Khai báo biến khi cần thiết và đặt chúng ở đúng nơi.

  > `let` và `const` là `block scoped` và không phải `function scoped.`

    ```javascript
    // Tốt
    function() {
      test();
      console.log('doing stuff..');

      //..other stuff..

      const name = getName();

      if (name === 'test') {
        return false;
      }

      return name;
    }

    // Không tốt -  hàm không cần thiết
    function(hasName) {
      const name = getName();

      if (!hasName) {
        return false;
      }

      this.setFirstName(name);

      return true;
    }

    // good
    function(hasName) {
      if (!hasName) {
        return false;
      }

      const name = getName();
      this.setFirstName(name);

      return true;
    }
    ```

**[⬆ Trở lại đầu trang](#table-of-contents)**


## Hoisting

  - [14.1](#14.1) <a name='14.1'></a> `var` được khai báo trước ở đầu trong pham vi của biến hoặc hàm. `const` và `let` được dùng với một khái niệm mới [Temporal Dead Zones (TDZ)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone_and_errors_with_let). [typeof is no longer safe](http://es-discourse.com/t/why-typeof-is-no-longer-safe/15).

    ```javascript
    function example() {
      console.log(notDefined); // => ReferenceError
    }

    // Khai báo một biến sau khai biến đó đã được gọi,
    // trong trường hợp này biến sẽ không `hoisted`
    function example() {
      console.log(declaredButNotAssigned); // => undefined
      var declaredButNotAssigned = true;
    }

    // Biến được khai báo ở đầu
    function example() {
      let declaredButNotAssigned;
      console.log(declaredButNotAssigned); // => undefined
      declaredButNotAssigned = true;
    }

    // sử dụng `const` and `let`
    function example() {
      console.log(declaredButNotAssigned); // => throws a ReferenceError
      console.log(typeof declaredButNotAssigned); // => throws a ReferenceError
      const declaredButNotAssigned = true;
    }
    ```

  - [14.2](#14.2) <a name='14.2'></a> `Anonymous function` được khai báo bằng một biến.

    ```javascript
    function example() {
      console.log(anonymous); // => undefined

      anonymous(); // => TypeError anonymous is not a function

      var anonymous = function() {
        console.log('anonymous function expression');
      };
    }
    ```

  - [14.3](#14.3) <a name='14.3'></a> `Named Function expressions` - Việc thông báo này hoạt động bằng tên hàm. Kết quả như ví dụ trước.

    ```javascript
    function example() {
      console.log(named); // => undefined

      named(); // => TypeError named is not a function

      superPower(); // => ReferenceError superPower is not defined

      var named = function superPower() {
        console.log('Flying');
      };
    }

    // Kết quả giống như khi dùng tên hàm
    // trùng với tên biến
    function example() {
      console.log(named); // => undefined

      named(); // => TypeError named is not a function

      var named = function named() {
        console.log('named');
      }
    }
    ```

  - [14.4](#14.4) <a name='14.4'></a> `Function declarations` -  Đối với hàm mà không có các giá trị đầu vào cho biến.

    ```javascript
    function example() {
      superPower(); // => Flying

      function superPower() {
        console.log('Flying');
      }
    }
    ```

  - [JavaScript Scoping & Hoisting](http://www.adequatelygood.com/2010/2/JavaScript-Scoping-and-Hoisting/) by [Ben Cherry](http://www.adequatelygood.com/).

**[⬆ Trở lại đầu trang](#table-of-contents)**


## Comparison Operators & Equality

  - [15.1](#15.1) <a name='15.1'></a> Sử dụng `===` và `!==` thay cho `==` và `!=`.
  - [15.2](#15.2) <a name='15.2'></a> Khi dùng `if` các loại đối tượng sẽ được chuyển đổi sang kiểu `Boolean`:

    + **Objects** chuyển thành **true**
    + **Undefined** chuyển thành **false**
    + **Null** chuyển thành **false**
    + **Booleans** chuyển thành **the value of the boolean**
    + **Numbers** chuyển thành **false** Nếu **+0, -0, or NaN**, ngược lại **true**
    + **Strings** chuyển thành **false** Nếu là chuỗi rổng `''`, ngược lại **true**

    ```javascript
    if ([0]) {
      // true
      // `array` là `object`, `objects` chuyển thành true
    }
    ```

  - [15.3](#15.3) <a name='15.3'></a> Sử dụng ngắn gọn.

    ```javascript
    // Không tốt
    if (name !== '') {
      // ...stuff...
    }

    // Tốt
    if (name) {
      // ...stuff...
    }

    // Không tốt
    if (collection.length > 0) {
      // ...stuff...
    }

    // Tốt
    if (collection.length) {
      // ...stuff...
    }
    ```

  - [15.4](#15.4) <a name='15.4'></a>[Truth Equality and JavaScript](http://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/#more-2108) by Angus Croll.

**[⬆ Trở lại đầu trang](#table-of-contents)**


## Blocks

  - [16.1](#16.1) <a name='16.1'></a> Sử dụng `{}`.

    ```javascript
    // Không tốt
    if (test)
      return false;

    // Tốt
    if (test) return false;

    // Tốt
    if (test) {
      return false;
    }

    // Không tốt
    function() { return false; }

    // Tốt
    function() {
      return false;
    }
    ```

  - [16.2](#16.2) <a name='16.2'></a> Nếu dùng nhiều câu điều kiện `if` và `else`, đặt `else` cùng dòng với dấu `}` của `if`.

    ```javascript
    // Không tốt
    if (test) {
      thing1();
      thing2();
    }
    else {
      thing3();
    }

    // Tốt
    if (test) {
      thing1();
      thing2();
    } else {
      thing3();
    }
    ```


**[⬆ Trở lại đầu trang](#table-of-contents)**


## Comments

  - [17.1](#17.1) <a name='17.1'></a> Sử dụng `/** ... */` khi cần chú thích nhiều. Nên mô tả đầy đủ như `types`, `values` của nhiều tham số, giá trị trả về là gì.

    ```javascript
    // Không tốt
    // make() returns a new element
    // based on the passed in tag name
    //
    // @param {String} tag
    // @return {Element} element
    function make(tag) {

      // ...stuff...

      return element;
    }

    // Tốt
    /**
     * make() returns a new element
     * based on the passed in tag name
     *
     * @param {String} tag
     * @return {Element} element
     */
    function make(tag) {

      // ...stuff...

      return element;
    }
    ```

  - [17.2](#17.2) <a name='17.2'></a> Sử dụng `//` khi chú thích một dòng duy nhất. Cách một dòng đối với câu lệnh phía trước khi sử dụng `//` để chú thích.

    ```javascript
    // Không tốt
    const active = true;  // is current tab

    // Tốt
    // is current tab
    const active = true;

    // Tốt
    function getType() {
      console.log('fetching type...');
      // set the default type to 'no type'
      const type = this._type || 'no type';

      return type;
    }

    // Tốt
    function getType() {
      console.log('fetching type...');

      // set the default type to 'no type'
      const type = this._type || 'no type';

      return type;
    }

    // Tốt
    function getType() {
      // set the default type to 'no type'
      const type = this._type || 'no type';

      return type;
    }
    ```

  - [17.3](#17.3) <a name='17.3'></a> Thêm tiền tố phía trước `FIXME` hoặc `TODO` để những người trong cùng một team có thể dể đọc hiểu code. `FIXME -- need to figure this out` hoặc `TODO -- need to implement`.

  - [17.4](#17.4) <a name='17.4'></a> Use `// FIXME:` to annotate problems.

    ```javascript
    class Calculator extends Abacus {
      constructor() {
        super();

        // FIXME: shouldn't use a global here
        total = 0;
      }
    }
    ```

  - [17.5](#17.5) <a name='17.5'></a> Dùng `// TODO:` chú thích cách giải quyết vấn đề.

    ```javascript
    class Calculator extends Abacus {
      constructor() {
        super();

        // TODO: total should be configurable by an options param
        this.total = 0;
      }
    }
    ```

**[⬆ Trở lại đầu trang](#table-of-contents)**


## Whitespace

  - [18.1](#18.1) <a name='18.1'></a> Dùng 2 `spaces` thay vì 4.

    ```javascript
    // Không tốt
    function() {
    ∙∙∙∙const name;
    }

    // Tốt
    function() {
    ∙const name;
    }

    // Tốt
    function() {
    ∙∙const name;
    }
    ```

  - [18.2](#18.2) <a name='18.2'></a> Thêm dấu cách trước `{`.

    ```javascript
    // Không tốt
    function test(){
      console.log('test');
    }

    // Tốt
    function test() {
      console.log('test');
    }

    // Không tốt
    dog.set('attr',{
      age: '1 year',
      breed: 'Bernese Mountain Dog',
    });

    // Tốt
    dog.set('attr', {
      age: '1 year',
      breed: 'Bernese Mountain Dog',
    });
    ```

  - [18.3](#18.3) <a name='18.3'></a> Thêm 1 khoảng cách sau các câu điều kiện (`if`, `while` ...). Không nên có khoảng cách trong `Function Arguments`.

    ```javascript
    // Không tốt
    if(isJedi) {
      fight ();
    }

    // Tốt
    if (isJedi) {
      fight();
    }

    // Không tốt
    function fight () {
      console.log ('Swooosh!');
    }

    // Tốt
    function fight() {
      console.log('Swooosh!');
    }
    ```

  - [18.4](#18.4) <a name='18.4'></a> Đối với các phép tính (`+`, `-`, `*`, `/` ...) thêm khoảng cách trước và sau các phép tính đó.

    ```javascript
    // Không tốt
    const x=y+5;

    // Tốt
    const x = y + 5;
    ```

  - [18.5](#18.5) <a name='18.5'></a> Thêm một dòng trống khi `file` đó kết thúc.

    ```javascript
    // Không tốt
    (function(global) {
      // ...stuff...
    })(this);
    ```

    ```javascript
    // Không tốt
    (function(global) {
      // ...stuff...
    })(this);↵
    ↵
    ```

    ```javascript
    // Tốt
    (function(global) {
      // ...stuff...
    })(this);↵
    ```

  - [18.6](#18.6) <a name='18.6'></a> Sử dụng `indentation` khi gọi nhiều `methods` cùng một lúc.

    ```javascript
    // Không tốt
    $('#items').find('.selected').highlight().end().find('.open').updateCount();

    // Không tốt
    $('#items').
      find('.selected').
        highlight().
        end().
      find('.open').
        updateCount();

    // Tốt
    $('#items')
      .find('.selected')
        .highlight()
        .end()
      .find('.open')
        .updateCount();

    // Không tốt
    const leds = stage.selectAll('.led').data(data).enter().append('svg:svg').class('led', true)
        .attr('width', (radius + margin) * 2).append('svg:g')
        .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
        .call(tron.led);

    // Tốt
    const leds = stage.selectAll('.led')
        .data(data)
      .enter().append('svg:svg')
        .classed('led', true)
        .attr('width', (radius + margin) * 2)
      .append('svg:g')
        .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
        .call(tron.led);
    ```

  - [18.7](#18.7) <a name='18.7'></a> Thêm một dòng trống sau `{}` và bắt đầu một câu lệnh tiếp theo.

    ```javascript
    // Không tốt
    if (foo) {
      return bar;
    }
    return baz;

    // Tốt
    if (foo) {
      return bar;
    }

    return baz;

    // Không tốt
    const obj = {
      foo() {
      },
      bar() {
      },
    };
    return obj;

    // Tốt
    const obj = {
      foo() {
      },

      bar() {
      },
    };

    return obj;

    // Không tốt
    const arr = [
      function foo() {
      },
      function bar() {
      },
    ];
    return arr;

    // Tốt
    const arr = [
      function foo() {
      },

      function bar() {
      },
    ];

    return arr;
    ```

  - [18.8](#18.8) <a name='18.8'></a> Trong một `blocks` không được thêm dòng trống.

    ```javascript
    // Không tốt
    function bar() {

      console.log(foo);

    }

    // Không tốt
    if (baz) {

      console.log(qux);
    } else {
      console.log(foo);

    }

    // Tốt
    function bar() {
      console.log(foo);
    }

    // Tốt
    if (baz) {
      console.log(qux);
    } else {
      console.log(foo);
    }
    ```


**[⬆ Trở lại đầu trang](#table-of-contents)**

## Commas

  - [19.1](#19.1) <a name='19.1'></a> Dùng `,` ở đầu: **Không**

    ```javascript
    // Không tốt
    const story = [
        once
      , upon
      , aTime
    ];

    // Tốt
    const story = [
      once,
      upon,
      aTime,
    ];

    // Không tốt
    const hero = {
        firstName: 'Ada'
      , lastName: 'Lovelace'
      , birthYear: 1815
      , superPower: 'computers'
    };

    // Tốt
    const hero = {
      firstName: 'Ada',
      lastName: 'Lovelace',
      birthYear: 1815,
      superPower: 'computers',
    };
    ```

  - [19.2](#19.2) <a name='19.2'></a> Thêm `trailing comma`: **Yup.**

    ```javascript
    // Không tốt - git diff without trailing comma
    const hero = {
         firstName: 'Florence',
    -    lastName: 'Nightingale'
    +    lastName: 'Nightingale',
    +    inventorOf: ['coxcomb graph', 'modern nursing']
    };

    // Tốt - git diff with trailing comma
    const hero = {
         firstName: 'Florence',
         lastName: 'Nightingale',
    +    inventorOf: ['coxcomb chart', 'modern nursing'],
    };

    // Không tốt
    const hero = {
      firstName: 'Dana',
      lastName: 'Scully'
    };

    const heroes = [
      'Batman',
      'Superman'
    ];

    // Tốt
    const hero = {
      firstName: 'Dana',
      lastName: 'Scully',
    };

    const heroes = [
      'Batman',
      'Superman',
    ];
    ```

**[⬆ Trở lại đầu trang](#table-of-contents)**


## Semicolons

  - [20.1](#20.1) <a name='20.1'></a> **Yup.**

    ```javascript
    // Không tốt
    (function() {
      const name = 'Skywalker'
      return name
    })()

    // Tốt
    (() => {
      const name = 'Skywalker';
      return name;
    })();

    // Tốt (Trong trường hợp này `;` để tránh xung đột giữa 2 `IIFEs` liên tiếp nhau.)
    ;(() => {
      const name = 'Skywalker';
      return name;
    })();
    ```

    [Read more](http://stackoverflow.com/questions/7365172/semicolon-before-self-invoking-function/7365214%237365214).

**[⬆ Trở lại đầu trang](#table-of-contents)**


## Type Casting & Coercion

  - [21.1](#21.1) <a name='21.1'></a> Áp dụng các kiểu chuyển đổi.
  - [21.2](#21.2) <a name='21.2'></a> Strings:

    ```javascript
    //  => this.reviewScore = 9;

    // Không tốt
    const totalScore = this.reviewScore + '';

    // Tốt
    const totalScore = String(this.reviewScore);
    ```

  - [21.3](#21.3) <a name='21.3'></a> Numbers: Sử dụng `Number` cho `casting` và `parseInt` luôn luôn dùng với `radix` khi chuyển từ chuỗi sang số.

    ```javascript
    const inputValue = '4';

    // Không tốt
    const val = new Number(inputValue);

    // Không tốt
    const val = +inputValue;

    // Không tốt
    const val = inputValue >> 0;

    // Không tốt
    const val = parseInt(inputValue);

    // Tốt
    const val = Number(inputValue);

    // Tốt
    const val = parseInt(inputValue, 10);
    ```

  - [21.4](#21.4) <a name='21.4'></a> Sử dụng `Bitshift` [Lý do](http://jsperf.com/coercion-vs-casting/3), và chú thích đầy đủ khi dùng Bitshift

    ```javascript
    // Tốt
    /**
     * parseInt was the reason my code was slow.
     * Bitshifting the String to coerce it to a
     * Number made it a lot faster.
     */
    const val = inputValue >> 0;
    ```

  - [21.5](#21.5) <a name='21.5'></a> **Ghi chú:** Cẩn thận khi dùng `Bitshift`. `Bitshift` luôn trả về 32-bit integer ([source](http://es5.github.io/#x11.7)). Khi số lớn hơn `32 bits` sẽ dẫn đến một số lỗi. [Thảo luận](https://github.com/airbnb/javascript/issues/109). Số lớn nhất `32-bit Int` là 2,147,483,647:

    ```javascript
    2147483647 >> 0 //=> 2147483647
    2147483648 >> 0 //=> -2147483648
    2147483649 >> 0 //=> -2147483647
    ```

  - [21.6](#21.6) <a name='21.6'></a> Booleans:

    ```javascript
    const age = 0;

    // Không tốt
    const hasAge = new Boolean(age);

    // Tốt
    const hasAge = Boolean(age);

    // Tốt
    const hasAge = !!age;
    ```

**[⬆ Trở lại đầu trang](#table-of-contents)**


## Naming Conventions

  - [22.1](#22.1) <a name='22.1'></a> Nên mô tả đầy đủ một tên hàm hay biến.

    ```javascript
    // Không tốt
    function q() {
      // ...stuff...
    }

    // Tốt
    function query() {
      // ..stuff..
    }
    ```

  - [22.2](#22.2) <a name='22.2'></a> Dùng cách đặt tên `camelCase` cho đối tượng, biến, hàm, kế thừa ... .

    ```javascript
    // Không tốt
    const OBJEcttsssss = {};
    const this_is_my_object = {};
    function c() {}

    // Tốt
    const thisIsMyObject = {};
    function thisIsMyFunction() {}
    ```

  - [22.3](#22.3) <a name='22.3'></a> Dùng kiểu `PascalCase` để đặt tên cho `Class` hoặc `Constructor`.

    ```javascript
    // Không tốt
    function user(options) {
      this.name = options.name;
    }

    const bad = new user({
      name: 'nope',
    });

    // Tốt
    class User {
      constructor(options) {
        this.name = options.name;
      }
    }

    const good = new User({
      name: 'yup',
    });
    ```

  - [22.4](#22.4) <a name='22.4'></a> Dùng `_` ở đầu tên biến khi nó là loại `private`.

    ```javascript
    // Không tốt
    this.__firstName__ = 'Panda';
    this.firstName_ = 'Panda';

    // Tốt
    this._firstName = 'Panda';
    ```

  - [22.5](#22.5) <a name='22.5'></a> Sử dụng `Arrow function` (`=>`) hoặc `Function#bind`.

    ```javascript
    // Không tốt
    function foo() {
      const self = this;
      return function() {
        console.log(self);
      };
    }

    // Không tốt
    function foo() {
      const that = this;
      return function() {
        console.log(that);
      };
    }

    // Tốt
    function foo() {
      return () => {
        console.log(this);
      };
    }
    ```

  - [22.6](#22.6) <a name='22.6'></a> Khi `export` một `class` duy nhất, thì tên `file` nên trùng với tên `class`.
    ```javascript
    // file contents
    class CheckBox {
      // ...
    }
    export default CheckBox;

    // in some other file
    // Không tốt
    import CheckBox from './checkBox';

    // Không tốt
    import CheckBox from './check_box';

    // Tốt
    import CheckBox from './CheckBox';
    ```

  - [22.7](#22.7) <a name='22.7'></a> Dùng kiểu `camelCase` khi `export` mặc định hàm. Tên `file` và tên hàm nên tương tự nhau.

    ```javascript
    function makeStyleGuide() {
    }

    export default makeStyleGuide;
    ```

  - [22.8](#22.8) <a name='22.8'></a> Dùng kiểu `PascalCase` khi `export` một `singleton` / `function library` / `bare object`.

    ```javascript
    const AirbnbStyleGuide = {
      es6: {
      }
    };

    export default AirbnbStyleGuide;
    ```


**[⬆ Trở lại đầu trang](#table-of-contents)**


## Accessors

  - [23.1](#23.1) <a name='23.1'></a> `Accessor functions` cho các thuộc tính không cần thiết.
  - [23.2](#23.2) <a name='23.2'></a> Khi tạo một `accessor functions` sử dụng cấu trúc `getVal()` và `setVal('hello')`.

    ```javascript
    // Không tốt
    dragon.age();

    // Tốt
    dragon.getAge();

    // Không tốt
    dragon.age(25);

    // Tốt
    dragon.setAge(25);
    ```

  - [23.3](#23.3) <a name='23.3'></a> Nếu thuộc tính là `boolean`, sử dụng `isVal()` và `hasVal()`.

    ```javascript
    // Không tốt
    if (!dragon.age()) {
      return false;
    }

    // Tốt
    if (!dragon.hasAge()) {
      return false;
    }
    ```

  - [23.4](#23.4) <a name='23.4'></a> Có thể ghi đè 2 hàm mặc định `get()` và `set()`, nhưng phải có tính nhất quán.

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

**[⬆ Trở lại đầu trang](#table-of-contents)**


## Events

  - [24.1](#24.1) <a name='24.1'></a> Dùng `hash value` thay vì `raw value` khi truyền các tham số vào `events`.

    ```javascript
    // Không tốt
    $(this).trigger('listingUpdated', listing.id);

    ...

    $(this).on('listingUpdated', function(e, listingId) {
      // do something with listingId
    });
    ```

    prefer:

    ```javascript
    // Tốt
    $(this).trigger('listingUpdated', { listingId: listing.id });

    ...

    $(this).on('listingUpdated', function(e, data) {
      // do something with data.listingId
    });
    ```

  **[⬆ Trở lại đầu trang](#table-of-contents)**


## jQuery

  - [25.1](#25.1) <a name='25.1'></a> Thêm tiền tố `$` khi biến đó được tạo ra từ `jQuery`.

    ```javascript
    // Không tốt
    const sidebar = $('.sidebar');

    // Tốt
    const $sidebar = $('.sidebar');

    // Tốt
    const $sidebarBtn = $('.sidebar-btn');
    ```

  - [25.2](#25.2) <a name='25.2'></a> `Cache jQuery`.

    ```javascript
    // Không tốt
    function setSidebar() {
      $('.sidebar').hide();

      // ...stuff...

      $('.sidebar').css({
        'background-color': 'pink'
      });
    }

    // Tốt
    function setSidebar() {
      const $sidebar = $('.sidebar');
      $sidebar.hide();

      // ...stuff...

      $sidebar.css({
        'background-color': 'pink'
      });
    }
    ```

  - [25.3](#25.3) <a name='25.3'></a> Sử dụng kiểu `Cascading` `$('.sidebar ul')` hoặc là kiểu `parent` > `child` `$('.sidebar > ul')`. [jsPerf](http://jsperf.com/jquery-find-vs-context-sel/16)
  - [25.4](#25.4) <a name='25.4'></a> Sử dụng `find`.

    ```javascript
    // Không tốt
    $('ul', '.sidebar').hide();

    // Không tốt
    $('.sidebar').find('ul').hide();

    // Tốt
    $('.sidebar ul').hide();

    // Tốt
    $('.sidebar > ul').hide();

    // Tốt
    $sidebar.find('ul').hide();
    ```

**[⬆ Trở lại đầu trang](#table-of-contents)**


## ECMAScript 5 Compatibility

  - [26.1](#26.1) <a name='26.1'></a> Refer to [Kangax](https://twitter.com/kangax/)'s ES5 [compatibility table](http://kangax.github.io/es5-compat-table/).

**[⬆ Trở lại đầu trang](#table-of-contents)**

## ECMAScript 6 Styles

  - [27.1](#27.1) <a name='27.1'></a> `ES6` Features.

1. [Arrow Functions](#arrow-functions)
1. [Classes](#constructors)
1. [Object Shorthand](#es6-object-shorthand)
1. [Object Concise](#es6-object-concise)
1. [Object Computed Properties](#es6-computed-properties)
1. [Template Strings](#es6-template-literals)
1. [Destructuring](#destructuring)
1. [Default Parameters](#es6-default-parameters)
1. [Rest](#es6-rest)
1. [Array Spreads](#es6-array-spreads)
1. [Let and Const](#references)
1. [Iterators and Generators](#iterators-and-generators)
1. [Modules](#modules)

**[⬆ Trở lại đầu trang](#table-of-contents)**

## Testing

  - [28.1](#28.1) <a name="28.1"></a> **Yup.**

    ```javascript
    function () {
      return true;
    }
    ```

  - [28.2](#28.2) <a name="28.2"></a> **No, but seriously**:
   - Luôn luôn viết `test`!
   - Chia nhỏ hàm.
   - Cẩn thận khi dùng `stubs` và `mocks`.
   - [`mocha`](https://www.npmjs.com/package/mocha) và [`tape`](https://www.npmjs.com/package/tape) được sử dụng ở `Airbnb`.
   - Bảo đảm các `test` đều chạy tốt (100% coverage).
   - Khi sửa chửa mộ lỗi nào đó nên viết lại `test`. 

**[⬆ Trở lại đầu trang](#table-of-contents)**


## Performance

  - [On Layout & Web Performance](http://www.kellegous.com/j/2013/01/26/layout-performance/)
  - [String vs Array Concat](http://jsperf.com/string-vs-array-concat/2)
  - [Try/Catch Cost In a Loop](http://jsperf.com/try-catch-in-loop-cost)
  - [Bang Function](http://jsperf.com/bang-function)
  - [jQuery Find vs Context, Selector](http://jsperf.com/jquery-find-vs-context-sel/13)
  - [innerHTML vs textContent for script text](http://jsperf.com/innerhtml-vs-textcontent-for-script-text)
  - [Long String Concatenation](http://jsperf.com/ya-string-concat)
  - Loading...

**[⬆ Trở lại đầu trang](#table-of-contents)**


## Resources

**Learning ES6**

  - [Draft ECMA 2015 (ES6) Spec](https://people.mozilla.org/~jorendorff/es6-draft.html)
  - [ExploringJS](http://exploringjs.com/)
  - [ES6 Compatibility Table](https://kangax.github.io/compat-table/es6/)
  - [Comprehensive Overview of ES6 Features](http://es6-features.org/)

**Nên đọc**

  - [Standard ECMA-262](http://www.ecma-international.org/ecma-262/6.0/index.html)

**Tools**

  - Code Style Linters
    + [ESlint](http://eslint.org/) - [Airbnb Style .eslintrc](https://github.com/airbnb/javascript/blob/master/linters/.eslintrc)
    + [JSHint](http://jshint.com/) - [Airbnb Style .jshintrc](https://github.com/airbnb/javascript/blob/master/linters/jshintrc)
    + [JSCS](https://github.com/jscs-dev/node-jscs) - [Airbnb Style Preset](https://github.com/jscs-dev/node-jscs/blob/master/presets/airbnb.json)

**Các `Styles Guide` khác**

  - [Google JavaScript Style Guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml)
  - [jQuery Core Style Guidelines](http://contribute.jquery.org/style-guide/js/)
  - [Principles of Writing Consistent, Idiomatic JavaScript](https://github.com/rwaldron/idiomatic.js)

**`Styles` Khác**

  - [Naming this in nested functions](https://gist.github.com/cjohansen/4135065) - Christian Johansen
  - [Conditional Callbacks](https://github.com/airbnb/javascript/issues/52) - Ross Allen
  - [Popular JavaScript Coding Conventions on Github](http://sideeffect.kr/popularconvention/#javascript) - JeongHoon Byun
  - [Multiple var statements in JavaScript, not superfluous](http://benalman.com/news/2012/05/multiple-var-statements-javascript/) - Ben Alman

**Further Reading**

  - [Understanding JavaScript Closures](http://javascriptweblog.wordpress.com/2010/10/25/understanding-javascript-closures/) - Angus Croll
  - [Basic JavaScript for the impatient programmer](http://www.2ality.com/2013/06/basic-javascript.html) - Dr. Axel Rauschmayer
  - [You Might Not Need jQuery](http://youmightnotneedjquery.com/) - Zack Bloom & Adam Schwartz
  - [ES6 Features](https://github.com/lukehoban/es6features) - Luke Hoban
  - [Frontend Guidelines](https://github.com/bendc/frontend-guidelines) - Benjamin De Cock

**Sách**

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
  - [JSBooks](http://jsbooks.revolunet.com/) - Julien Bouquillon
  - [Third Party JavaScript](https://www.manning.com/books/third-party-javascript) - Ben Vinegar and Anton Kovalyov
  - [Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript](http://amzn.com/0321812182) - David Herman
  - [Eloquent JavaScript](http://eloquentjavascript.net/) - Marijn Haverbeke
  - [You Don't Know JS: ES6 & Beyond](http://shop.oreilly.com/product/0636920033769.do) - Kyle Simpson

**Blogs**

  - [DailyJS](http://dailyjs.com/)
  - [JavaScript Weekly](http://javascriptweekly.com/)
  - [JavaScript, JavaScript...](http://javascriptweblog.wordpress.com/)
  - [Bocoup Weblog](https://bocoup.com/weblog)
  - [Adequately Good](http://www.adequatelygood.com/)
  - [NCZOnline](https://www.nczonline.net/)
  - [Perfection Kills](http://perfectionkills.com/)
  - [Ben Alman](http://benalman.com/)
  - [Dmitry Baranovskiy](http://dmitry.baranovskiy.com/)
  - [Dustin Diaz](http://dustindiaz.com/)
  - [nettuts](http://code.tutsplus.com/?s=javascript)

**Podcasts**

  - [JavaScript Jabber](https://devchat.tv/js-jabber/)


**[⬆ Trở lại đầu trang](#table-of-contents)**

## In the Wild

  Danh sách các trang wed sử dụng `style guide` của Airbnb.

  - **Aan Zee**: [AanZee/javascript](https://github.com/AanZee/javascript)
  - **Adult Swim**: [adult-swim/javascript](https://github.com/adult-swim/javascript)
  - **Airbnb**: [airbnb/javascript](https://github.com/airbnb/javascript)
  - **Apartmint**: [apartmint/javascript](https://github.com/apartmint/javascript)
  - **Avalara**: [avalara/javascript](https://github.com/avalara/javascript)
  - **Billabong**: [billabong/javascript](https://github.com/billabong/javascript)
  - **Blendle**: [blendle/javascript](https://github.com/blendle/javascript)
  - **ComparaOnline**: [comparaonline/javascript](https://github.com/comparaonline/javascript-style-guide)
  - **Compass Learning**: [compasslearning/javascript-style-guide](https://github.com/compasslearning/javascript-style-guide)
  - **DailyMotion**: [dailymotion/javascript](https://github.com/dailymotion/javascript)
  - **Digitpaint** [digitpaint/javascript](https://github.com/digitpaint/javascript)
  - **Ecosia**: [ecosia/javascript](https://github.com/ecosia/javascript)
  - **Evernote**: [evernote/javascript-style-guide](https://github.com/evernote/javascript-style-guide)
  - **ExactTarget**: [ExactTarget/javascript](https://github.com/ExactTarget/javascript)
  - **Expensify** [Expensify/Style-Guide](https://github.com/Expensify/Style-Guide/blob/master/javascript.md)
  - **Flexberry**: [Flexberry/javascript-style-guide](https://github.com/Flexberry/javascript-style-guide)
  - **Gawker Media**: [gawkermedia/javascript](https://github.com/gawkermedia/javascript)
  - **General Electric**: [GeneralElectric/javascript](https://github.com/GeneralElectric/javascript)
  - **GoodData**: [gooddata/gdc-js-style](https://github.com/gooddata/gdc-js-style)
  - **Grooveshark**: [grooveshark/javascript](https://github.com/grooveshark/javascript)
  - **How About We**: [howaboutwe/javascript](https://github.com/howaboutwe/javascript-style-guide)
  - **Huballin**: [huballin/javascript](https://github.com/huballin/javascript)
  - **HubSpot**: [HubSpot/javascript](https://github.com/HubSpot/javascript)
  - **Hyper**: [hyperoslo/javascript-playbook](https://github.com/hyperoslo/javascript-playbook/blob/master/style.md)
  - **InfoJobs**: [InfoJobs/JavaScript-Style-Guide](https://github.com/InfoJobs/JavaScript-Style-Guide)
  - **Intent Media**: [intentmedia/javascript](https://github.com/intentmedia/javascript)
  - **Jam3**: [Jam3/Javascript-Code-Conventions](https://github.com/Jam3/Javascript-Code-Conventions)
  - **JSSolutions**: [JSSolutions/javascript](https://github.com/JSSolutions/javascript)
  - **Kinetica Solutions**: [kinetica/javascript](https://github.com/kinetica/Javascript-style-guide)
  - **Mighty Spring**: [mightyspring/javascript](https://github.com/mightyspring/javascript)
  - **MinnPost**: [MinnPost/javascript](https://github.com/MinnPost/javascript)
  - **MitocGroup**: [MitocGroup/javascript](https://github.com/MitocGroup/javascript)
  - **ModCloth**: [modcloth/javascript](https://github.com/modcloth/javascript)
  - **Money Advice Service**: [moneyadviceservice/javascript](https://github.com/moneyadviceservice/javascript)
  - **Muber**: [muber/javascript](https://github.com/muber/javascript)
  - **National Geographic**: [natgeo/javascript](https://github.com/natgeo/javascript)
  - **National Park Service**: [nationalparkservice/javascript](https://github.com/nationalparkservice/javascript)
  - **Nimbl3**: [nimbl3/javascript](https://github.com/nimbl3/javascript)
  - **Orion Health**: [orionhealth/javascript](https://github.com/orionhealth/javascript)
  - **Peerby**: [Peerby/javascript](https://github.com/Peerby/javascript)
  - **Razorfish**: [razorfish/javascript-style-guide](https://github.com/razorfish/javascript-style-guide)
  - **reddit**: [reddit/styleguide/javascript](https://github.com/reddit/styleguide/tree/master/javascript)
  - **REI**: [reidev/js-style-guide](https://github.com/reidev/js-style-guide)
  - **Ripple**: [ripple/javascript-style-guide](https://github.com/ripple/javascript-style-guide)
  - **SeekingAlpha**: [seekingalpha/javascript-style-guide](https://github.com/seekingalpha/javascript-style-guide)
  - **Shutterfly**: [shutterfly/javascript](https://github.com/shutterfly/javascript)
  - **Springload**: [springload/javascript](https://github.com/springload/javascript)
  - **StudentSphere**: [studentsphere/javascript](https://github.com/studentsphere/guide-javascript)
  - **Target**: [target/javascript](https://github.com/target/javascript)
  - **TheLadders**: [TheLadders/javascript](https://github.com/TheLadders/javascript)
  - **T4R Technology**: [T4R-Technology/javascript](https://github.com/T4R-Technology/javascript)
  - **VoxFeed**: [VoxFeed/javascript-style-guide](https://github.com/VoxFeed/javascript-style-guide)
  - **Weggo**: [Weggo/javascript](https://github.com/Weggo/javascript)
  - **Zillow**: [zillow/javascript](https://github.com/zillow/javascript)
  - **ZocDoc**: [ZocDoc/javascript](https://github.com/ZocDoc/javascript)

**[⬆ Trở lại đầu trang](#table-of-contents)**

## Translation

  `Style Guide` đã được chuyển đổi sang một số ngôn ngữ khác:

  - ![br](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Brazil.png) **Brazilian Portuguese**: [armoucar/javascript-style-guide](https://github.com/armoucar/javascript-style-guide)
  - ![bg](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Bulgaria.png) **Bulgarian**: [borislavvv/javascript](https://github.com/borislavvv/javascript)
  - ![ca](https://raw.githubusercontent.com/fpmweb/javascript-style-guide/master/img/catala.png) **Catalan**: [fpmweb/javascript-style-guide](https://github.com/fpmweb/javascript-style-guide)
  - ![cn](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/China.png) **Chinese (Simplified)**: [sivan/javascript-style-guide](https://github.com/sivan/javascript-style-guide)
  - ![tw](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Taiwan.png) **Chinese (Traditional)**: [jigsawye/javascript](https://github.com/jigsawye/javascript)
  - ![fr](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/France.png) **French**: [nmussy/javascript-style-guide](https://github.com/nmussy/javascript-style-guide)
  - ![de](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Germany.png) **German**: [timofurrer/javascript-style-guide](https://github.com/timofurrer/javascript-style-guide)
  - ![it](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Italy.png) **Italian**: [sinkswim/javascript-style-guide](https://github.com/sinkswim/javascript-style-guide)
  - ![jp](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Japan.png) **Japanese**: [mitsuruog/javacript-style-guide](https://github.com/mitsuruog/javacript-style-guide)
  - ![kr](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/South-Korea.png) **Korean**: [tipjs/javascript-style-guide](https://github.com/tipjs/javascript-style-guide)
  - ![pl](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Poland.png) **Polish**: [mjurczyk/javascript](https://github.com/mjurczyk/javascript)
  - ![ru](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Russia.png) **Russian**: [uprock/javascript](https://github.com/uprock/javascript)
  - ![es](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Spain.png) **Spanish**: [paolocarrasco/javascript-style-guide](https://github.com/paolocarrasco/javascript-style-guide)
  - ![th](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Thailand.png) **Thai**: [lvarayut/javascript-style-guide](https://github.com/lvarayut/javascript-style-guide)

## The JavaScript Style Guide Guide

  - [Reference](https://github.com/airbnb/javascript/wiki/The-JavaScript-Style-Guide-Guide)

## Chat With Us About JavaScript

  - Find us on [gitter](https://gitter.im/airbnb/javascript).

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

**[⬆ Trở lại đầu trang](#table-of-contents)**

## Amendments

We encourage you to fork this guide and change the rules to fit your team's style guide. Below, you may list some amendments to the style guide. This allows you to periodically update your style guide without having to deal with merge conflicts.

# };