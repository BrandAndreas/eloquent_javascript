function range(start, end, steps) {
    let rangeArray = [];
    if(steps === undefined) steps = 1;
    for(let i=0; i<=Math.abs(end-start); i+=Math.abs(steps)) {
        if(steps>0) {
            rangeArray.push(start+i);
        } else {
            rangeArray.push(start-i);
        }
    }
    return rangeArray
}

function sum(numArray) {
    let counter = 0;
    for(num of numArray) {
        counter += num;
    }
    return counter;
}

console.log(sum(range(1,10)));
console.log(range(1,10,2));
console.log(range(5,2,-1));
console.log(range(10,1,-2));