var mymap = new Map();

mymap.set(0,"zero");
mymap.set(1,"one");

console.log(mymap);

for(let keys of mymap.keys()){
    console.log(keys);
}

for(let values of mymap.values()){
    console.log(values);
}

for(let [keys, values] of mymap) {
    console.log(`key is ${keys} and value is ${values}`);

};

mymap.forEach((v, k) => console.log(`value is ${v} and key is ${k}`));

mymap.delete(0)
console.log(mymap);