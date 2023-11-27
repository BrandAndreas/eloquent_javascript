const object1 = {
    word: 'Tja',
    hasOwnProperty(value) {
        console.log('Die eigene Property');
    }
}

object1.hasOwnProperty('word');
console.log(Object.prototype.hasOwnProperty.call(object1, 'word'));