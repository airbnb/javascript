var parseArgs = require('./parseArgs');

var LEVELS = ['error', 'warn', 'off'];

module.exports = function severity() {
  var args = process.argv.slice(2);
  var parsedArgs = parseArgs(args);

  return function sev(rule, level) {
    if (parsedArgs.warn[rule]) {
      return 'warn';
    }

    if (parsedArgs.error[rule]) {
      return 'error';
    }

    if (parsedArgs.off[rule]) {
      return 'off';
    }

    if (LEVELS.includes(level)) {
      return level;
    }

    return 'error';
  }
}
