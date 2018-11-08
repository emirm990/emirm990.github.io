let hours = document.getElementById("hoursInput").value;
let minutes = document.getElementById("minutesInput").value;
console.log(hours);

function startTimer(duration, display) {
    let timer = duration;
    
    setInterval(function () {
        hours = parseInt(timer/60)
        minutes = parseInt(timer % 60);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;

        display.textContent = hours + ":" + minutes;
        if (--timer < 0) {
            timer = duration;
        }
    }, 60000);
}

window.onload = function () {
    let duration = Number(hours) * 60 + Number(minutes),
        display = document.querySelector('#time');
    startTimer(duration, display);
};