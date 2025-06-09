//Take a number n as input from user. Create an array of numbers from 1 to n.?
const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask user for input
rl.question("Enter a number: ", function(n) {
  n = parseInt(n);

  // Create array from 1 to n
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  // Print the array
  console.log("Array:", arr);

  rl.close();
});
