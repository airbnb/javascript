var defaultArgs = {
  warn: {},
  error: {},
  off: {},
};

function parseFlag(flag, arg) {
  var values = arg.slice(flag.length + 1);
  return values.split(',').reduce((o, val) => {
    o[val] = true;
    return o;
  }, {})
}

module.exports = function parseArgs(args) {
  if (!args.length) return defaultArgs;
  return args.reduce((o, arg) => {
    if (arg.includes('--warn')) {
      o.warn = parseFlag('--warn', arg);
    }

    if (arg.includes('--error')) {
      o.error = parseFlag('--error', arg);
    }

    if (arg.includes('--off')) {
      o.off = parseFlag('--off', arg);
    }

    return o;
  }, defaultArgs);
};
