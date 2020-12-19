const postsJSON = [
    '{"postId":1335, "CommentsQuantity":5}',
    '{"postId":5131, "CommentsQuantity":13}',
    '{"postId":6134, "CommentsQuantity":2}'
];

const posts = postsJSON.map(element =>JSON.parse(element));

const findSinglePost = (postId, posts) => posts.find(post => post.postId === postId);

console.log(findSinglePost(6134, posts)); // {postId: 6134, CommentsQuantity: 2}

console.log(findSinglePost(4511, posts)); // undefined // no post with id 4511