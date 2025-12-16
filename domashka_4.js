// Here will be a fifth homework

var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
    };

console.log(services);

services['Розбити скло'] = "15 грн";
services['стаканчик коньяка'] = "221.54 UAH";
services['Стрижка волос в носу'] = "75.38 uah";
services['Стрижка бороды'] = "5.34 UAH";

console.log(services);

function price() {
    var summa = 0;

    for (var key in services) {
        var value = services[key];
        var number = parseFloat (value);
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

console.log(price());
console.log(minPrice());
console.log(maxPrice());