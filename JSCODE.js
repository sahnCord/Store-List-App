const shopDate = document.getElementById('date-shopping');
const shopPlace = String(document.getElementById('local-shopping'));

let shopItems; // Create a function to get all items, pricces and amount.
determineUrgencyLevel

let Ubuttons;

function determineUrgencyLevel() {
  
  let But1 = document.getElementById(`Level1`)
  let But2 = document.getElementById(`Level2`)
  let But3 = document.getElementById(`Level3`)
  let ButSet = [But1, But2, But3]
  
  if (But1 == true) {
    const CButton = ButSet.splice(ButSet.indexOf(But1), 1);
    CButton.setAtribute(`checked`);
    
    ButSet.forEach((u) => {
      u.removeAtribute(`checked`);
    });
    let body = document.getElementByName(`body`)
    body.style.background-color = red;
  }
  if (But2 == true) {
    const CButton = ButSet.splice(ButSet.indexOf(But2), 1);
    CButton.setAtribute(`checked`);
    
    ButSet.forEach((u) => {
      u.removeAtribute(`checked`);
    });
  }
  if (But3 == true) {
    const CButton = ButSet.splice(ButSet.indexOf(But3), 1);
    CButton.setAtribute(`checked`);
    
    ButSet.forEach((u) => {
      u.removeAtribute(`checked`);
    });
  }
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