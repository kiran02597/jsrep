
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

for(;;);
states.forEach(i => console.log(i));
//list
const smedia = ["youtube","facebook","instagram","netflix"];
//for of
for (const n of smedia) {
    console.log(n);
}
//obj
const mystates= {
    ts:"telangana",
    kl: "kerala",
    ka:"karnataka"

}
   
for(const n in mystates) {
    console.log(n);
}
for(const n in mystates) {
    console.log(mystates[n]);
}
for(const n in mystates) {
    console.log(`KEYS ARE : ${n} and values are : ${mystates[n]}`);
}
