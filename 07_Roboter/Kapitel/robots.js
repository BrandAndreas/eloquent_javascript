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

console.log(JSON.stringify(roadGraph));

class VillageState {
    constructor (place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        if(!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p; // Wenn der Ort des Paketes nicht dem Ort dieses Objektes entspricht gib einfach das Paket zurück
                return {place: destination, address: p.address};  // Gib dem Paket als Ort das Ziel und die Adresse bleibt die Gleiche
            }).filter(p => p.place != p.address); // filter die Pakete heraus, dessen Adressen nicht mit dem Ort übereinstimmen
            return new VillageState(destination, parcels);
        }
    }
}