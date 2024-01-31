function getPerson (person) {
    const personname = person.name;
    const personage = person.age;
    try {
        if (
            typeof person == "object" &&
            isNaN(personname) == true &&
            isNaN(personage) == false
        ) {
            return `Name : ${person.name}, ${person.age}`
        } else throw new Error();
    } catch {
        return "Invalid Parameter type";
    }
}

console.log(getPerson({name: "Shyamsundar", age: 20 }))