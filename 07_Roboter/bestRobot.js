// PARCELS:
// {"place":"Post Office","parcels":[{"place":"Ernie's House","address":"Shop"},{"place":"Alice's House","address":"Town Hall"},{"place":"Post Office","address":"Bob's House"},{"place":"Cabin","address":"Town Hall"},{"place":"Alice's House","address":"Marketplace"}]}

function findRoute(graph, from, to) {
    let work = [{at: from, route: []}];
    for (let i = 0; i < work.length; i++) {
        let {at, route} = work[i];
        for (let place of graph[at]) { // Für alle direkten Verbindungen zum aktuellen Ort
            if (place == to) return route.concat(place); // Wenn es eine direkte Verbindung zum Ziel gibt, packe die Verbindung in die Route und gib die Route zurück
            if (!work.some(w => w.at == place)) {
                work.push({at: place, route: route.concat(place)});
            } // Wenn es keine Verbindung gibt, dann gib dem Arbeitsarray den neuen Platz hinzu und der Route auch
        }
    }
}

function goalOrientedRobot({place, parcels}, route) {
    if (!route || route.length == 0) {
        let parcel = parcels[0]; // Das parcel ist das erste Paket der Pakete
        if (parcel.place != place) { // Wenn das Pakte noch nicht angekommen ist
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return {direction: route[0], memory: route.slice(1)};
}

/* 
IDEE:
Schau dir erst alle places der Pakete an. Geh zu dem, dass am nächsten ist. Kiche dieses Ziel aus der Liste.
Dann packe das Ziel dieses Paketes in die Liste und vergleiche, ob diese Adresse oder die places der übrigen Pakete am nächsten ist.
Gehe dann zum nächsten Ziel und fahre weiter so fort.
*/

function bestRobot() {

}