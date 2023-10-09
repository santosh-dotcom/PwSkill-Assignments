let arr = [5, 9 , 8, 13, 18, 15];

for(let i = 0; i < arr.length; i++) {
    if((arr[i] % 3 ==0) && (arr[i] % 2 !=0)) {
        console.log(`${arr[i]} is Divisible by 3 but not by 2`);
    }

    else continue;
}