const classicFunction = function (){
    console.log(this);
}

const arrowFunction = () => console.log(this);

const classicFunctionBind = classicFunction.bind(this);

const me = {
    name : "John",
    presentClassic : classicFunction,
    presentArrow : arrowFunction,
    presentClassicBind : classicFunctionBind
}

me.presentClassic();//donné l'objet me (this fonction parent)
me.presentArrow();//donne l'objet window (l'objet global)
me.presentClassicBind();