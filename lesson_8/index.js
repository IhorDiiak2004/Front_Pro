
// Дз 8.1

function sum(a) {
  let total = a;

  function another(b) {
    total += b;
    return another;
  }

  inner.valueOf = function() {
  return total;
  };
}

console.log(+sum(4)(5)(6)); 


// Дз 8.2

function num(a) {
  return function(b) {
    return a * b;
  };
}

let result = num(5)(2);
console.log(result); 

