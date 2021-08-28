const uno = () => {
    return "i am one";
}


// const dos = async() => {
//     setTimeout(() => {
//         return "i am two";
        
//     }, 6000);
   
// }
const dos = () => {
    
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve ("I am Two");
       }, 5000);
    })
   
}
const tres = () => {
    return "i am three";
}

const callme = async() => {
    let val1 = uno();
    console.log(val1);
    let val2 = await dos();
    console.log(val2);
    let val3 = tres();
    console.log(val3);

};

callme();