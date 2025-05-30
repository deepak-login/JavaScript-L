// sum function
function sum(a, b) {
    return a + b;
}

const arrowSum = (a, b) => {
    console.log(a + b);
};

//multiplication function 
function mul(a, b) {
    return a * b;
}

//Calling the function to see output
console.log("Sum using regular function:", sum(2, 3));
console.log("Multiplication:", mul(4,5));
arrowSum(10,15);