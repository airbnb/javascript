(function(){

if (!window.Prism) {
	return;
}

var dummy = document.createElement('header');

if (!String.prototype.trim) {
	String.prototype.trim = function () {
		return this.replace(/^\s+/g, '').replace(/\s+$/g, '');
	};
}

// textContent polyfill
if (!('textContent' in dummy) && ('innerText' in dummy) && Object.defineProperty) {
	Object.defineProperty(Element.prototype, 'textContent', {
		get: function() {
			return this.innerText;
		},
		set: function(text) {
			this.innerText = text;
		}
	});
}

// IE8 doesn't have DOMContentLoaded
if (!document.addEventListener && 'textContent' in dummy) {
	setTimeout(Prism.highlightAll, 10);
}

// Test if innerHTML line break bug is present
dummy.innerHTML = '\r\n';

if (dummy.textContent.indexOf('\n') === -1) {
	// IE8 innerHTML bug: Discards line breaks
	Prism.hooks.add('after-highlight', function(env) {
		env.element.innerHTML = env.highlightedCode.replace(/\r?\n/g, '<br>');
	});
}

})();