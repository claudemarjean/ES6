/**
 * Destructuring de l'objet
 */

const myObject = {
    nom : "John",
    age : 32,
    present: () => console.log("hello")
}

const {nom, present:aliasDePresent} = myObject; // la destructuring d'un objet n'est pas suivi d'ordre comme dans la destructiring d'Arrays mais il suivi le nom de la propriétés dans l'objet

aliasDePresent();