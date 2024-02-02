const readline = require('readline-sync')
const inputNum = Number(getUserOption());
switch (inputNum) {
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tueday");
        break;
    case 4:
        console.log("Wend");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
    case 8:
        console.log("Weekends");
        break;
    default:
        console.log("Nhap lui roi teo oi: 2->8");     
}
function getUserOption() {
    return readline.question('Please select an option');
}