'use strict'

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let q1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let q2 = prompt("Во сколько обойдется?");
let q3 = prompt("Введите обязательную статью расходов в этом месяце", "");
let q4 = prompt("Во сколько обойдется?");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

appData.expenses.q1 = q2;
appData.expenses.q3 = q4;

alert("Your daily buget is " + appData.budget/30 + "EUR");

console.log("Your daily buget is " + appData.budget/30 + "EUR");
console.log(appData.expenses.q1);