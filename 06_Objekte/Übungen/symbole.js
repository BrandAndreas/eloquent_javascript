class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${(this.type)} rabbit says '${line}'`);
    }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

let sym = Symbol("name");
console.log(sym == Symbol("name"));

Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);