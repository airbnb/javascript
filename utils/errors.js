exports.handleError = (message = 'Something went wrong. See logs above for details.', code = 1, error) => {
    if (error) {
        console.log(error);
    }
    console.log(message);
    process.exit(code);
};

exports.getCmdErrorMessage = (cmd = '') => `
The command:

${cmd}

did not work. See logs above for details
`;
