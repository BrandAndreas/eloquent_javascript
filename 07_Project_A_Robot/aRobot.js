const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
];

function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);

console.log('roadGraph: ', roadGraph);

class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        if (!roadGraph[this.place].includes(destination)) { //Wenn die destination nicht erreicht werden kann, dann gib genau das gleiche Objekt "Villiage State" wieder zurück
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p; // Wenn das Paket nicht gleich des Startortes ist, dann gib das Paket zurück. Also {place: ..., address: ...}
                return {place: destination, address: p.address}; // Ansonsten bekommt das Paket den Place der destination und die Zieladresse bleibt gleich -> Das bedeutet, dass die Pakete aufgenommen werden, wenn sie sich am Startort befinden
            }).filter(p => p.place != p.address); // Hier werden die Pakete herausgefiltert, die an der Zieladresse angekommen sind
            return new VillageState(destination, parcels); // Gebe ein VillageState-Objekt zurück, mit dem Startpunkt = destination und den neu gefilterten Paketen.
        }
    }
}

let first = new VillageState(
    "Post Office",
    [{place: "Post Office", address: "Alice's House"}, {place: "Post Office", address: "Bob's House"}]
);
let next = first.move("Alice's House");
console.log("next: ", next);
console.log(first.place);

function runRobot(state, robot, memory) { // state = VillageState-Objekt, robot = Funktion die ein neues Ziel erzeugt und der memory
    for (let turn = 0;; turn++) {
        if (state.parcels.length == 0) { // Wenn keine Pakete mehr vorhanden sind
            console.log(`Done in ${turn} turns`); // Gib die Meldung raus in wievielen Turns das geschehen ist
            break; // Und danach beende die Funktion
        }
        let action = robot(state, memory); 
        state = state.move(action.direction); // Das Village-Objekt wird mit dem Ziel des Roboters weiterbewegt
        memory = action.memory; // der letzte Roboter wird im Memory gespeichert
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

VillageState.random = function(parcelCount = 5) { // Erzeugt 5 Pakete mit zufälligen places und addresses und der Startort ist 'Post Office'.
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        console.log('address: ', address);
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
            console.log('place: ', place);
        } while (place == address);
        parcels.push({place, address});
    }
    return new VillageState('Post Office', parcels);
};


runRobot(VillageState.random(), randomRobot);

const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
];