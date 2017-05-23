// Using Functions to create a calculator app...More to come.

// This Function Adds two numbers together and returns a value.
function add(num1, num2) {
	return num1 + num2;
}
// This Function Subtracts two numbers together and returns a value.
function subtract(num1, num2) {
	return num1 - num2;
}
// This Function Multiplies two numbers together and returns a value.
function multiply(num1, num2) {
	return num1 * num2;
}
// This Function Divides two numbers together and returns a value.
function divide(num1, num2) {
	return num1 / num2;
}
// This Function Squares two numbers together and returns a value.
function squared(num1) {
	return num1 * num1;
}
// Three ways to print to console with Cubing.
function cubed(num1) {
	return num1 * num1 * num1;
}
// This Function Prints all values to the console.
function print(str) {
	console.log(str);
}
// Three ways to print to console with Adding.
print(add(10, 10));
var addedValue = add(10, 10);
console.log(addedValue);

// Three ways to print to console with Subtracting.
print(subtract(5, 5));
var subtractedValue = subtract(5, 5);
console.log(subtractedValue);

// Three ways to print to console with Multiplying.
print(multiply(6, 5));
var multiplyValue = multiply(6, 5);
console.log(multiplyValue);

// Three ways to print to console with Dividing.
print(divide(10, 2));
var divideValue = divide(10, 2);
console.log(divideValue);

// Three ways to print to console with Squaring the values.
print(squared(10, 10));
var squaredValue = squared(10, 10);
console.log(squaredValue);

// Three ways to print to console with Cubing the values.
print(cubed(3, 3, 3));
var cubedValue = cubed(3, 3, 3);
console.log(cubedValue);

// Using an object "calculator" to consolidate Functions to
// make a calculator app.
var calculator = {
	add: add,
	subtract: subtract,
	multiply: multiply,
	divide: divide,
	squared: squared,
	cubed: cubed,
	print: function(str) {
		console.log(str);
	},
};

// Prints different values to the console based on Arithmetic operators.
print(calculator.subtract(10, 2)); // 10 - 2 = 8
print(calculator.add(20,20)); // 20 + 20 = 40
print(calculator.multiply(20, 20)); // 20 * 20 = 400
print(calculator.divide(20, 4)); // 20 / 4 = 5
print(calculator.squared(2)); // 2² = 4
print(calculator.cubed(12)); // 12^3 = 1728

// This var mem can store the value of a previous calcualation
var mem = calculator.add(1, 2);
print(calculator.add(1, 2)); // 3 is stored in mem var now.
print(calculator.add(mem, 3)); // mem is 3, so 3 + 3 = 6
print(calculator.subtract(10, mem)); // 10 - mem(3) = 7
// * mem(3) placed before 10 outputs a negative number. 3 - 10 = -7
print(calculator.subtract(mem, 10));
print(calculator.multiply(mem, 1000)); // mem(3) * 1000 = 3000;
print(calculator.divide(12, mem)); // 12 / mem(3) = 4;
print(calculator.squared(mem)); // mem(3²) = 9;
print(calculator.cubed(mem)); // mem(3^3) = 27;
