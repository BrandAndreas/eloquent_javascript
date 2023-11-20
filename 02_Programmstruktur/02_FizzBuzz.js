let i = 1;
while(i<=100) {
    if(i%3 === 0 && i%5 === 0) {
        console.log('FizzBuzz');
        i++;
        continue;
    }
    if(i%3===0) {
        console.log('Fizz');
        i++;
        continue;
    }
    if(i%5===0) {
        console.log('Buzz');
        i++;
        continue;
    }
    console.log(String(i));
    i++;
}