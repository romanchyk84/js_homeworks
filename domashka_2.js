function pow(x, y) {

console.log(`Chislo: ${x} v stepeni: ${y}`);

let result = 1;
for (let i = 0; i < y; i++)
result = result * x;
return result
}

console.log(pow(7, 2))

console.log(pow(7, 3))

console.log(pow(2, 10))