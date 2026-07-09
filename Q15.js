// Question 15: Student Performance Evaluation

let attendance = Number(prompt("Enter attendance percentage"));
let marks = Number(prompt("Enter marks"));

let result = (attendance < 75 && marks < 40) ? "Fail due to both"
    : attendance < 75 ? "Poor Attendance"
        : marks < 40 ? "Fail"
            : "Pass";

alert(result);