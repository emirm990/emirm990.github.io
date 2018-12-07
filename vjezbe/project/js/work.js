let gridView = document.getElementById("grid-view");
let listView = document.getElementById("list-view");
let elementsToChange = document.getElementsByClassName("work-flex-item");
let all = document.getElementById("all");
let print = document.getElementById("print");
let photography = document.getElementById("photography");
let web = document.getElementById("web");
let applications = document.getElementById("applications");
let projectsParrent = document.getElementById("projects-parrent");
let noResults = document.getElementById("no-results")
listView.addEventListener("click",toList);
gridView.addEventListener("click",toGrid);

function toList(){
    projectsParrent.style.width = "60%";
    for(let i=0;i<elementsToChange.length;i++){
        elementsToChange[i].style.flexBasis = "100%";  
    }
}
function toGrid(){
    projectsParrent.style.width = "100%";
    for(let i=0;i<elementsToChange.length;i++){
        elementsToChange[i].style.flexBasis = "33%";  
    }
}

function categorySearch(category){
    let categoryCount = 0;
    for(let i=0; i<projectsParrent.children.length;i++){
        if(category != "all"){
            
            if(!projectsParrent.children[i].classList.contains(category)){
                if(projectsParrent.children[i].classList.contains(category)==false){
                    categoryCount++;
                    if(categoryCount==projectsParrent.children.length){
                       noResults.style.display = "block";
                       break;
                    }
                }
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
    print.classList.add("active-page");
    photography.classList.remove("active-page");
    web.classList.remove("active-page");
    applications.classList.remove("active-page");
    all.classList.remove("active-page");
})
photography.addEventListener("click", function(){
    categorySearch("photography");
    print.classList.remove("active-page");
    photography.classList.add("active-page");
    web.classList.remove("active-page");
    applications.classList.remove("active-page");
    all.classList.remove("active-page");
})
web.addEventListener("click", function(){
    categorySearch("web");
    print.classList.remove("active-page");
    photography.classList.remove("active-page");
    web.classList.add("active-page");
    applications.classList.remove("active-page");
    all.classList.remove("active-page");
})
applications.addEventListener("click", function(){
    categorySearch("applications");
    print.classList.remove("active-page");
    photography.classList.remove("active-page");
    web.classList.remove("active-page");
    applications.classList.add("active-page");
    all.classList.remove("active-page");
})
all.addEventListener("click", function(){
    categorySearch("all");
    print.classList.remove("active-page");
    photography.classList.remove("active-page");
    web.classList.remove("active-page");
    applications.classList.remove("active-page");
    all.classList.add("active-page");
})