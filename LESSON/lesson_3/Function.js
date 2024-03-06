/**
 * DRY : to group same logic block into same place -> reusable
 * Group same logic category into same place
 * -> maintanable -> exentdable -> reliable
 **/
// Function declaration | It hoisted to the top of the scope
let myReturnedValue = functionName();
console.log(myReturnedValue);
function functionName() {
    return 2;
}


// Function Expression | its NOT hoisted like Function declaration
const functionName2 = function (firstNum, secondNum) {
    return firstNum + secondNum;
}
console.log(functionName2(1,4))