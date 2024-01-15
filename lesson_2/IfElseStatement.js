const EXPECT_TIME = 7;
let arrivalTime = 7;

// == ===
let isHeOnTime = arrivalTime === EXPECT_TIME;
let msgContent = '';
/*
if (isHeOnTime) {
    msgContent = 'Let talk';
} else {
    msgContent = 'Write a letter'
}
*/
// Ternary Operator
msgContent = isHeOnTime ? "Let talk" : "Write a letter";

console.log(msgContent)
