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
    static from([from, to]) {
        let newGroup = new Group;
        for(let i=from; i<=to; i++) {
            newGroup.add(i);
        }
        return newGroup;
    }
  }

  
  let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  // → false
  console.log(group.has(19));