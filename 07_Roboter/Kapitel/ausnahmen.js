 function prompt(question) {
    return "d";
}

/*
function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new Error(`Invalid direction: ${result}`);
    console.log('Dahinter geht es nicht weiter.');
}

function look() {
    if (promptDirection("Which way?") == "L") {
        return "a house";
    } else {
        return "two angry bears";
    }
}

try {
    console.log("You see", look());
} catch (error) {
    console.log(`Something went wrong: ${error}`);
} */

const accounts = {
    a: 100,
    b: 0,
    c: 20
};

function getAcccount() {
    let accountName = prompt("Enter an account name");
    if (!accounts.hasOwnProperty(accountName)) {
        throw new Error(`No such account: ${accountName}`);
    }
    return accountName;
}

function transfer(from, amount) {
    if (accounts[from] < amount) return;
    accounts[from] -= amount;
    accounts[getAcccount()] += amount;
}

transfer('a', 20);
console.log(accounts.a);