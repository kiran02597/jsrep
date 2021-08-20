const user = {

    key1 : "value1",
    key2: "value2",
    mymethod : function(){
        console.log(`method this value` , this);
    },
};
user.mymethod();
function sayhello(){

    console.log(`this in normal function call`,this);

};
sayhello();