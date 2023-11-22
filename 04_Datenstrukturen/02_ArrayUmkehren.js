function reverseArray(arr) {
    // Ein Array in der Reihenfolge umkehren
    // [0,1,2,3] -> [3,2,1,0]
    let reversedArray = [];
    for(el of arr) {
        reversedArray.unshift(el);
    }
    return reversedArray;
}

function reverseArrayInPlace(arr) {
    let reversedArray = [];
    for(el of arr) {
        reversedArray.unshift(el);
    }
    arr = reversedArray;
    return arr;
}

console.log(reverseArray([0,1,2,3]));
console.log(reverseArrayInPlace([0,1,2,3]));