let column1Top = document.getElementById("column1Top").getElementsByTagName("div"),
    column1Bottom = document.getElementById("column1Bottom").getElementsByTagName("div"),
    column2Top = document.getElementById("column2Top").getElementsByTagName("div"),
    column2Bottom = document.getElementById("column2Bottom").getElementsByTagName("div"),
    row1 = document.getElementById("row1").getElementsByTagName("div"),
    row2 = document.getElementById("row2").getElementsByTagName("div"),
    row3 = document.getElementById("row3").getElementsByTagName("div");

let ledColor = "rgba(255,0,0)",
    ledOff = "rgba(255,0,0,0.1)"
let countdown=0;
let countdown2=9;

function display(number){
    switch(number){
        case 0:
            for(let i=0;i<column1Top.length;i++){
            column1Top[i].style.backgroundColor = ledColor;
            column1Bottom[i].style.backgroundColor = ledColor;
            column2Top[i].style.backgroundColor = ledColor;
            column2Bottom[i].style.backgroundColor = ledColor;}
            for (let j=0;j<row1.length;j++){
            row1[j].style.backgroundColor = ledColor;
            row2[j].style.backgroundColor = ledOff;
            row3[j].style.backgroundColor = ledColor;
            }
            break;
        case 1:
            for(let i=0;i<column1Top.length;i++){
            column1Top[i].style.backgroundColor = ledOff;
            column1Bottom[i].style.backgroundColor = ledOff;
            column2Top[i].style.backgroundColor = ledColor;
            column2Bottom[i].style.backgroundColor = ledColor;}
            for (let j=0;j<row1.length;j++){
            row1[j].style.backgroundColor = ledOff;
            row2[j].style.backgroundColor = ledOff;
            row3[j].style.backgroundColor = ledOff;
            }
            break;
        case 2:
            for(let i=0;i<column1Top.length;i++){
            column1Top[i].style.backgroundColor = ledOff;
            column1Bottom[i].style.backgroundColor = ledColor;
            column2Top[i].style.backgroundColor = ledColor;
            column2Bottom[i].style.backgroundColor = ledOff;}
            for (let j=0;j<row1.length;j++){
            row1[j].style.backgroundColor = ledColor;
            row2[j].style.backgroundColor = ledColor;
            row3[j].style.backgroundColor = ledColor;
            }
            break;
        case 3:
            for(let i=0;i<column1Top.length;i++){
            column1Top[i].style.backgroundColor = ledOff;
            column1Bottom[i].style.backgroundColor = ledOff;
            column2Top[i].style.backgroundColor = ledColor;
            column2Bottom[i].style.backgroundColor = ledColor;}
            for (let j=0;j<row1.length;j++){
            row1[j].style.backgroundColor = ledColor;
            row2[j].style.backgroundColor = ledColor;
            row3[j].style.backgroundColor = ledColor;
            }
            break;
        case 4:
            for(let i=0;i<column1Top.length;i++){
            column1Top[i].style.backgroundColor = ledColor;
            column1Bottom[i].style.backgroundColor = ledOff;
            column2Top[i].style.backgroundColor = ledColor;
            column2Bottom[i].style.backgroundColor = ledColor;}
            for (let j=0;j<row1.length;j++){
            row1[j].style.backgroundColor = ledOff;
            row2[j].style.backgroundColor = ledColor;
            row3[j].style.backgroundColor = ledOff;
            }
            break;
        case 5:
            for(let i=0;i<column1Top.length;i++){
            column1Top[i].style.backgroundColor = ledColor;
            column1Bottom[i].style.backgroundColor = ledOff;
            column2Top[i].style.backgroundColor = ledOff;
            column2Bottom[i].style.backgroundColor = ledColor;}
            for (let j=0;j<row1.length;j++){
            row1[j].style.backgroundColor = ledColor;
            row2[j].style.backgroundColor = ledColor;
            row3[j].style.backgroundColor = ledColor;
            }
            break;
        case 6:
            for(let i=0;i<column1Top.length;i++){
            column1Top[i].style.backgroundColor = ledColor;
            column1Bottom[i].style.backgroundColor = ledColor;
            column2Top[i].style.backgroundColor = ledOff;
            column2Bottom[i].style.backgroundColor = ledColor;}
            for (let j=0;j<row1.length;j++){
            row1[j].style.backgroundColor = ledColor;
            row2[j].style.backgroundColor = ledColor;
            row3[j].style.backgroundColor = ledColor;
            }
            break;
        case 7:
            for(let i=0;i<column1Top.length;i++){
            column1Top[i].style.backgroundColor = ledOff;
            column1Bottom[i].style.backgroundColor = ledOff;
            column2Top[i].style.backgroundColor = ledColor;
            column2Bottom[i].style.backgroundColor = ledColor;}
            for (let j=0;j<row1.length;j++){
            row1[j].style.backgroundColor = ledColor;
            row2[j].style.backgroundColor = ledOff;
            row3[j].style.backgroundColor = ledOff;
            }
            break;
        case 8:
            for(let i=0;i<column1Top.length;i++){
            column1Top[i].style.backgroundColor = ledColor;
            column1Bottom[i].style.backgroundColor = ledColor;
            column2Top[i].style.backgroundColor = ledColor;
            column2Bottom[i].style.backgroundColor = ledColor;}
            for (let j=0;j<row1.length;j++){
            row1[j].style.backgroundColor = ledColor;
            row2[j].style.backgroundColor = ledColor;
            row3[j].style.backgroundColor = ledColor;
            }
            break;
        case 9:
            for(let i=0;i<column1Top.length;i++){
            column1Top[i].style.backgroundColor = ledColor;
            column1Bottom[i].style.backgroundColor = ledOff;
            column2Top[i].style.backgroundColor = ledColor;
            column2Bottom[i].style.backgroundColor = ledColor;}
            for (let j=0;j<row1.length;j++){
            row1[j].style.backgroundColor = ledColor;
            row2[j].style.backgroundColor = ledColor;
            row3[j].style.backgroundColor = ledColor;
            }
            break;
    }
}


setInterval(function(){
    if(countdown<9){
        countdown++;
        display(countdown);
    }else {
        countdown2--;
        display(countdown2);
    }
},1000);

