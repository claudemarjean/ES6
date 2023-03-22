/**
 * l'opérateur Spread 
 * C'est le sens inverse de l'opérateur REST (il va prend au paramètre un tableau éclate)
 * L'opérateur REST prend au paramètre des valeur libre et transforme en tableau
 * la syntaxe dans la référence de ce deux est identique mais c'est le contenue de donné qui est envoyé qui détermine que c'est une opérateur REST ou Spread
 */
const mesNombres = [40,5,14];

function makeMeSum(nombre1,nombre2,nombre3){
    return nombre1 + nombre2 + nombre3;
}

console.log(makeMeSum(...mesNombres));

/**
 * Paramètre Spread d'ES6
 */


const makeMeSumRest = (nombre1,nombre2,nombre3) => nombre1 + nombre2 + nombre3

console.log(makeMeSumRest(...mesNombres));