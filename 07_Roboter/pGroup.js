class PGroup {

    empty;

    constructor () {
        this.values = [];
    }

    add(value) {
        if(value == null || !value) {
            return;
        }
        if(this.values.indexOf(value) === -1) {
            this.empty = new PGroup();
            this.values.forEach(val => this.empty.values.push(val));
            this.empty.values.push(value);
            return this.empty;
        }
    }
    delete(value) {
        if(value == null || !value) {
            return;
        }
        if(this.values.indexOf(value) !== -1) {
            this.empty = new PGroup();
            this.values.forEach(val => this.empty.values.push(val));
            this.empty.values.splice(this.empty.values.indexOf(value), 1);
            return this.empty;
        }
    }
    has(value) {
        if(value == null || isNaN(value)) {
            return;
        }
        return this.values.some(val => val === value)
    }
}

let firstGroup = new PGroup();
let secondGroup = firstGroup.add('2');
let thirdGroup = secondGroup.add('3');
let fourthGroup = thirdGroup.delete('2');
console.log(firstGroup.values);
console.log(secondGroup.values);
console.log(thirdGroup.values);
console.log(fourthGroup.values);
console.log(thirdGroup.values);
console.log(thirdGroup.has('3'));