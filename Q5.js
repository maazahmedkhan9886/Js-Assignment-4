// Question 5: Employee Bonus Calculator

let salary = Number(prompt("Enter your salary"));

let bonus = salary < 50000 ? salary * 0.20
    : salary <= 100000 ? salary * 0.10
        : 0;

alert("Your bonus is: $" + bonus.toFixed(2));