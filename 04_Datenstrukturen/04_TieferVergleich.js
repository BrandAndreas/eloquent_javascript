function deepEqual(obj1, obj2) {
    const props1 = Object.keys(obj1);
    const props2 = Object.keys(obj2);

    if(props1.length === props2.length) {
        for(let i=0; i<props1.length; i++) {
            const currentItem1 = obj1[props1[i]];
            const currentItem2 = obj2[props2[i]];
            if(props1[i] === props2[i]) {
                if(typeof currentItem1 === 'object' && currentItem1 !== null) {
                    if(deepEqual(currentItem1, currentItem2) === false) {
                        return false;
                    }
                }
                if(currentItem1 === currentItem2) {
                    continue;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    } else  {
        return false;
    }
    return true;    
}

const newObj = {
    a : 2,
    c : {
        help: 'String'
    },
    nope : null
}

const oldObj = {
    a : 3,
    c : {
        help: 'String'
    },
    nope : null
}

console.log(deepEqual(newObj,oldObj));