class Glazes {

    glazeType;
    glazePrice
    constructor(glazeType,glazePrice) 
    {
        this.glazeType = glazeType;
        this.glazePrice = glazePrice;
	}
}

//initializing objects of glazes class with the type of glaze and its price

const keepOriginal = new glazes('Keep original',0.0);
const sugarMilk = new glazes('Sugar milk',0.0);
const vanillaMilk = new glazes('Vanilla milk',0.50);
const doubleChocolate = new glazes('Double Chocolate',1.50);


class Packs {

    constructor(packType,packPrice) 
    {
        this.packType = packType;
        this.packPrice = packPrice;
		
	}
}

// initializing objects of packs class with the pack sizes and the price of each pack
const one = new packs(1,1);
const three = new packs(3,3);
const six = new packs(6,5);
const twelve = new packs(12,10);


//Array of objects

let glazeObjectList = [keepOriginal,sugarMilk,vanillaMilk,doubleChocolate];
let packObjectList = [one,three,six,twelve];


//Dynamically populating the dropdown menu

let glazeMenu = document.getElementById("glazeMenu"); 
for (let i = 0; i < glazeObjectList.length; i++) 
{
    console.log("its working");
    let option1 = document.createElement("option");
    option1.textContent = glazeObjectList[i].glazeType;
    glazeMenu.appendChild(option1);
    console.log(option1);

}

    
let packMenu= document.getElementById("packMenu"); 
for (let j = 0; j < packObjectList.length; j++) 
    {
        let option2 = document.createElement("option");
        option2.textContent = packObjectList[j].packType;
        packMenu.appendChild(option2);
        console.log(option2);
    }
     


let gPrice = 0.0;
let pPrice = 1;
let totalPrice = 0.0;
let glaze = "Keep Original";
let packSize = 1;

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
    //console.log(gPrice);
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
            packSize = Number(packObjectList[i].packType);
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

console.log(rolls);

//Array to store orders 
let cart = [];

//Getting value of search parameter
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");


//console.log(rolls[rollType]);
//console.log(document.getElementById("heading"));


//Changing the heading, image and base price based on the flavour
document.getElementById("heading").innerText = rollType + " Cinnamon Roll";
document.getElementById("detail-img").src = rolls[rollType].imageFile;
document.getElementById("price").innerText = rolls[rollType].basePrice;


class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

//Pushing order to cart array on clicking the 'Add to Cart' button 
function AddtoCart() {
    let rollOrder = new Roll(rollType, glaze, packSize, rolls[rollType].basePrice);
    cart.push(rollOrder);
    console.log(rollOrder);

}




