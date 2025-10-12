
// Дз 7.1

function removeChars(str, charsToRemove) {
  let result = '';

  for (let char of str) {
    if (!charsToRemove.includes(char)) {
      result += char;
    }
  }
  return result;
}

const inputString = "hello world";
const chars = ['l', 'd'];

const output = removeChars(inputString, chars);
console.log(output); 


// Дз 7.2

function averageOfNumbers(arr) {
  let sum = 0;
  let count = 0;

  arr.forEach(function(element) {
    if (typeof element === 'number') {
      sum += element;
      count ++;
    }
  });

  if (count === 0) {
    return 0;
  }

  return sum / count;
}

let mixedArray = [2, "text", null, 3, true, 4, "10"];
let result = averageOfNumbers(mixedArray);

console.log("Середнє арифметичне чисел:", result);


// Дз 7.3

function removeElement(array, item) {
  const index = array.indexOf(item); 

  if (index !== -1) {
    array.splice(index, 1); 
  }
}

const array = [1, 3, 4, 6, 2, 5, 7];
removeElement(array, 2);

console.log("Оновлений масив:", array);


