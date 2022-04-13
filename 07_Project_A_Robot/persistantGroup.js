class PGroup {
    constructor() {
        this.members = [];
    }
    
      add(value) {
        if (!this.has(value)) {
          let group = new PGroup([]);
          group.members = this.members.concat([value]);
          return group;
        } else {
          let group = new PGroup([]);
          group.members = this.members;
          return group;
        }
    }
    
      delete(value) {
        let newMembers = this.members.filter(v => v !== value);
        let group = new PGroup([]);
        group.members = newMembers;
        return group;
    }
    
      has(value) {
        return this.members.includes(value);
    }
    
    

    static from(collection) {
        let group = new PGroup;
        for (let value of collection) {
          group.add(value);
        }
        return group;
      }
}

PGroup.empty = new PGroup([]);

// let a = PGroup.empty;
// console.log(a);
let a = PGroup.empty.add("a");

let ab = a.add("b");
let b = ab.delete("a");

console.log(PGroup.empty);

  console.log(b.has("b"));
  // → true
  console.log(a.has("b"));
  // → false
  console.log(b.has("a"));
  // → false */