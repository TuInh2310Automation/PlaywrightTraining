const {
    filterGreater3Number,
    convertToEvenNumbers,
    sortNumberASC,
    sortNumberDESC
}
    = require('../utils/ArrayHelper');
//Literal declaration
let myNumArray = [1, 2, 3, 4, 5];

// 1. Most of method to process an array can be accept a function as a 
/*
 let evenNumbers = myNumArray.filter(filterEvenNumber);

// The function to process the array, always (value, index, array)
function filterEvenNumber(value, index, array){
    console.log("Processing at index", index);
    return value % 2 === 0;
}


for (let value of evenNumbers) {
    console.log(value);
}
*/
/*

let greaterArr = myNumArray.filter(filterGreater3Number);
for (let value of greaterArr) {
    console.log(value);
}
*/

// MAP
/*
const mapArray = myNumArray.map(convertToEvenNumbers);

for (let value of mapArray) {
    console.log(value);
}
*/


// SORT  string Asc ,desc
/*
let myString = ['B', 'C', 'A'];
myString.sort();
myString.reverse();

console.log(myString)
*/
//SORT NUMBER
/*
let complexArr = [100, 22, 19];
complexArr.sort(sortNumberASC);
complexArr.sort(sortNumberDESC);
console.log((complexArr));
*/
var targetStr = '';
myNumArray.forEach(convertToNoSpaceStr);

function convertToNoSpaceStr(value, index, array) {
    console.log(index);
    targetStr = targetStr + value;
}

console.log(targetStr)