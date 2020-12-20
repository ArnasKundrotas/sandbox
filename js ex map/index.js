const postsJSON = [
    '{"postId":1335, "CommentsQuantity":5}',
    '{"postId":5131, "CommentsQuantity":13}',
    '{"postId":6134, "CommentsQuantity":2}'
];

var posts = [];

// for loop
for (let t = 0; t < postsJSON.length; t++){
    posts.push(JSON.parse(postsJSON[t]));
}

// => 
const posts1 = postsJSON.map(element =>JSON.parse(element));

console.log(posts);
console.log(posts1);