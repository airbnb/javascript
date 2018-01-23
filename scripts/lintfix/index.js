const argv = require('yargs').argv;
const sh = require('shelljs');
const tslintConfig = 'tslint.json';
const tsConfig = argv.tsconfig || 'tsconfig.json';

sh.exec(`node node_modules/tslint/bin/tslint --project ${tsConfig} --config ${tslintConfig} --fix`, () => {
    console.log('\nLint fix completed.');
    process.exit();
});
