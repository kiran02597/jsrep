var max = Math.max(20,89,09,65);
console.log(max);

var obj = {};
Object.assign(obj,{a:1,b:2},{x:8,y:9});

console.log(obj);

function add(a,b) {
    return a+b;
}
var arr = [5,3];
console.log(add(...arr));//spread operators takes and spread the values

function addtwo (a,b,...args){//rest operator takes values into array and pass them
    var sum =0;
    var multi = a*b;
    for (const arg of args) {
        sum = sum+arg;
        
    }
    return [multi,sum]

};

console.log(addtwo(2,9,11,20));