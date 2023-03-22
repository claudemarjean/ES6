let a = 1;
let b = 2;

let c = b;
b = a;
a = c;

console.log(a);
console.log(b);

/**
 * avec Destructuring arrays ça fais simplement comme ça
 */
console.log("###########");

let d = 3;
let e = 4;

[d,e] = [e,d];

console.log(d);
console.log(e);