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

function listToArray(listObj) {
    let newArray = [];
    let newValue = Object.keys(listObj)[0];
    console.log(newValue);
    newArray.push(listObj.newValue);
    console.log(newArray);
}


let numbers = [1,2,3];
let newList = arrayToList(...numbers);
console.log(newList)
listToArray(newList);

list = {value: 0, rest: list};
list = {value: -1, rest: list};

console.log(list);