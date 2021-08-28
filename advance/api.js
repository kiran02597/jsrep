fetch("https://api.chucknorris.io/jokes/random")
.then((Response) => {
    return Response.json;

})
.then((data) => {
    console.log("data is : ", data);
})
.catch();