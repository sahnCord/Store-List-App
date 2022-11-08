const shopDate = document.getElementById('date-shopping');
const shopPlace = String(document.getElementById('local-shopping'));

let shopItems; // Create a function to get all items, pricces and amount.

let Ubuttons = 

function determineUrgencyLevel() {

    let UB = document.querySelectorAll("#Level");
    UB.forEach(u => {
        if ( u.value = true ){}
    })

}

let Ulevel;

let receivePlace;

class insertShoppingData {
    constructor() {};

    createShoppingListobj = function (date, place, items, Ulevel, receivep) {
        let OBJ = {
            DateShop: date,
            PlaceShop: place,
            ReceivePlace: receivep
        };
        
        return OBJ
    }
}

const act = new insertShoppingData