const sh = require('shelljs');
const {getCmdErrorMessage, handleError} = require('./errors');

exports.executeCommand = (cmd) => {
    console.log(`Executing the following command:\n${cmd}`);
    const cmdResult = sh.exec(cmd);
    if (cmdResult.code !== 0) {
        handleError(getCmdErrorMessage(cmd), cmdResult.code);
    }
};
