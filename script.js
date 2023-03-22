const tableau = [1,2,5];
console.log(tableau);


const d = tableau[0];
const e = tableau[1];

console.log(d);
console.log(e);


console.log("###############");
/**
 * Destructuring Arrays pour simplifier
 */

const nombres = [1,2,5];

const [a,b] = nombres;

console.log(a);
console.log(b);

console.log("###############");
/**
 * Avec le paramètre REST
 */

const [x,...y] = nombres; //y prend les 2 valeur libre de nombre 2,5 et il va mettre dans un tableau

console.log(x);
console.log(y);//[2,5]

console.log("###############");
/**
 * et si je veux sauter la valeur 2 je peux faire comme ceci
 */
const[g,,h] = nombres;
console.log(g);
console.log(h);