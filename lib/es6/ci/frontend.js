'use strict';

let frontend = require('../../ci/frontend');
module.exports = Object.assign({}, frontend, { extends: 'lint-trap/lib/es6/ci/common' });
