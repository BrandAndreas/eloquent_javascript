/*
    Die Funktion range soll ein Array zurückgeben, mit allen Werten des angebenen Ranges.

    Die Funktion sum soll alle Werte eines Arrays zusammenaddieren.

*/

function range (numFrom, numTo, incrementor) {
    let rangeArray = [];
    if(!incrementor){
        incrementor = 1;
    }
    if (numFrom<numTo) {
        for(numFrom; numFrom<=numTo; numFrom+=incrementor) {
            rangeArray.push(numFrom);
        }
    }else {
        for(numFrom; numFrom>=numTo; numFrom+=incrementor) {
            rangeArray.push(numFrom);
        }
    }
    return rangeArray
}

function sum(numArray) {
    let sumOfNumbers = 0;
    for(num of numArray) {
        sumOfNumbers += num;
    }
    return sumOfNumbers;
}



console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
// 55