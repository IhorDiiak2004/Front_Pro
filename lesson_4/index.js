
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
    console.log("Цифри однакові");
} else if (a === b || b === c || a === c) {
    console.log("Серед цифр є однакові");
} else {
    console.log("Цифри різні");
}


// Дз 4.3
const year = prompt("Рік народження:");
const city = prompt("Місто проживання:");
const sport = prompt("Улюблений вид спорту:");

const age = new Date().getFullYear() - year;

const capitals = { "Київ": "України", "Вашингтон": "США", "Лондон": "Великобританії" };
const cityMsg = capitals[city] ? `Ти живеш у столиці ${capitals[city]}` : `Ти живеш у місті ${city}`;

const champs = { футбол: "Ліонель Мессі", теніс: "Еліна Світоліна", баскетбол: "Леброн Джеймс" };
const sportMsg = champs[sport.toLowerCase()] ? `Круто! Хочеш стати як ${champs[sport.toLowerCase()]}?` : "";

alert(`Твій вік: ${age}\n${cityMsg}\n${sportMsg}`);


