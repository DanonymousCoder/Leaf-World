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
const buy2 = document.getElementById("buy-2");
const buy3 = document.getElementById("buy-3");
const buy4 = document.getElementById("buy-4");
const buy5 = document.getElementById("buy-5");
const buy6 = document.getElementById("buy-6");
const buy7 = document.getElementById("buy-7");
const buy8 = document.getElementById("buy-8");

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;
let count8 = 0;

let balance = 0;
let balanceToday = 0;
let actualBalanceInt = 0;
const dailyBonus = 50;

buy1.addEventListener("click", () => {
    const name = document.querySelector("#box-1 h5").textContent;
    const price = document.querySelector("#box-1 .price");

    actualBalanceInt -= price.textContent;
    actualBalance.textContent = actualBalanceInt;


    localStorage.setItem("actualBalanceInt", JSON.stringify(actualBalanceInt));

    const div = document.createElement("div");
    div.classList.add("inventory");

    const nameTag = document.createElement("p");
    nameTag.textContent = name;
    nameTag.classList.add("inventory-name");
    div.appendChild(nameTag);

    count1 += 1;
    const quantity = document.createElement("p");
    quantity.textContent = `x`;
    quantity.classList.add("quantity");
    div.appendChild(quantity);

    const quantityNum = document.createElement("span");
    quantityNum.textContent = count1;
    quantity.appendChild(quantityNum);

    inventoryBody.appendChild(div);

    popUp.innerHTML = `<p><span class="fancy">${name}</span> added to your inventories!</p>`;

    popUp.classList.add("active");
    setTimeout(function () {
        popUp.classList.remove("active");
    }, 3000);
})

buy2.addEventListener("click", () => {
    const name = document.querySelector("#box-2 h5").textContent;
    const price = document.querySelector("#box-2 .price");

    actualBalanceInt -= price.textContent;
    actualBalance.textContent = actualBalanceInt;


    localStorage.setItem("actualBalanceInt", JSON.stringify(actualBalanceInt));

    const div = document.createElement("div");
    div.classList.add("inventory");

    const nameTag = document.createElement("p");
    nameTag.textContent = name;
    nameTag.classList.add("inventory-name");
    div.appendChild(nameTag);

    count2 += 1;
    const quantity = document.createElement("p");
    quantity.textContent = `x`;
    quantity.classList.add("quantity");
    div.appendChild(quantity);

    const quantityNum = document.createElement("span");
    quantityNum.textContent = count2;
    quantity.appendChild(quantityNum);

    inventoryBody.appendChild(div);

    popUp.innerHTML = `<p><span class="fancy">${name}</span> added to your inventories!</p>`;

    popUp.classList.add("active");
    setTimeout(function () {
        popUp.classList.remove("active");
    }, 3000);
})

buy3.addEventListener("click", () => {
    const name = document.querySelector("#box-3 h5").textContent;
    const price = document.querySelector("#box-3 .price");

    actualBalanceInt -= price.textContent;
    actualBalance.textContent = actualBalanceInt;


    localStorage.setItem("actualBalanceInt", JSON.stringify(actualBalanceInt));

    const div = document.createElement("div");
    div.classList.add("inventory");

    const nameTag = document.createElement("p");
    nameTag.textContent = name;
    nameTag.classList.add("inventory-name");
    div.appendChild(nameTag);

    count3 += 1;
    const quantity = document.createElement("p");
    quantity.textContent = `x`;
    quantity.classList.add("quantity");
    div.appendChild(quantity);

    const quantityNum = document.createElement("span");
    quantityNum.textContent = count3;
    quantity.appendChild(quantityNum);

    inventoryBody.appendChild(div);

    popUp.innerHTML = `<p><span class="fancy">${name}</span> added to your inventories!</p>`;

    popUp.classList.add("active");
    setTimeout(function () {
        popUp.classList.remove("active");
    }, 3000);
})

buy4.addEventListener("click", () => {
    const name = document.querySelector("#box-4 h5").textContent;
    const price = document.querySelector("#box-4 .price");

    actualBalanceInt -= price.textContent;
    actualBalance.textContent = actualBalanceInt;


    localStorage.setItem("actualBalanceInt", JSON.stringify(actualBalanceInt));

    const div = document.createElement("div");
    div.classList.add("inventory");

    const nameTag = document.createElement("p");
    nameTag.textContent = name;
    nameTag.classList.add("inventory-name");
    div.appendChild(nameTag);

    count4 += 1;
    const quantity = document.createElement("p");
    quantity.textContent = `x`;
    quantity.classList.add("quantity");
    div.appendChild(quantity);

    const quantityNum = document.createElement("span");
    quantityNum.textContent = count4;
    quantity.appendChild(quantityNum);

    inventoryBody.appendChild(div);

    popUp.innerHTML = `<p><span class="fancy">${name}</span> added to your inventories!</p>`;

    popUp.classList.add("active");
    setTimeout(function () {
        popUp.classList.remove("active");
    }, 3000);
})

buy5.addEventListener("click", () => {
    const name = document.querySelector("#box-5 h5").textContent;
    const price = document.querySelector("#box-5 .price");

    actualBalanceInt -= price.textContent;
    actualBalance.textContent = actualBalanceInt;


    localStorage.setItem("actualBalanceInt", JSON.stringify(actualBalanceInt));

    const div = document.createElement("div");
    div.classList.add("inventory");

    const nameTag = document.createElement("p");
    nameTag.textContent = name;
    nameTag.classList.add("inventory-name");
    div.appendChild(nameTag);

    count5 += 1;
    const quantity = document.createElement("p");
    quantity.textContent = `x`;
    quantity.classList.add("quantity");
    div.appendChild(quantity);

    const quantityNum = document.createElement("span");
    quantityNum.textContent = count5;
    quantity.appendChild(quantityNum);

    inventoryBody.appendChild(div);

    popUp.innerHTML = `<p><span class="fancy">${name}</span> added to your inventories!</p>`;

    popUp.classList.add("active");
    setTimeout(function () {
        popUp.classList.remove("active");
    }, 3000);
})

buy6.addEventListener("click", () => {
    const name = document.querySelector("#box-6 h5").textContent;
    const price = document.querySelector("#box-6 .price");

    actualBalanceInt -= price.textContent;
    actualBalance.textContent = actualBalanceInt;


    localStorage.setItem("actualBalanceInt", JSON.stringify(actualBalanceInt));

    const div = document.createElement("div");
    div.classList.add("inventory");

    const nameTag = document.createElement("p");
    nameTag.textContent = name;
    nameTag.classList.add("inventory-name");
    div.appendChild(nameTag);

    count6 += 1;
    const quantity = document.createElement("p");
    quantity.textContent = `x`;
    quantity.classList.add("quantity");
    div.appendChild(quantity);

    const quantityNum = document.createElement("span");
    quantityNum.textContent = count6;
    quantity.appendChild(quantityNum);

    inventoryBody.appendChild(div);

    popUp.innerHTML = `<p><span class="fancy">${name}</span> added to your inventories!</p>`;

    popUp.classList.add("active");
    setTimeout(function () {
        popUp.classList.remove("active");
    }, 3000);
})

buy7.addEventListener("click", () => {
    const name = document.querySelector("#box-7 h5").textContent;
    const price = document.querySelector("#box-7 .price");

    actualBalanceInt -= price.textContent;
    actualBalance.textContent = actualBalanceInt;


    localStorage.setItem("actualBalanceInt", JSON.stringify(actualBalanceInt));

    const div = document.createElement("div");
    div.classList.add("inventory");

    const nameTag = document.createElement("p");
    nameTag.textContent = name;
    nameTag.classList.add("inventory-name");
    div.appendChild(nameTag);

    count7 += 1;
    const quantity = document.createElement("p");
    quantity.textContent = `x`;
    quantity.classList.add("quantity");
    div.appendChild(quantity);

    const quantityNum = document.createElement("span");
    quantityNum.textContent = count7;
    quantity.appendChild(quantityNum);

    inventoryBody.appendChild(div);

    popUp.innerHTML = `<p><span class="fancy">${name}</span> added to your inventories!</p>`;

    popUp.classList.add("active");
    setTimeout(function () {
        popUp.classList.remove("active");
    }, 3000);
})

buy8.addEventListener("click", () => {
    const name = document.querySelector("#box-8 h5").textContent;
    const price = document.querySelector("#box-8 .price");

    actualBalanceInt -= price.textContent;
    actualBalance.textContent = actualBalanceInt;


    localStorage.setItem("actualBalanceInt", JSON.stringify(actualBalanceInt));

    const div = document.createElement("div");
    div.classList.add("inventory");

    const nameTag = document.createElement("p");
    nameTag.textContent = name;
    nameTag.classList.add("inventory-name");
    div.appendChild(nameTag);

    count8 += 1;
    const quantity = document.createElement("p");
    quantity.textContent = `x`;
    quantity.classList.add("quantity");
    div.appendChild(quantity);

    const quantityNum = document.createElement("span");
    quantityNum.textContent = count8;
    quantity.appendChild(quantityNum);

    inventoryBody.appendChild(div);

    popUp.innerHTML = `<p><span class="fancy">${name}</span> added to your inventories!</p>`;

    popUp.classList.add("active");
    setTimeout(function () {
        popUp.classList.remove("active");
    }, 3000);
})



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