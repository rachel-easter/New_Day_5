"use strict";
// Access Specifier or Modifier Example in TypeScript
class Detail {
    constructor(password, Name, rollNumber) {
        this.password = password;
        this.Name = Name;
        this.rollNumber = rollNumber;
    }
    Show() {
        // Note: Accessing the private property 'password' within the class is allowed
        return `Hi ${this.Name}, verify your roll number ${this.rollNumber} and your password ${this.password}`;
    }
}
class AdditionalDetails extends Detail {
    Now() {
        // Note: Accessing the protected property 'rollNumber' from the parent class is allowed in the subclass
        console.log(`We printed the protected property (rollNumber) from the parent class to the child class: ${this.rollNumber}`);
    }
}
// Creating instances of the classes
const person = new Detail(12345, "Rachel", 7);
let res = person.Show();
console.log(res);
console.log(person.Name);
const addValues = new AdditionalDetails(12, "Sam", 2);
addValues.Now();
