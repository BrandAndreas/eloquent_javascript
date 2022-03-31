function deepComparison(element1, element2) {
    const keys1 = Object.keys(element1);
    const keys2 = Object.keys(element2);

    let bool = true;

    for(let i=0; i<keys1.length; i++) {
        if(typeof element1[keys1[i]] === "object" && (element1[keys1[i]] && element2[keys2[i]]) !== null) {
            bool = deepComparison(element1[keys1[i]], element2[keys2[i]]);
        } else if(element1[keys1[i]] !== element2[keys2[i]]){
            return bool = false;
        }
    }

    return bool;
}




let obj = {here: {is: "an"}, object: 2};
console.log(deepComparison(obj, obj));
// → true
console.log(deepComparison(obj, {here: 1, object: 2}));
// → false
console.log(deepComparison(obj, {here: {is: "an"}, object: 2}));
console.log(deepComparison({here: null, object: 2}, {here: null, object: 2}));
// → true
