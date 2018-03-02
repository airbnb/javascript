---
---

# Unit Testing

All work is ran through a unit testing process. 

KarmaJS tests should be ran & pass locally before commiting code to Stash. 

[Enzyme](https://github.com/airbnb/enzyme) is used rather than [React Test Utilities](https://facebook.github.io/react/docs/test-utils.html) for a better test API.

The KarmaJS tests are also ran on [Bamboo](https://tools.sapient.com/bamboo/browse/CGDMP-CPPL) when merging work into the development branch.

```bash
# Run test with PhantomJS
$ npm test

# Run test with Chrome
$ npm run test:watch
```


# Code Coverage

All components are ran through [isparta](https://github.com/douglasduteil/isparta) for code coverage reporting. All components should have 90% or higher code coverage.

To see the code coverage report run the following:

```bash
$ npm run coverage
```
