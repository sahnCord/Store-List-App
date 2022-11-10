const shopDate = document.getElementById('date-shopping');
const shopPlace = String(document.getElementById('local-shopping'));

let shopItems; // Create a function to get all items, pricces and amount.

//-------------------------------------------------------------------------

const buttonsSection = document.querySelector(".buttons-section");
let determineUrgencyLevel = function () {

    let But1 = document.getElementById(`Level1`);
    let But2 = document.getElementById(`Level2`);
    let But3 = document.getElementById(`Level3`);

    let choseBox = null
    
    if (But1.checked) {
        But2.checked = false
        But3.checked = false
        choseBox = But1
    }
    if (But2.checked) {
        But1.checked = false
        But3.checked = false
        choseBox = But2
    }
    if (But3.checked) {
        But1.checked = false
        But2.checked = false
        choseBox = But3
    }

    if (choseBox.value) return choseBox.value
    
}

buttonsSection.addEventListener("click", determineUrgencyLevel)
let Ulevel = determineUrgencyLevel();

//-------------------------------------------------------------------------

const receivePlaceCheck = document.querySelector(".receive-place-check");
const determineReceivePlace = function () {

    let Home = document.getElementById("Home");
    let Local = document.getElementById("Local");
    let choseBox = null;

    if (Home.checked) {
        Local.checked = false
        choseBox = Home
    }
    if (Local.checked) {
        Home.checked = false
        choseBox = Local
    }

    console.log(choseBox.value)

    if (choseBox.value) return choseBox.value
}
receivePlaceCheck.addEventListener('click', determineReceivePlace);
let receivePlace = receivePlaceCheck();