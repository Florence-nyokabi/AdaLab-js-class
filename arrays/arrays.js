const items = [2, 8, true, "seed", [7,9]];
const a = new Array(2, 8, true, "seed");
console.log(items);
console.log(a);

console.log(items[3]);
console.log(items[4][1]);

// Adding at the end
items.push(6);
console.log(items);

// Adding at the start
items.unshift("fruits");
console.log(items);

// Removing the last element.
items.pop();
console.log(items);

// Removing at the beginnng.
items.shift();
console.log(items);

// Given an array of numbers, return an array x with each item multiplied by 4.
let num = [1, 3, 4, 6, 9, 34];

let x = num.map(function(item){
    return item * 4
})
console.log(x);

// For each
let x1 = [];
 num.forEach(function(item){
    x1.push(item * 4)
})
console.log(x1);


// Merging arrays.
let mix = items.concat(num) // concat operator
console.log(mix)

let b = [false,"deny",...num ] // Spread operator
console.log(b);

// Destructuring arrays.
let [z, w, y, ...v]= [1,3,4];
console.log({z});
console.log({w});
console.log({y});
console.log({v});