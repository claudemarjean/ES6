const classicFunction = function (){
    console.log(this);
}

const arrowFunction = () => console.log(this);

const me = {
    name : "John",
    presentClassic : classicFunction,
    presentArrow : arrowFunction
}

me.presentClassic();//donné l'objet me
me.presentArrow();//donne l'objet window (l'objet global)