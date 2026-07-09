// Question 10: Find the Largest of Three Numbers

let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));
let num3 = Number(prompt("Enter third number"));

let largest = num1 >= num2 && num1 >= num3 ? num1
    : num2 >= num1 && num2 >= num3 ? num2
        : num3;

alert("Largest number is: " + largest);