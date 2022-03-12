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

list = {value: 0, rest: list};
list = {value: -1, rest: list};

console.log(list);