const mesNombres = [40,5,14,5,7,8];

function makeMeSum(nombres){
    let sum = 0;
    for (let i = 0; i < nombres.length ; i++){
        sum += nombres[i];
    }
    return sum;
}

console.log(makeMeSum(mesNombres));

/**
 * Paramètre Rest d'ES6
 * Prend la valeur libre "..." avant la variable
 */


const makeMeSumRest = (...nombres) => {
    let sum = 0;
    for (let i = 0; i < nombres.length ; i++){
        sum += nombres[i];
    }
    return sum;
}

console.log(makeMeSumRest(40,5,14,5,7,8));