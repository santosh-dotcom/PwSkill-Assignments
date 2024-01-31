class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        if(this.name == undefined) this.name = "Unknown";
        if(this.age == undefined) this.age = 0;

        return `Name = ${this.name} ${this.age}`;
    }
}

const person1 = new Person("shresanth", 22);
console.log(person1.getDetails());

const person2 = new Person("srikant", 28);
console.log(person2.getDetails());