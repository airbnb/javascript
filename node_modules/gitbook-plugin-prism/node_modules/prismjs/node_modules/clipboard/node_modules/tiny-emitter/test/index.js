var Emitter = require('../index');
var emitter = require('../instance');
var test = require('tape');

test('subscribes to an event', function (t) {
  var emitter = new Emitter();
  emitter.on('test', function () {});

  t.equal(emitter.e.test.length, 1, 'subscribed to event');
  t.end();
});

test('subscribes to an event with context', function (t) {
  var emitter = new Emitter();
  var context = {
    contextValue: true
  };

  emitter.on('test', function () {
    t.ok(this.contextValue, 'is in context');
    t.end();
  }, context);

  emitter.emit('test');
});

test('subscibes only once to an event', function (t) {
  var emitter = new Emitter();

  emitter.once('test', function () {
    t.notOk(emitter.e.test, 'removed event from list');
    t.end();
  });

  emitter.emit('test');
});

test('keeps context when subscribed only once', function (t) {
  var emitter = new Emitter();
  var context = {
    contextValue: true
  };

  emitter.once('test', function () {
    t.ok(this.contextValue, 'is in context');
    t.notOk(emitter.e.test, 'not subscribed anymore');
    t.end();
  }, context);

  emitter.emit('test');
});

test('emits an event', function (t) {
  var emitter = new Emitter();

  emitter.on('test', function () {
    t.ok(true, 'triggered event');
    t.end();
  });

  emitter.emit('test');
});

test('passes all arguments to event listener', function (t) {
  var emitter = new Emitter();

  emitter.on('test', function (arg1, arg2) {
    t.equal(arg1, 'arg1', 'passed the first argument');
    t.equal(arg2, 'arg2', 'passed the second argument');
    t.end();
  });

  emitter.emit('test', 'arg1', 'arg2');
});

test('unsubscribes from all events with name', function (t) {
  var emitter = new Emitter();
  emitter.on('test', function () {
    t.fail('should not get called');
  });
  emitter.off('test');
  emitter.emit('test')

  process.nextTick(function () {
    t.end();
  });
});

test('unsubscribes single event with name and callback', function (t) {
  var emitter = new Emitter();
  var fn = function () {
    t.fail('should not get called');
  }

  emitter.on('test', fn);
  emitter.off('test', fn);
  emitter.emit('test')

  process.nextTick(function () {
    t.end();
  });
});

// Test added by https://github.com/lazd
// From PR: https://github.com/scottcorgan/tiny-emitter/pull/6
test('unsubscribes single event with name and callback when subscribed twice', function (t) {
  var emitter = new Emitter();
  var fn = function () {
    t.fail('should not get called');
  };

  emitter.on('test', fn);
  emitter.on('test', fn);

  emitter.off('test', fn);
  emitter.emit('test');

  process.nextTick(function () {
    t.notOk(emitter.e['test'], 'removes all events');
    t.end();
  });
});

test('unsubscribes single event with name and callback when subscribed twice out of order', function (t) {
  var emitter = new Emitter();
  var calls = 0;
  var fn = function () {
    t.fail('should not get called');
  };
  var fn2 = function () {
    calls++;
  };

  emitter.on('test', fn);
  emitter.on('test', fn2);
  emitter.on('test', fn);
  emitter.off('test', fn);
  emitter.emit('test');

  process.nextTick(function () {
    t.equal(calls, 1, 'callback was called');
    t.end();
  });
});

test('removes an event inside another event', function (t) {
  var emitter = new Emitter();

  emitter.on('test', function () {
    t.equal(emitter.e.test.length, 1, 'event is still in list');

    emitter.off('test');

    t.notOk(emitter.e.test, 0, 'event is gone from list');
    t.end();
  });

  emitter.emit('test');
});

test('event is emitted even if unsubscribed in the event callback', function (t) {
  var emitter = new Emitter();
  var calls = 0;
  var fn = function () {
    calls += 1;
    emitter.off('test', fn);
  };

  emitter.on('test', fn);

  emitter.on('test', function () {
    calls += 1;
  });

  emitter.on('test', function () {
    calls += 1;
  });

  process.nextTick(function () {
    t.equal(calls, 3, 'all callbacks were called');
    t.end();
  });

  emitter.emit('test');
});

test('calling off before any events added does nothing', function (t) {
  var emitter = new Emitter();
  emitter.off('test', function () {});
  t.end();
});

test('emitting event that has not been subscribed to yet', function (t) {
  var emitter = new Emitter();

  emitter.emit('some-event', 'some message');
  t.end();
});

test('unsubscribes single event with name and callback which was subscribed once', function (t) {
  var emitter = new Emitter();
  var fn = function () {
    t.fail('event not unsubscribed');
  }

  emitter.once('test', fn);
  emitter.off('test', fn);
  emitter.emit('test');

  t.end();
});

test('exports an instance', function (t) {
  t.ok(emitter, 'exports an instance')
  t.ok(emitter instanceof Emitter, 'an instance of the Emitter class');
  t.end();
});
