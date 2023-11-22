function deepEqual(obj1, obj2) {
    const props1 = Object.keys(obj1);
    const props2 = Object.keys(obj2);

    if(props1.length === props2.length) {
        for(let i=0; i<props1.length; i++) {
            if(props1[i] === props2[i]) {
                if(obj1[props1[i]] === obj2[props2[i]] && obj)
            } else {
                return false;
            }
        }
    } else  {
        return false;
    }
    
    
    for(prop of Object.keys(obj)) {
        obj[prop]
    }
}

const newObj = {
    a : 2,
    valueA : function() {
        console.log(this.a);
    },
    nope : null
}

console.log(null === null);
console.log(3 === null);
console.log(typeof null);
console.log([0,1] == [0,1]);
// console.log(newObj.a);
newObj.valueA();
console.log(Object.keys(newObj));