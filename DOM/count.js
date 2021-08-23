var counter = document.querySelector(".counter");

setInterval(() => {
    if(counter<1000) {
        count++;
        counter.innerHTML= count
    }

},1);
setInterval();