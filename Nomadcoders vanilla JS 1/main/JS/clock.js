const clock = document.querySelector("h2#clock");

function getclock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;    
}

getclock();
setInterval(getclock, 1000);