Object.prototype.Student = function (name) {
    this.name = name;
};

student.prototype.printDetails = function () {
    console.log(`hello, my name is ${this.name}`);
};

const student = new student("Mohan");

student.printDetails();