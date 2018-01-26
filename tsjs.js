#! /usr/bin/env node

const fs = require('fs');
const yargs = require('yargs');
yargs.array('exclude');
const argv = yargs.argv;
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

const tslintCommand = `node node_modules/tslint/bin/tslint --project ${tsConfigPath} --config ${tslintPath} ${excludeOption} --fix`;
console.log(`Executing the following tslint command:\n${tslintCommand}`);

sh.exec(tslintCommand, () => {
    console.log('\nLint fix completed.');

    if (argv.all) {
        sh.rm('-rf', tempLintFile);
    }

    process.exit();
});
