class Vec {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
    plus({x,y}) {
        return {
            x: this.x + x,
            y: this.y + y
        }
    }
    minus({x,y}) {
        return {
            x: this.x - x,
            y: this.y - y
        }
    }
    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}


const firstVec = new Vec(1,1);
const secondVec = new Vec(2,2);

console.log(JSON.stringify(firstVec.plus(secondVec)));
console.log(JSON.stringify(firstVec.minus(secondVec)));
console.log(secondVec.length);