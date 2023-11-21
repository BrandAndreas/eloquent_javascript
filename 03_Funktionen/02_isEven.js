function isEven(num) {
    if(Math.abs(num)>1) {
        return isEven(Math.abs(num)-2);
    }

    return num === 0;
}

console.log(isEven(-23))