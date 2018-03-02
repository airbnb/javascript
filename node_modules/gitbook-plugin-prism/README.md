Gitbook Plugin for [Prism](http://prismjs.com/)
==============

[![NPM](http://img.shields.io/npm/v/gitbook-plugin-prism.svg?style=flat-square&label=npm)](https://www.npmjs.com/package/gitbook-plugin-prism)

##### Before
<img src='http://i.imgur.com/cbk6O52.png'>

##### After
<img src='http://i.imgur.com/S1YMlee.png'>

## Usage

Add the plugin to your `book.json`, and disable default GitBook code highlighting:

```json
{
  "plugins": ["prism", "-highlight"]
}
```

## Options


### `css`
Override default styles.  All css files must reside in the same folder.

```json
"pluginsConfig": {
  "prism": {
    "css": [
      "prismjs/themes/prism-solarizedlight.css"
    ]
  }
}
```

### `lang`
Support non-standard syntax prefixes by aliasing existing prefixes.

```json
"pluginsConfig": {
  "prism": {
    "lang": {
      "flow": "typescript"
    }
  }
}
```

### `ignore`
Due to other plugins using code block notion to denote other functionality, you can ignore certain langs

```json
"pluginsConfig": {
  "prism": {
    "ignore": [
      "mermaid",
      "eval-js"
    ]
  }
}
```

### Prism Themes

[https://github.com/PrismJS/prism](https://github.com/PrismJS/)

#### Okaidia <small>`prismjs/themes/prism-okaidia.css`</small>
![Okaidia](http://i.imgur.com/uhe0yQY.png)

#### Solarized Light <small>`prismjs/themes/prism-solarizedlight.css`</small>
![Solarized Light](http://i.imgur.com/71sT5XB.png)

#### Tomorrow <small>`prismjs/themes/prism-tomorrow.css`</small>
![Tomorrow](http://i.imgur.com/Li3AHXU.png)

#### Dark <small>`prismjs/themes/prism-dark.css`</small>
![Dark](http://i.imgur.com/vA5P6fy.png)

#### Coy <small>`prismjs/themes/prism-coy.css`</small>
![Coy](http://i.imgur.com/kSJP9tq.png)

## Atelierbram Themes

[https://github.com/atelierbram/syntax-highlighting](https://github.com/atelierbram/syntax-highlighting)

#### Base16 Ocean Dark <small>`syntax-highlighting/assets/css/prism/prism-base16-ocean.dark.css`</small>
![Base16 Ocean Dark](http://i.imgur.com/REJCdrA.png)

#### Google Light <small>`syntax-highlighting/assets/css/prism/prism-base16-google.light.css`</small>
![Google Light](http://i.imgur.com/TyBYmSu.png)

#### Xonokai <small>`syntax-highlighting/assets/css/prism/prism-xonokai.css`</small>
![Google Light](http://i.imgur.com/fPjEEv8.png)

## Credits

Originally based on https://github.com/spricity/google_code_prettify.

## License

Apache 2
