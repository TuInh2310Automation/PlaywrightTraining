const readline = require('readline-sync')
let sentence = getUserOption()
let wordObject = {};
let individualWords = sentence.replace(/,/gi," ").trim().split(" ");
for (let index = 0; index < individualWords.length; index++) {
    const element = individualWords[index];
    if (!element == " ") {
        if (wordObject[element] === undefined) {
            wordObject[element] = 1;
        }
        else {
            wordObject[element] = wordObject[element] + 1;
        }
       
    }
    
}

console.log(wordObject);
function getUserOption() {
    return readline.question("Please add an sentence: ")
}