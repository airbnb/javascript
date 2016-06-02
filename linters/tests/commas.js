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
    const hero = {
        firstName: 'Dana',
        lastName: 'Scully'
    };

    const heroes = ['batman', 'superman'];
}());

(function() {
    // bad
    const heroes = [
        'Batman',
        'Superman'
    ];
}());

(function() {
    // good
    const hero = {
        firstName: 'Dana',
        lastName: 'Scully',
    };

    const heroes = ['batman', 'superman',];
}());

(function() {
    // good
    const heroes = [
        'Batman',
        'Superman',
    ];
}());
