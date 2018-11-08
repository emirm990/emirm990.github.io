
let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");
let scoreReduce=0;

// TODO reverse removal of circleArray members
let mouse = {
    x: undefined,
    y: undefined
}

canvas.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    
    for (let i=0;i<circleArray.length;i++){
        if (mouse.y > circleArray[i].y){
            circleArray[i].dy +=1;
            
        }
        if (mouse.y < circleArray[i].y){
            circleArray[i].dy -=1;
        }
        if (mouse.x > circleArray[i].x){
            circleArray[i].dx +=1;
            
        }
        if (mouse.x < circleArray[i].x){
            circleArray[i].dx -=1;
        }
    }
})
canvas.addEventListener('touchmove', function(event){
    
    for (let i=0;i<circleArray.length;i++){
        if (event.touches[0].pageY > circleArray[i].y){
            circleArray[i].dy +=1;
            
        }
        if (event.touches[0].pageY < circleArray[i].y){
            circleArray[i].dy -=1;
        }
        if (event.touches[0].pageX > circleArray[i].x){
            circleArray[i].dx +=1;
            
        }
        if (event.touches[0].pageY < circleArray[i].x){
            circleArray[i].dx -=1;
        }
    }
})

let maxRadius = 20;
let minRadius = 5;

canvas.width = window.innerWidth -10;
canvas.height = window.innerHeight - 50;

let colorArray = [
    '#FF005D',
    '#0085B6',
    '#0BB4C1',
    '#00D49D',
    '#FEDF03'
];

/*window.addEventListener("click", function(event){
    mouse.x = event.x;
    mouse.y = event.y;
   
})*/
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth - 10;
    canvas.height = window.innerHeight-50;
    
    

    //init();
})
function Circle(x,y,mass,radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.stroke = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.dx=0;
    this.dy=0;
    this.air = 0.9;
    this.friction=0.9;
    this.gravity=0.5;
    this.mass=mass;
    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI *  2, false);
        c.strokeStyle = this.stroke;
        c.fillStyle = this.color;
        c.stroke();
        c.fill();
    }

    this.update = function(){
        
        if (this.x + this.radius + this.dx  > canvas.width  || this.x - this.radius + this.dx < 0 ){
            //this.dx = -this.dx*this.friction;
            //this.dy = this.dy*this.friction;
            scoreReduce+=circleArray.length;
            circleArray.splice(circleArray.indexOf(this), 1);
            if(circleArray.length==0){
                gameOver();
            }

        }
        
        if (this.y + this.radius + this.dy > canvas.height || this.y - this.radius + this.dy < 0 ){
            //this.dy = -this.dy*this.friction;
            //this.dx = this.dx*this.friction;
            scoreReduce+=circleArray.length;
            circleArray.splice(circleArray.indexOf(this), 1);
            if(circleArray.length==0){
                gameOver();
            }
        }else{
            this.dy +=this.gravity*this.mass;
            
        }
        
        this.x+=this.dx*this.air;
        this.y+=this.dy*this.air;
        
        this.draw();
    }
}
/*touch event start*//*
canvas.addEventListener('touchstart', handleTouchStart, false);        
canvas.addEventListener('touchmove', handleTouchMove, false);

let xDown = null;                                                        
let yDown = null;                                                        

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    let xUp = evt.touches[0].clientX;                                    
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;
    for(let i=0;i<circleArray.length;i++){
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        
        if ( xDiff > 0 ) {
            circleArray[i].dx-=xDiff;
        } else {
            circleArray[i].dx+=xDiff;
        }                       
    } else {
        if ( yDiff > 0 ) {
            circleArray[i].dy+=yDiff;
        } else { 
            circleArray[i].dy-=yDiff;
        } 
                                                                    
    }
}
    
    xDown = null;
    yDown = null;                                             
};
/*touch event ends*/
window.addEventListener("keydown", function(event){
    for (let i=0;i<circleArray.length;i++){
        let x = event.keyCode;
        if (x==38){
            circleArray[i].dy-=2;
        }
        if (x==40){
            circleArray[i].dy+=2;
        }
        if(x==39){
            circleArray[i].dx+=2;
        }
        if(x==37){
            circleArray[i].dx-=2;
        }
    }
})

let numberOfBalls = document.getElementById('numberOfBalls').value;
let ballRadius = document.getElementById('ballRadius').value;

document.getElementById('numberOfBalls').addEventListener('blur', function(){
    numberOfBalls = document.getElementById('numberOfBalls').value;
    removeInfo();
});
document.getElementById('ballRadius').addEventListener('blur', function(){
    ballRadius = document.getElementById('ballRadius').value;
    removeInfo();
});

let circleArray = [];
let ballRadiusArray =[];
let radius;
function init(){
    
    circleArray = [];
    for (let i=0; i<numberOfBalls; i++){
        if(ballRadius==0){
            ballRadiusArray [i]= Math.random() * (maxRadius - minRadius) + minRadius;
            radius = ballRadiusArray[i];
        }else{
            radius = Number(ballRadius);
        }
         
        let x = Math.random()*((innerWidth-10)-radius*2) + radius;
        let y = Math.random()*((innerHeight-100)-radius*2) + radius;
        let mass = Math.random();
        circleArray.push(new Circle(x,y,mass,radius));
    }
    finalScore=0;
    score=0;
    scoreReduce=0;
}
let score=0;
let finalScore=0;

function reduceScore(){
    finalScore = score-scoreReduce;
    return finalScore;
}
function increaseScore(){
    if (circleArray.length>0){
        score=score+circleArray.length;
        document.getElementById("score").innerText=reduceScore();
    }
    
}

setInterval(increaseScore, 100);

let scoreboard = document.getElementById("hidden");

function gameOver(){
    

    document.getElementById("intro").innerText = "Your score is: ";
    document.getElementById("endScore").innerText = document.getElementById("score").innerText;

    let positionTop =(canvas.height-200)/2;
    let positionLeft = (canvas.width-500)/2;
    scoreboard.style.display = "inline-block";
    scoreboard.style.top = positionTop + "px";
    scoreboard.style.left = positionLeft + "px";
}
function gameStart(){
    

    document.getElementById("intro").innerText = "Hello ";
    document.getElementById("endScore").innerText = "";

    let positionTop =(canvas.height-200)/2;
    let positionLeft = (canvas.width-500)/2;
    scoreboard.style.display = "inline-block";
    scoreboard.style.top = positionTop + "px";
    scoreboard.style.left = positionLeft + "px";
}
function removeInfo(){
    scoreboard.style.display = "none";
    init();
}
document.getElementById("newGame").addEventListener("click",function(){
    
    removeInfo();
});
function animate(){
    requestAnimationFrame(animate);
    
    c.clearRect(0,0, innerWidth, innerHeight);
    for (let i=0;i < circleArray.length; i++){
        circleArray[i].update();
    }
}
gameStart();
animate();
