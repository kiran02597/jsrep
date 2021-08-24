//var sname = {name : "kiran"};
//creating an object in a functioal way
var user = function(fname,coursecount) {
    this.fname = fname;
    this.coursecount = coursecount;
    this.print = function (){
        console.log(`coursecount ${coursecount}`);

    };

};
//injecting new method to user
user.prototype.getfirstname = function () {
    console.log(`your firstname  is ${this.fname}`);
}



var kiran = new user("kiran",2);
kiran.print();
if(kiran.hasOwnProperty("fname")) {
    console.log("property iis there");
    kiran.getfirstname();
}

//console.log(kiran);
var kumar = new user("kumar",5);
//console.log(kumar);



//anymous and auto calling function
(function(){
    console.log("hello in anynomous");
})();