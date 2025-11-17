
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

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenNumbers = numbers.filter(function(element) {
  return element % 2 === 0;
});

console.log("Парні числа:", evenNumbers);


// Дз 6.3

const phoneBook = {
  contacts: [
    {
      name: "Oleg",
      phone: "067-456-789",
      email: "Oleg@gmail.com"
    },
    {
      name: "Olya",
      phone: "095-654-321",
      email: "olya@egmail.com"
    }
  ],

  findContact(name) {
    const contact = phoneBook.contacts.find(function(element) {
      return element.name === name;
    });

    if (contact) {
      return contact;
    } else {
      return "Контакт не знайдено.";
    }
  },

  addContact(newContact) {
    phoneBook.contacts.push(newContact);
  }
  
};

phoneBook.addContact({
  name: "Ihor",
  phone: "093-000-555",
  email: "ihor@imail.com"
});

const found = phoneBook.findContact("Ihor");
console.log(found);


