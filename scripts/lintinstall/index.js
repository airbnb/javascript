const fs = require('fs');
const path = require('path');
const tslintConfig = require(`${__dirname}/../../tslint.json`);
const tsConfigLint = require(`${__dirname}/../../tsconfig.lint.json`);
const projectRoot = /tsjs$/.test(process.cwd()) ? process.cwd() : `${__dirname.split('node_modules')[0]}`;

// tslint:disable-next-line
console.log('Copying lint files to project root...');

[
    {name: 'tslint.json', content: tslintConfig},
    {name: 'tsconfig.lint.json', content: tsConfigLint},
].forEach((file) => fs.writeFileSync(path.join(projectRoot, file.name), `${JSON.stringify(file.content, null, 2)}\n`));

// tslint:disable-next-line
console.log(`Linting files copied at ${projectRoot}`);

process.exit();
