$( document ).ready(function() {
    getQuote();
});


function getQuote() {
  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(data) {
    console.log(data);
    $("#quoteText").html(data.quoteText);
    $("#quoteAuthor").html("- " + data.quoteAuthor);
  });

}

function tweet(){
  window.open('https://twitter.com/intent/tweet?hashtags= quote&text='   + encodeURIComponent($("#quoteText").text()) + encodeURIComponent($("#quoteAuthor").text()) );
}