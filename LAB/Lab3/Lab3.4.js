const {
    sortArrByLogic
}
    = require('../Lab3/Lab3Utils');
let intArr1 = [12, 34, 1, 16, 28];
let intArr2 = [1, 13, 16, 27, 99];
let intArr = [...intArr1, ...intArr2];

sortArrByLogic(intArr);
console.log(intArr)