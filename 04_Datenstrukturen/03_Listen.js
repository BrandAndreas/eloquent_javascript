let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
}

function arrayToList(arr) {
    let obj = null;
    for(let i=arr.length-1; i>=0; i--) {
        obj = {value: arr[i], rest: obj}
    }
    return obj;
}

function listToArray(list) {
    let arr = [];
    
}

const newList = arrayToList([1,2,3]);
console.log(newList);
console.log(newList.value);
console.log(newList.rest.value);
console.log(newList.rest.rest.value);
console.log(newList.rest.rest.rest.value);