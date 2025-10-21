
// ДЗ 8.1
function sum(a) {
  let total = a;

  function another(b) {
    total += b;
    return another;
  }

  another.valueOf = function() {
    return total;
  };

  return another; 
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

