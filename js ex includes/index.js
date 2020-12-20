const tags = [
    ["javascript", "es6"],
    ["css", "flexbox"],
    ["html", "web-browser"]
];

const fruits = [
    {title: "Apple", quantity: 10},
    {title: "Banana", quantity: 5},
    {title: "Apple", quantity: 25}
];

const primitiveTypesArray = [25, "x", true, undefined, null];



const elementIsIncluded = (searchElement, array) => 
//{
        typeof searchElement !== "object" ? array.includes(searchElement) : array.map(e => JSON.stringify(e)).includes(JSON.stringify(searchElement));
    
    
//     if (typeof searchElement !== "object"){
//         return array.includes(searchElement);
//     }

//     if (typeof searchElement === "object"){
//         return array.map(e => JSON.stringify(e)).includes(JSON.stringify(searchElement));
//     }
//}


console.log(elementIsIncluded(["css", "flexbox"], tags)); // true
console.log(elementIsIncluded(["flexbox", "css"], tags)); // false
console.log(elementIsIncluded({title:"Apple",quantity:25}, fruits)); // true
console.log(elementIsIncluded({title:"Banana"}, fruits)); // false
console.log(elementIsIncluded(25, primitiveTypesArray)); // true
console.log("--------------------------------");

// --- --- //

const myNumbers = [123, 50, 27];

const pushIfUnique = (arr, newValue) => {
    console.log("Is " + newValue + " unique?");
    arr.includes(newValue) ? console.log(newValue + " is already in the array") : arr.push(newValue);
}

pushIfUnique(myNumbers, 50); // 50 is already in the array
console.log(myNumbers); // [123, 50, 27]
console.log("---/---");

pushIfUnique(myNumbers, 80); // 80 is unique
console.log(myNumbers); // [123, 50, 27, 80]
console.log("---/---");

pushIfUnique(myNumbers, 80); // 80 is already in the array
console.log(myNumbers); // [123, 50, 27, 80]
console.log("---/---");

pushIfUnique(myNumbers, 77); // 77 is unique
console.log(myNumbers); // [123, 50, 27, 80, 77]
console.log("---/---");