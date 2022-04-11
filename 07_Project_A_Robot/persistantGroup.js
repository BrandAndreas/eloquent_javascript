class PGroup {
    constructor() {
        this.members = [];
        this.empty = new PGroup;
    }
    
      add(value) {
        if (!this.has(value)) {
          this.empty.members.push(value);
        }
    }
    
      delete(value) {
        this.members = this.members.filter(v => v !== value);
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
/* let a = PGroup.empty.add("a");

  console.log(b.has("b"));
  // → true
  console.log(a.has("b"));
  // → false
  console.log(b.has("a"));
  // → false */