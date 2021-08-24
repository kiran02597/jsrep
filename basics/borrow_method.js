const kiran = {
    fnmae :"kiran",
    lname :"keshetti",
    role :"admin",
    ccount : 3,
    getinfo : function (){
        console.log(`
        firstname is ${this.fnmae}
        lname is ${this.lname}
        role is ${this.role}
        has enrolled ${this.ccount}`);
    }
}
const sai = {
    fnmae :"sai",
    lname :"keshetti",
    role :"admin-1",
    ccount : 3,
   
};
//bind will give the refernce but not call exactly
var saiInfo = kiran.getinfo.bind(sai);
saiInfo();
// call will call directly

kiran.getinfo.call(sai);