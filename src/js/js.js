var actualQuote = '';
var actualAuthor = '';
function getQuote (){
    $.ajax({
        headers:{
            "X-Mashape-Key":"hS0w8k4nNOmshGPrTS2wp5VEEiV0p1sFzfKjsnaVvLJEfouyRO",
            "X-Mashape-Host":"andruxnet-random-famous-quotes.p.mashape.com"
        },
        url:"https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=",
        type: "GET",
        dataType: "json",
        success: function(data){
            actualQuote=data.quote;
            actualAuthor=data.author;
            $("#quote").html(actualQuote);
            $("#author").html(actualAuthor);
            $(".twitter-share-button").attr("href","https://twitter.com/intent/tweet?hashtags=quote&related=freecodecamp&text="+'"'+actualQuote+'"'+" "+actualAuthor);
        }

    });
}

$(function(){
    getQuote();
    $("#newQuote").on("click",getQuote);
});