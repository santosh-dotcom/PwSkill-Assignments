function removeDuplicates(cartWithDuplicates) {
    let cartWithoutDuplicates = [];

    for (let item of cartWithDuplicates) {
        if(!cartWithDuplicates.includes(item)){
            cartWithDuplicates.push(item);
        }
    }

    return cartWithDuplicates;
}

let cartWithDuplicates = [ 11, 22, 33, 11, 33, 55];
let cartWithoutDuplicates = removeDuplicates(cartWithDuplicates);
console.log(cartWithDuplicates)