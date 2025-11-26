// Here will be my first JS homework....

'number' + 3 + 3  // number33 string
/* будет 'number33'
'number' - тип данных строка, при выполнении оператора + со строкой происходит конкатенация,
то есть число преобразовывается в строку и получаем "number3". Затем второй оператор сложения также выполняет
конкатенацию. Number 3 преобразовывается в строку "3". Получаем 'number33', тип данных string. */
console.log('number' + 3 + 3, typeof ('number' + 3 + 3))  // number33 string


null + 3  // 3 number
// // будет 3, null преобразовывается в 0 и выполняется операция сложения
console.log(null + 3, typeof (null + 3))  // 3 number


5 && "qwerty"  // qwerty
// оператор && логическое И (AND) возвращает первое ложное значение. Если ложного нет, вернет последнее истинное.
// false, 0, null, undefined, NaN, '' всегда вернут ложное значение.
console.log(5 && "qwerty")  // qwerty

