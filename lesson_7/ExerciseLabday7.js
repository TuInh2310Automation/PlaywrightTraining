const readline = require('readline-sync')
const groupWords = {};

const userInput = readline.question('Input sentence: ')
const words = userInput.split(' ');
words.forEach(function (word) {
    //.hasOwnProperty
    if(groupWords[word]) {
        groupWords[word] ++;
    } else {
        groupWords[word] = 1;
    }
});
console.log(groupWords)
