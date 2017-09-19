var listen = require('../src/listen');
var simulant = require('simulant');

describe('good-listener', function() {
    before(function() {
        global.node = document.createElement('div');
        global.node.setAttribute('id', 'foo');
        global.node.setAttribute('class', 'foo');
        document.body.appendChild(global.node);
    });

    after(function() {
        document.body.innerHTML = '';
    });

    describe('listen', function() {
        it('should throw an error since arguments were not passed', function(done) {
            try {
                listen();
            }
            catch(error) {
                assert.equal(error.message, 'Missing required arguments');
                done();
            }
        });

        it('should throw an error since "target" was invalid', function(done) {
            try {
                listen(null, 'click', function() {});
            }
            catch(error) {
                assert.equal(error.message, 'First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
                done();
            }
        });

        it('should throw an error since "type" was invalid', function(done) {
            try {
                listen('.btn', false, function() {});
            }
            catch(error) {
                assert.equal(error.message, 'Second argument must be a String');
                done();
            }
        });

        it('should throw an error since "callback" was invalid', function(done) {
            try {
                listen('.btn', 'click', []);
            }
            catch(error) {
                assert.equal(error.message, 'Third argument must be a Function');
                done();
            }
        });
    });

    describe('listenNode', function() {
        before(function() {
            global.target = document.querySelector('#foo');
            global.spy = sinon.spy(global.target, 'removeEventListener');
        });

        after(function() {
            global.spy.restore();
        });

        it('should add an event listener', function(done) {
            listen(global.target, 'click', function() {
                done();
            });

            simulant.fire(global.target, simulant('click'));
        });

        it('should remove an event listener', function() {
            var listener = listen(global.target, 'click', function() {});

            listener.destroy();
            assert.ok(global.spy.calledOnce);
        });
    });

    describe('listenNodeList', function() {
        before(function() {
            global.targets = document.querySelectorAll('.foo');
            global.spy = sinon.spy(global.targets[0], 'removeEventListener');
        });

        after(function() {
            global.spy.restore();
        });

        it('should add an event listener', function(done) {
            listen(global.targets, 'click', function() {
                done();
            });

            simulant.fire(global.targets[0], simulant('click'));
        });

        it('should remove an event listener', function() {
            var listener = listen(global.targets, 'click', function() {});

            listener.destroy();
            assert.ok(global.spy.calledOnce);
        });
    });

    describe('listenSelector', function() {
        before(function() {
            global.target = document.querySelector('.foo');
            global.spy = sinon.spy(document.body, 'removeEventListener');
        });

        after(function() {
            global.spy.restore();
        });

        it('should add an event listener', function(done) {
            listen('.foo', 'click', function() {
                done();
            });

            simulant.fire(global.target, simulant('click'));
        });

        it('should remove an event listener', function() {
            var listener = listen('.foo', 'click', function() {});

            listener.destroy();
            assert.ok(global.spy.calledOnce);
        });
    });
});
