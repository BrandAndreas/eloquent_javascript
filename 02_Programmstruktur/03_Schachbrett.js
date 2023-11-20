let logString = '';
const size = 12;
for(let i=0; i<size; i++) {
    for(let j=0; j<size+1; j++) {
        if(i%2 === 0) {
            if(j === size) {
                logString += '\n';
            } else if(j%2 === 0) {
                logString += ' ';
            } else {
                logString += '#';
            }
        } else {
            if(j === size) {
                logString += '\n';
            } else if(j%2 === 0) {
                logString += '#';
            } else {
                logString += ' ';
            }
        }
    }
}

console.log(logString);