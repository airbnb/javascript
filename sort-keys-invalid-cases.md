# Cases not to use the sort-keys rule

## Below cases are strongly recommended not to use the sort-keys rule

### Properties that have meaning in order

```javascript
// IntervalPicker of neocore-ui-components
// year, month, day, hour, minute, second are interval units in order which should not break.
const propsTypes = {
  value: PropTypes.shape({
      year: PropTypes.number,
      month: PropTypes.number,
      day: PropTypes.number,
      hour: PropTypes.number,
      minute: PropTypes.number,
      second: PropTypes.number,
    })
}

// viewMetaServiceHelper.js of neocore-ui-components
// sort options should be in order by importance
const config = {
    sortAsc: view.sortAsc,
    sortAscTwo: view.sortAscTwo,
    sortAscThree: view.sortAscThree,
    sortBy: view.sort_by,
    sortByTwo: view.sort_by_two,
    sortByThree: view.sort_by_three,
}

// recurrenceHelper.js of neocore-ui-components
// Day shorthands should be in day order.
const WEEKDAY_MAPPING = {
  FULL: {
    Mon: 'Monday',
    Tue: 'Tuesday',
    Wed: 'Wednesday',
    Thu: 'Thursday',
    Fri: 'Friday',
    Sat: 'Saturday',
    Sun: 'Sunday',
  },
  SHORT: { Mon: 'M', Tue: 'Tu', Wed: 'W', Thu: 'Th', Fri: 'F', Sat: 'Sa', Sun: 'Su' },
};

```

### Group your shorthand properties at the beginning of your object declaration

One of [Airbnb's best practice](https://github.com/airbnb/javascript/#objects--grouped-shorthand).

```javascript
const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};

// good
const obj = {
  anakinSkywalker,
  lukeSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
};
```

### Pair of properties

* width, height

```javascript
// Icon of ui-components-predix
// bad
const propTypes = {
  alt: PropTypes.string,
  height: PropTypes.number,
  name: PropTypes.string,
  src: PropTypes.string,
  type: PropTypes.oneOf(validTypes).isRequired,
  width: PropTypes.number,
};

// good
const propTypes = {
  src: PropTypes.string,
  type: PropTypes.oneOf(validTypes).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
  name: PropTypes.string,
};
```

* start, end

```javascript
// bad
const foo = {
  svmx_duration,
  svmx_end_datetime,
  svmx_start_datetime,
}

// good
const foo = {
  svmx_start_datetime,
  svmx_end_datetime,
  svmx_duration,
}
```

* prev, next

```javascript
// PaginationPager of ui-components-predix

// bad
const iconNames = {
  next: "px-nav:next",
  prev: "px-nav:back",
}

// good
const iconNames = {
  prev: "px-nav:back",
  next: "px-nav:next",
}
```

A pair of properties should be paired together and in pair order.

## Below cases are recommended not to use the sort-keys rule

### id property should be put at the first since mostly they are most importance

```javascript
// bad
const props = {
  children,
  icon,
  id,
  name,
}

// good
const props = {
  id,
  name,
  icon,
  children,
}
```

### key property should be put at the first since they are important for React

```javascript
// IntervalPicker of neocore-ui-components
// bad
const sliderProps = {
  handleValueChange: this.handleValueChange,
  key,
  label,
  max,
  unit,
  value,
};

// good
const sliderProps = {
  key,
  label,
  value,
  max,
  unit,
  handleValueChange: this.handleValueChange,
};
```

### Request parameters

```javascript
// restService of neocore-ui-components
// bad
const createParams = {
  body,
  headers,
  method,
}

// good
const createParams = {
  method,
  headers,
  body,
}
```

### Redux reducers

```javascript
// RecordDetailView/actions.js of neocore-ui-components

// bad
const reducer = handleActions({
  [CREATE_RECORD_FULFILLED]: …,
  [LOAD_RECORD_FULFILLED]: …,
  [RECORD_PENDING]: …,
})

// good
// the action sequence is clear, RECORD_PENDING -> LOAD_RECORD_FULFILLED -> CREATE_RECORD_FULFILLED
const reducer = handleActions({
  [RECORD_PENDING]: …,
  [LOAD_RECORD_FULFILLED]: …,
  [CREATE_RECORD_FULFILLED]: …,
})

// Other samples
// bad
// HIDE_SPINNER, RESET_SPINNER, SHOW_SPINNER

// good
// SHOW_SPINNER, HIDE_SPINNER, RESET_SPINNER

// bad
// IMAGE_UPLOAD_FULFILLED, IMAGE_UPLOAD_PENDING

// good
// IMAGE_UPLOAD_PENDING, IMAGE_UPLOAD_FULFILLED
```

Keep action in process order could increase readability.

### Redux action

```javascript

//bad
dispatch({payload: '', type: ''})

// good
dispatch({type: '', payload: ''})

```

type is a required property for redux action which should be placed at the top. From [official samples](https://redux.js.org/basics/actions), type is always placed at the first order.

### Notification

```javascript
// App/actions.js of neocore-ui-components
//bad
showAutoDismissNotice({
  message: notification.detail,
  messageTitle: notification.title,
  type: notification.type || NoticeTypes.INFORMATION,
})

// good
showAutoDismissNotice({
  type: notification.type || NoticeTypes.INFORMATION,
  messageTitle: notification.title,
  message: notification.detail,
})
```

type is a required field should be placed at the first order, messageTitle should be the second order to show the title, message should be åthe last to show the message detail.

### Required field should be put at the first

See samples for Redux action, Notification.
