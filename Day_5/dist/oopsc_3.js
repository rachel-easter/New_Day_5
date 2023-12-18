"use strict";
//readonly(keyword) access modifier:
//it is used inside the class property and constructor
//once define it remains constant
//Example-1:
class Test {
    constructor(wifiPassword) {
        this.wifiPassword = wifiPassword;
    }
}
const obj = new Test("1234");
//obj.password="9087"; error
