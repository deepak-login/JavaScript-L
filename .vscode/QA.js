//Get user to input a number using prompt("Enter a number"). Check if the number is a multiple of 5 or not.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", function(num) {
  if (num % 5 === 0) {
    console.log(num, "is a multiple of 5");
  } else {
    console.log(num, "is not a multiple of 5");
  }
  rl.close();
});

