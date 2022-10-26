class Glazes {

    glazeType;
    glazePrice
    constructor(glazeType,glazePrice) 
    {
        this.glazeType = glazeType;
        this.glazePrice = glazePrice;
	}
}

//initializing objects of Glazes class with the type of glaze and its price

const keepOriginal = new Glazes('Keep Original',0.0);
const sugarMilk = new Glazes('Sugar Milk',0.0);
const vanillaMilk = new Glazes('Vanilla Milk',0.50);
const doubleChocolate = new Glazes('Double Chocolate',1.50);


class Packs {

    constructor(packType,packPrice) 
    {
        this.packType = packType;
        this.packPrice = packPrice;
		
	}
}

// initializing objects of Packs class with the pack sizes and the price of each pack
const one = new Packs(1,1);
const three = new Packs(3,3);
const six = new Packs(6,5);
const twelve = new Packs(12,10);


//Array of objects

let glazeObjectList = [keepOriginal,sugarMilk,vanillaMilk,doubleChocolate];
let packObjectList = [one,three,six,twelve];


//Dynamically populating the dropdown menu

let glazeMenu = document.getElementById("glazeMenu"); 
for (let i = 0; i < glazeObjectList.length; i++) 
{
    let option1 = document.createElement("option");
    option1.textContent = glazeObjectList[i].glazeType;
    glazeMenu.appendChild(option1);

}

    
let packMenu= document.getElementById("packMenu"); 
for (let j = 0; j < packObjectList.length; j++) 
    {
        let option2 = document.createElement("option");
        option2.textContent = packObjectList[j].packType;
        packMenu.appendChild(option2);
    }
     


let gPrice = 0.0;
let pPrice = 1;
let totalPrice = 0.0;
let glaze = "Keep Original";
let Packsize = 1;

 //Function to extract the price of the selected glazing
function glazingChange(element) {

    let selectedGlazeOption = element.value;
    console.log(selectedGlazeOption);

    for (let i = 0; i < glazeObjectList.length; i++)
    {
        if(selectedGlazeOption == glazeObjectList[i].glazeType)
        {
            gPrice = Number(glazeObjectList[i].glazePrice);
            glaze = glazeObjectList[i].glazeType;
        }
    }
    
    calculatePrice(gPrice,pPrice);

}

//Function to extract the price of the pack
function packChange(element) {
    let selectedPackOption = element.value;
    console.log(selectedPackOption);

    for (let i = 0; i < packObjectList.length; i++) 
    {
        if(selectedPackOption == packObjectList[i].packType)
        {
            pPrice = Number(packObjectList[i].packPrice);
            Packsize = Number(packObjectList[i].packType);
        }
    }
    //console.log(pSize);
    calculatePrice(gPrice,pPrice);
}

//Function to calculate the price and display it
function calculatePrice(gPrice,pSize) {
    totalPrice = (rolls[rollType].basePrice + gPrice)*pSize;
    let totalDisplay = document.getElementById("price");
    totalDisplay.innerText = totalPrice.toFixed(2);
}

// ------------------------------- HW 4 ------------------------------- 



//Getting value of search parameter
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");


//Changing the heading, image and base price based on the flavour
for (let roll in rolls) {
    if (rollType === roll) {
        document.getElementById("heading").innerText = rollType + " Cinnamon Roll";
        document.getElementById("detail-img").src = rolls[rollType].imageFile;
        document.getElementById("price").innerText = rolls[rollType].basePrice;
        basePrice = rolls[roll].basePrice;
    }
}



class Roll {
    constructor(rollType, rollGlazing, Packsize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = Packsize;
        this.basePrice = basePrice;
    }
}

//------------------------------------- HW 6 ----------------------------------

//Array to store orders 
let cart = [];


//Checking if the local storage is not full 
if ((localStorage.getItem("cart")) != null) {

    //Getting the objects stored in local storage
    const storedRollOrder = localStorage.getItem("cart");
    const orderObjects = JSON.parse(storedRollOrder);

    //pushing the order objects to the cart array
    for (let i = 0; i < orderObjects.length; i++) {
   
        cart.push(orderObjects[i]);
    }

}



function addToCart() {

    // create a new instance
    let userSelection = new Roll(rollType, glaze, Packsize, basePrice);
    
    // push into the cart
    cart.push(userSelection);

    // save the cart to the local storage
    saveToLocalStorage();
}


function saveToLocalStorage() {

    //converting object to JSON string
    const cartString = JSON.stringify(cart);

    //adding to it to local storage with the key "cart"
    localStorage.setItem("cart", cartString);

    //Displaying the items in local storage
    console.log(JSON.parse(localStorage.getItem("cart")));
    
    
}