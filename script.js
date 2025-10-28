let actualBalance = document.getElementById("actual-balance");
let bonus = document.getElementById("get-bonus");
let farmCoins = document.getElementById("farm-coins");
const popUp = document.getElementById("pop-up");
const earnedToday = document.getElementById("earned-today");

const userName_1 = document.getElementById("username-1");
const userName_2 = document.getElementById("username-2");
const userName_3 = document.getElementById("username-3");

const inventoryBody = document.querySelector(".inven-bottom");

const buy1 = document.getElementById("buy-1");

let count = 0;

buy1.addEventListener("click", () => {
    const name = document.querySelector("#box-1 h5").textContent;
    const price = document.querySelector("#box-1 .price");


    const div = document.createElement("div");
    div.classList.add("inventory");

    const nameTag = document.createElement("p");
    nameTag.textContent = name;
    nameTag.classList.add("inventory-name");
    div.appendChild(nameTag);

    count += 1;
    const quantity = document.createElement("p");
    quantity.textContent = `x`;
    quantity.classList.add("quantity");
    nameTag.appendChild(quantity);

    const quantityNum = document.createElement("span");
    quantityNum.textContent = count;
    quantity.appendChild(quantityNum);

    inventoryBody.appendChild(div);
})

let balance = 0;
let balanceToday = 0;
let actualBalanceInt = 0;
const dailyBonus = 50;

const storedBalance = localStorage.getItem("actualBalanceInt");
if (storedBalance !== null) {
    actualBalanceInt = parseInt(storedBalance, 10) || 0;
}

bonus.addEventListener("click", () => {
    console.log(actualBalanceInt);

    const bonusDeterminer = checkClicks();
    console.log(bonusDeterminer);

    if (bonusDeterminer) {

        actualBalanceInt += dailyBonus;
        actualBalance.textContent = actualBalanceInt;

        balanceToday += dailyBonus;
        earnedToday.textContent = balanceToday;

        popUp.innerHTML = `<p>You got ${dailyBonus} leaves!</p>`;

        popUp.classList.add("active");
        setTimeout(function () {
            popUp.classList.remove("active");
        }, 3000);

        localStorage.setItem(lastClickDateKey, new Date().toDateString());
        localStorage.setItem("actualBalanceInt", JSON.stringify(actualBalanceInt));
        localStorage.setItem("balanceToday", JSON.stringify(balanceToday));

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

    const storedDate = new Date(lastClickDate).toDateString();
    const todayStr = new Date().toDateString();

    return storedDate !== todayStr;
}


document.addEventListener("DOMContentLoaded", () => {
    const storedBalance = localStorage.getItem("actualBalanceInt");

    if (storedBalance !== null) {
        actualBalanceInt = parseInt(storedBalance, 10) || 0;
    } else {
        const domBalance = parseInt(actualBalance.textContent, 10);
        if (!Number.isNaN(domBalance)) actualBalanceInt = domBalance;
    }

    actualBalance.textContent = actualBalanceInt;
});