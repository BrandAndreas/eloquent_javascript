function range(start, end, steps) {
    let rangeArray = [];
    if(steps === undefined) steps = 1;
    for(let i=0; i<=end-start; i+=steps) {
        rangeArray.push(start+i);
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

// range(5,1,-2) => 5, 3, 1
// length = 5;
// 5+0
// 5+(0-5+2)
// 5+(0-5+4)

/* 
range(1,5,2) => 1,3,5
length = 1+4;
1+0
1+(4-1-2)
*/