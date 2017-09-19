---
---

## Ordering

- Ordering for `class extends React.Component`:

1. `constructor`
1. optional `static` methods
1. `getChildContext`
1. `componentWillMount`
1. `componentDidMount`
1. `componentWillReceiveProps`
1. `shouldComponentUpdate`
1. `componentWillUpdate`
1. `componentDidUpdate`
1. `componentWillUnmount`
1. *clickHandlers or eventHandlers* like `_onClickSubmit()` or `_onChangeDescription()`
1. *getter methods for `render`* like `_getSelectReason()` or `_getFooterContent()`
1. *Optional render methods* like `_renderNavigation()` or `_renderProfilePicture()`
1. `render`
