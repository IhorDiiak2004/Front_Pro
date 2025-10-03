
// Дз 4.1
let userName = prompt("Як тебе звати?");
alert(`Hello, ${userName}! How are you?`);


// Дз 4.4
let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch (true) {
    case (numOrStr === null):
        console.log('ви скасували');
        break;
    case (numOrStr.trim() === ''):
        console.log('Empty String');
        break;
    case isNaN(+numOrStr):
        console.log('number is Ba_NaN');
        break;
    default:
        console.log('OK!');
        break;
}


// Дз 4.2
let number = prompt("Введіть тризначне число:");

let a = number[0];
let b = number[1];
let c = number[2];

if (a === b && b === c) {
    console.log("Усі цифри однакові");
} else if (a === b || b === c || a === c) {
    console.log("Серед цифр є однакові");
} else {
    console.log("Усі цифри різні");
}



