let rabbit = {};
rabbit.speak = function(line) {
    console.log(`The rabbit says '${line}'`);
};
rabbit.speak("I'm alive.");

// --------------------------------------------------------

function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting.");
hungryRabbit.speak("I could use a carrot right now.");
speak.call(hungryRabbit, "Burp!");

// --------------------------------------------------------

function normalize() {
    console.log(this.coords.map(n => n / this.length));
}
normalize.call({coords: [0, 2, 3], length: 5});


function concatName() {
    console.log(this.surname + " " + this.name);
}
concatName.call({surname: 'Andreas', name: "Brand"});

// --------------------------------------------------------

let empty = {};
console.log(empty.toString);
console.log(empty.toString());

let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEEE!");

// --------------------------------------------------------

function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

let angryRabbit = makeRabbit('angry');
angryRabbit.speak("I'm so angry.");

// --------------------------------------------------------
// ------------Create a class, the old way-----------------
// --------------------------------------------------------

function OldRabbit(type) {
    this.type = type;
}
OldRabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new OldRabbit("weird");
weirdRabbit.speak('UUUUUhhhh, everything is so blue!');

console.log(Object.getPrototypeOf(weirdRabbit));

// --------------------------------------------------------
// ------------Create a class, the new way-----------------
// --------------------------------------------------------

class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let murderRabbit = new Rabbit("murder");
let blackRabbit = new Rabbit("black");

murderRabbit.speak("I'll kill you");
blackRabbit.speak("Black Power!!!")

// --------------------------------------------------------
// ------------Create a class as an expression-------------
// --------------------------------------------------------

let object = new class { getWord() { return "hello";}};
console.log(object.getWord());

let otherObject = { getWord() { return "hello";}};
console.log(otherObject.getWord());

console.log(Object.getPrototypeOf(object));