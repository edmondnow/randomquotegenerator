/* FreeCodeCamp Random Quote Generator, see
https://www.freecodecamp.org/challenges/build-a-personal-portfolio-webpage */

//for the API, access-control-allow-origin header must not have value null;

//increments number to change color
var i = 0

function numBer(){
i++
if(i>12){
  i = 0;
}
var myColors = ['#A93226', '#CB4335', '#884EA0', '#8E44AD', '#2980B9', '#3498DB', '#1ABC9C','#16A085', '#2ECC71', '#F1C40F', '#F39C12', '#D35400'];
return myColors[i];
}

//returns random number to change quote

function num2(){
myMax2 = 30
var num2 = Math.random() * (myMax2 + 1)
num = Math.floor(num2);
return num2;
}

//change the color of buttons and background
function changeColor(myColors){
  var color = numBer();
  $('body, .btn').css('background-color', color);
  $('#quote-content, #quote-title').css('color',color);
}


//Getting a quote with Jquery
//el.addEventListener('click',changeQuote,false);

 function changeQuote() {
$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=" + num2() + "&callback=", function(a) { 
  $("#quote-content").html(a[0].content);
  $("#quote-title").html(a[0].title);
 
});} 

//calls color to be changed on click
var el = document.getElementById('change');
el.addEventListener('click', function changeQuoteColor(){
changeColor(); 
changeQuote();
}, false);


//calls twitterLink to be generated on click

var twitter = document.getElementById('twitter');
twitter.addEventListener('click', function openTwitter(){
  window.open(twitterLink(), '_blank')
}, false)



//calls tumblrLink to be generated on click

var tumblr= 
document.getElementById('tumblr');
tumblr.addEventListener('click', function openTumblr(){
  window.open(tumblrLink(), 'blank')
}, false)


//generates twitterLinkw with current quote

function twitterLink() {
var url = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + document.getElementById('quote-content').textContent + document.getElementById('quote-title').textContent;
return url}


//generates tumblrLink with current quote

function tumblrLink() {
var url = 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' + document.getElementById('quote-content').textContent + document.getElementById('quote-title').textContent+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button';
return url
}