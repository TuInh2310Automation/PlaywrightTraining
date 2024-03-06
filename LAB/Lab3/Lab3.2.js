let intArr = [1, -2, 3, 4, 5];
let min = intArr[0];
let max = intArr[0];
for (let index = 0; index < intArr.length; index++) {
    if (min > intArr[index]) {
        min = intArr[index];
    } 
    if (max < intArr[index]) {
        max = intArr[index];
    }
}
console.log('min is ', min)
console.log('max is ', max)