let actualBalance = document.getElementById("actual-balance");
let bonus = document.getElementById("get-bonus");
let farmCoins = document.getElementById("farm-coins");
const popUp = document.getElementById("pop-up");

let balance = 0;
let actualBalanceInt = parseInt(balance);
const dailyBonus = 50;


bonus.addEventListener("click", () => {
    console.log(actualBalanceInt);

    const bonusDeterminer = checkClicks();
    console.log(bonusDeterminer);

    if (bonusDeterminer) {

        actualBalanceInt += dailyBonus;
        actualBalance.textContent = actualBalanceInt;

        popUp.innerHTML = `<p>You got ${dailyBonus} leaves!</p>`;

        popUp.classList.add("active");
        setTimeout(function () {
            popUp.classList.remove("active");
        }, 3000);

    } else {
        popUp.innerHTML = `<p>You've already claimed the day bonus leaf(s).</p>`

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

    popUp.innerHTML = `<p>You got ${actualBalanceInt} leaves.</p>`

    popUp.classList.add("active");
    setTimeout(function () {
        popUp.classList.remove("active");
    }, 3000)
})

const lastClickDateKey = 'lastButtonClickDate';

function checkClicks() {
    const lastClickDate = localStorage.getItem(lastClickDateKey);

    if (!lastClickDate) {
        return true
    }

    const today = new Date();
    const storedDate = new Date(lastClickDate);

    const comparedYear = today.getFullYear() !== storedDate.getFullYear();
    const comparedMonth = today.getMonth() !== storedDate.getMonth();
    const comparedDay = today.getDay() !== storedDate.getDate();

    return comparedYear || comparedMonth || comparedDay;
}