// Domashka regulyarnie virazheniya. Bez A

const words = "Wonderful, Joyful, Happiness, Time, Task, Apple";

let re = /\b[^A\W]{6,}\b/gi;  //   /\b[^Aa\W]{6,2}\b/g

let x = words.match(re);

console.log(x);