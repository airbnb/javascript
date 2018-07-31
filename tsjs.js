#! /usr/bin/env node
const path = require('path');
const fs = require('fs');
const yargs = require('yargs');
const {Linter, Configuration} = require('tslint');
const tsfmt = require('typescript-formatter');

yargs.array('exclude');
const argv = yargs.argv;

const tslintPath = path.join(__dirname, 'tslint.json');
const tsfmtPath = path.join(__dirname, 'tsfmt.json');
const tsconfigPath = path.join(__dirname, 'tsconfig.lint.json');
const tempTsLintFile = '.tslint.temp.json';
const tempTsfmtFile = '.tsfmt.temp.json';
const tempTsConfigFile = '.tsconfig.lint.temp.json';
let tsConfigFile = argv.tsconfig || 'tsconfig.json';

const excludeOptionArray = argv.exclude || [];

process.on('exit', () => {
    fs.unlinkSync(tempTsConfigFile);
    fs.unlinkSync(tempTsfmtFile);
    fs.unlinkSync(tempTsLintFile);
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

    const program = Linter.createProgram(tsConfigFile, ".");
    const linter = new Linter({fix: true}, program);

    const files = Linter.getFileNames(program);
    files.forEach((file) => {
        const fileContents = program.getSourceFile(file).getFullText();
        const configuration = Configuration.findConfiguration(tempTsLintFile, file).results;
        linter.lint(file, fileContents, configuration);
    });

    tsfmt.processFiles(files, {
        replace: true,
        tsconfig: true,
        tsconfigFile: tsConfigFile,
        tslint: true,
        tslintFile: tempTsLintFile,
        editorconfig: false,
        vscode: false,
        vscodeFile: null,
        tsfmt: true,
        tsfmtFile: tempTsfmtFile,
    })
        .then(() => console.log('done'));

} catch (e) {
    console.log(e);

    process.exit(1);
}
