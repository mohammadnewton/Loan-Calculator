let amountLoaning = document.getElementById("amountLoan");
let interest = document.getElementById("interestRate");
let duration = document.getElementById("durationInMonths")
let computedSum = document.getElementById("calculateTotal")
let accumulatedAmount;
let totalAmount;

computedSum.addEventListener("click", dhafuYetu)

function dhafuYetu(){
    let toBePaid = amountLoaning.value
    let time = duration.value
    let interestPer = interest.value
    // accumulatedAmount = (interestPer * toBePaid)/100
    accumulatedAmount = (toBePaid * time * interestPer)/100;
    console.log(parseInt(accumulatedAmount))
}
