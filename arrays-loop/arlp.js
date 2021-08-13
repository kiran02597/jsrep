var countries = ["india","america"];
var states = new Array("ts","kar");
console.log(states);
console.log(states.length);
states.pop();
console.log(states);
var name = "kiran";
console.log(Array.from(name));
//call back and array functions

// function isEven(element) {
// //     if(element %2===0) {
// //         return true
// //     }
// //     return false
// // 

// return element%2===0;
// }
var isEven =(element) => {
    //     if(element %2===0) {
    //         return true
    //     }
    //     return false
    // 
    
    return element%2===0;
    }
console.log(isEven(3))

//var result = [2,3,6,8].every(isEven);
var result = [2,3,8,9].every((e) => (e%2===0));

console.log(result);