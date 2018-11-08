let navbar_toggle = document.getElementsByClassName("navbar-toggle");
let navbar = document.getElementsByClassName("navbar-links");

navbar_toggle[0].addEventListener("click", function(){
    if (navbar[0].classList.contains("show")){
        navbar[0].classList.remove("show");
        navbar[0].classList.add("hide");
    }else {
        navbar[0].classList.add("show");
        navbar[0].classList.remove("hide");
    }
})