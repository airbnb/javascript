module.exports = {
  'rules': {
    // disallow trailing commas in object literals
    'comma-dangle': [2, 'never'],
    // specify the maximum depth that blocks can be nested
    'max-depth': [0, 4],
    // limits the number of parameters that can be used in the function declaration.
    'max-params': [0, 3],
    // specify the maximum number of statement allowed in a function
    'max-statements': [0, 10],
    // disallow use of bitwise operators
    'no-bitwise': 0,
    // disallow use of unary operators, ++ and --
    'no-plusplus': 0
  }
};
