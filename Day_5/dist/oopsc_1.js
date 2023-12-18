"use strict";
//class in typescript:
//class is the keyword used to define the class and its property has type annotation
//class has constructor and methods,properties
//example:
class Form {
    constructor(Name, rollNumber) {
        this.Name = Name;
        this.rollNumber = rollNumber;
    }
    Show() {
        console.log(this.Name);
        console.log(this.rollNumber);
    }
}
const studentDetail = new Form("Rachel", 7);
studentDetail.Show();
