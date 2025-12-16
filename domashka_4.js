// Here will be a fifth homework

var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
    };

console.log(services);
services['Розбити скло'] = "200 грн";

console.log(services);

function price() {
    var summa = 0;

/*     for ( var key in services) {
        if (typeof services[key] === "string") {
            var priceNumber = parseInt(services[key]);
            summa = summa + priceNumber;
        }
        
    }
    return summa;
}
services['Борода'] = "60.50 грн";
console.log(services.price()); */

    for (var key in services) {
        var value = services[key];
        var number = parseFloat (value);
        summa = summa + number;
    }
    return summa;
}
services['Стрижка волос в носу'] = "75.38 uah"
console.log(price())
