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