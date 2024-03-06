const givenArray = [3,7,22,1];
const targetNumber = 8;
let indices = findIndicesUsingMap(givenArray, targetNumber)
console.log(indices);
function findIndices(array, target) {
    for (let firstIndex = 0; firstIndex < array.length; firstIndex++) {
        const firstNum = array[firstIndex];
        for (let secondIndex = firstIndex + 1; secondIndex < array.length; secondIndex++) {
            const secondNum = array[secondIndex];
            if (secondNum === target - firstNum) {
                return [firstIndex, secondIndex];
            }
        }
        
    } 
    return [];
}

// hint 02: using map -> 0(n)
// [3, 0]
// [7, 1]
//[22,2]
//[] -> 1, 3
function findIndicesUsingMap(array, target) {
    let numberMap = new Map();
    for (let firstIndex = 0; firstIndex < array.length; firstIndex++) {
        const firstNum = array[firstIndex];
        const lookingNumber = target - firstNum;
        if (numberMap.has(lookingNumber)) {
            return [numberMap.get(lookingNumber), firstIndex]
        } 
        numberMap.set(firstNum,firstIndex);
        
    } 
    return []
}