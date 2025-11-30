function pow(x, y) {

console.log(`Chislo: ${x} v stepeni: ${y}`);

let result = 1;
for (let i = 0; i < y; i++)
    result = result * x;
return result
}

console.log(pow(7, 2));
razdel();
console.log(pow(7, 3));
razdel();
console.log(pow(2, 10));
razdel();

function razdel() {
    console.log('========================')
}
