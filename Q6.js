// Question 6: Nested Condition for Discount

let customer = prompt("Enter customer type (member/non-member)").toLowerCase();
let amount = Number(prompt("Enter purchase amount"));

let discount = 0;

if (customer == "member") {
    discount = amount < 100 ? amount * 0.05
        : amount <= 500 ? amount * 0.10
            : amount * 0.20;
}
else if (customer == "non-member") {
    discount = amount < 500 ? amount * 0.02
        : amount * 0.05;
}
else {
    alert("Invalid customer type");
}
