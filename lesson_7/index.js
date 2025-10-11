
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
