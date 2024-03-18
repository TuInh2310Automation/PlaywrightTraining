const Post = require("./Post")
// Function declaration
function add(a, b) {
    return a+ b;
}

// Arrow function | Function expression
const addArr1 = (a, b) => {
    console.log("arow function");
    return a + b;
}

//implicity returned
const addArr2 = (a, b) => a + b;

console.log(addArr2(1));

const sayHello = () => {
    console.log('Hello');
}
sayHello();

const intArr = [1,2,3,4,5];
/*
intArr.filter(function (value, index, array) {
    return value % 2 !== 0;
})
*/
const filterArr = intArr.filter( value =>  value % 2 !== 0);
console.log(filterArr);

//Destructure/ destruction
const tempPost = { id: 1, body: 'this is body'};
const convertPost = ({id, body}) => new Post(id, body)
console.log(convertPost(tempPost));

//Lexical this binding

const person = {
    name: "Teo",
    sayHello: function (params) {
        setTimeout(() => {
            console.log(`Hello ten tui la ${this.name}`);
        }, 500);
        
        
    }

}
person.sayHello();

