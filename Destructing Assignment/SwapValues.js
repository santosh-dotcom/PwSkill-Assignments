const x = 12;
const y = 15;

const swap = (...args) => {
    let arr = args;
    return arr.reverse();
};

console.log(swap(x, y));