// Domashka regulyarnie virazheniya. Bez A

const words = "Wonderful, Joyful, Happiness, Time, Task, Apple";

var re = /[^A\W]{6,}/g;

var x = words.match(re);

console.log(x);