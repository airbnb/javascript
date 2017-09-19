
var SYMBOLS = [
    '[', ']', '!', '"', '\'', '#',
    '$', '%', '&', '(', ')', '*', '+', ',', '.', '/', ':', ';', '<', '=',
    '>', '?', '@', '', '', '^', '_', '`', '{', '|', '}', '~',
    '©', '∑', '®', '†', '“', '”', '‘', '’', '∂', 'ƒ', '™', '℠', '…',
    'œ', 'Œ','˚', 'º', 'ª', '•', '∆', '∞', '♥', '&', '|'
];


function slug(content, separator) {
    separator = separator || '-';

    var re = new RegExp('[\\'+SYMBOLS.join('\\')+']+', 'g');
    var s = content
        .replace(re, '')
        .replace(/ /g, separator)
        .toLowerCase();

    if (s[0] == separator) s = s.slice(1);

    return s;
}

module.exports = slug;
