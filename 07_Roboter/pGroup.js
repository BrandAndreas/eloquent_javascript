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
            this.empty.values = this.values;
            console.log(`this.values = ${this.values}`);
            console.log(this.empty.values);

            this.empty.values.splice(this.empty.values.indexOf(value), 1);
            console.log(`this.values = ${this.values}`);
            return this.empty;
        }
    }
}

let firstGroup = new PGroup();
let secondGroup = firstGroup.add('2');
let thirdGroup = secondGroup.add('3');
console.log(firstGroup.values);
console.log(secondGroup.values);
console.log(thirdGroup.values);