// loop-function: value, test function, update function, body function
// In jedem Durchlauf:
// 1. Testen mit test-Function
// 2. Value in Body-Function durchrechnen
// 3. Update erzeugt einen neuen Value

function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
        body(value);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);