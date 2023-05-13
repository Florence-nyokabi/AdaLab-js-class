let a = 10;
let b = "10";

// Implicit coersion
let c  = b + a ;
console.log({c});
let d = b * 1;
console.log (d * 1);

let e = b + a;
console.log({e});


// Explicit coersion
console.log({"number": Number(b)});
console.log(b);

console.log({"string": String(a)});
console.log(a);

console.log({"array": Array(b)});
console.log(b);
