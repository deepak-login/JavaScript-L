//Function -> 2 numbers, sum
// Function parameters :- Thay are like local variables of function , are valid till the block of codes
function sum(x, y) {
    s = x + y;
    console.log("before return");
    return s;
}

let val = sum(3, 4);
console.log(val);
