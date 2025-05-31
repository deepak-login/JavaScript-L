 //The for ...of loop is only used for string and array
let str = "Deepak";

let size = 0;
for (let val of str) {
    console.log("val", val);
    size++;
}

console.log("string size = ", size);