#! /usr/bin/env node

const fs = require('fs');
const yargs = require('yargs');
yargs.array('exclude');
const argv = yargs.argv;
const sh = require('shelljs');
const path = require('path');
const {handleError} = require('./utils/errors');
const {executeCommand} = require('./utils/commands');

const tslintPath = path.join(__dirname, 'tslint.json');
const tsfmtPath = path.join(__dirname, 'tsfmt.json');
const tsconfigPath = path.join(__dirname, 'tsconfig.lint.json');
const tempTsLintFile = '.tslint.temp.json';
const tempTsfmtFile = '.tsfmt.temp.json';
const tempTsConfigFile = '.tsconfig.lint.temp.json';
let tsConfigFile = argv.tsconfig || 'tsconfig.json';

const excludeOption = argv.exclude ? ` -e ${argv.exclude.join(' -e ')}` : '';
const excludeOptionArray = argv.exclude || [];

process.on('exit', (code) => {
    sh.rm('-rf', tempTsConfigFile, tempTsfmtFile, tempTsLintFile);
});

try {
    fs.writeFileSync(tempTsfmtFile, JSON.stringify(require(tsfmtPath)));
    fs.writeFileSync(tempTsLintFile, JSON.stringify(require(tslintPath)));
    if (argv.all) {
        const tsConfigLint = require(tsconfigPath);
        tsConfigLint.exclude = [...tsConfigLint.exclude, ...excludeOptionArray];
        fs.writeFileSync(tempTsConfigFile, JSON.stringify(tsConfigLint));
        tsConfigFile = tempTsConfigFile;
    }
} catch (e) {
    console.log(e);
    handleError();
}

[
    `node node_modules/tslint/bin/tslint -p ${tsConfigFile} -c ${tempTsLintFile}${excludeOption} --fix`,
    `node node_modules/typescript-formatter/bin/tsfmt --useTsconfig ${tsConfigFile} --useTsfmt ${tempTsfmtFile} --useTslint ${tempTsLintFile} --no-vscode --no-editorconfig --replace`,
].forEach(executeCommand);
