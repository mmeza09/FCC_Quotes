var actualQuote = '';
var actualAuthor = '';
var color=['#674BFF','#E8297B','#FF9E3F','#E8DF37','#49FF74'];
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
            console.log(typeof(data));
            actualQuote=data.quote;
            actualAuthor=data.author;
        
            $('.blockquote').animate({
                opacity:0
            },500,function(){
                $(this).animate({
                    opacity:1
                },500);
                $("#quote").html(actualQuote);
                $("#author").html(actualAuthor);
                $(".twitter-share-button").attr("href","https://twitter.com/intent/tweet?hashtags=quote&related=freecodecamp&text="+'"'+actualQuote+'"'+" "+actualAuthor);
            });
            
            var colorIndex = Math.round(Math.random() * 4);
            $('html body').animate({
                backgroundColor:color[colorIndex],
                color:color[colorIndex]
            },1000);

            $('.blockquote-footer').animate({
                color:color[colorIndex]
            });
            $('.btn').animate({
                backgroundColor:color[colorIndex],
            });
        }
    });
}

$(function(){
    getQuote();
    $("#newQuote").on("click",getQuote);
});