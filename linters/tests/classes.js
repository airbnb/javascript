/* eslint wrap-iife: [0, "any"] */

// https://github.com/thenerdery/javascript-standards#classes--use-them
(function() {
    // bad
    function Queue(contents = []) {
        this.queue = [...contents];
    }

    Queue.prototype.queue = [];

    Queue.prototype.pop = function () {
        const value = this.queue[0];
        this.queue.splice(0, 1);
        return value;
    };
})();

(function() {
    // good
    class Queue {
        queue = [];

        constructor(contents = []) {
            this.queue = [...contents];
        }

        pop() {
            const value = this.queue[0];
            this.queue.splice(0, 1);
            return value;
        }
    }
})();

// https://github.com/thenerdery/javascript-standards#classes--static
(function() {
    // bad
    class Queue {
        constructor() {
            Queue.instanceCount++;
        }
    }

    Queue.instanceCount = 0;

    Queue.getInstanceCount = function() {
        return this.instanceCount;
    };
})();

(function() {
    // good
    class Queue {
        static instanceCount = 0;

        constructor() {
            Queue.instanceCount++;
        }

        static getInstanceCount() {
            return this.instanceCount;
        }
    }
})();

// https://github.com/thenerdery/javascript-standards#classes--extends
(function() {
    // bad
    class Queue {
    }

    function PeekableQueue(contents) {
        Queue.apply(this, contents);
    }
    PeekableQueue.prototype = new Queue();
    PeekableQueue.prototype.constructor = PeekableQueue;

    PeekableQueue.prototype.peek = function () {
        return this.queue[0];
    };
})();

(function() {
    // good
    class Queue {
    }

    class PeekableQueue extends Queue {
        peek() {
            return this.queue[0];
        }
    }
})();

// https://github.com/thenerdery/javascript-standards#classes--tostring
(function() {
    class Jedi {
        constructor(options = {}) {
            this.name = options.name || 'no name';
        }

        getName() {
            return this.name;
        }

        toString() {
            return `Jedi - ${this.getName()}`;
        }
    }
})();


// https://github.com/thenerdery/javascript-standards#classes--no-useless
(function() {
    // bad
    class Jedi {
        constructor() {}

        getName() {
            return this.name;
        }
    }
})();

(function() {
    // bad
    class Jedi {}

    class Rey extends Jedi {
        constructor(...args) {
            super(...args);
        }
    }
})();

(function() {
    // good
    class Jedi {}

    class Rey extends Jedi {
        constructor(...args) {
            super(...args);
            this.name = 'Rey';
        }
    }
})();
