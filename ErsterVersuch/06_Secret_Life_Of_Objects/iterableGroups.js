
class Group {
    // valueArray = [];

    constructor() {
        this.valueArray = [];
    }

    add(value) {
        if(this.valueArray.indexOf(value) === -1) {
            this.valueArray.push(value);
        }
    }
    delete(value) {
        if(this.has(value)) {
            this.valueArray.splice(this.valueArray.indexOf(value), 1);
        }
    }
    has(value) {
        return (this.valueArray.indexOf(value) !== -1);
    }
    static from(...values) {
        let newGroup = new Group;
        for (const value of values) {
            newGroup.add(value);
        }
        return newGroup;
    }
    get size() {
        return this.valueArray.length;
    }
    
}

class GroupIterator {
    constructor(group) {
        this.iterator = 0;
        this.group = group;
    }

    next() {
        if(this.iterator === this.group.size) return {done: true};
        
        let value = this.group.valueArray[this.iterator];
        this.iterator++;
        return {value, done: false};
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
}

let newGroup = Group.from("a", "b", "c");


for (let value of newGroup) {
console.log(value);
}