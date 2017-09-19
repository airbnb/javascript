"use strict";

var TestDiscovery = require("./helper/test-discovery");
var path = require("path");
var argv = require("yargs").argv;
var child_process = require("child_process");

var testSuite;
if (argv.language) {
	testSuite = TestDiscovery.loadSomeTests(__dirname + "/languages", argv.language);
} else {
	// load complete test suite
	testSuite = TestDiscovery.loadAllTests(__dirname + "/languages");
}

// define tests for all tests in all languages in the test suite
for (var language in testSuite) {
	if (!testSuite.hasOwnProperty(language)) {
		continue;
	}

	(function (language, testFiles) {
		describe("Testing language '" + language + "'", function () {
			this.timeout(10000);

			// Each set of tests runs in its own child process
			var child;
			before(function () {
				child = child_process.fork(__dirname + "/run-child.js", ['--language=' + language], {
					stdio: 'inherit'
				});
			});

			after(function () {
				child.kill();
			});

			testFiles.forEach(
				function (filePath) {
			        var fileName = path.basename(filePath, path.extname(filePath));

			        it("– should pass test case '" + fileName + "'",
			            function (done) {

				            child.removeAllListeners('message');
			                child.on('message', function (o) {
				                // We have to delay the call,
				                // otherwise the first message is received
				                // over and over again.
				                setTimeout(function() {
					                if (o.error) {
						                throw JSON.parse(o.error);
					                } else if (o.success) {
						                done();
					                }
				                }, 1);
			                });
				            child.send({
					            filePath: filePath
				            });
			            }
			        );
				}
			);
		});
	})(language, testSuite[language]);
}