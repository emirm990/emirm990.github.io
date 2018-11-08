var lat;
var lon;
var description;
var apiKey = "65f6cf38d4466b2bd1210135949bddd0";
var units = "metric";
var ForC = "&#8451;";
var j=4;

$(document).ready(function() {
  function formattedTime(time){
    var date = new Date(time * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var formattedTime =
      hours + ":" + minutes.substr(-2);
    return formattedTime;
    };
  function backgroundChange(id){
    if (id>=200 && id<=232){
     return $("main").css("background-image", "url('https://media.giphy.com/media/iN6lLmUb8exMI/giphy.gif')");
    };
    if (id>=300 && id<=321){
      return $("main").css("background-image", "url('https://media.giphy.com/media/LvZvInwnWDFT2/giphy.gif')");
    };
    if (id>=500 && id<=531){
      return $("main").css("background-image", "url('https://media.giphy.com/media/dI3D3BWfDub0Q/giphy.gif')");
    };
    if (id>=600 && id<=622){
      return $("main").css("background-image", "url('https://media.giphy.com/media/N7ZiLbtDr84Yo/giphy.gif')");
    };
    if (id>=700 && id<=781){
      return $("main").css("background-image", "url('https://media.giphy.com/media/l2Je9dUI5LpzfHGTe/giphy.gif')");
    };
    if (id==800){
      return $("main").css("background-image", "url('https://media.giphy.com/media/l0Iy2x1FicLn45JGE/giphy.gif')");
    };
    if (id>=801 && id<=804){
      return $("main").css("background-image", "url('https://media.giphy.com/media/5z83g65j4axkCSn6MR/giphy.gif')");
    };
  };
  function geoFindMe() {
    if (!navigator.geolocation) {
      alert("Location is not available");
    }
    function success(position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      $.getJSON(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
          lat +
          "&lon=" +
          lon +
          "&appid=" +
          apiKey +
          "&units=" +
          units,
        function(data) {
          var name = data.name + " ," + data.sys.country;
          var temp = Math.round(data.main.temp);
          var icon = data.weather[0].icon;
          description = data.weather[0].main;
          var time = data.dt_txt;
          var id=data.weather[0].id;
          backgroundChange(id);
          //console.log(id);
          document.getElementById("location").value = name;
          document.getElementById("currentTemp").innerHTML = temp; //+ "&#8451;";
          document.getElementById("weatherIcon").src =
            "http://openweathermap.org/img/w/" + icon + ".png";
          document.getElementById("description").innerHTML = description;
          document.getElementById("time").innerHTML = formattedTime(data.dt);
          $.getJSON("https://api.openweathermap.org/data/2.5/forecast?q=" +name+ "&appid=" +apiKey+"&units=" +
          units,function(data5){
            for (var i=0;i<=j;i++){
            document.getElementById("hour"+i).innerHTML = data5.list[i].dt_txt;
            document.getElementById("temp"+i).innerHTML =  Math.round(data5.list[i].main.temp)+"°C";
            document.getElementById("weather"+i).innerHTML =  data5.list[i].weather[0].main;
            document.getElementById("icon"+i).src =
            "http://openweathermap.org/img/w/" + data5.list[i].weather[0].icon + ".png";
            };
          });
        });
    }
    function error() {
      alert("Unable to retrieve your location");
    }
    navigator.geolocation.getCurrentPosition(success, error);
  }
  document.getElementById("location").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      document.getElementById("search").click();
    };
  });
  $("#search").click(function(){
    name=$("#location").val();
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" +name+ "&appid=" +apiKey +"&units=" +
          units,function(data){
    temp = Math.round(data.main.temp);
    icon = data.weather[0].icon;
    description = data.weather[0].main;
    document.getElementById("location").value = name;
    document.getElementById("currentTemp").innerHTML = temp; //+ "&#8451;";
    document.getElementById("weatherIcon").src ="http://openweathermap.org/img/w/" + icon + ".png";
    document.getElementById("description").innerHTML = description;
    document.getElementById("CorF").value="°C";
    var id=data.weather[0].id;
    //console.log(name);
    $.getJSON("https://api.openweathermap.org/data/2.5/forecast?q=" +name+ "&appid=" +apiKey+"&units=" +
          units,function(data5){
            //console.log(j);
            for (var i=0;i<=j;i++){
            //document.getElementById("hour"+i).innerHTML =  formattedTime(data5.list[i].dt);
            document.getElementById("temp"+i).innerHTML =  Math.round(data5.list[i].main.temp)+"°C";
            document.getElementById("weather"+i).innerHTML =  data5.list[i].weather[0].main;
            document.getElementById("icon"+i).src =
            "http://openweathermap.org/img/w/" + data5.list[i].weather[0].icon + ".png";
            };
          });
    backgroundChange(id);
  });
  });
  $("#locate").click(function() {
    geoFindMe();
  });
  geoFindMe();
  $("#CorF").on("click", function() {
    var oldTemp =[];
    var newTemp =[];
    //console.log(this.value);
    if(this.value=="°C"){
      mainTempC = document.getElementById("currentTemp").innerHTML;
      mainTempF = mainTempC *9/5 +32;
      document.getElementById("currentTemp").innerHTML=mainTempF;
      //console.log(mainTempC);
      document.getElementById("CorF").value="°F";
      for (var i=0;i<=j;i++){
        oldTemp[i]= Number($("#temp"+i).text().slice(0,-2));
        newTemp[i]=oldTemp[i] *9/5+32;
        document.getElementById("temp"+i).innerHTML=newTemp[i] + "°F";
        //console.log[oldTemp[i]];
      };
    }
    else{
      document.getElementById("currentTemp").innerHTML=mainTempC;
      document.getElementById("CorF").value="°C";
      for (var i=0;i<=j;i++){
        oldTemp[i]= Number($("#temp"+i).text().slice(0,-2));
        newTemp[i]=Math.round((oldTemp[i] - 32) *5/9);
        document.getElementById("temp"+i).innerHTML=newTemp[i] + "°C";
        //console.log[newTemp[i]]
      };
    };
  });
  function loadMore(someId){
    for (var i=0;i<5;i++){
      j++;
    $(someId).append('<div><div id="weather'+j+'"></div><img id="icon'+j+'"><div id="temp'+j+'"></div><div id="hour'+j+'"></div> </div>');};
  };
  $("#loadMore").on("click", function(){
  
    loadMore(".hourlyForecast");
    function populate(){
     
      
      name=$("#location").val();
      $.getJSON("https://api.openweathermap.org/data/2.5/forecast?q=" +name+ "&appid=" +apiKey+"&units=" + units,function(data5){
        for(i=j-5;i<=j;i++){
      $("#hour"+i).html(data5.list[i].dt_txt);
      document.getElementById("temp"+i).innerHTML =  Math.round(data5.list[i].main.temp)+"°C";
      document.getElementById("weather"+i).innerHTML=data5.list[i].weather[0].main;
      document.getElementById("icon"+i).src =
      "http://openweathermap.org/img/w/" + data5.list[i].weather[0].icon + ".png";
      //console.log(i);
    };
      });
      
    
    };
      populate(j-1);  
    });
     
});
