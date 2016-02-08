/* eslint no-param-reassign:[2, {"props":false}] */

const path = require('path');
const fs = require('fs-extra');
const ConfigDiff = require('./diffs/ConfigDiff');
const diffsToRun = require('./diffs/diffs-to-run');


function writeDocs(testOutputDir, clearDirectory) {
  const defaultOutputDir = path.resolve('./docs');
  const renderOutputDir = path.resolve(defaultOutputDir, 'comparisons');
  const writeOutputDir = path.resolve(testOutputDir || defaultOutputDir, 'comparisons');

  if (clearDirectory !== false) {
    fs.removeSync(writeOutputDir);
  }

  return Promise.all(diffsToRun.map(function(diffOptions) {
    const outputFilename = diffOptions.outputName + '.md';
    diffOptions.renderOutputPath = path.resolve(renderOutputDir, outputFilename);
    diffOptions.writeOutputPath = path.resolve(writeOutputDir, outputFilename);
    return new ConfigDiff()
      .writeDiff(diffOptions)
      .then(function(message) {
        console.log(message); // eslint-disable-line no-console
      });
  }));
}

module.exports = writeDocs;
