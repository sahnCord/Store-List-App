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

const inputItem = document.querySelector("#put-item-shopping");
const inputAmount = document.querySelector("#put-item-amount");
const inputPrice = document.querySelector("#put-item-price");

let createItemList = function () {

    let obj = {}

    obj.item = String(inputItem.value);
    obj.amount = Number(inputAmount.value);


    let value = Number((inputPrice.value) * obj.amount);
    let USdollars = Intl.NumberFormat("em-US", {
        style: "currency",
        currency: "USD",
    })

    obj.price = USdollars.format(value)

    return obj
}

let shopItemsData = [];
let boardPlace = document.querySelector(".board-place");

let createSpan = function () {

    let ItemOBJ = createItemList();

    newSpan = window.document.createElement("span");
    newSpan.className = "span-list";

    text = document.createTextNode("")
    newSpan.appendChild(text)

    if (shopItemsData.length > 0) {
        newSpan.innerHTML = `, (${ItemOBJ.amount})${ItemOBJ.item}(${ItemOBJ.price})`
    } else {
        newSpan.innerHTML = `(${ItemOBJ.amount})${ItemOBJ.item}(${ItemOBJ.price})`
    }

    shopItemsData.push([ItemOBJ, newSpan]);

    boardPlace.appendChild(newSpan);

    this.newSpan;

    console.log(shopItemsData)
}

let removeLastItem = function () {
    boardPlace.removeChild(shopItemsData.pop()[1]);
    console.log(shopItemsData)
}

const CreateMainOBJ = function () {

    let obj = {};

    obj.Date = (document.getElementById('date-shopping')).value;
    obj.Place = String(document.getElementById('local-shopping').value);
    obj.Items = shopItemsData;
    obj.Urgency = String(determineUrgencyLevel());
    obj.ReceivePlace = String(determineReceivePlace());

    console.log(obj);

    return obj;
};


const addNewListButton = document.querySelector(".addNewList");
addNewListButton.addEventListener("click", CreateMainOBJ)

const addItemButton = document.querySelector(".add-item-button");
const removeLastItemButton = document.querySelector(".remove-last-item-button");

addItemButton.addEventListener("click", createSpan);
removeLastItemButton.addEventListener("click", removeLastItem);

//-------------------------------------------------------------------------
buttonsSection.addEventListener("click", determineUrgencyLevel);
receivePlaceCheck.addEventListener("click", determineReceivePlace);


//-------------------------------------------------------------------------

const StoreListObject = CreateMainOBJ(); // The OBJ that will be exported