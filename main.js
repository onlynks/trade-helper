
let capital = 100000;
let riskMax = 1;
let price = 500;
let reword = 2;
let risk = 1;
let tp = 510;
let sl = 495;

const capitalInput = document.getElementById("capital");
capitalInput.value = capital;
capitalInput.select();

const riskMaxInput = document.getElementById("risk-max");
riskMaxInput.value = riskMax;

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

const maxInvestInput = document.getElementById("max-invest");
maxInvestInput.value = capital * (riskMax / 100) / (risk / 100);

function onCapitalChange(newCapital) {
    capital = newCapital;
    setMaxInvest();
}

function onRiskMaxChange(newRiskMax) {
    riskMax = newRiskMax;
    setMaxInvest();
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
    setMaxInvest();
}

function onTakeProfitChange(newTp) {
    tp = newTp;
    setReword();
}

function onStopLossChange(newSl) {
    sl = newSl;
    setRisk();
    setMaxInvest();
}

function setMaxInvest() {
    maxInvestInput.value = capital * (riskMax / 100) / (risk / 100);
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