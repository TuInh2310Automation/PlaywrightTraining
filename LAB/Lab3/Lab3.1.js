let intArr = [1, 2, 3, 4, 5];
let evenCount = 0;
let oddCount = 0;
for (let index = 0; index < intArr.length; index++) {
    if (intArr[index] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}
console.log('Even numbers ', evenCount);
console.log('Odd numbers ', oddCount);


