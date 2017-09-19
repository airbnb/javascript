var nthCheck = require("./"),
    assert = require("assert");

var invalid = ["-", "asdf", "2n+-0", "2+0", "- 1n", "-1 n"];

function parseInvalid(){
	invalid.forEach(function(formula){
		assert.throws(function(){
				nthCheck.parse(formula);
			},
			SyntaxError,
			formula
		);
	});
}

var valid = {
	"1": [ 0, 1 ],
	"2": [ 0, 2 ],
	"3": [ 0, 3 ],
	"5": [ 0, 5 ],
	" 1 ": [ 0, 1 ],
	" 5 ": [ 0, 5 ],
	"+2n + 1": [ 2, 1 ],
	"-1": [ 0, -1 ],
	"-1n + 3": [ -1, 3 ],
	"-1n+3": [ -1, 3 ],
	"-n+2": [ -1, 2 ],
	"-n+3": [ -1, 3 ],
	"0n+3": [ 0, 3 ],
	"1n": [ 1, 0 ],
	"1n+0": [ 1, 0 ],
	"2n": [ 2, 0 ],
	"2n + 1": [ 2, 1 ],
	"2n+1": [ 2, 1 ],
	"3n": [ 3, 0 ],
	"3n+0": [ 3, 0 ],
	"3n+1": [ 3, 1 ],
	"3n+2": [ 3, 2 ],
	"3n+3": [ 3, 3 ],
	"3n-1": [ 3, -1 ],
	"3n-2": [ 3, -2 ],
	"3n-3": [ 3, -3 ],
	even: [ 2, 0 ],
	n: [ 1, 0 ],
	"n+2": [ 1, 2 ],
	odd: [ 2, 1 ],

	//surprisingly, neither sizzle, qwery or nwmatcher cover these cases
	"-4n+13": [-4, 13],
	"-2n + 12": [-2, 12]
};

function parseValid(){
	Object.keys(valid).forEach(function(formula){
		assert.deepEqual(nthCheck.parse(formula), valid[formula], formula);
	});
}

function testValid(){
	Object.keys(valid).forEach(function(formula){
		testFormula(valid[formula], formula);
	});
}

var valArray = Array.apply(null, Array(2e3)).map(function(_, i){return i;});

function testFormula(formula, name){
	var filtered = valArray.filter(nthCheck.compile(formula)),
	    iterated = stupidNth(formula);

	try {
		assert.deepEqual(filtered, iterated, name);
	} catch(e){
		e.expected = JSON.stringify(iterated) + " " + name;
		e.actual = JSON.stringify(filtered) + " " + name;
		throw e;
	}
}

function stupidNth(formula, limit){
	var a = formula[0],
	    b = formula[1];

	if(a === 0 && b > 0) return [b - 1];

	//taken from qwery
	return valArray.filter(function(val){
		for(var i = b, l = valArray.length; ((a > 0) ? (i <= l) : (i >= 1)); i += a){
			if(val === valArray[i - 1]) return true;
		}
	});
}

process.stdout.write("- parser");
process.stdout.write("\n  - parse invalid:\t");
parseInvalid();
process.stdout.write("X\n  - parse valid:\t");
parseValid();
process.stdout.write("X\n- check values:  \t");
testValid();
process.stdout.write("X\n");
