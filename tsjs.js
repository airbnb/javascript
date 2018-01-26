#! /usr/bin/env node

const fs = require('fs');
const argv = require('yargs').argv;
argv.array('exclude');
const sh = require('shelljs');
const path = require('path');
const tslintPath = argv.tslint || path.join(__dirname, 'tslint.json');
const tempLintFile = '.tsconfig.lint.temp.json';
const excludeOption = argv.exclude ? `--exclude ${argv.exclude.join(' ')}` : '';
let tsConfigPath = argv.tsconfig || 'tsconfig.json';

if (argv.all) {
    try {
        fs.writeFileSync(tempLintFile, JSON.stringify(require(path.join(__dirname, 'tsconfig.lint.json'))));
        tsConfigPath = tempLintFile;
    } catch (e) {
        console.log(e);
        console.log('Something went wrong. See logs above for details.');
        sh.rm('-rf', tempLintFile);
    }
}

console.log(`Using following files for linting:\ntslint file: ${tslintPath}\ntsconfig file: ${tsConfigPath}`);

sh.exec(`node node_modules/tslint/bin/tslint --project ${tsConfigPath} --config ${tslintPath} ${excludeOption} --fix`, () => {
    console.log('\nLint fix completed.');

    if (argv.all) {
        sh.rm('-rf', tempLintFile);
    }

    process.exit();
});
