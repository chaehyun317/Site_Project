$(document).ready(function(){
    var index = 0;
    var timer = 800;
    var length = $('.slide').length;

    $(document).on('.click', '#next2', function(){
        next2();
    });

    $(document).on('.click', '#prev2', function(){
        prev2();
    });

    function next2(){
        $('.slide').eq(index).animate({
            left: '100%'
        }, timer);

        index++;
        index = index % length;

        $('.slide').eq(index).css({
            left: '100%'
        }).animate({
            left: '0%'
        }, timer);
    }s

});