function numberChecker(arr) {
    this.arr = arr;

    return function (num) {
        this.num = num;
        if(arr.includes(num)) return true;
        return false;
    };
}

const arr = [3, 4, 5, 9, 7];

const checkNum = numberChecker(arr);

console.log(checkNum(3));
console.log(checkNum(6));