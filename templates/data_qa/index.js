'use strict';

const _ = require('lodash');
const async = require('async');
const common = require('common').init();
const Email = common.models.Email;

async.auto({
	test: done => {
		Email.findOne({ }).exec(done);
	}
}, (err, results) => {
	if (err) {
		console.error(err);
	}
	else {
		console.log('Done', results);
	}
	process.exit();
});