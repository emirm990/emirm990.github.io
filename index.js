let navButton = document.getElementById("nav-expand");
let navigation = document.getElementById("navigation");
let navigationList = document.getElementById("nav-ul");
let progressBar = document.getElementById("progressBar");
let menuIcon = document.getElementById("menu-icon");

navButton.addEventListener("click", function(){
    navigationList.classList.toggle("block");
    navigation.classList.toggle("block");

    if (navigation.classList.contains("block")){
        
        progressBar.style.top = "0";
    }else {
        progressBar.style.top = "25px";
        
    }
    //todo menuIcon.style.transform = "rotate(90deg)";
})

function scrollbar(){
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";
}
window.onscroll = function(){
    scrollbar();
}