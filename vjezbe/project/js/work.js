let gridView = document.getElementById("grid-view");
let listView = document.getElementById("list-view");
let elementsToChange = document.getElementsByClassName("work-flex-item");
let all = document.getElementById("all");
let print = document.getElementById("print");
let photography = document.getElementById("photography");
let web = document.getElementById("web");
let applications = document.getElementById("applications");
let projectsParrent = document.getElementById("projects-parrent");

listView.addEventListener("click",toList);
gridView.addEventListener("click",toGrid);

function toList(){
    for(let i=0;i<elementsToChange.length;i++){
        elementsToChange[i].style.flexBasis = "100%";  
    }
}
function toGrid(){

    for(let i=0;i<elementsToChange.length;i++){
        elementsToChange[i].style.flexBasis = "33%";  
    }
}

function categorySearch(category){
    for(let i=0; i<projectsParrent.children.length;i++){
        if(category != "all"){
            if(!projectsParrent.children[i].classList.contains(category)){
                projectsParrent.children[i].style.display = "none";
            }else{
                projectsParrent.children[i].style.display = "block";
            }
        }else{
            projectsParrent.children[i].style.display = "block";
        }
    }
}

print.addEventListener("click", function(){
    categorySearch("print");
})
photography.addEventListener("click", function(){
    categorySearch("photography");
})
web.addEventListener("click", function(){
    categorySearch("web");
})
applications.addEventListener("click", function(){
    categorySearch("applications");
})
all.addEventListener("click", function(){
    categorySearch("all");
})