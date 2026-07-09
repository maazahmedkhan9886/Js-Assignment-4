// Question 2: Determine the Larger of Two Numbers

let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));

let result = num1 > num2 ? "First number is larger"
    : num2 > num1 ? "Second number is larger"
        : "Both numbers are equal";

alert(result);