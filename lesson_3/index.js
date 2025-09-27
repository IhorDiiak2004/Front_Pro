
// ДЗ 3.1
const person = Symbol("id");
console.log(typeof(person));

let str = "Chicken";
console.log(typeof(str));

const num = 99;
console.log(typeof(num));

const big_num = 99n;
console.log(typeof(big_num));

let age;
console.log(typeof(age));

const isAdult = true;
console.log(typeof(isAdult));

let count = null;
console.log(typeof(count));

let zero = null;
console.log(zero);

let player = {};
console.log(typeof(player));

let user = [5, 'C++', null, 99];
console.log(typeof(user));


// ДЗ 3.2
const Name = prompt('Please enter your name');
const Age = prompt('Please enter your age');
const Nationality = prompt('Please enter your nationality');
console.log(`${Name} ${Age} ${Nationality}`);