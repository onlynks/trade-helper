
let capital = 100000;
let lossPerTrade = 1;
let price = 500;
let reword = 2;
let risk = 1;
let tp = 510;
let sl = 495;

const capitalInput = document.getElementById("capital");
capitalInput.value = capital;
capitalInput.select();

const limitInput = document.getElementById("limit");
limitInput.value = capital * (lossPerTrade / 100) / (risk / 100);

const priceInput = document.getElementById("price");
priceInput.value = price;

const rewordInput = document.getElementById("reword");
rewordInput.value = reword;

const riskInput = document.getElementById("risk");
riskInput.value = risk;


const tpInput = document.getElementById("tp");
tpInput.value = tp;

const slInput = document.getElementById("sl");
slInput.value = sl;

function onCapitalChange(newCapital) {
    capital = newCapital;
    setLimit();
}

function onPriceChange(newPrice) {
    price = newPrice;

    setTp();
    setSl();
}

function onRewordChange(newReword) {
    reword = newReword;
    setTp();
}

function onRiskChange(newRisk) {
    risk = newRisk;
    setSl();
    setLimit();
}

function onTakeProfitChange(newTp) {
    tp = newTp;
    setReword();
}

function onStopLossChange(newSl) {
    sl = newSl;
    setRisk();
    setLimit();
}

function setLimit() {
    limitInput.value = capital * 0.01 / (risk / 100);
}

function setTp() {
    tp = price * (1 + reword / 100);
    tpInput.value = tp;
}

function setSl() {
    sl = price * (1 - risk / 100);
    slInput.value = sl;
}

function setReword() {
    reword = (tp - price) / price * 100;
    rewordInput.value = reword;
}

function setRisk() {
    risk = (price - sl) / price * 100;
    riskInput.value = risk;
}