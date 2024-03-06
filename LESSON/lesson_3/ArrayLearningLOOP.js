//Literal declaration
let myNumArray = [1, 2, 3, 4, 5];
/*
let i =0
for (; i < 5; ){
    console.log(i);
    i++;
}
console.log('Last value of i:', i);

*/

let arrayLength = myNumArray.length
for (let index = 0; index < myNumArray.length; index++) {
    const curentValue = myNumArray[index];
    myNumArray[index] = curentValue * 2;
}
for (let value of myNumArray) {
    console.log(value);
}