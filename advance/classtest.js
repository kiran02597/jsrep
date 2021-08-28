const user = require("./classjs.js");

const kiran = new user("kiran","sai@gmail.com");
//console.log(kiran.getInfo());

kiran.enrollcourse("angular");
// console.log(kiran.getcourselist());
// console.log(kiran.courselist);

class subadmin extends user {
    constructor(name , email) {
        super(name, email)
    }

    getsubadmininfo(){
        console.log("getting subadmin info");
    }
    login() {
        console.log("acces for subadmin");
    }
}
const lol = new subadmin("rock", "rockl@gmail,com");
console.log(lol.getsubadmininfo());
console.log(lol.getInfo());
console.log(lol.login());