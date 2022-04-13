let date = "100-1-3000";
let correctDate = "10-1-3000";

console.log(/(\d{1,2})-(\d{1,2})-(\d{4})/.exec(date)); // [ "00-1-3000", "00", "1", "3000" ]
console.log(/(^\d{1,2})-(\d{1,2})-(\d{4})/.exec(date)); // null
console.log(/^(\d{1,2})-(\d{1,2})-(\d{4})/.exec(date)); // null
console.log(/(\d{1,2})-(\d{1,2})-(\d{4})$/.exec(date)); // [ "00-1-3000", "00", "1", "3000" ]

console.log(/(^\d{1,2})-(\d{1,2})-(\d{4})/.exec(correctDate)); // [ "10-1-3000", "10", "1", "3000" ]
console.log(/(\d{1,2})-(\d{1,2})-(\d{4})/.exec(correctDate)); //  ["10-1-3000", "10", "1", "3000" ]

console.log(/t$/.test('eater')); // false
console.log(/t$/.test('eat')); // true

console.log(/\d/.exec("100"));
console.log(/\d{1,2}/.exec("100"));
console.log(/(\d{1,2})/.exec("100")); // [ "10", "10" ]
console.log(/(\d{1,2})-(\d{1,2})/.exec("100-10")); // [ "00-10", "00", "10" ]
