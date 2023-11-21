function countChar(searchChar, searchString) {
    let charCounter = 0;
    for(char of searchString) {
        if(char === searchChar) {
            charCounter++
        }
    }
    return charCounter;
}

console.log(countChar('B', 'BklkBjkBBi'));