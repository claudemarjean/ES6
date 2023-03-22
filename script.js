
const me = {
    name: "John",
    presentFriends: friend => { // on met dans cette accolade si une code à executer non pas directement de valeur retourner
        const presentation = `Tu connais ${friend} ?`;
        console.log(presentation);
        return presentation;
    }
}

me.presentFriends("Kevin");

