// Domashka regulyarnie virazheniya. Bez A

const words = "Wonderful, Joyful, Happiness, Time, Task, Apple";

var re = /\b[^A\W]{6,}\b/gi;

var x = words.match(re);

console.log(x);