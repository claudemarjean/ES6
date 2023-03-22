
const me = {
    name: "John",
    presentFriends: friend => {
        const presentation = `Tu connais ${friend} ?`;
        console.log(presentation);
        return presentation;
    }
}

me.presentFriends("Kevin");

