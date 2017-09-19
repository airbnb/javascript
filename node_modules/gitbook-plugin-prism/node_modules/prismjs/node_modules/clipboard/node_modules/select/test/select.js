var select = require('../src/select');

describe('select editable elements', function() {
    before(function() {
        global.input = document.createElement('input');
        global.input.value = 'lorem ipsum';

        global.textarea = document.createElement('textarea');
        global.textarea.value = 'lorem ipsum';

        document.body.appendChild(global.input);
        document.body.appendChild(global.textarea);
    });

    after(function() {
        document.body.innerHTML = '';
    });

    it('should return the selected text on input', function() {
        var result = select(global.input);
        assert.equal(result, global.input.value);
    });

    it('should return the selected text on textarea', function() {
        var result = select(global.textarea);
        assert.equal(result, global.textarea.value);
    });
});

describe('select non-editable element with no children', function() {
    before(function() {
        global.paragraph = document.createElement('p');
        global.paragraph.textContent = 'lorem ipsum';

        document.body.appendChild(global.paragraph);
    });

    after(function() {
        document.body.innerHTML = '';
    });

    it('should return the selected text', function() {
        var result = select(global.paragraph);
        assert.equal(result, global.paragraph.textContent);
    });
});

describe('select non-editable element with child node', function() {
    before(function() {
        global.li = document.createElement('li');
        global.li.textContent = 'lorem ipsum';

        global.ul = document.createElement('ul');
        global.ul.appendChild(global.li);

        document.body.appendChild(global.ul);
    });

    after(function() {
        document.body.innerHTML = '';
    });

    it('should return the selected text', function() {
        var result = select(global.ul);
        assert.equal(result, global.ul.textContent);
    });
});

describe('select non-editable svg element w/ multiple text children', function() {
    before(function() {
        global.text1 = document.createElement('text');
        global.text1.textContent = 'lorem ipsum';

        global.text2 = document.createElement('text');
        global.text2.textContent = 'dolor zet';

        global.svg = document.createElement('svg');
        global.svg.appendChild(global.text1);
        global.svg.appendChild(global.text2);

        document.body.appendChild(global.svg);
    });

    after(function() {
        document.body.innerHTML = '';
    });

    it('should return the selected text', function() {
        var result = select(global.svg);
        assert.equal(result, global.text1.textContent +
                             global.text2.textContent);
    });
});
