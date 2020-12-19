// --- EXAMPLES --- //

// --- Arrays

const myNumbers1 = [ 1, -2, 3 ]; // some numbers negative

const myNumbers2 = [ 1, 2, 3 ]; // all numbers positive

const myNumbers3 = [ -1, -2, -3 ]; // all numbers negative

// --- Function

const isPositiveNumber = element => typeof element === "number" && element > 0; // check ANY array for positive number

// --- every (all) helper method

const Check1_1 = myNumbers1.every(isPositiveNumber); // check myNumbers1 array for very positive number
const Check1_2 = myNumbers2.every(isPositiveNumber); // check myNumbers2 array for very positive number
const Check1_3 = myNumbers3.every(isPositiveNumber); // check myNumbers3 array for very positive number

console.log(Check1_1); // false
console.log(myNumbers1); // [1, -2, 3]

console.log(Check1_2); // true
console.log(myNumbers2); // [1, 2, 3]

console.log(Check1_3); // false
console.log(myNumbers3); // [-1, -2, -3]

console.log("---------------------------");

// --- some helper method

const Check2_1 = myNumbers1.some(isPositiveNumber); // check myNumbers1 array for some positive number
const Check2_2 = myNumbers2.some(isPositiveNumber); // check myNumbers2 array for some positive number
const Check2_3 = myNumbers3.some(isPositiveNumber); // check myNumbers3 array for some positive number

console.log(Check2_1); // true
console.log(myNumbers1); // [1, -2, 3]

console.log(Check2_2); // true
console.log(myNumbers2); // [-1, -2, -3]

console.log(Check2_3); // false
console.log(myNumbers3); // [-1, -2, -3]

console.log("---------------------------");

// ---

const items = [
    {title: "Computer", quantity: 10},
    {title: "Smartphone", quantity: 3},
    {title: "Headphones", quantity: 15}
];

// quantity > 5 (every)

if (items.every(item => item.quantity > 5)) console.log("All items are avaliable");

// quantity < 5 (every && some)

if (items.every(item => item.quantity > 0) && items.some(item => item.quantity <= 5) ) console.log("Some items may be sold soon");

// quantity = 0 (some)

if (items.some(item => item.quantity === 0) ) console.log("Some items are sold out");

console.log("---------------------------");

// --- --- //
const a = [5, "abc", 10, 1];
const b = [4, 10, 14, 25, 25, 50];
const c = [150, 132, 80, 40];
const d = [15, 26, 10, 23, 85];

//-----------------------------------
if (a.some(e => typeof e !== "number") ||
    b.some(e => typeof e !== "number") ||
    c.some(e => typeof e !== "number") ||
    d.some(e => typeof e !== "number")
) console.log("Some elements are not numbers");
//-----------------------------------
//-----------------------------------
console.log("---------------------------");


const arrayCheck = inputArray => {
    if (inputArray.some(e => typeof e !== "number")) return("Some elements in the " + inputArray + " are not numbers");
    if (inputArray.every((e, i, arr) => i > 0 ? e >= arr[i-1] : true)) { return("Array " + inputArray + " is sorted in ascending order")}
    if (inputArray.every((e, i, arr) => i > 0 ? e <= arr[i-1] : true)) { return("Array "+ inputArray + " is sorted in descending order")}
    return inputArray + " array is not sorted"
}

console.log(arrayCheck(a));
console.log(arrayCheck(b));
console.log(arrayCheck(c));
console.log(arrayCheck(d));