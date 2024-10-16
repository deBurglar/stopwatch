let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");
let timer = parseInt(document.getElementById("timer").textContent);
//on clicking start
start.addEventListener('click', () => {

    //start timer
    const startId = setInterval(() => {
        timer++;
    },1000)
})
