let userID;
let postID;
let listByID = [];
let listByIDAndPostID = [];


function searchByIDAndPostID(jsonResponse, id, post) {
    userID = id;
    postID = post;
    jsonResponse.filter(filterPost);
    console.log('All post of user are', listByID);
    if (listByIDAndPostID.length > 0) {
        console.log(`Post of userID ${userID} and postID ${postID} has Title: ${listByIDAndPostID[0].title} \n Body: ${listByIDAndPostID[0].body}`); 
    } else {
        console.log('Not found Post');
    }
}

function filterPost(value, index, array){
    if(value.userId == userID)
    {
        listByID.push(value)
        if(value.id == postID) {
            listByIDAndPostID.push(value);
        }
    } 
}

module.exports = {
    searchByIDAndPostID: searchByIDAndPostID
}