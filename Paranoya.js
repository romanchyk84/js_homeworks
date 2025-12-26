// U nas paranoya. Doveryaem adresam gmail i yahoo

let arr = `[
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        <email:"dmitro.porohov@yahoo.com>"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
]`;

console.log(typeof(arr));

let normEmail = [];
console.log(typeof(normEmail), normEmail);