//For a given array prices of 5 items -> [250, 645, 300, 900, 50]. All items have an offer of 10% OFF on them. Change of array to store final price after applying offer.
let items = [250, 645, 300, 900, 50];

let i = 0;
for (let val of items) {
    console.log(`value at index ${i} = ${val}`); 
    let offer = val /10;
    items[i] = items[i] - offer;
    console.log(`value after offer = ${items[i]}`);
    i++; 
}