function calculateTotalBill(cost, numberofpeople) {
    let totalbill = 0;

    for(let item of cost) {
        totalbill += item;
    }

    let amountperhead = totalbill / numberofpeople;
    return {totalbill: totalbill, amountperhead: amountperhead};
}

let cost = [54, 64, 87, 79, 69];
let numberofpeople = 4;

let finaldetails = calculateTotalBill(cost, numberofpeople);
console.log(finaldetails);