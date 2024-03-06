/*
let emergencyList = new Map();
emergencyList.set('113', 'Police Dept');
emergencyList.set('114', 'Fire Dept');
emergencyList.set('115', 'Hospital Dept');
emergencyList.set('116', 'Others');
*/

let emergencyList = new Map([
    ['113', 'Police Dept'],
    ['114', 'Fire Dept'],
    ['115', 'Hospital Dept'],
    ['116', 'Others']
]);

//Read a single value
console.log(emergencyList.get('113'));
console.log(`Is 113 key existing?: ${emergencyList.has('113')}`);

//Loop the map's entries via keysfo

for (const key of emergencyList.keys()) {
    console.log(`${key} : ${emergencyList.get(key)}`);
}

//Loop the map's entries via value

for (const value of emergencyList.values()) {
    console.log(`value : ${value}`);
}
console.log('====================');
//array from interator Array.from(iterator) => array
console.log(Array.from(emergencyList.keys()));

emergencyList.delete('116');
console.log(`map size; ${emergencyList.size}`)
printTheMap(emergencyList)
function printTheMap(emergencyList) {
    for (const key of emergencyList.keys()) {
        console.log(`${key} : ${emergencyList.get(key)}`);
    }
}