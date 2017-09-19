---
---

## propTypes & defaultProps

- How to define `propTypes`, `defaultProps`, `contextTypes`, etc...

```javascript
import React, { Component, PropTypes } from 'react';

const propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string,
};

const defaultProps = {
  text: 'Hello World',
};

class Link extends Component {
  static methodsAreOk() {
    return true;
  };

  render() {
    return <a href={this.props.url} data-id={this.props.id}>{this.props.text}</a>
  }
}

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
```