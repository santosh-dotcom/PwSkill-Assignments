function logString(str) {
    return `The manipulated string is: ${str}`;
}

function manipulateString(str, logString) {
    const newStr = str.toUpperCase();
    return logString(newStr);
}

const myString = "happy year";
console.log(manipulateString(myString, logString));