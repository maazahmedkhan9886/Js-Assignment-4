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
// Question 7: Display the Discount Amount and Final Price (done in same js as q7 is the output of q6)

let finalPrice = amount - discount;

alert("Discount: $" + discount.toFixed(2) +
    "\nFinal Price: $" + finalPrice.toFixed(2));

