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
        const newGroup = new Group();
        for(const element of iteratableObject) {
            newGroup.add(element);
        }
        return newGroup.values;
    }
}

class GroupIterator {
    constructor(group) {
        this.counter = 0;
        this.group = group;
    }

    next() {
        if(this.counter = this.group.values.length) {
            return {done: true};
        }

        let value = this.group.values[this.counter];
        counter++;
        return  {
            value, done:false
        };
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
}

// const newGroup = new Group();
// console.log(newGroup.add(2));
// console.log(newGroup.add(4));
// console.log(newGroup.add(6));
// console.log(newGroup.add());
// console.log(newGroup.delete(4));
// console.log(newGroup.values);
// console.log(newGroup.has(6));
// console.log(newGroup.has(4));
// console.log(Group.from([1,3,3, ,5]));
const wonderfulGroup = Group.from([1,3,5]);
for(const value of wonderfulGroup)  {
    console.log(value);
}