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
let cart = [];
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

//Initializing the orders added to the cart as objects

let order1 = new Roll('Original','Sugar Milk', 1, 2.49);
let order2 = new Roll('Walnut','Vanilla Milk' , 12 , 3.49);
let order3 = new Roll('Raisin' , 'Sugar Milk' , 3 , 2.99);
let order4 = new Roll('Apple' , 'Keep Original' , 3 , 3.49);


//pushing the order objects to cart array

cart.push(order1,order2,order3,order4);


//function to create an order template, populate the cart with orders based on the template and remove orders
function updateCart(){

    let cartTotal = 0.0;

    for (let i = 0 ; i < cart.length ; i++) {


        displayCart.add(cart[i]);

        //Creating the order based on the template

        let tempItem = document.getElementsByTagName("template")[0];
        let tempClone = tempItem.content.cloneNode(true);
        
        //console.log(tempClone);
    
        //Updating order's roll name
        tempClone.querySelector(".details").innerText = cart[i].type + " Cinnamon Roll";

        //Updating order's glaze type
        tempClone.querySelector(".glazing").innerText = "Glazing: " + cart[i].glazing;
    
        //Updating order's pack size
        tempClone.querySelector(".pack-size").innerText = "Pack size: " + cart[i].size;

        //Updating order's image
        tempClone.querySelector(".order img").src = rolls[cart[i].type].imageFile;

        //Updating the alt text of the image
        tempClone.querySelector(".order img").alt = cart[i].type + " Cinnamon Roll";

        //Cost of the order's glaze extracted from the glazing inventory
        let glazeCost = glazingCostInventory[cart[i].glazing];
        
        //Cost of the order's pack size extracted from the glazing inventory
        let packSizeCost = packSizeInventory[cart[i].size];

        //Calling function to calculate price of the order
        let orderPrice = calculatePrice(cart[i].basePrice,glazeCost,packSizeCost);

        //Updating order's cost
        tempClone.querySelector(".order-price").innerText = "$ "+ orderPrice;

        //Calculating the total cost of the orders in the cart
        cartTotal += Number(orderPrice);

        //Updating the total cost
        document.querySelector(".total").innerText = "$ "+ cartTotal;




        //Removing order from cart

        let orderToBeRemoved = tempClone.querySelector(".cart-item");
    
        tempClone.querySelector("button").onclick = (() => {
    
            orderToBeRemoved.remove();

            //Subtracting the cost of removed order from the cart total
    
            cartTotal = (cartTotal - Number(orderPrice)).toFixed(2);
            
            document.querySelector(".total").innerText = "$ " + parseFloat(cartTotal);
    
            displayCart.delete(cart[i]);
    
        });

        //Adding the orders to the DOM structure
    
        document.querySelector(".cart-display").appendChild(tempClone);
    
    }



}

updateCart();


//function to calculate price
function calculatePrice(basePrice,glazeCost,packSizeCost) {

    let totalPrice = (basePrice + glazeCost) * packSizeCost;
    return parseFloat(totalPrice).toFixed(2);

}



