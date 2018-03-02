#! /usr/bin/env node

const fs = require('fs');
const yargs = require('yargs');
yargs.array('exclude');
const argv = yargs.argv;
const sh = require('shelljs');
const path = require('path');
const tslintPath = argv.tslint || path.join(__dirname, 'tslint.json');
const tempLintFile = '.tsconfig.lint.temp.json';
const excludeOption = argv.exclude ? ` -e ${argv.exclude.join(' -e ')}` : '';
let tsConfigPath = argv.tsconfig || 'tsconfig.json';

const handleError = (message, code) => {console.log(message || ''); process.exit(code || 1); };
const templateCommandErrorMessage = (cmd) => `The command:\n\n${cmd}\n\ndid not work. See logs above for details`;

process.on('exit', (code) => {
    sh.rm('-rf', tempLintFile);
});

try {
    if (argv.all) {
        fs.writeFileSync(tempLintFile, JSON.stringify(require(path.join(__dirname, 'tsconfig.lint.json'))));
        tsConfigPath = tempLintFile;
    }
} catch (e) {
    console.log(e);
    console.log('Something went wrong. See logs above for details.');
    process.exit(1);
}

const command = `node node_modules/tslint/bin/tslint -p ${tsConfigPath} -c ${tslintPath}${excludeOption} --fix`;
console.log(`Executing the following command:\n${command}`);
const currentCmd = sh.exec(command);
if (currentCmd.code !== 0) {
    handleError(templateCommandErrorMessage(currentCmd), currentCmd.code);
}
