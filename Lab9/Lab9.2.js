
const {
    searchByIDAndPostID
} = require('./Utilities.js')
const readline = require('readline-sync')
const id = readline.question("Input user id ");
const postID =  readline.question("Input post id ");

const targetURL = "https://jsonplaceholder.typicode.com/posts"
async function run() {
    const response = await fetch(targetURL);
    const jsonResult = await response.json();
    searchByIDAndPostID(jsonResult, id, postID)
}
run();