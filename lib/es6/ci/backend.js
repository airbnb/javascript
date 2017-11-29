'use strict';

const backend = require('../../ci/backend');
module.exports = Object.assign({}, backend, { extends: 'lint-trap/lib/es6/ci/common' });
