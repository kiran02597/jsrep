function init(){
    firstname = "kiran";
    console.log("hello init");
    function printname (){
        console.log(firstname);
    }
    return printname;
}
// this call only prints hello init but not firstname
//init();

// ideal call
var value = init();

value();


function add(x) {
    return function(y) {
        return x+y;
    }
}

var valueafteradd = add(5);

console.log(valueafteradd(5));
//or 
console.log(add(2)(5));// curring topic