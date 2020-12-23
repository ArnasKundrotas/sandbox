let numberToCompare = 10;

const templateLiteral = num => {

    return num > 10 ? `This number is less than ${numberToCompare}.
        Square root of this number is ${Math.sqrt(num)}`
        : `This number is greater than ${numberToCompare}.
        Square roo of this number is ${Math.sqrt(num)}.`;
};



const myNumber = 9;
console.log(templateLiteral(myNumber));

const myNumber1 = 25;
console.log(templateLiteral(myNumber1));

// --- --- //

/*

1. Get all arguments and extract result of the expressions to the separate array "vals" -> array.from(arguments).slice(1)
2. arrayOfString - first parameter
3. number of expressions = "vals".lenght - 1 
4. Concatenate elements in arrayOfStrings and "vals" -> reduce(, "")

*/

// function taggedTemplate(arrayOfStrings){
//     const vals = Array.from(arguments).slice(1);
//     return arrayOfStrings.reduce((concatStr, str, index) => concatStr + str + (vals[index] !== undefined ? vals[index] : ""), "");
// }

const taggedTemplate = (arrayOfStrings, ...vals) => {
    return arrayOfStrings.reduce((concatStr, str, index) => concatStr + str + (vals[index] !== undefined ? vals[index] : ""), "");
}


// TEST case 1
const a = 10;
const b = 5;
const sum = taggedTemplate`Sum of the two variables a(${a}) and b(${b}) is ${a + b}`;
console.log(sum); // Sum of the two variables a(10) and b(5) is 15

// TEST case 2
const girl = "Alice";
const boy = "Bob";
const friendsInfo = taggedTemplate`${girl} and ${boy} are friends!`;
console.log(friendsInfo); // Alice and Bob are friends!

// TEST case 2
const girl1 = "Alice";
const boy1 = "Bob";
const c = 14;
const string = "Not a number";
const gibberish = taggedTemplate`${girl} and ${boy} are ${string} and they are both ${c} years old`;
console.log(gibberish); // Alice and Bob are Not a number and they are both 14 years old