// Question 13: Password Validation

let password = prompt("Enter your password");

let result = password.length < 6 ? "Weak Password"
    : password.length <= 10 ? "Moderate Password"
        : "Strong Password";

alert(result);