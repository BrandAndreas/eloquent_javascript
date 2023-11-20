/* Robot efficiency

Can you write a robot that finishes the delivery task faster than goalOrientedRobot? If you observe that robot’s behavior, what obviously stupid things does it do? How could those be improved?

If you solved the previous exercise, you might want to use your compareRobots function to verify whether you improved the robot. */

// Your code here

/* Finde das Paket das am nächsten liegt und finde die Zieladresse, der Pakete die schon vorhanden sind. Vergleiche die und nimm das Paket welches entweder am schnellsten abgeholt werden kann oder abgeliefert werden kann */

function yourRobot({place, parcels}, route) { // Wird gefüttert mit dem aktuellen Ort, den Paketen und der Route, die aber als leere Array angegeben werden muss.
    
    function getDistance(searchParcel) {
        if (searchParcel.place != place) {
            return findRoute(roadGraph, place, searchParcel.place).length;
        } else {
            return findRoute(roadGraph, place, searchParcel.address).length;
        }
    }
    
    let parcel = parcels.reduce((a, b) => {
        return getDistance(a) < getDistance(b) ? a : b;
    });


    
    if (route.length == 0) { //Wenn das Array leer ist
        //let parcel = parcels[0]; // Ist das aktuelle Paket = Paket Nummer 1
        if (parcel.place != place) { // Wenn das Paket sich nicht vor Ort befindet...
            route = findRoute(roadGraph, place, parcel.place); // ... finde die schnellste Route dahin
        } else {
            route = findRoute(roadGraph, place, parcel.address); // Wenn doch, dann finde die schnellste Route zur Zieladresse des Paketes.
        }
    }
    return {direction: route[0], memory: route.slice(1)}; // Zurückgeben: Die Direction, für die nächste Bewegung und als memory den Rest der Route, der dann als Roboter wieder als route eingetragen wird. --> Dadurch wird die Route schrittweise durchgefüht, weil die anderen Schleifen übersprungen werden.
}

runRobotAnimation(VillageState.random(), yourRobot, memory);