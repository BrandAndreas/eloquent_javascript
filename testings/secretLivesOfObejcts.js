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
// ----------still don't know what for---------------------
// --------------------------------------------------------

let object = new class { getWord() { return "hello";}};
console.log(object.getWord());

let otherObject = { getWord() { return "hello";}};
console.log(otherObject.getWord());

console.log(Object.getPrototypeOf(object));


// --------------------------------------------------------
// ------------Overriding properties-----------------------
// --------------------------------------------------------

Rabbit.prototype.teeth = "small";
console.log(murderRabbit.teeth);
murderRabbit.teeth = "long, sharp and bloody";
console.log(murderRabbit.teeth);
console.log(blackRabbit.teeth);
console.log(Rabbit.prototype.teeth);


// --------------------------------------------------------
// ---------------------------Map--------------------------
// --------------------------------------------------------

let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Julia", 62);
ages.set("Andreas", 42);
ages.set("Andreas", 45);

console.log(`Julia is ${ages.get("Julia")}`);
console.log("Is Jack's age known?", ages.has("Jack"));
console.log(ages.has("toString"));

console.log(ages.size);

for (const [person, age] of ages) {
    console.log(`${person} is ${age} years old.`);
}


// --------------------------------------------------------
// ----------------------Polymorphism----------------------
// --------------------------------------------------------

Rabbit.prototype.toString = function() {
    return `a ${this.type} rabbit`;
}

console.log(String(blackRabbit));

// --------------------------------------------------------
// ----------------------Symbols---------------------------
// --------------------------------------------------------

let sym = Symbol("name");
console.log(sym == Symbol("name"));;
Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);
console.log(Rabbit.prototype[sym].toString());

let newObject = {
    test: "Hello World"
}

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
    return `${this.length} cm of blue yarn`;
};

console.log([1, 2].toString());
console.log([1, 2][toStringSymbol]());

let stringObject = {
    [toStringSymbol]() { return "a jute rope"; }
};
console.log(stringObject[toStringSymbol]());


let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());

class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width;  x++) {
                this.content[y * width + x] = element(x, y);
            }
        }
    }

    get(x, y) {
        return this.content[y * this.width + x];
    }
    set(x, y, value) {
        this.content[y * this.width + x] = value;
    }
}

class MatrixIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next() {
        if (this.y == this.matrix.height) return {done: true};

        let value = {
            x: this.x,
            y: this.y,
            value: this.matrix.get(this.x, this.y)
        };
        this.x++

        if (this.x == this.matrix.width) {
            this.x = 0;
            this.y++;
        }
        return {value, done: false};
    }
}

Matrix.prototype[Symbol.iterator] = function() {
    return new MatrixIterator(this);
}

let matrix = new Matrix(3, 4, (x, y) => `value ${x},${y}`);
for (let {x, y, value} of matrix) {
    console.log(x, y, value);
}