let apiKey = "fdcceaee503d65d10f646f384fbc9aec";

let moviesButton = document.getElementById("movies-button");
let tvButton = document.getElementById("tv-button");
let search = document.getElementById("search");
let title = document.getElementById("title");
let screen = document.getElementById("screen");
let movies = document.getElementById("movies");
let moviesButtonClicked = false;
let tvButtonClicked = true;



async function getData(tvOrMovie){
    let response = await fetch("https://api.themoviedb.org/3/" + tvOrMovie + "/top_rated?api_key="+apiKey+"&language=en-US&page=1");
    let json = await response.json();
    if (tvButtonClicked){
        for (let i=0;i<10;i++){
            movies.innerHTML += 
                `<div class="card col-6 mb-3">
                    <img class="card-img-top" src="http://image.tmdb.org/t/p/w185//${json.results[i].poster_path}">
                    <h5 class="card-title" id="${i}">${json.results[i].name}</h5>
                </div>`
        }
    }else{
        for (let i=0;i<10;i++){
            movies.innerHTML += 
                `<div class="card col-6 mb-3">
                    <img class="card-img-top" src="http://image.tmdb.org/t/p/w185//${json.results[i].poster_path}">
                    <h5 class="card-title" id="${i}">${json.results[i].title}</h5>
                </div>`
        }
    }
    console.log(json.results);
    
    //.then(function(response) {
    //    return response.json();
    //    })
    //.then(function(data) {
    //    moviesArray = data.results;
    //    return moviesArray;
    //    screen.src = "http://image.tmdb.org/t/p/w185//" + moviesArray[order].poster_path;
    //    if (tvOrMovie == "tv"){
    //        title.innerText = moviesArray[order].name;
    //    }else {
    //        title.innerText = moviesArray[order].title;
    //    }
    //    });
}
async function getSearch(searchInput){
    if (tvButtonClicked){
        tvOrMovie = "tv";
    }else tvOrMovie = "movie";
    let response = await fetch("https://api.themoviedb.org/3/search/" + tvOrMovie + "?api_key=fdcceaee503d65d10f646f384fbc9aec&language=en-US&query=" + searchInput + "&page=1&include_adult=false");
    let json = await response.json();

    if (tvButtonClicked){
        for (let i=0;i<10;i++){
            movies.innerHTML += 
                `<div class="card col-6 mb-3">
                    <img class="card-img-top" src="http://image.tmdb.org/t/p/w185//${json.results[i].poster_path}">
                    <h5 class="card-title" id="${i}">${json.results[i].name}</h5>
                </div>`
        }
    }else{
        for (let i=0;i<10;i++){
            movies.innerHTML += 
                `<div class="card col-6 mb-3">
                    <img class="card-img-top" src="http://image.tmdb.org/t/p/w185//${json.results[i].poster_path}">
                    <h5 class="card-title" id="${i}">${json.results[i].title}</h5>
                </div>`
        }
    }
    
}

search.addEventListener("input", function(){
    movies.innerHTML = "";
    if (search.value.length > 2){
        getSearch(search.value);
    }else if(moviesButtonClicked){
        getData("movie"); 
    }else{
        getData("tv");
    }
    
})

moviesButton.addEventListener("click", function(){
    tvButton.classList.remove("btn-primary");
    moviesButton.classList.add("btn-primary");
    moviesButtonClicked = true;
    tvButtonClicked = false;
    tvOrMovie = "movie";
    movies.innerHTML = "";
    getData("movie"); 
});

tvButton.addEventListener("click", function(){
    tvButton.classList.add("btn-primary");
    moviesButton.classList.remove("btn-primary");
    moviesButtonClicked = false;
    tvButtonClicked = true;
    movies.innerHTML = "";
    getData("tv");
})

getData("tv");



