//var sname = {name : "kiran"};
//obj
var user = function(fname,coursecount) {
    this.fname = fname;
    this.coursecount = coursecount;
    this.print = function (){
        console.log(`name is ${fname}, coursecount ${coursecount}`);

    };

};

var kiran = new user("kiran",2);
console.log(kiran);
var kumar = new user("kumar",5);
console.log(kumar);