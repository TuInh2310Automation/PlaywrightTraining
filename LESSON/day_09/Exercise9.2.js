const { sendRequest } = require('./RequestHelper.js')
const BASE_URL = 'https://jsonplaceholder.typicode.com';
const SLUG = '/posts';
let url = `${BASE_URL}${SLUG}`
const userId = 1;
const postId = 2;
printTargetPost(userId, postId);
//printAllPosts(userId);

async function printTargetPost(userId, postId) {
    const filterPosts = await _getAllPosts(userId);
    const targetPost = filterPosts.filter(function (post) {
        return (post.id === postId)
    })[0];

    if (targetPost) {
        console.log(targetPost);
    } else {
        console.log(' The post not exist');
    }

}

async function printAllPosts(userId) {
    let filterPosts = await _getAllPosts(userId);
    console.log(filterPosts);

}
async function _getAllPosts(userId) {
    const posts = await sendRequest(url);
    return targetPost = posts.filter(function (post) {
        return (post.userId === userId)
    })

}
