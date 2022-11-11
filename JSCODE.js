const shopDate = document.getElementById('date-shopping');
const shopPlace = String(document.getElementById('local-shopping'));

let shopItems; // Create a function to get all items, pricces and amount.

//-------------------------------------------------------------------------

const receivePlaceCheck = document.querySelector(".receive-place-check");
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
let determineReceivePlace = function () {

    let localHome = document.getElementById("Home11");
    let localLocal = document.getElementById("Local11");
    let choseBox = null;

    if (localHome.checked) {
        localLocal.checked = false
        choseBox = localHome
    }
    if (localLocal.checked) {
        localHome.checked = false
        choseBox = localLocal
    }

    if (choseBox.value) return choseBox.value
}

buttonsSection.addEventListener("click", determineUrgencyLevel);
receivePlaceCheck.addEventListener("click", determineReceivePlace);
let Ulevel = determineUrgencyLevel();
let receivePlace = determineReceivePlace();

//-------------------------------------------------------------------------
