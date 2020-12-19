
function waitingFn (input) {
    let timeInMs = Date.now() + input;

    while (timeInMs > Date.now()) {

    }

}

waitingFn(3000);

console.log("Function call has just ended");