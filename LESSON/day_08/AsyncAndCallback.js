// Asynchronos
function sendRequest(url, callback){
    console.log('1. Sending request to ', url);
    setTimeout(function () {
        callback({status: 200})
        
    }, 1000);
}
// Asynchronos
function processResponse(response, callback){
    console.log('2. processing response ', response);
    setTimeout(function() {
        callback(response.status)
    }, 2000);
}

//Synchronous
function validateResponse(statusCode) {
    console.log('3. Validating...');
    if(statusCode === 200) {
        console.log('Pass!!');
    } else {
        console.error('Fail, status code ', statusCode);
    }
}
const targetURL = "https://sdetpro.com/"
sendRequest(targetURL, function (response) {
    processResponse(response, function(statusCode) {
        validateResponse(statusCode)
    })
})