const numbers = [1,5,9,2,4];
const nine = numbers.reduce((acc, number) => Math.max(acc, number));
console.log(nine);

const numberObject = [
    {
        num: 5,
        spelling: 'fünf'
    },
    {
        num: 3,
        spelling: 'drei'
    },
    {
        num: 9,
        spelling: 'nine'
    }
]
const objNine = JSON.stringify(numberObject.filter(obj => obj.num === numberObject.reduce((acc, number) => Math.max(acc, number.num), 0)));
console.log(objNine);