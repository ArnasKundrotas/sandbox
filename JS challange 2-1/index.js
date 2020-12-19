/**
 * CHALLENGE 2-1 TASK
 *
 * Create a button with "Click me" text on it.
 *
 * If you click on the button following actions
 * should be performed:
 * 1. Title of the button will be changed to following:
 * "Button was clicked <NUMBER> times"
 * 2. Log to the console message "Button was clicked"
 *
 * Use either "addEventListener" or "onclick" functions.
 * Try to use regular function and arrow function as a
 * callback function for functions above.
 *
 * Observe difference in behaviour and try to explain
 * this difference.
 */

 const createButton = () => {
    const btn =document.createElement("button");
    btn.innerHTML = "Click me";

    let clicksQuantity = 0;

    // btn.onclick = function () {
    //     console.log("Button was clicked");
    //     btn.innerHTML = "Button was clicked " + ++clicksQuantity + " time";
    // };

    btn.addEventListener("click", function () {
        console.log("Button was clicked");
        console.log(this);
        this.innerHTML = "Button was clicked " + ++clicksQuantity + " time";
    });
    
    // btn.addEventListener("click", () => {
    //     console.log("Button was clicked");
    //     console.log(this);
    //     this.innerHTML = "Button was clicked " + ++clicksQuantity + " time";
    // });

    document.body.appendChild(btn);
 }

 createButton();