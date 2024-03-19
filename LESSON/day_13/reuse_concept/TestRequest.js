const GetRequest = require("./GetRequest");
const PostRequest = require("./PostRequest");
const url = 'https://my-api.com/api'

const request = new GetRequest(url);
request.setMethod();
request.send();
request.verifyResponseStatus()

const postRequest = new PostRequest(url);
postRequest.setMethod();
postRequest.send();
postRequest.verifyResponseStatus()
postRequest.sayHello()