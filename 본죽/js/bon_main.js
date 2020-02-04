$(document).ready(function(){
    $(document).scroll(function(){
        var h = $(document).scrollTop();
        if(0 != h){
            $(".header").addClass("fixed");
        }else{
            $(".header").removeClass("fixed");
        }
    });

    $(document).scroll(function(){
        var h2 = $(document).scrollTop();
        if(0 != h2){
            $(".bg").addClass("fixed2");
        }else{
            $(".bg").removeClass("fixed2");
        }
    });

});