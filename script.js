// button variables

const startStopBtn = document.querySelector("#play");
const resetBtn = document.querySelector("#restart");


// timer variables

let seconds = 0;
let minutes = 0;
let hours = 0;


// to print unit digit time in form 01, 02, etc

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;



// stopwatch function

function stopWatch() {

    seconds++;

    if(seconds/60 == 1){
        seconds = 0;
        minutes++;
    }

    if(minutes/60 == 1){
        minutes = 0;
        hours++;
    }

    if(seconds < 10){
        leadingSeconds = "0" + seconds.toString();
    }
    else{
        leadingSeconds = seconds;
    }

    if(minutes < 10){
        leadingMinutes = "0" + minutes.toString();
    }
    else{
        leadingMinutes = minutes;
    }

    if(hours < 10){
        leadingHours = "0" + hours.toString();
    }
    else{
        leadingHours = hours;
    }

    let displayTimer = document.querySelector('#timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;

}

// window.setInterval(stopWatch, 1000);   //sets interval to 1s or 1000 ms


// button functions

// play pause button 

let timerInterval = null;  //we dont want timer to automatically start with loading page
let timerStatus = "stopped";

startStopBtn.addEventListener('click', function(){

    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById("play").innerHTML = `<i class="fa-solid fa-pause" id="pause-icon"></i>`
        startStopBtn.style.backgroundColor = '#87CEEB';
        timerStatus = "started";
    }
    else{
        window.clearInterval(timerInterval);
        document.getElementById("play").innerHTML = `<i class="fa-solid fa-play" id="play-icon"></i>`;
        startStopBtn.style.backgroundColor = 'green';
        timerStatus = "stopped";
    }

});


// restart button

resetBtn.addEventListener('click', function(){

    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerHTML = "00:00:00";

    document.getElementById("play").innerHTML = `<i class="fa-solid fa-play" id="play-icon"></i>`;
    startStopBtn.style.backgroundColor = 'green';
});