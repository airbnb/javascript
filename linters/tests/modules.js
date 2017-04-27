/* eslint no-unused-vars: 0 */

// https://github.com/thenerdery/javascript-standards#modules--use-them
// eslint: (no known rule enforcing this exists)
// bad
const NerderyStyleGuide0 = require('./NerderyStyleGuide');

// good
import NerderyStyleGuide1 from './NerderyStyleGuide';

// https://github.com/thenerdery/javascript-standards#modules--no-wildcard

// bad
import * as NerderyStyleGuide2 from './NerderyStyleGuide';

// good
import NerderyStyleGuide3 from './NerderyStyleGuide';

// https://github.com/thenerdery/javascript-standards#modules--no-export-from-import
// eslint: no-duplicate-imports
// bad
// filename es6.js
export { es6 as default } from './NerderyStyleGuide';

// good
// filename es6.js
import { es6 } from './NerderyStyleGuide';
export default es6;
