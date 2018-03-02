module.exports = function(karma) {
    karma.set({
        plugins: ['karma-browserify', 'karma-chai', 'karma-mocha', 'karma-phantomjs-launcher'],

        frameworks: ['browserify', 'chai', 'mocha'],

        files: [
            'src/**/*.js',
            'test/**/*.js'
        ],

        preprocessors: {
            'src/**/*.js' : ['browserify'],
            'test/**/*.js': ['browserify']
        },

        browserify: {
            debug: true
        },

        browsers: ['PhantomJS']
    });
}
