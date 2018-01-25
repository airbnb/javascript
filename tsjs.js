#! /usr/bin/env node

const argv = require('yargs').argv;
const sh = require('shelljs');
const path = require('path');
const tslintPath = argv.tslint || path.join(__dirname, 'tslint.json');
const tsConfigPath = argv.tsconfig || path.join(__dirname, 'tsconfig.lint.json');

console.log(`Using these files for linting:\ntslint file: ${tslintPath}\ntsconfig file: ${tsConfigPath}`);

sh.exec(`node node_modules/tslint/bin/tslint --project ${tsConfigPath} --config ${tslintPath} --fix`, () => {
    console.log('\nLint fix completed.');
    process.exit();
});
