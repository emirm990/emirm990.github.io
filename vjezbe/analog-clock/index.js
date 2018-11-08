let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let xPos = canvas.width/2;
let yPos = canvas.height/2;



window.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    xPos = canvas.width/2;
    yPos = canvas.height/2;
    six[0].style.left= canvas.width/2 + six[0].offsetWidth - radius/2 + "px";
    six[0].style.top = yPos + radius + "px";

    nine[0].style.top = yPos - six[0].offsetHeight + six[0].offsetHeight/2 + "px";
    nine[0].style.left = xPos - radius - nine[0].offsetWidth + "px";

    three[0].style.top = yPos - three[0].offsetHeight + three[0].offsetHeight/2 + "px";
    three[0].style.left = xPos +radius + "px";

    twelve[0].style.left= xPos + twelve[0].offsetWidth - radius/2 + "px";
    twelve[0].style.top = yPos - radius - twelve[0].offsetHeight +"px";

    clockBackground.style.top = yPos - radius + "px";
    clockBackground.style.left = xPos - radius + "px";
    clockBackground.style.width = radius*2 + "px";
    clockBackground.style.height = radius*2 + "px";

    clockNumbers.style.top = yPos - radius - radius/2 + "px";
    clockNumbers.style.left = xPos - radius - radius/2 + "px";
    clockNumbers.style.width = radius*2.5+ "px";
    clockNumbers.style.height = radius*2.5 + "px";

    clockCenter.style.top = yPos - radius/2 + "px";
    clockCenter.style.left = xPos - radius/2 + "px";
    clockCenter.style.width = radius + "px";
    clockCenter.style.height = radius + "px";
})

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

let angle=Math.PI+Math.PI/2+seconds*radians(6);
let angle2=Math.PI+Math.PI/2+minutes*radians(6)+radians(0.1)*seconds;
let angle3=Math.PI+Math.PI/2+hours*radians(30)+radians(0.0083333333143)*60*minutes;


let radius = 150;

let clockBackground = document.getElementById("clockBackground");
let clockCenter = document.getElementById("clockCenter");
let clockNumbers = document.getElementById("numbers");
let twelve = document.getElementsByClassName("deg0");
let three = document.getElementsByClassName("deg90");
let six = document.getElementsByClassName("deg180");
let nine = document.getElementsByClassName("deg270");

six[0].style.left= canvas.width/2 + six[0].offsetWidth - radius/2 + "px";
six[0].style.top = yPos + radius + "px";

nine[0].style.top = yPos - six[0].offsetHeight + six[0].offsetHeight/2 + "px";
nine[0].style.left = xPos - radius - nine[0].offsetWidth + "px";

three[0].style.top = yPos - three[0].offsetHeight + three[0].offsetHeight/2 + "px";
three[0].style.left = xPos +radius + "px";

twelve[0].style.left= xPos + twelve[0].offsetWidth - radius/2 + "px";
twelve[0].style.top = yPos - radius - twelve[0].offsetHeight +"px";

clockBackground.style.top = yPos - radius + "px";
clockBackground.style.left = xPos - radius + "px";
clockBackground.style.width = radius*2 + "px";
clockBackground.style.height = radius*2 + "px";

clockNumbers.style.top = yPos - radius -radius*1/4 + "px";
clockNumbers.style.left = xPos - radius -radius*1/4  + "px";
clockNumbers.style.width = radius*2.5 + "px";
clockNumbers.style.height = radius*2.5 + "px";

clockCenter.style.top = yPos - radius/2 + "px";
clockCenter.style.left = xPos - radius/2 + "px";
clockCenter.style.width = radius + "px";
clockCenter.style.height = radius + "px";

let mouse = {
    x : undefined,
    y : undefined
}
window.addEventListener("click", function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    
    console.log(mouse.x,mouse.y,canvas.width,canvas.height);
})

function radians(degrees){
    let radians=(degrees * Math.PI )/ 180;
    return radians;
} 

function draw(){
    c.beginPath();
    c.arc(xPos,yPos,radius,0,2*Math.PI);
    c.strokeStyle="black";
    c.lineWidth = 10;
    c.stroke();
}

let clock = {
    secondsArm : function(){
        angle += radians(6);
        c.beginPath();
        c.moveTo(xPos,yPos);
        c.lineTo(radius*Math.cos(angle)+xPos,radius*Math.sin(angle)+yPos);
        c.strokeStyle = "green";
        c.lineWidth = 2;
        c.stroke(); 
    },
    minutesArm : function (){
        angle2 += radians(0.1);
        c.beginPath();
        c.moveTo(xPos,yPos);
        c.lineTo(radius*Math.cos(angle2)+xPos,radius*Math.sin(angle2)+yPos);
        c.lineWidth = 5;
        c.strokeStyle="red";
        c.stroke();
    },
    hoursArm: function (){
        angle3 += radians(0.0083333333143);
        c.beginPath();
        c.moveTo(xPos,yPos);
        c.lineTo(radius*Math.cos(angle3)+xPos,radius*Math.sin(angle3)+yPos);
        c.lineWidth = 10;
        c.strokeStyle="yellow";
        c.stroke();
    }
   
}

setInterval(function(){
    c.clearRect(0,0,canvas.width,canvas.height);
    draw();
    clock.secondsArm();
    clock.minutesArm();
    clock.hoursArm();
} ,1000);