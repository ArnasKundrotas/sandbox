const myCities = ["London", "New York", "Singapore"];

function arrayInfo(cityName, index) {
    console.log(cityName + " is located at the index " + index + " in the myCitties array");
}

for (let i = 0; i < myCities.length; i++){
    arrayInfo(i, myCities[i]);
}

console.log("---------------------------")

myCities.forEach((index, element) => arrayInfo(index, element));