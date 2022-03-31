function repeat (n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, console.log);

let labels = [];

repeat(5, i => {
    labels.push(`Unit ${i +1}`);
});

console.log(labels);

// Eine Funktion mit der eine Funktion erzeugt wird
function greaterThan(n) {
    return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

// Eine Funktion, die eine andere Funktion ändert.
function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}

noisy(Math.min)(3, 2, 1);

// Eine Funktion mit new control flow
function unless(test, then) {
    if (!test) then();
}

repeat(3, n=> {
    unless(n % 2 == 1, () => {
        console.log(n, "is even");
    })
})