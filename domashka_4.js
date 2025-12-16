// Here will be a fifth homework

var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
    };

console.log(services);

services['Розбити скло'] = "15.25 грн";
services['стаканчик коньяка'] = "221.50 UAH";


console.log(services);

function price() {
    var summa = 0;

    for (var key in services) {
        var value = services[key];
        var number = parseFloat(value);
        summa = summa + number;
    }
    return summa;
}


minPrice = function () {
    var min = Infinity;

    for (var key in services) {
        var value = services[key];
        var number = parseFloat(value);
        if (number < min) {
            min = number
        }
    }
    return min;
}


maxPrice = function () {
    var max = 0;

    for (var key in services) {
        var value = services[key];
        var number = parseFloat(value);

        if (number >= max){
            max = number;

        }
        
    }
    return max;

}

console.log("Загальну вартість наданих послуг = ", price(), "грн");
console.log("Мінімальна ціна = ", minPrice(), "грн");
console.log("Максимальна ціна = ", maxPrice(), "грн");