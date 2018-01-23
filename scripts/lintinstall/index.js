const fs = require('fs');
const tslintConfig = require(`${__dirname}/../../tslint.json`);

fs.writeFileSync(`${process.cwd()}/tslint.json`, JSON.stringify(tslintConfig, null, 2));
process.exit();
