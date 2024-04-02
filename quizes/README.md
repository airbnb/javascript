# Javascript Quiz

*Let's Test your existing knowledge*

> **Note**: To effectively solve these quizzes, it is essential to possess a thorough understanding of JavaScript and to have thoroughly reviewed all related concepts.

> **Solutions**: Go through the solution folder to cross check your answer


## Guess The Outputs
1) *Based on IIFE*
```javascript

(function don(){
    "use strict"
     x= 10;
    console.log(x);
})();

```
<b>a) 10 <br></b>
<b>b) Type Error</b> <br>
<b>c) Reference Error</b> <br>
<b>d) null</b> <br>
<hr/>

2) *Based on strings*

```javascript

console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());

```

<b>a) Type Error <br></b>
<b>b) bananaa</b> <br>
<b>c) banana</b> <br>
<b>d) Reference Error</b> <br>
<hr/>

3) *Based on datatypes*

```javascript

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId)

```

<b>a) true <br></b>
<b>b) True</b> <br>
<b>c) False</b> <br>
<b>d) false</b> <br>
<hr/>

4) *Based on datatypes*

```javascript

let x = 0.1;
let y = 0.2;
let z = 0.3;

console.log(x + y == z)

```

<b>a) true <br></b>
<b>b) True</b> <br>
<b>c) False</b> <br>
<b>d) false</b> <br>
<hr/>

5) *Based on datatypes*

```javascript

console.log(typeof typeof null);


```

<b>a) undefined <br></b>
<b>b) string</b> <br>
<b>c) null</b> <br>
<b>d) object</b> <br>
<hr/>

6) *Based on datatypes*

```javascript

let a = isNaN("10");
let b = isNaN("Hello");
let c = isNaN(10);

console.log(a * ( b - c ) );


```

<b>a) true <br></b>
<b>b) false</b> <br>
<b>c) 1</b> <br>
<b>d) 0</b> <br>
<hr/>

7) *Based on hoisting*

```javascript

sum(3,2);

const sum = (x,y) => {
    console.log(x + y);
}


```

<b>a) 5 <br></b>
<b>b) error</b> <br>
<b>c) null</b> <br>
<b>d) undefined</b> <br>
<hr/>



8) *Based on functions*

```javascript

function add(a,b){
     return a + b;
}

function add(a,b,c){
    return a + b + c;
}

console.log(add(2,3));
console.log(add(2,3,5));


```

<b>a) NaN 10<br></b>
<b>b) error</b> <br>
<b>c) 10 NaN</b> <br>
<b>d) 5 10</b> <br>
<hr/>

9) *Based on Arrays*

```javascript

const arr = [1, 2, 3, 4, 5];
const result = arr.filter(x => x % 2 === 0);
console.log(result);


```

<b>a) 2,4<br></b>
<b>b) [2, 4]</b> <br>
<b>c) [ 2, 4 ]</b> <br>
<b>d) [2, 4, 6, 8, 10]</b> <br>
<hr/>

10) *Based on Objects*

```javascript

let objA = { porp1: 42 };
let objB = objA;
objB = {}
console.log(objA);


```

<b>a) {}<br></b>
<b>b) {porp1: 42}</b> <br>
<b>c) {prop1: 42}</b> <br>
<b>d) null</b> <br>
<hr/>









