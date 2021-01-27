function isReallyNumber (num){
	return typeof num === 'number' && num !== Infinity && !isNaN(num);
}

function multiply (a, b){
	return a * b;
}

function multiplyAll (...numbers){
	return numbers.filter(isReallyNumber).reduce(multiply, 1);
}

// This is an named export in Node.js
exports.multiplyAll = multiplyAll;

// That would be a default export:
// module.exports = multiplyAll
