//Literal declaration
let myNumArray = [1, 2, 3, 4, 5];
/*
 * lenght: number of elements
 * index: 0-> lenght -1
 * 
 * */
console.log('Array length: ', myNumArray.length)
console.log('value of sencond num: ', myNumArray[1])
myNumArray[1] = 100;
console.log('value of sencond num: ', myNumArray[1]);

console.log('value of 100 num: ', myNumArray[99])

//Adding one more on top of array
myNumArray.push(6)
console.log('Array : ', myNumArray)


// Remove the last element from Array
let removeCalue = myNumArray.pop();
console.log('Remove value', removeCalue);
console.log('After removing last element', myNumArray);

// removing the first element
let remove1Value = myNumArray.shift();
console.log('Remove value', remove1Value);
console.log('After removing last element', myNumArray);

// Deleting / splice
myNumArray.splice(0, 2)
console.log(myNumArray);

let myNewarrray = [1, 3, 4, 5];
let whereToInsert = 1;
let numberOfArgToBeRemoved = 2;
let valueToBeAdded = 2;
myNewarrray.splice(whereToInsert, numberOfArgToBeRemoved, valueToBeAdded);
console.log(myNewarrray)

//Via Array constructor
let viaContructor = new Array(1, 2, 3, 4, 5);