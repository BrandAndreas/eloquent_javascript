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

console.log(/\bm/.exec("moon")); // [m]
console.log(/\bm/.exec("1moon")); // null
console.log(/on\b/.exec("moon")); // [ "on" ]
console.log(/oo\b/.exec("moon")); // null

let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs")); // true


console.log("papa".replace("p", "m")); // mapa
console.log("papa".replace(/p/g, "m")); // mama


console.log(
    "Liskov, Barbara\nMcCarthy, John\nWadler, Philip"
    .replace(/(\w+), (\w+)/g, "$2 $1")
);
/* Barbara Liskov
John McCarthy
Philip Wadler */

let s = 