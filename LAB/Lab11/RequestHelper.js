function sendRequest(url) {
    /*
    Chi ap dung khi ma ben trong hàm bên trong ko hỗ trợ promis, fetch có hỗ trợ promise nên ko cần
    
    new Promise(function(resolve, reject) {
        return fetch(url).then(function (response) {
            return response.json();
        })
    })
    */
    return fetch(url).then(function (response) {
        return response.json();
    })
}
module.exports = {sendRequest: sendRequest};