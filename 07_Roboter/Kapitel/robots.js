const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
];

function buildGraph(edges) {
    let graph = Object.create(null);
    function addEgde(from, to) {
        if(graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    for(let [to, from] of edges.map(r => r.split('-'))) {
        addEgde(from, to);
        addEgde(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);

// console.log(JSON.stringify(roadGraph));

class VillageState {
    constructor (place, parcels) {
        this.place = place; // "Post Office"
        this.parcels = parcels; // [{place: "Post Office", address: "Alice's House"}]
    }

    move(destination) { // destination = "Alice's House"
        if(!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p; // Wenn der Ort des Paketes nicht dem Ort dieses Objektes entspricht gib einfach das Paket zurück, das bedeutet, dass Paket wurde noch nicht aufgesammelt.
                return {place: destination, address: p.address};  // Gib dem Paket als Ort das Ziel und die Adresse bleibt die Gleiche
            }).filter(p => p.place != p.address); // filter die Pakete heraus, dessen Adressen nicht mit dem Ort übereinstimmen. Das heißt, lass die angekommenen Pakete liegen
            return new VillageState(destination, parcels);
        }
    }
}

/* let first = new VillageState(
    "Post Office",
    [{place: "Post Office", address: "Alice's House"}]
);
let next = first.move("Alice's House");
console.log(next.place);
console.log(next.parcels);
console.log(first.place); */

function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
}

VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    for (let i=0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
};

// runRobot(VillageState.random(), randomRobot);

const mailRoute = [ "Alice's House", "Cabin", "Alice's House", "Bob's House", "Town Hall", "Daria's House", "Ernie's House", "Grete's House", "Shop", "Grete's House", "Farm", "Marketplace", "Post Office" ];

function routeRobot(state, memory) {
    if (!memory || memory.length == 0) {
        memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)};
}

// runRobot(VillageState.random(), routeRobot, mailRoute);

function findRoute(graph, from, to) {
    let work = [{at: from, route: []}];
    for (let i = 0; i < work.length; i++) {
        let {at, route} = work[i];
        for (let place of graph[at]) {
            if (place == to) return route.concat(place);
            if (!work.some(w => w.at == place)) {
                work.push({at: place, route: route.concat(place)});
            }
        }
    }
}

function goalOrientedRobot({place, parcels}, route) {
    if (!route || route.length == 0) {
        let parcel = parcels[0];
        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return {direction: route[0], memory: route.slice(1)};
}

runRobot(VillageState.random(), goalOrientedRobot);