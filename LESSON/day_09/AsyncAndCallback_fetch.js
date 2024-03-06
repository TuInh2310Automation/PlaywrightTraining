// Asynchronos
function sendRequest(url, callback){
    console.log('1. Sending request to ', url);
    //Promise
    // Thenable chaining
    /*
    callback
        anotherCallback
            anotherAnotherCallBack
    
    callback()
    .then()
    .anotherCallBack()
    .then()
    .anotherAnotherCallBack()
    */
   fetch(url).then(function (response) {
        callback(response);
   })
}
// Synchronos
function processResponse(response){
    console.log('2. processing response ', response);
    return response.status;
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
    const statusCode = processResponse(response)
    validateResponse(statusCode)
    
})