/*
    function reverseArray nimmt alle Werte eines Arrays und speichert sie in ein neues Array, allerdings in umgekehrter Reihenfolge.

    function reverseArrayInPlace macht das Gleiche, allerdings speichert es in das bestehende Array.

*/

function reverseArray (inputArray) {
    let newArray = [];
    for(value of inputArray) {
        newArray.unshift(value);
    }
    return newArray;
}

// shift: entfernt das erste Element
// pop: entfernt das letzte Element
// push: fügt am Ende ein
// unshift: fügt am Anfang ein

function reverseArrayInPlace (inputArray) {
    for(let i=0; i<inputArray.length; i++){
        inputArray.unshift(inputArray.splice(i,1)[0]);
    }
}

let testArray = [1,2,3,4,5];
let newArray = reverseArray(testArray);
reverseArrayInPlace(testArray)

console.log(newArray);
console.log(testArray);