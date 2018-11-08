let nav_button = document.getElementById("nav-button");
let nav_links = document.getElementsByClassName("nav-links");

nav_button.addEventListener("click", function(){
    if(nav_links[0].classList.contains("show")){
        nav_links[0].classList.add("hide");
        nav_links[0].classList.remove("show");
    }else{
        nav_links[0].classList.add("show");
        nav_links[0].classList.remove("hide");
    }
})