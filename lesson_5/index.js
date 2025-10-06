
// Дз 5.1

let result = "";

for (let i = 20; i <= 30; i += 0.5) {
  result += `${i} `;
}

console.log(result);


// Дз 5.2

const course = 26; 
let dollars = 10;

while (dollars <= 100) {
  const hryvnias = dollars * course;
  console.log(`${dollars} $ = ${hryvnias} ₴`);
  dollars += 10;
}


// Дз 5.3

const N = Number(prompt("Введіть ціле число N:"));

let i = 1;
while (i <= 100 && i * i <= N) {
  console.log(i);
  i++;
}


// Дз 5.4

