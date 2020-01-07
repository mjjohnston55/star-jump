const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let firstNumber = numbers[Math.floor(Math.random() * numbers.length)];
let secondNumber = numbers[Math.floor(Math.random() * numbers.length)];
console.log(firstNumber, secondNumber)

function add(a , b){
 return a + b
}

console.log(add(numbers[firstNumber], numbers[secondNumber]))

