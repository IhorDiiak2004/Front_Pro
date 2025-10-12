
// Дз 6.1

const user = {
  name: "Ihor",
  age: 21,
  city: "Lviv",
  email: "Ihor@example.com",

  get info() {
    return `Ім'я: ${user.name}\nAge: ${user.age}\nCity: ${user.city}\nEmail: ${user.email}`;
  }
};

console.log(user.info);
