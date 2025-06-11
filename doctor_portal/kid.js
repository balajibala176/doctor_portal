const readline = require('readline-sync');

let num1 = parseFloat(readline.question("Enter the first number: "));
let operator = readline.question("Enter operator (+, -, *, /): ");
let num2 = parseFloat(readline.question("Enter the second number: "));

let result;

if (isNaN(num1) || isNaN(num2)) {
  console.log("Invalid number input.");
} else {
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
      break;
    default:
      result = "Invalid operator.";
  }

  console.log("Result: " + result);
}
