
const states = [
    "telangana",
    "kerala",
    "karnataka", 
    1947
];
for(let i =0; i<states.length; i++){
    if(typeof states[i]=== 'string') continue
    console.log(states[i]);
}
let i =20;
while(i<states.length ) {
    console.log(states[i]);
    i++;
}
do  {
    console.log(i);
    i++;
} while(i<10) ;
