
// ДЗ 10.1

let company = {
  sales: [
    { name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    
  development: {
    web: [
      { name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
    internals: [
      { name: 'Jack', salary: 1300 }
    ]
  }
};

function SumSalaries(obj) {
  let sum = 0;

  for (let value of Object.values(obj)) {
    if (Array.isArray(value)) {
    
      for (let person of value) {
        sum += person.salary;
      }
    } else if (typeof value === 'object') {
      sum += SumSalaries(value);
    }
  }
  return sum;
}

console.log("Загальна сума зарплат:", SumSalaries(company));
