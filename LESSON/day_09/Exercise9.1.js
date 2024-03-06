const {sendRequest} = require('./RequestHelper.js')
const BASE_URL = 'https://jsonplaceholder.typicode.com';
const SLUG = '/posts';
let url =`${BASE_URL}${SLUG}`
const userId = 1;
const postId = 2;
printTargetPost(userId, postId);
//printAllPosts(userId);

function printTargetPost(userId, postId) {
    _getAllPosts(userId).then(function (filterPosts) {
        const targetPost = filterPosts.filter(function (post) {
            return (post.id === postId);
        })[0]
        if(targetPost) {
            console.log(targetPost);
        } else {
            console.log(' The post not exist');
        }

    })

}

function printAllPosts(userId) {
    _getAllPosts(userId).then(function (filterPosts){
        console.log(filterPosts);
    })
}
function _getAllPosts(userId) {
    return sendRequest(url).then(function(posts) {
        return targetPost = posts.filter(function (post) {
            return (post.userId === userId)
        })
    })
}
