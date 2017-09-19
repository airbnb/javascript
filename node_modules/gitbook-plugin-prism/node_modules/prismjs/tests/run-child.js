"use strict";

var TestCase = require("./helper/test-case");
var path = require("path");
var argv = require("yargs").argv;

if (argv.language) {
	process.on('message', function (data) {
		if (data.filePath) {
			try {
				if (path.extname(data.filePath) === '.test') {
					TestCase.runTestCase(argv.language, data.filePath);
				} else {
					TestCase.runTestsWithHooks(argv.language, require(data.filePath));
				}
				process.send({success: true});
			} catch (e) {
				process.send({error: JSON.stringify(e)});
			}
		}
	});
}