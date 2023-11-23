let obj = {
    squirrel: false,
    obj: {
        value: 1,
        rest: {
            value: 2,
            rest: null
        }
    }
}

console.log(obj);

let string = JSON.stringify(obj);

console.log(string);