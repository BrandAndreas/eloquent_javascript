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
    function getValues(list) {
        arr.push(list.value);
        if(list.rest !== null) {
            getValues(list.rest);
        }
        return arr;
    }
    getValues(list);
    return arr;
}

function prepend(element, list) {
    // Ein Element an die erste Stelle anfügen
    return {value: element, rest: list};
}

function nth(element, list, position) {
    let arr = listToArray(list);
    arr.splice(position, 0, element);
    return arrayToList(arr);
}

const newList = arrayToList([1,2,3]);
console.log(JSON.stringify(newList));

console.log(listToArray(newList));

const prependList = prepend(0, newList);
console.log(JSON.stringify(prependList));

const nthList = nth(5, prependList, 2);
console.log(JSON.stringify(nthList));