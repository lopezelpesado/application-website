// Menu

// Menu Variables

const menuButtonArr = Array.from(document.getElementsByClassName("menuButton")); // Array of all the menu buttons

const menuContentArr = Array.from(document.getElementsByClassName("menuContent")); // Array of all sections

const main = document.getElementsByTagName("main")[0]; // the main element

// Menu Event Listeners

menuButtonArr.forEach(e => e.addEventListener("click", menuFunction)); // When clicked, each menu button will call menuFunction

// Menu Functions

function menuFunction (event) { // function to run when each menu button is clicked taking the event as an argument
    hideSections(); // calls the function to hide all the sections

    removeActive(); // calls the function to remove the active class from all menu buttons

    revealSection(event.target.classList[0]); // calls the function to reveal the corresponding section and passes the first item in the clicked buttons class list which is shared with the corresponding section
};

// Hide all sections

function hideSections () { // function to hide all the sections
    menuContentArr.forEach(e => e.style.display = "none"); // when called it sets the display of each menu section to none which hides them
};

// Remove all active classes

function removeActive () { // function to remove the active class from all menu buttons
    menuButtonArr.forEach(e => e.classList.remove("active")); // when called it removes the active class from each menu button if it is there
};

// Unhide selected section and add active class to menu button

function revealSection (clickedButton) { // function to reveal the corresponding section of the clicked button and reset the scroll

    section = document.getElementsByClassName(clickedButton)[1]; // assigns to a variable the second element of all elements with the first class in the class list of the clicked button which will be clicked button's corresponding section

    let button = document.getElementsByClassName(clickedButton)[0]; // assigns to a variable the first element of all elements with the first class in the class list of the clicked button which will be the clicked button

    section.style.display = "flex"; // sets display to block (revealing it) for the second element of all elements with the first class in the class list of the clicked button which is the corresponding section to that button

    button.classList.add("active"); // gives the clicked button the active class

    main.scrollTo(0,0); // scrolls main back to the top

}

// Home

// About

// Magic

// Magic Variables

const numOfPlayers = document.getElementById("setupPlayers");

const startLifeTotal = document.getElementById("setupLife");

const setupSubmitButton = document.getElementById("gameSetupSubmit");

const plusFiveButtons = Array.from(document.getElementsByClassName("+5"));

const plusOneButtons = Array.from(document.getElementsByClassName("+1"));

const minusOneButtons = Array.from(document.getElementsByClassName("-1"));

const minusFiveButtons = Array.from(document.getElementsByClassName("-5"));

const lifeTotals = Array.from(document.getElementsByClassName("life"));

const resetLifeTotalButtons = Array.from(document.getElementsByClassName("resetLifeTotal"));

// Magic Event Listeners

setupSubmitButton.addEventListener("click", setupGame)

// Magic Functions

function setupGame (event) {
    event.preventDefault()
    console.log(numOfPlayers.value)
}



// Cats