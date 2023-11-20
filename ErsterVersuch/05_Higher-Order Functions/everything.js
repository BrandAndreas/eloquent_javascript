// function every(array, test) {
//     let bool = true;
//     for (const element of array) {
//         if (test(element) === false) {
//             bool = false;
//         }
//     }
//     return bool;
// }
  

function every(array, test) {
    return !array.map(test).some( x => !x);
}
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true
