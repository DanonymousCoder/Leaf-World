let actualBalance = document.getElementById("actual-balance");
let bonus = document.getElementById("get-bonus");
let farmCoins = document.getElementById("farm-coins");
const popUp = document.getElementById("pop-up");
const earnedToday = document.getElementById("earned-today")

let balance = 0;
let balanceToday = 0;
let actualBalanceInt = parseInt(balance);
const dailyBonus = 50;


bonus.addEventListener("click", () => {
    console.log(actualBalanceInt);

    const bonusDeterminer = checkClicks();
    console.log(bonusDeterminer);

    if (bonusDeterminer) {

        actualBalanceInt += dailyBonus;
        actualBalance.textContent = actualBalanceInt;

        balanceToday += dailyBonus;

        popUp.innerHTML = `<p>You got ${dailyBonus} leaves!</p>`;

        popUp.classList.add("active");
        setTimeout(function () {
            popUp.classList.remove("active");
        }, 3000);

        localStorage.setItem(lastClickDateKey, new Date().toDateString());
        localStorage.setItem("actualBalanceInt", JSON.stringify(actualBalanceInt));

    } else {
        popUp.innerHTML = `<p>You've already claimed today's bonus leaf(s).</p>`

        popUp.classList.add("active");
        setTimeout(function () {
            popUp.classList.remove("active");
        }, 3000)
    }
});

farmCoins.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 20);
    farmCoins.textContent = `You got ${randomNumber} leaves.`;
    actualBalanceInt += randomNumber;
    actualBalance.textContent = actualBalanceInt;

    balanceToday += randomNumber;
    earnedToday.textContent = balanceToday;

    popUp.innerHTML = `<p>You got ${randomNumber} leaves.</p>`

    popUp.classList.add("active");
    setTimeout(function () {
        popUp.classList.remove("active");
    }, 3000)

    localStorage.setItem("actualBalanceInt", JSON.stringify(actualBalanceInt))
})

const lastClickDateKey = 'lastButtonClickDate';

function checkClicks() {
    const lastClickDate = localStorage.getItem(lastClickDateKey);

    if (!lastClickDate) {
        return true;
    }

    const today = new Date();
    const storedDate = new Date(lastClickDate);

    const comparedYear = today.getFullYear() !== storedDate.getFullYear();
    const comparedMonth = today.getMonth() !== storedDate.getMonth();
    const comparedDay = today.getDay() !== storedDate.getDay();

    return comparedYear || comparedMonth || comparedDay;
}


document.addEventListener("DOMContentLoaded", () => {
    localStorage.getitem("actualBalanceInt", JSON.stringify(actualBalanceInt));
})