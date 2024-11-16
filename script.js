"use strict";
const poweredBy = document.querySelector(".powered--by");
const calacArea = document.querySelector(".calculation--area");
const resultArea = document.querySelector(".result--area");
const numberCon = document.querySelector(".btn--number");
const number = document.querySelector(".number");
const operatorContainer = document.querySelector(".btn--basic__calc");
const equalSign = document.querySelector(".equal");
const advancedContainer = document.querySelector(".btn--advance");
const convertion = document.querySelectorAll(".convertion");
const valueOpt = document.querySelectorAll(".starter--opt option");
const conOpt = document.querySelectorAll(".con");
//
// number.textContent
let line = [],
  valueOp;

const displayNumber = function (e) {
  if (+calacArea.value.slice(0, 1) === 0) {
    calacArea.value = calacArea.value.slice(1);
  }
  calacArea.value += e;
};

const resultDispaly = function () {
  try {
    resultArea.textContent = eval(calacArea.value);
    calacArea.value = "";
  } catch (error) {
    resultArea.textContent = "Error";
  }
};

const cancelNumber = function (e) {
  calacArea.value = calacArea.value.slice(0, -1);
};

const clearNumber = function () {
  calacArea.value = "";
  resultArea.innerHTML = "000";
};

const calcPercent = function () {
  const lastNumber = calacArea.value.split(valueOp).pop();
  const percentage = +lastNumber / 100;
  const newExpertion =
    calacArea.value.slice(0, -lastNumber.length) + percentage;
  console.log(newExpertion);
  calacArea.value = newExpertion;
};

const displayAnsw = function () {
  resultArea.textContent = (+b / +a) * +calacArea.value;
};

numberCon.addEventListener("click", function (e) {
  if (e.target.classList.contains("number")) {
    displayNumber(e.target.textContent);
  }
  if (e.target.classList.contains("equal")) {
    resultDispaly();
  }
});

operatorContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("basic__calc"))
    valueOp = e.target.textContent;
  displayNumber(valueOp);
});

advancedContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("clear")) {
    clearNumber();
  }
  if (e.target.classList.contains("percent")) {
    calcPercent();
  }
  if (e.target.classList.contains("cancel")) {
    cancelNumber();
  }
});

//

let a, b, valueSplited;
conOpt.forEach(function (el) {
  el.addEventListener("change", function () {
    valueSplited = this.value.split("-");
    if (el.classList.contains("a")) {
      a = valueSplited[1];
      calacArea.placeholder = valueSplited[0];
    }
    //
    if (el.classList.contains("b")) {
      b = valueSplited[1];
      resultArea.textContent = valueSplited[0];
    }
  });
});
// document.addEventListener("keydown", displayAnsw);
equalSign.addEventListener("click", displayAnsw);

// Display Powered By
setTimeout(() => {
  poweredBy.classList.add("hidden--powered__by");
}, 1000);
