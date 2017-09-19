# Performance Testing

The following performance testing tools are available within the browser console.

  ```js

  // Start and Stop the Measurement
  ReactPerf.start()
  ReactPerf.stop()

  // Prints the overall time taken. If no argument's passed, defaults to all the measurements from the last recording. This prints a nicely formatted table in the console, like so:
  ReactPerf.printInclusive(measurements)

  // "Exclusive" times don't include the times taken to mount the components: processing props, getInitialState, call componentWillMount and componentDidMount, etc.
  ReactPerf.printExclusive(measurements)

  // "Wasted" time is spent on components that didn't actually render anything, e.g. the render stayed the same, so the DOM wasn't touched.
  ReactPerf.printWasted(measurements)  

  // Prints the underlying DOM manipulations, e.g. "set innerHTML" and "remove".
  ReactPerf.printDOM(measurements)  

  // Get the measurements array from the last start-stop session.
  ReactPerf.getLastMeasurements()
  ```

  ## Example

  ```js

  ReactPerf.start()
  // Do some action on component in view (click toggle, button, etc...)
  ReactPerf.stop()
  ReactPerf.printDOM()

  | (index)  | data-reactid | type               | args                         |
  |----------|--------------|--------------------|------------------------------|
  | 0        | "503"        | "update attribute" | "["className","knob"]"       |
  | 1        | "503"        | "update attribute" | "["className","knob slide"]" |

  ```
