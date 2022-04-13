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

console.log(/\bm/.exec("moon")); // [ "m" ]
console.log(/\bm/.exec("1moon")); // null
console.log(/\bm/.exec("1 moon")); // [ "m" ]
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

let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g,
    str => str.toUpperCase())); // the CIA and FBI

let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
    console.log(match);
    amount = Number(amount) - 1;
    if (amount == 1) { //only one left, remove the 's'
        uni = unit.slice(0, unit.length - 1);
    } else if (amount == 0) {
        amount = "no";
    }
    return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne)); // no lemon, 1 cabbages, and 100 eggs


function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}

console.log(stripComments("1 + /* 2 */3")); // 1 + 3
console.log(stripComments("x = 10;// ten!")); // x = 10;
console.log(stripComments("1 /* a */+/* b */ 1")); // 1 + 1


let name = "harry";
let text = "Harry is a suspicious character.";
let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_")); // _Harry_ is a suspicious character.

let neardyName = "dea+hl[]rd";
let neardyText = "This dea+hl[]rd guy is super annoying";
let escaped = neardyName.replace(/[\\[.+*?(){|^$]/g, "\\$&");
console.log(escaped);
let neardyRegexp = new RegExp("\\b" + escaped + "\\b", "gi");
console.log(neardyText.replace(neardyRegexp, "_$&_"));


console.log("   word".search(/\S/)); // 3
console.log("    ".search(/\S/)); // -1

let pattern = /y/g;
pattern.lastIndex = 3;
let match = pattern.exec("xyzzy");
console.log(match.index); // 4
console.log(pattern.lastIndex); // 5

let global = /abc/g;
console.log(global.exec("xyz abc")); // [ "abc" ]
let sticky = /abc/y;
console.log(sticky.exec("xyz abc")); // null


let digit = /\d/g;
console.log(digit.exec("here it ist: 1")); // [ "1" ]
console.log(digit.exec("and now: 1")); // null