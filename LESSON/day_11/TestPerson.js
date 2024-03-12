const Person = require("./Person")
const person = require("./Person")

const teo = new Person();
console.log(teo.age);
console.log(teo.name);
teo.name = "Teo dep trai"
console.log(teo.name);