let input = "The world is more beautyfull";

let reverseString = (str) => {
    let reversed = str.split("").reverse().join("");
    console.log("Reversed");
};

setTimeout( ()=> {
    reverseString(input);
}, 2000);