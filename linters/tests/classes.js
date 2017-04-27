/* eslint no-unused-vars: 0 */

// https://github.com/thenerdery/javascript-standards#classes--use-them
// eslint: (no known rule enforcing this exists)
(function() {
    // bad
    function Queue(contents = []) {
        this.queue = [...contents];
    }

    Queue.prototype.queue = [];

    Queue.prototype.pop = function() {
        const value = this.queue[0];
        this.queue.splice(0, 1);
        return value;
    };
}());

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
}());

// https://github.com/thenerdery/javascript-standards#classes--static
// eslint: (no known rule enforcing this exists)
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
}());

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
}());

// https://github.com/thenerdery/javascript-standards#classes--extends
// eslint: (no known rule enforcing this exists)
(function() {
    // bad
    class Queue {
    }

    function PeekableQueue(contents) {
        Queue.apply(this, contents);
    }
    PeekableQueue.prototype = new Queue();
    PeekableQueue.prototype.constructor = PeekableQueue;

    PeekableQueue.prototype.peek = function() {
        return this.queue[0];
    };
}());

(function() {
    // good
    class Queue {
    }

    class PeekableQueue extends Queue {
        peek() {
            return this.queue[0];
        }
    }
}());

// https://github.com/thenerdery/javascript-standards#classes--tostring
// eslint: (no known rule enforcing this exists)
(function() {
    // good
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
}());

// https://github.com/thenerdery/javascript-standards#classes
// eslint: no-dupe-class-members
(function() {
    // bad
    class Jedi {
        getName() {
            return this.name;
        }

        getName() {
            return this.name;
        }
    }
}());

// https://github.com/thenerdery/javascript-standards#classes
// eslint: no-class-assign
(function() {
    // bad
    class Jedi {
    }

    Jedi = 'jedi';
}());

// https://github.com/thenerdery/javascript-standards#classes
// eslint: no-this-before-super
(function() {
    // bad
    class Base {
    }

    class SuperBase extends Base {
        constructor() {
            this.init();
            super();
        }

        init() {

        }
    }
}());

(function() {
    // good
    class Base {
    }

    class SuperBase extends Base {
        constructor() {
            super();
            this.init();
        }

        init() {

        }
    }
}());
