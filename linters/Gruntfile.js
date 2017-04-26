'use strict';

module.exports = function(grunt) {
    // Intelligently lazy-loads tasks and plugins as needed at runtime.
    require('jit-grunt')(grunt, { versioncheck: 'grunt-version-check' })();

    grunt.initConfig({
        eslint: {
            target: ['tests/**/*.js']
        },
    });

    grunt.registerTask(
        'lint',
        'Validate code syntax.',
        ['eslint']
    );

    grunt.registerTask(
        'default',
        ['lint']
    );
};
