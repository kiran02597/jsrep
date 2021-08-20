var user = {
    fname : "sai",
    lname:"keshetti",
    count :32,
    loggedin: true,
    couselist :[],
    buycoursename : function (coursename) {
        this.couselist.push(coursename)

    },
    getcoursecount : function (){
        return `${this.fname} has ${this.couselist.length} courses`
    },
    getinfo : function() {
        console.log(`logging ${this.fname} info`);
        console.table(this)
    }

};
console.log(user.lname);
console.log(user["loggedin"]);
user.count=44;
console.log(user.buycoursename("JS"));
console.log(user.getcoursecount());
console.table(user);
console.log(user.getinfo());

const user = {

    key1 : "value1",
    key2: "value2",
    mymethod : function(){
        console.log(`method this value` , this);
    }
}
mymethod();