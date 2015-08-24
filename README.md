# lint-trap

This package provides Virtru's .eslintrc as an extensible shared config.

## Usage

1. `npm install --save-dev virtru/lint-trap`
2. add `"extends": "lint-trap"` to your .eslintrc

See the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

A basic .eslintrc file will look like this:
```json
{
  "extends": "lint-trap"
}
```

You may need to add repo specific environments and globals, but this is all you need for a brand new repo.

### Environment Variables

There are two environment variables that you can set to determine what rules are ran.

`REPO_ENVIRONMENT`
Either `'dev'` or `'ci'`. The default is `'dev'`. CI rules are for things we don't want to be allowed into a repo, but allow for convenience during development.

`REPO_TYPE`
Either `'frontend'` or `'backend'`. The default is `'frontend'`. Currently only is used when `REPO_ENVIRONMENT` is set to `'ci'`