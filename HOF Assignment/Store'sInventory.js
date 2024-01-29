const store = {
    item1: 10,
    item2: 15,
    item3: 20,
    item4: 25,
    item5: 30,
    item6: 35,
};

const exchangeRate = 80;

const newCost = Object.entries(store).map(([item, price]) => [
    item,
    price * exchangeRate,
]);

console.log(newCost);