// Here will be a fifth homework

var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
    };

console.log(services);
services['Розбити скло'] = "15 грн";

console.log(services);

/* function price() {
    var summa = 0;

    for (var key in services) {
        var value = services[key];
        var number = parseFloat (value);
        summa = summa + number;
    }
    return summa;
}
services['Стрижка волос в носу'] = "75.38 uah"
console.log(price()) */

/* services['Стрижка бороды'] = "5.34 UAH";
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

console.log(minPrice())
console.log(services) */


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
services['стаканчик коньяка'] = "221.54 UAH"
console.log(maxPrice());