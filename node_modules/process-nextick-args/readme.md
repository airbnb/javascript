process-nextick-args
=====

[![Build Status](https://travis-ci.org/calvinmetcalf/process-nextick-args.svg?branch=master)](https://travis-ci.org/calvinmetcalf/process-nextick-args)

```bash
npm install --save process-nextick-args
```

Always be able to pass arguments to process.nextTick, no matter the platform

```js
var nextTick = require('process-nextick-args');

nextTick(function (a, b, c) {
  console.log(a, b, c);
}, 'step', 3,  'profit');
```
