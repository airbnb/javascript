const fs = require('fs');
const tslintConfig = require(`${__dirname}/../../tslint.json`);
const tsConfigLint = require(`${__dirname}/../../tsconfig.lint.json`);
const projectRoot = `${__dirname.split('node_modules')[0]}`;

// tslint:disable-next-line
console.log('Copying lint files to project root...');

[
    {name: 'tslint.json', content: tslintConfig},
    {name: 'tsconfig.lint.json', content: tsConfigLint},
].forEach((file) => fs.writeFileSync(`${projectRoot}${file.name}`, JSON.stringify(file.content, null, 2)));

// tslint:disable-next-line
console.log(`Linting files copied at ${projectRoot}`);

process.exit();
