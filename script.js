let actualBalance = document.getElementById("actual-balance");
let bonus = document.getElementById("get-bonus");

let actualBalanceInt = parseInt(actualBalance);



bonus.addEventListener("click", () => {
    console.log(actualBalanceInt);
    actualBalanceInt += 50;
    actualBalance.textContent = actualBalanceInt;
});