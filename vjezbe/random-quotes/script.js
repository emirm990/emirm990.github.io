$(document).ready(function(){
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
      var randColor = Math.floor(Math.random()*colorArray.length);
      $('main').css("background-color", colorArray[randColor]);
      
    //window.setInterval(backgroundChange, 5000);
    //function backgroundChange(){
     // var randColor = Math.floor(Math.random()*colorArray.length);
     // $('main').css("background-color", colorArray[randColor]);
   // };

   document.querySelector('.menu-button').onclick = function(e) {
    var category = [
    "home","hope","history","intelligence","imagination","knowledge","love","leadership","life","legal","learning","marriage","morning","movies","motivational","morning","money","medical","power","positive","poetry","romantic","respect","relationship","sympathy","success","strength","smile","sad","science","sports","truth","teacher","thankful","time","technology","wedding"];
    for (i=0;i<=6;i++){
      var randCategory = Math.floor(Math.random()*category.length);
      $("#random"+i).html(category[randCategory]).attr('value', category[randCategory]);
    };
    $('#random0, #random1, #random2, #random3, #random4, #random5, #random6').click(function(){
      clickedValue=$(this).text();
      $.getJSON( "https://talaikis.com/api/quotes/", function(json){
         var quote = "";
         var author = "";
         var data_filter = json.filter( element => element.cat =clickedValue);
         var numRand = Math.floor((Math.random() * json.length));
         quote = data_filter[numRand]['quote'];
         author = data_filter[numRand]['author'];
         $('#quoteContainer').slideDown(700);//.delay(5000).fadeOut(3000);
         $('#quoteText').html('"' + quote + '"');
         $('#quoteAuthor').html("-"+author);
         document.getElementById('tweet').href = "http://twitter.com/intent/tweet/?text=" + encodeURIComponent(quote + " -"+ author);
         console.log(data_filter);
         clickedValue=null;
       });
       function backgroundChange(){
        var randColor = Math.floor(Math.random()*colorArray.length);
        $('main').css("background-color", colorArray[randColor]);
      };
      backgroundChange();
     });
  
    e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
    $('#quoteContainer').slideUp(1000);
  };
  var items = document.querySelectorAll('.circle button');
  for(var i = 0, l = items.length; i < l; i++) {
    items[i].style.left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
    items[i].style.top = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
  }
  

});

