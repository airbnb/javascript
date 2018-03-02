# css-what [![Build Status](https://secure.travis-ci.org/fb55/css-what.svg?branch=master)](http://travis-ci.org/fb55/css-what)

a CSS selector parser

## Example

```js
require('css-what')('foo[bar]:baz')

~> [ [ { type: 'tag', name: 'foo' },
    { type: 'attribute',
      name: 'bar',
      action: 'exists',
      value: '',
      ignoreCase: false },
    { type: 'pseudo',
      name: 'baz',
      data: null } ] ]
```

## API

__`CSSwhat(selector, options)` - Parses `str`, with the passed `options`.__

The function returns a two-dimensional array. The first array represents selectors separated by commas (eg. `sub1, sub2`), the second contains the relevant tokens for that selector. Possible token types are:

name | attributes | example | output
---- | ---------- | ------- | ------
`tag`| `name`    | `div`   | `{ type: 'tag', name: 'div' }`
`universal`| -   | `*`     | `{ type: 'universal' }`
`pseudo`| `name`, `data`|`:name(data)`| `{ type: 'pseudo', name: 'name', data: 'data' }`
`pseudo`| `name`, `data`|`:name`| `{ type: 'pseudo', name: 'name', data: null }`
`attribute`|`name`, `action`, `value`, `ignoreCase`|`[attr]`|`{ type: 'attribute', name: 'attr', action: 'exists', value: '', ignoreCase: false }`
`attribute`|`name`, `action`, `value`, `ignoreCase`|`[attr=val]`|`{ type: 'attribute', name: 'attr', action: 'equals', value: 'val', ignoreCase: false }`
`attribute`|`name`, `action`, `value`, `ignoreCase`|`[attr^=val]`|`{ type: 'attribute', name: 'attr', action: 'start', value: 'val', ignoreCase: false }`
`attribute`|`name`, `action`, `value`, `ignoreCase`|`[attr$=val]`|`{ type: 'attribute', name: 'attr', action: 'end', value: 'val', ignoreCase: false }`

//TODO complete list

__Options:__

- `xmlMode`: When enabled, tag names will be case-sensitive (meaning they won't be lowercased).

---

License: BSD-like
