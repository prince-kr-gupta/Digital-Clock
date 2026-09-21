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
    
