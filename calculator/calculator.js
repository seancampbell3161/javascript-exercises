const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
  if(array.length == 0) return 0;
	return array.reduce((acc,cv) => acc + cv, 0);
};

const multiply = function(array) {
  return array.reduce((acc, cv) => acc * cv);
};

const power = function(a,b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	if(num < 0) 
    return -1;

  else if(num === 0)
    return 1;

  else {
    return (num * factorial(num - 1));
  }
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
