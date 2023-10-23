console.log('Hola mundo');

let FirstName = 'Yefferson';
const LastName = 'Vargas';
console.log(FirstName + ' ' + LastName);

fUpper = FirstName.toUpperCase();
console.log(fUpper);

const list = []
list.push(1)
list.push(2)
// console.log(list);
list.filter(i => console.log(i))

const persona = {
    name: 'Yeff',
    X: '@yeff',
    age: 33
}

const field = 'X'
console.log(persona[field]);

const sumar = (num1, num2) => {
    let result = num1 + num2;
    return result;
}
console.log(sumar(2, 4));