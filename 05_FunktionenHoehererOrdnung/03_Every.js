function everyLoop(arr, boolFunction) {
    for(element of arr) {
        if(!(boolFunction(element))) {
            return false;
        }
    }
    return true;
}

function everyFunction(arr, boolFunction) {
    return !(arr.some(e => !(boolFunction(e))));
}

const wrong = [1,2,3];
const wright = [4,5,6];

const testFunction = function(num) {
    return num>3;
}

console.log(everyLoop(wrong, testFunction));
console.log(everyLoop(wright, testFunction));
console.log(everyFunction(wrong, testFunction));
console.log(everyFunction(wright, testFunction));