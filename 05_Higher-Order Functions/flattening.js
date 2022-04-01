// Flatten an Array of array in a single array
// [[1,2,3],[4,5,6],[7,8,9]] -> [1,2,3,4,5,6,7,8,9]

const arr = [[1,2,3],[4,5,6],[7,8,9]];

const flatArr = arr.reduce((a,b) => a.concat(b));

console.log(flatArr);