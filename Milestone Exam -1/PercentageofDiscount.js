let percentageOfDiscount = (product) => {
    let discount = 100 - (product.discountedprice / product.originalprice) * 100;
    return discount.toFixed(2)
}

let product1 = {originalprice: 499, discountedprice: 399};
let discount = percentageOfDiscount(product1);
console.log(`Discount = ${discount}%`);