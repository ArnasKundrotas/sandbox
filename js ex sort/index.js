// Array -> sort() -> mutated Array;
/* console.log(array.sort((a, b) => a - b);
    - if (a - b < 0) -> ? a, b;
    - if (a - b = 0) -> ? a, b -> element order will not be change;
    - if (a - b < 0) -> ? b, a;
*/

/* console.log(array.sort()) -> without arguments;
    - elements are converted to strings;
    - example "5" > "10" -> true;
*/

/* sort() algorithm in different browsers when quantity of elements <= 10;
array = [10, 5, 79, 27, 50, 14, 27]
    - chrome -> 13 iterations -> "V8" javascript engine -> insertion sort algorithm -> stable;
    - firefox -> 13 iterations ->"spinder monkey" javacript engine -> insertion sort algorithm -> stable;
    - safari -> 13 iterations -> "javascriptcore" javascript engine -> different pairs -> merge sort algorithm -> stable;
        - split into groups;
        - merge groups;
    - nodejs -> 13 iteration -> "V8" javascript engine -> insertion sort algorithm -> stable; 
    - IE -> 
*/

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

const sortProductsByPrice = products => products.sort ((a, b) => a.price - b.price);

sortProductsByPrice(products);

console.log(products);