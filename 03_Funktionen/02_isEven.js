function isEven(num) {
    if(num === 0) {
        return true;
    }
    if(num === 1) {
        console.log('Ich bin hier drin');
        return false;
    }

    if(num > 1) {
        isEven(num-2);
    }

}

console.log(isEven(5))