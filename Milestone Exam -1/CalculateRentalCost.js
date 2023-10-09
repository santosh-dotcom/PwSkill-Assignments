function costOfRent(numberofdays, typeofcar) {
    switch(typeofcar) {
        case "economy":
            return (4000 * numberofdays);

        case "midsize":
            return( 1000 * numberofdays);

        case "luxury":
            return(2000 * numberofdays);

            default:
                console.log("invalid car type")
    }
}

let numberofdays = 4;
let typeofcar = "midsize";

let rent = costOfRent(numberofdays, typeofcar)
console.log(rent);