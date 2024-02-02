const readline = require('readline-sync')
let guesingTime = 0;
let randomNumber = getRandomNumber();
console.log("randomNumber is ", typeof randomNumber);
do {
    let userNum = getUserNum();
    console.log("userNum is ", typeof userNum);
    if (userNum == randomNumber) {
        console.log("Hooray");
        break;
    }
    guesingTime++;
} while (guesingTime < 3);
if (guesingTime == 3) {
    console.log("Chuc ban may man lan sau");
}
function getRandomNumber() {
    return Math.floor(Math.random()* 10) + 1;
}

function getUserNum() {
    return readline.question("Please enter your number: ")
}