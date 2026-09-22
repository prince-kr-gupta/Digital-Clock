let hrs = document.querySelector("#hrs");
    let min = document.querySelector("#min");
    let sec = document.querySelector("#sec");
    let milli = document.querySelector("#milli");

setInterval(() =>{
     let currentTime = new Date();

   hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours() ;
   min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
   sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
   milli.innerHTML = currentTime.getMilliseconds().toString().padStart(3,'0');
},10);
 
let sHours = document.querySelector("#sHours");
let sMinutes = document.querySelector("#sMinutes");
let sSeconds = document.querySelector("#sSeconds");
let sMilli = document.querySelector("#sMilli");

let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let resetBtn = document.querySelector("#reset");

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let timer = null;

startBtn.addEventListener("click",function() {
    if(timer != null){
        return;
    }
    timer = setInterval(function () {
        milliseconds++;

        if(milliseconds == 100){
            milliseconds = 0;
            seconds++;
        }
        if(seconds == 60){
            seconds = 0;
            minutes++;
        }
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
        sHours.innerHTML = hours.toString().padStart(2,"0");
        sMinutes.innerHTML = minutes.toString().padStart(2,"0");
        sSeconds.innerHTML = seconds.toString().padStart(2,"0");
        sMilli.innerHTML = milliseconds.toString().padStart(2,"0");
    },10);
});

stopBtn.addEventListener("click",function() {
    clearInterval(timer);
    timer = null;
});

resetBtn.addEventListener("click",function() {
    clearInterval(timer);
    timer = null;

    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    sHours.innerHTML = "00";
    sMinutes.innerHTML = "00";
    sSeconds.innerHTML = "00";
    sMilli.innerHTML = "00";
});
