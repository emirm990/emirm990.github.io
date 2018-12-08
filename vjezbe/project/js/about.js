let websites = document.getElementById("websites");
let photography = document.getElementById("photography");
let seo = document.getElementById("seo");
let applications = document.getElementById("applications");
let tabsContent = document.getElementById("tabs-content");

function changeTabContent(type) {
    fetch("https://jsonplaceholder.typicode.com/" + type)
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            tabsContent.innerHTML = 
                `<p>${json.title}</p>
                <p>${json.body}</p>`
        })
}

changeTabContent("posts/1");

websites.addEventListener("click", function(){
    changeTabContent("posts/1");
    websites.classList.add("active-tab");
    seo.classList.remove("active-tab");
    photography.classList.remove("active-tab");
    applications.classList.remove("active-tab");
})
photography.addEventListener("click", function(){
    changeTabContent("posts/5");
    photography.classList.add("active-tab");
    applications.classList.remove("active-tab");
    websites.classList.remove("active-tab");
    seo.classList.remove("active-tab");
})
seo.addEventListener("click", function(){
    changeTabContent("posts/10");
    seo.classList.add("active-tab");
    applications.classList.remove("active-tab");
    websites.classList.remove("active-tab");
    photography.classList.remove("active-tab");
})
applications.addEventListener("click", function(){
    changeTabContent("posts/25");
    applications.classList.add("active-tab");
    seo.classList.remove("active-tab");
    websites.classList.remove("active-tab");
    photography.classList.remove("active-tab");
})
