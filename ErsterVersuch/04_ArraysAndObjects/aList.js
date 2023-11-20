/*

Ein List-Object

*/

let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

function arrayToList(...numbers) {
    let newObj = {};
    newObj = {value: numbers[numbers.length-1], rest: null};
    
    for(let i=numbers.length-2; i>=0; i--) {
        newObj = {value: numbers[i], rest: newObj};
    }
    
    return newObj;
    
}

function listToArray(list) {
    let newArray = [];

    for(let node = list; node; node = node.rest) {
        newArray.push(node.value)
    }

    return newArray;
}


function prepend(element, list) {
    const listObj = {
        value: element,
        rest: list
    }

    return listObj;
}

function nth(list, number) {
    return listToArray(list)[number];
}

let numbers = [1,2,3];
let newList = arrayToList(...numbers);
console.log(newList)

console.log(listToArray(newList));
console.log(prepend(0,newList));
console.log(nth(newList,0));
console.log(nth(arrayToList([10, 20, 30]), 1));