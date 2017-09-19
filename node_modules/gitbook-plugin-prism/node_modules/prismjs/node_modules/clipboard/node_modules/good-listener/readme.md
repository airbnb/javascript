# good-listener

[![Build Status](http://img.shields.io/travis/zenorocha/good-listener/master.svg?style=flat)](https://travis-ci.org/zenorocha/good-listener)

> A more versatile way of adding & removing event listeners.

![good listener](https://cloud.githubusercontent.com/assets/398893/10718224/dfc25f6c-7b2a-11e5-9d3d-75b35e8603c8.jpg)

## Install

You can get it on npm.

```
npm install good-listener --save
```

Or bower, too.

```
bower install good-listener --save
```

If you're not into package management, just [download a ZIP](https://github.com/zenorocha/good-listener/archive/master.zip) file.

## Setup

###### Node (Browserify)

```js
var listen = require('good-listener');
```

###### Browser (Standalone)

```html
<script src="dist/good-listener.js"></script>
```

## Usage

### Add an event listener

By passing a string selector [(see full demo)](https://github.com/zenorocha/good-listener/blob/master/demo/selector.html).

```js
listen('.btn', 'click', function(e) {
    console.log(e);
});
```

Or by passing a HTML element [(see full demo)](https://github.com/zenorocha/good-listener/blob/master/demo/node.html).

```js
var logo = document.getElementById('logo');

listen(logo, 'click', function(e) {
    console.log(e);
});
```

Or by passing a list of HTML elements [(see full demo)](https://github.com/zenorocha/good-listener/blob/master/demo/nodelist.html).

```js
var anchors = document.querySelectorAll('a');

listen(anchors, 'click', function(e) {
    console.log(e);
});
```

### Remove an event listener

By calling the `destroy` function that returned from previous operation [(see full demo)](https://github.com/zenorocha/good-listener/blob/master/demo/destroy.html).

```js
var listener = listen('.btn', 'click', function(e) {
    console.log(e);
});

listener.destroy();
```

## Browser Support

| <img src="https://clipboardjs.com/assets/images/chrome.png" width="48px" height="48px" alt="Chrome logo"> | <img src="https://clipboardjs.com/assets/images/edge.png" width="48px" height="48px" alt="Edge logo"> | <img src="https://clipboardjs.com/assets/images/firefox.png" width="48px" height="48px" alt="Firefox logo"> | <img src="https://clipboardjs.com/assets/images/ie.png" width="48px" height="48px" alt="Internet Explorer logo"> | <img src="https://clipboardjs.com/assets/images/opera.png" width="48px" height="48px" alt="Opera logo"> | <img src="https://clipboardjs.com/assets/images/safari.png" width="48px" height="48px" alt="Safari logo"> |
|:---:|:---:|:---:|:---:|:---:|:---:|
| Latest ✔ | Latest ✔ | Latest ✔ | 9+ ✔ | Latest ✔ | Latest ✔ |

## License

[MIT License](http://zenorocha.mit-license.org/) © Zeno Rocha
