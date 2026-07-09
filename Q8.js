// Question 8: Rock, Paper, Scissors Game

let user = prompt("Enter rock, paper, or scissors").toLowerCase();

let random = Math.floor(Math.random() * 3);

let computer = random == 0 ? "rock"
    : random == 1 ? "paper"
        : "scissors";

let result = user == computer ? "It's a tie!"
    : user == "rock" && computer == "scissors" ? "You win!"
        : user == "paper" && computer == "rock" ? "You win!"
            : user == "scissors" && computer == "paper" ? "You win!"
                : "Computer wins!";

alert("You chose: " + user +
    "\nComputer chose: " + computer +
    "\nResult: " + result);