const readline = require('readline-sync')



let isPlaying = true
while (isPlaying) {
    printGameMenu();
    let userOption = getUserOption();
    if (userOption == 0) {
        isPlaying = false;
    } else if (userOption == 1) {
        // Generate a random number
        let randomNumber = Math.floor(Math.random() * 10) + 1
        // and print out
        console.log("the lucky number is: ", randomNumber)
    } else {
        console.log("Nhap lui roi Teo oi")
    }
}
console.log("hen gap laij ban")
function printGameMenu() {
    console.log("=====GAME MENU=====")
    console.log("Generate a random number 1->10")
    console.log("0. Exit")
}
function getUserOption() {
    return readline.question("Please select an option: ")
}