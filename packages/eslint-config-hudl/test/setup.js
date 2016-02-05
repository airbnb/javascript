// This is required before every test to remove boilerplate includes.

const chai = require('chai');
const sinon = require('sinon');

// Add chai plugins
chai.use(require('sinon-chai'));
chai.use(require('chai-as-promised'));
// chai.use(require('./plugins/shelljs-exec'));

global.expect = chai.expect;
global.sinon = sinon;
