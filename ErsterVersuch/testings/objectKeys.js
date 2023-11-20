const obj = {
    x: 0,
    y: 0,
    z: 2
}

const arr1 = [1,2,3];
const arr2 = [1,2,3];

const str1 = "1";
const str2 = "1";

const val1 = 2;
const val2 = 2;

const nullObj = null;

console.log(Object.keys(obj));
console.log(arr1 == arr2);
console.log(str1 === str2);
console.log(val1 === val2);
console.log(typeof arr1);
console.log(typeof obj);
console.log(typeof str1);
console.log(typeof val1);
console.log(Object.keys(arr1));
console.log(typeof obj === "object")
console.log("Nullvergleich: ",null == null);