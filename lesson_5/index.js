

// Дз 5.1

let result = "";

for (let i = 20; i <= 30; i += 0.5) {
  result += i;
  if (i < 30) {
    result += " ";
  }
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

const num = Number(prompt("Введіть ціле число:"));
let is_Simple = true;

if (num <= 1){
  is_Simple = false;  
} else { 
  for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    is_Simple = false;
    break;
  }
 }
}
alert(is_Simple ? `${num} — просте число` : `${num} — не є простим числом`);

