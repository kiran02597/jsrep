var testarray = [2,4,6,8,16,8,10];

console.log(testarray.fill("kiran"));
console.log(testarray.fill("kiran",2,5));
//2 is starting point so its inclusive and 5 is ending point that is exclusive

const mynum = [21,65,89,86,42]
console.log(mynum.filter(i => i%2===0));

const users =["kiran","sai","kumar","raj","ramu"];

//slice /delete the element which is mentioned with index number
console.log(users.slice(1));
//splices the elements based on index to start fparamter and then count - till where to count and list of values to be inserted
users.splice(1,2,"kesh")
console.log(users);