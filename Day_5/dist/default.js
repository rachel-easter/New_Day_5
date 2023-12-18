"use strict";
//default parameter:
//Syntax-parameter:=value
//variable function cant apply default parameter
//Example:
function add(a, b = 90) {
    return a + b;
}
var result = add(10);
console.log(result);
//in the example b is the default parameter
