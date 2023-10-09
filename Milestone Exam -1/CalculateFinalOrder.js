let calculateFinalOrderprice = (cart) => {
    let totalcost = 0;

    for(let i = 0; i < cart.length; i++) {
        totalcost += (cart[i].unitprice * cart[i].quantity);
    }

    return totalcost;
}

let potato = {unitprice: 17, quantity: 4};
let tomato = {unitprice: 60, quantity: 2};
let carrot = {unitprice: 78, quantity: 3};

let cart = [potato, tomato, carrot];
let totalcost = calculateFinalOrderprice(cart);
console.log(totalcost);