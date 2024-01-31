class Employee {
    constructor(name, salary, position){
        this.name = name;
        this.salary = salary;
        this.position = position;
    }

    getSalary() {
        return this.salary;
    }
}

const employee1 = new Employee("susant", "uxdesigner", 50000);
console.log(employee1.getSalary());