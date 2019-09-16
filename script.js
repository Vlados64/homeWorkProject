var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");
var one = prompt("Введите щбязательную статью расходов в этом месяце");
var two = prompt("Во сколько обойдется?");

var appData = {
    budget: money,
    timeData: time,
    expenses: {
        one: two
    },
    optionalExpenses: {

    },
    income: [],
    saving: false
};

alert(appData.budget/30);