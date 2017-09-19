(function() {

if (typeof self === 'undefined' || !self.Prism || !self.document) {
	return;
}

Prism.hooks.add('complete', function (env) {
	if (!env.code) {
		return;
	}

	// Works only for <code> wrapped inside <pre> (not inline).
	var pre = env.element.parentNode;
	var clsReg = /\s*\bcommand-line\b\s*/;
	if (
		!pre || !/pre/i.test(pre.nodeName) ||
			// Abort only if neither the <pre> nor the <code> have the class
		(!clsReg.test(pre.className) && !clsReg.test(env.element.className))
	) {
		return;
	}

	if (env.element.querySelector('.command-line-prompt')) {
		// Abort if prompt already exists.
		return;
	}

	if (clsReg.test(env.element.className)) {
		// Remove the class "command-line" from the <code>
		env.element.className = env.element.className.replace(clsReg, '');
	}
	if (!clsReg.test(pre.className)) {
		// Add the class "command-line" to the <pre>
		pre.className += ' command-line';
	}

	var getAttribute = function(key, defaultValue) {
		return (pre.getAttribute(key) || defaultValue).replace(/"/g, '&quot');
	};

	// Create the "rows" that will become the command-line prompts. -- cwells
	var lines = new Array(1 + env.code.split('\n').length);
	var promptText = getAttribute('data-prompt', '');
	if (promptText !== '') {
		lines = lines.join('<span data-prompt="' + promptText + '"></span>');
	} else {
		var user = getAttribute('data-user', 'user');
		var host = getAttribute('data-host', 'localhost');
		lines = lines.join('<span data-user="' + user + '" data-host="' + host + '"></span>');
	}

	// Create the wrapper element. -- cwells
	var prompt = document.createElement('span');
	prompt.className = 'command-line-prompt';
	prompt.innerHTML = lines;

	// Mark the output lines so they can be styled differently (no prompt). -- cwells
	var outputSections = pre.getAttribute('data-output') || '';
	outputSections = outputSections.split(',');
	for (var i = 0; i < outputSections.length; i++) {
		var outputRange = outputSections[i].split('-');
		var outputStart = parseInt(outputRange[0]);
		var outputEnd = outputStart; // Default: end at the first line when it's not an actual range. -- cwells
		if (outputRange.length === 2) {
			outputEnd = parseInt(outputRange[1]);
		}

		if (!isNaN(outputStart) && !isNaN(outputEnd)) {
			for (var j = outputStart; j <= outputEnd && j <= prompt.children.length; j++) {
				var node = prompt.children[j - 1];
				node.removeAttribute('data-user');
				node.removeAttribute('data-host');
				node.removeAttribute('data-prompt');
			}
		}
	}

	env.element.innerHTML = prompt.outerHTML + env.element.innerHTML;
});

}());
