// Question 12: Validate User Input

let input = prompt("Enter a number");
let num = Number(input);

let result = isNaN(num) ? "Invalid Input"
    : num > 0 ? "Positive Number"
        : num == 0 ? "Zero"
            : "Negative Number";

alert(result);