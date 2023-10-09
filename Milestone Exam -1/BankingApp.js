let deposit = (customer, money) => {
    console.log("\n");
    console.log(`Got a request from ${customer.name} to deposit ${money}rs`);
    customer.balance += money;
    console.log(`Money Deposit Successful for ${customer.name}`);
    console.log("\n");
}

let withdrawl = (customer, money) => {
    console.log("\n");
    console.log(`Got a request from ${customer.name} to withdrawl ${money}rs`);
    if (customer.balance < money) {
        console.log("Insufficient Balance");
        console.log("\n")
    }
    else {
        customer.balance -= money;
        console.log(`Money withdrawl successful for ${customer.name}`);
        console.log("\n")
    }
}

let showBalance = (customer) => {
    console.log("\n");
    console.log(`${customer.name} bank balance = ${customer.balance}`);
    console.log("\n")
}

let bank = (customer, action, money) => {
    switch (action) {
        case "desposit":
            deposit(customer, money);
            break;

        case "withdrawl":
            withdrawl(customer, money);
            break;

        case "showBalance":
            showBalance(customer);
            break;

        default:
            console.log("Invalid Action");
            break;
    }
}

let customer1 = {name: "Santosh", Balance: 10000};
bank(customer1, "showBalance");
bank(customer1, "deposit", 5000);
bank(customer1, "showBalance");
bank(customer1, "withdrawl", 4000);
bank(customer1, "showBalance");