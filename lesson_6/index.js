
// Дз 6.1

const user = {
  name: "Ihor",
  age: 21,
  city: "Lviv",
  email: "Ihor@example.com",

  get info() {
    return `Name: ${user.name}\nAge: ${user.age}\nCity: ${user.city}\nEmail: ${user.email}`;
  }
};

console.log(user.info);


// Дз 6.2

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(function(element) {
  return element % 2 === 0;
});

console.log("Парні числа:", evenNumbers);

