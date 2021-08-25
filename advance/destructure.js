// const user = ["kiran",2,"admin"];

// var role = user[2];
// var name = user[0];
// // console.log(role);
// // console.log(name);
// var [name,courseCount,role] = user;

// console.log(role);

const myuser = {
    name :"kiran",
    coursecount: 2,
    role :"owner",
};
console.log(myuser.coursecount);

const {name, coursecount, role} = myuser;//for arrays assigning time names can be diff but for objects it should be same otherwise it will give undefined

console.log(role);