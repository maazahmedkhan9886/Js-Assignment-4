// Question 1: Check if a Number is Positive, Negative, or Zero

let num = Number(prompt("Enter a number"));

let result = num > 0 ? "Positive Number"
    : num < 0 ? "Negative Number"
        : "Zero";

alert(result);