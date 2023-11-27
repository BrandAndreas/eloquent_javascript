class Group {
    
    constructor () {
        this.values = [];
    }

    add(value) {
        if(value == null || isNaN(value)) {
            return;
        }
        if(this.values.indexOf(value) === -1) {
            this.values.push(value);
            return this.values;
        }
    }
    delete(value) {
        if(value == null || isNaN(value)) {
            return;
        }
        if(this.values.indexOf(value) !== -1) {
            this.values.splice(this.values.indexOf(value), 1);
            return this.values;
        }
    }
    has(value) {
        if(value == null || isNaN(value)) {
            return;
        }
        return this.values.some(val => val === value)
    }
    static from(iteratableObject) {
        console.log(iteratableObject.length);
        for(const element of iteratableObject) {
            if(element == null || isNaN(element)) {
                continue;
            }
            if(this.values.indexOf(element) === -1) {
                this.values.push(element);
            }
        }
        return this.values;
    }
}

const newGroup = new Group();
console.log(newGroup.add(2));
console.log(newGroup.add(4));
console.log(newGroup.add(6));
console.log(newGroup.add());
console.log(newGroup.delete(4));
console.log(newGroup.values);
console.log(newGroup.has(6));
console.log(newGroup.has(4));
console.log(Group.from([1,3,5]));