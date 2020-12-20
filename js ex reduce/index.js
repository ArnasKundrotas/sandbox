const posts = [
    {
        title: "How to find JavaScript developer job?",
        postId: 3421,
        comments: 25
    },
    {
        title: "Is it hard to learn ES6?",
        postId: 5216,
        comments: 3
    },
    {
        title: "Should I learn React or Angular?",
        postId: 8135,
        comments: 12
    }
];

const minimalCommentsQty = 10;

const popularPostsIds = (posts, minimalCommentsQty) => posts.reduce(
    (postsIdsArray, postsElement) => {
        if (postsElement.comments >= minimalCommentsQty) postsIdsArray.push(postsElement.postId);
        return postsIdsArray;
    }
, []);

/* EXPLANATION

- function popularPosts Ids:
    - posts is array of objects;
    - minimalCommentsQty is variable for checking against;
    - array helper method reduce
        - postIdsArray is acumulator and in the beggining is equal to [];
        - postsElement over duration of the function is equal to 1,2,3 object in the posts array;
        - on first itteration post element is equal to first object in the posts array;
        - posts.comments takes comments key-value pair value 25 and compares to minimalCommenstQty which is 10 and if it is more or equal then pushes postId key-value pair value 3421 to the acumulator postsIdsArray and returns it becaus eit is mandatory in JS syntax;
        - same as above happens on all 3 itterations;
*/

console.log(popularPostsIds(posts, minimalCommentsQty)); // [3421, 8135]
console.log("--------------------------------");

// --- anothe rone

const products = [
    {
        title: "Phone case",
        price: 23,
        quantity: 2,
        category: "Accessories"
    },
    {
        title: "Android phone",
        price: 150,
        quantity: 1,
        category: "Phones"
    },
    {
        title: "Headphones",
        price: 78,
        quantity: 1,
        category: "Accessories"
    },
    {
        title: "Sport Watch",
        price: 55,
        quantity: 2,
        category: "Watches"
    }
];

const quantityByCategories = products => products.reduce(
    (count, product) => {
        
        console.log(product.category);
        console.log("iteration start -> " + count[product.category]);
        count[product.category] = (count[product.category] || 0) + product.quantity;
        console.log("iteration finish -> " + count[product.category]);
        console.log("-----------------------");

        /*
        - 1 iteration -> count -> {} -> acumulator;
        - 1 iteration -> count[product.category] -> count[Accessories]  -> ( count[Phones] -> count[Accessories] -> count[Watches]; )
        - 1 iteration -> count[product.category] -> undefined -> (count[product.category] || 0) -> undefined || 0 -> 0 + product.quantity -> 2;

        */
        return count;
    }
, {})

console.log(quantityByCategories(products));
/*
{
    Accessories: 3,
    Phones: 1,
    Watches: 2
}
*/