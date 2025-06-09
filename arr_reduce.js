let arr = [1, 4, 4, 7, 34, 543, 9];

const output = arr.reduce((prev, curr) => {
    return prev < curr ? prev : curr;
})

console.log(output); 