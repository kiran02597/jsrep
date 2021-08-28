class user {

    constructor(name , email) {
        this.name = name;
        this.email = email;
    }
    #courselist = [];// In class we just directly declare this without var or let

    //# means declaring it as private
    getInfo() {
        return {name : this.name, emnail: this.email};
    }
    enrollcourse(name) {
        this. #courselist .push(name)
    }
    getcourselist() {
        return this. #courselist ;
    }
    login() { // static means it cant be inherited
        console.log("you are logged in");
    }
}



module.exports = user;

