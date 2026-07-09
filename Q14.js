// Question 14: Determine a Number Type

let num = Number(prompt("Enter a number"));

let result = (num % 2 == 0 && num % 3 == 0) ? "Divisible by both"
    : (num % 2 == 0) ? "Divisible by 2"
        : (num % 3 == 0) ? "Divisible by 3"
            : "Not divisible by 2 or 3";

alert(result);