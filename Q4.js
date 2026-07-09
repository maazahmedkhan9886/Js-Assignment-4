// Question 4: Age Group Identifier

let age = Number(prompt("Enter your age"));

let result = age < 13 ? "Child"
    : age <= 19 ? "Teenager"
        : age <= 59 ? "Adult"
            : "Senior Citizen";

alert(result);