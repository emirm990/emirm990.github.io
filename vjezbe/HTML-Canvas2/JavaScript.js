var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
      '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

var mouse = {
    x : undefined,
    y : undefined
}

window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
})

window.addEventListener('resize', function(){
    canvas.width = window.innerHeight;
    canvas.height = window.innerHeight;
})

//let x = 100;
//let y = 100;

let circleArray = [];
function Circle(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = Math.random();
    this.dy = Math.random();
    this.radius = Math.random()*20+3;
    this.color = colorArray[Math.floor(Math.random()*colorArray.length)];
    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,Math.PI * 2, false);
        c.stroke();
        c.fillStyle = this.color;
        c.fill();
    } 
    this.update = function(){
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

window.addEventListener('mousedown', function(){
    let clicked = true;
    window.addEventListener('mouseup', function(){
        clicked=false;
    })
    window.addEventListener('mousemove', function(){
        if(clicked){
    
        let x= mouse.x;
        let y= mouse.y;
        let dx=1;
        let dy = 1;
        let radius = 50;
        circleArray.push(new Circle(x,y,dx,dy,radius));
    }
    })
   
})
console.log(mouse);
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,window.innerWidth,window.innerHeight);
    for (let i = 0;i<circleArray.length;i++){
    circleArray[i].update();
    }
}
animate();
