## `.eslintrc`

Our `.eslintrc` requires the following NPM packages:

```
npm install --save-dev \
  eslint-config-airbnb \
  eslint \
  babel-eslint \
  eslint-plugin-react
```

## Rubymine setup
Follow these [instructions](https://www.jetbrains.com/ruby/help/using-javascript-code-quality-tools.html#installESLint).
In step 4 of "Activating and configuring ESLint" the ESLint Package is `./node_modules/eslint`

## Atom setup
Follow these [instructions](https://atom.io/packages/linter-eslint)

## Vim setup
Use eslint.vim from [this repo](https://github.com/scrooloose/syntastic/tree/master/syntax_checkers/javascript).

Sample .vimrc setup
```
call vundle#begin()

Plugin 'gmarik/Vundle.vim'
Plugin 'scrooloose/syntastic'

call vundle#end()

let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0
let g:syntastic_javascript_checkers = ["eslint"]
let g:syntastic_javascript_eslint_exec="your/path/to/lendinghome-monolith/ops/node_modules/.bin/eslint"

```

## Sublime setup
Follow these [instructions](https://github.com/roadhump/SublimeLinter-eslint)
