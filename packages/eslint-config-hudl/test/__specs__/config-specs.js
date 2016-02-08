const path = require('path');
const CLIEngine = require('eslint').CLIEngine;
const defaultConfig = require('../..');
const baseConfig = require('../../base');
const legacyConfig = require('../../legacy');

describe.only('configs', function() {
  function lintDirectory(directory, config, errorCount, warningCount) {
    const cli = new CLIEngine({
      extensions: ['.js', '.jsx'],
      useEslintrc: false,
      baseConfig: config,
    });
    const report = cli.executeOnFiles([directory]);

    expect(report).to.have.property('errorCount', errorCount);
    expect(report).to.have.property('warningCount', warningCount);
  }

  describe('should handle static property declarations', function() {
    const directory = path.resolve(__dirname, 'fixtures/static-props');
    it('as valid using default (hudl) config', function() {
      lintDirectory(directory, defaultConfig, 0, 0);
    });
    it('with errors using base (hudl/base) config', function() {
      lintDirectory(directory, baseConfig, 1, 0);
    });
    it('with errors using legacy (hudl/legacy) config', function() {
      lintDirectory(directory, legacyConfig, 1, 0);
    });
  });
});
