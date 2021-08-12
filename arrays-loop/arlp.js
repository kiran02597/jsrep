var countries = ["india","america"];
var states = new Array("ts","kar");
console.log(states);
console.log(states.length);
states.pop();
console.log(states);
var name = "kiran";
console.log(Array.from(name));
//call back and array functions

function isEven(element) {
    if(element %2===0) {
        return true
    }
    return false
}

console.log(isEven(3));