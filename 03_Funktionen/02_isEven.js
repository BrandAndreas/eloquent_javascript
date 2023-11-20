function isEven(num) {
    console.log(typeof num);
    if(num === 0) {
        return true;
    }
    if(num === 1) {
        return false;
    }

    isEven(num-2);
}

console.log(isEven(5))