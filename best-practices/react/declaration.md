---
---

## Declaration

- Do not use displayName for naming components, instead name the component by reference.

```javascript
// bad
export default React.createClass({
  displayName: 'ReservationCard',
  // stuff goes here
});

// good
const ReservationCard = React.createClass({
  // stuff goes here
});
export default ReservationCard;
```
