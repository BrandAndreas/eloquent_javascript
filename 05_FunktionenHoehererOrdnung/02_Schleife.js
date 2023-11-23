function loop(arr, test, update, event) {
    let newArr = [];
    for(i=0; i<arr.length; i++) {
        const currentItem = arr[i];
        if(test(currentItem)) {
            event(currentItem);
            newArr.push(update(currentItem));
        } else {
            return false;
        }
    }
    return newArr;
}

console.log(loop([1,2,3], e => e<4, e => e*4, e => console.log(e)));