let buttons = document.getElementsByClassName("btn");
let changeMe = document.getElementById("changeMe");


//run through a loop
//add an event listener>>>
//>>>run the loop to target each button individually at the index of i to add the event
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (e) {
        alert("You clicked on " + e.target.innerText);
        changingText(e.target.innerText);
    });
}


function changingText(textToChange) {
    //only works if you want all buttons to do a similar task
    changeMe.innerText = textToChange;

    changeMe.className = " ";
    switch (textToChange) {
        case "Primary1":
            changeMe.classList.add("dark")
            break;
            case "Primary2":
            changeMe.classList.add("dingus")
            break;
            case "Primary3":
            changeMe.classList.add("grey")
            break;
            case "Primary4":
            changeMe.classList.add("yellow")
            break;
            case "Primary5":
            changeMe.classList.add("red")
            break;
            case "Primary6":
            changeMe.classList.add("teal")
            break;
            default:
                changeMe.classList.add("dark")

    }
}

