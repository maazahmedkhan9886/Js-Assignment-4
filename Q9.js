// Question 9: Traffic Signal Action

let signal = prompt("Enter traffic light color").toLowerCase();

let action = signal == "red" ? "Stop"
    : signal == "yellow" ? "Get Ready"
        : signal == "green" ? "Go"
            : "Invalid Signal";

alert(action);