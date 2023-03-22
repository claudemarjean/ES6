/**
 * l'opérateur Spread 
 * C'est le sens inverse de l'opérateur REST (il va prend au paramètre un tableau éclate)
 * L'opérateur REST prend au paramètre des valeur libre et transforme en tableau
 * la syntaxe dans la référence de ce deux est identique mais c'est le contenue de donné qui est envoyé qui détermine que c'est une opérateur REST ou Spread
 */

/**
 * l'objet est passer par reférence
 */
const fruitsRouges = ["fraise", "framboise"];
const fruitRouges2 = fruitsRouges;

fruitRouges2.push("cerises");

console.log(fruitsRouges);
console.log(fruitRouges2);

/**
 * avec le paramètres spread on peut faire comme ceci
 */

const fruitsRougesSpread = ["fraise", "framboise"];
const fruitRouges2Spread = [...fruitsRouges];

fruitRouges2Spread.push("cerises");

console.log(fruitsRougesSpread);
console.log(fruitRouges2Spread);
