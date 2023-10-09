function calculator(num1, num2, operator) {
    switch (operator) {
        case "+":
            return(num1 + num2);
            break;
        case "-":
            return(num1 - num2);
            break;
        case "*":
            return(num1 * num2);
            break;
        case "/":
            return(num1 / num2);
            break;
        
            default:
                console.log("Invalid Operator");
                break;
    }
}

let num1 = 10;
let num2 = 12;
let operator = "**"
let result = calculator(num1, num2, operator);