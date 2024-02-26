const {
    searchByIDAndPostID
} = require('./Utilities.js')
const readline = require('readline-sync')
const id = readline.question("Input user id ");
const postID =  readline.question("Input post id ");


function sendRequest(url, callback){
    console.log('1. Sending request to ', url);
    fetch(url).then(function (response) {
        callback(response);
   })
}

function processResponse(response){
    console.log('2. processing response ', '');
    if(response.status === 200) {
        console.log('Pass!!');
        convertToJson(response, function (jsonResponse) {
            searchByIDAndPostID(jsonResponse, id, postID)
        })
    } else {
        console.error('Fail, status code ', statusCode);
    }
}

function convertToJson(response, callback) {
    response.json().then(function (jsonResponse) {
        callback(jsonResponse);
    })
}

const targetURL = "https://jsonplaceholder.typicode.com/posts"
sendRequest(targetURL, function (response) {
    processResponse(response)
})
