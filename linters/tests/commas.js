/* eslint no-unused-vars: 0 */

// https://github.com/thenerdery/javascript-standards#commas--leading-trailing
// eslint: comma-style
(function() {
    // bad
    const once = null;
    const upon = null;
    const aTime = null;

    const story = [
        once
      , upon
      , aTime
    ];
}());

(function() {
    // good
    const once = null;
    const upon = null;
    const aTime = null;

    const story = [
        once,
        upon,
        aTime,
    ];
}());

(function() {
    // bad
    const hero = {
        firstName: 'Ada'
      , lastName: 'Lovelace'
      , birthYear: 1815
      , superPower: 'computers'
    };
}());

(function() {
    // good
    const hero = {
        firstName: 'Ada',
        lastName: 'Lovelace',
        birthYear: 1815,
        superPower: 'computers',
    };
}());

// https://github.com/thenerdery/javascript-standards#commas--dangling
// eslint: comma-dangle
(function() {
    // bad
    const heroes = {
        firstName: 'Dana',
        lastName: 'Scully'
    };
}());

(function() {
    // bad
    const heroes = [
        'Batman',
        'Superman'
    ];
}());

(function() {
    // bad
    const heroes = ['batman', 'superman',];
}());

(function() {
    // good
    const heroes = {
        firstName: 'Dana',
        lastName: 'Scully',
    };
}());

(function() {
    // good
    const heroes = [
        'Batman',
        'Superman',
    ];
}());

(function() {
    // good
    const heroes = ['batman', 'superman'];
}());
