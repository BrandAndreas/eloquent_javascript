require('./scripts.js');

function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}

console.log(characterScript(121));


function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({ name, count: 1 });
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

console.log(JSON.stringify(countBy([1, 2, 3, 4, 5], n => n > 2)));

/* function(dominatDirection(text)) {
    // Vorherrschende Schreibrichtung in einem String ermitteln.
    // script.direction
} 

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
*/

function textScripts(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({name}) => name != "none");

    let total = scripts.reduce((n, {count}) => n + count, 0);
    if(total == 0) return "No Scripts found";


    return scripts.map(({name, count}) => {
        return `${Math.round(count + 100 / total)}% ${name}`;
    }).join(", ");
}

console.log(textScripts('Hey, مساء الخير"'));


function textDirections(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({direction}) => direction != "none");

    let total = scripts.reduce((n, {count}) => n + count, 0);
    if(total == 0) return "No Scripts found";


    return scripts.map(({name, count}) => {
        return `${Math.round(count + 100 / total)}% ${name}`;
    }).join(", ");
}

console.log(textDirections('kkkkHey, مساء الخير"'));