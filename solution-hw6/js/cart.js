
//Object with glazing price details
let glazingCostInventory= {
    "Keep Original" : 0.0,
    "Vanilla Milk" : 0.5,
    "Sugar Milk" : 0.0,
    "Double Chocolate" : 1.5
}

//Object with pack size details
let packSizeInventory = {
    1:1,
    3:3,
    6:5,
    12:10
}

//Cart array to hold the orders
let shoppingCart = [];

//Checking if the local storage is not full 
if ((localStorage.getItem("cart")) != null) {

    //adding the order objects in the local storage to the cart if it is not full

    const storedRollOrder = localStorage.getItem("cart");
    const orderObjects = JSON.parse(storedRollOrder);


    for (let i = 0; i < orderObjects.length; i++) {
        shoppingCart.push(orderObjects[i]);
    }

}


let displayCart = new Set();


//Class with properties of the rolls
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

let cartTotal = 0.00;

    for (let i = 0 ; i < shoppingCart.length ; i++) {


        displayCart.add(shoppingCart[i]);

        //Creating the order based on the template

        let tempItem = document.getElementsByTagName("template")[0];
        let tempClone = tempItem.content.cloneNode(true);
        
        //console.log(tempClone);
    
        //Updating order's roll name
        tempClone.querySelector(".details").innerText = shoppingCart[i].type + " Cinnamon Roll";

        //Updating order's glaze type
        tempClone.querySelector(".glazing").innerText = "Glazing: " + shoppingCart[i].glazing;
    
        //Updating order's pack size
        tempClone.querySelector(".pack-size").innerText = "Pack size: " + shoppingCart[i].size;

        //Updating order's image
        tempClone.querySelector(".order img").src = rolls[shoppingCart[i].type].imageFile;

        //Updating the alt text of the image
        tempClone.querySelector(".order img").alt = shoppingCart[i].type + " Cinnamon Roll";

        //Cost of the order's glaze extracted from the glazing inventory
        let glazeCost = glazingCostInventory[shoppingCart[i].glazing];
        
        //Cost of the order's pack size extracted from the glazing inventory
        let packSizeCost = packSizeInventory[shoppingCart[i].size];

        //Calling function to calculate price of the order
        let orderPrice = calculatePrice(shoppingCart[i].basePrice,glazeCost,packSizeCost);

        //Updating order's cost
        tempClone.querySelector(".order-price").innerText = "$ "+ orderPrice;

        //Calculating the total cost of the orders in the cart
        cartTotal += Number(orderPrice);
       

        //Updating the total cost
        document.querySelector(".total").innerText = "$ "+ cartTotal.toFixed(2);




        //Removing order from cart

        let orderToBeRemoved = tempClone.querySelector(".cart-item");
    
        tempClone.querySelector("button").onclick = (() => {
    
            orderToBeRemoved.remove();

            //Subtracting the cost of removed order from the cart total
    
            cartTotal = (cartTotal - Number(orderPrice)).toFixed(2);
            
            document.querySelector(".total").innerText = "$ " + parseFloat(cartTotal);
    
            displayCart.delete(shoppingCart[i]);

            const newCart = Array.from(displayCart);
            const cartString =  JSON.stringify(newCart);
            localStorage.setItem("cart", cartString);
    
        });

      



        //Adding the orders to the DOM structure
    
        document.querySelector(".cart-display").appendChild(tempClone);
    
    }



//function to calculate price
function calculatePrice(basePrice,glazeCost,packSizeCost) {

    let totalPrice = (basePrice + glazeCost) * packSizeCost;
    return totalPrice.toFixed(2);

}



