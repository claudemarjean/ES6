const me = {
    name: "John",
    presentFriend: function (friend){
        return "Tu connais "+ friend + "?";
    }
}

console.log(me.presentFriend("claude"));

/**
 * ES6
 */
const me2 = {
    name: "John",
    presentFriend: friend => "Tu connais "+ friend + "?"
}

console.log(me.presentFriend("Marjean"));