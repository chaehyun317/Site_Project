$(document).ready(function(){
    var pdt = [
        { id:1, name:"백설", price: 8000, src:"150_백설.jpg", best:true},
        { id:2, name:"백설(특)", price: 11000, src:"151_백설(특).jpg"},
        { id:3, name:"백설면", price: 8000, src:"152_백설면.jpg"},
        { id:4, name:"백설만", price: 8000, src:"153_백설만.jpg"},

        { id:5, name:"도가니보양설", price: 15000, src:"154_도가니보양설.jpg"},
        { id:6, name:"홍설", price: 8500, src:"155_홍설.jpg"},
        { id:7, name:"홍설(특)", price: 11500, src:"156_홍설(특).jpg"},
        { id:8, name:"홍설면", price: 8500, src:"157_홍설면.jpg", best:true},

        { id:9, name:"홍설만", price: 8500, src:"158_홍설만.jpg"},
        { id:10, name:"황설", price: 8500, src:"159_황설.jpg"},
        { id:11, name:"황설(특)", price: 11500, src:"160_황설(특).jpg"},
        { id:12, name:"황설면", price: 8500, src:"161_황설면.jpg"},

        { id:13, name:"황설만", price: 8500, src:"162_황설만.jpg", best:true},
        { id:14, name:"우삼겹곱창전골(2인)", price: 19000, src:"163_우삼겹곱창전골(2인).jpg", new:true},
        { id:15, name:"우삼겹곱창전골(3인)", price: 25000, src:"164_우삼겹곱창전골(3인).jpg", new:true},
        { id:16, name:"빼어날수육(소)", price: 20000, src:"165_빼어날수육(소).jpg"},

        { id:17, name:"빼어날수육(대)", price: 28000, src:"166_빼어날수육(대).jpg"},
        { id:18, name:"매콤도가니", price: 18000, src:"167_매콤도가니.jpg"},
        { id:19, name:"고추냉이갈비살덮밥", price: 9000, src:"168_고추냉이갈비살덮밥.jpg", new:true},
        { id:20, name:"양곱창덮밥", price: 9000, src:"169_양곱창덮밥.jpg", new:true},

        { id:21, name:"매콤명태별미면", price: 7500, src:"170_매콤명태별미면.jpg", new:true},
        { id:22, name:"쭈돈불만두(3pcs)", price: 3000, src:"171_쭈돈불만두(3pcs).jpg"},
        { id:23, name:"쭈돈불만두(3pcs)", price: 5500, src:"172_쭈돈불만두(6pcs).jpg"},
        { id:24, name:"표고송이만두(3pcs)", price: 3000, src:"173_표고송이만두(3pcs).jpg"},

        { id:25, name:"표고송이만두(3pcs)", price: 5500, src:"174_표고송이만두(6pcs).jpg"},
        { id:26, name:"둥지떡갈비", price: 5000, src:"175_둥지떡갈비.jpg"},
        { id:27, name:"새우황태튀김", price: 6000, src:"176_새우황태튀김.jpg"}
    ];

    var id, name, price, src, best2, new2;
    var html = '';
    var txt = '';
    var bestTag = '';
    var newTag = '';
    
    for(var i in pdt){
        bestTag = '';
        newTag = '';
        id = pdt[i].id;
        name = pdt[i].name;
        price = pdt[i].price;
        src = pdt[i].src;
        best2 = pdt[i].best;
        new2 = pdt[i].new;
        
        if(best2){
            bestTag = `<span class="best">BEST</span>`;
        }

        if(new2){
            newTag = `<span class="new">NEW</span>`;
        }
        
        txt =
        `<div class='item'>`+bestTag+``+newTag+`
            <input type='hidden' class="itemId" value="${id}">
            <div class='img'>
                <img src='img2/${src}'>
            </div>
            <div class='name'>
                ${name}
            </div>
            <div class='price'>
                `+comma(price)+`원`+`
            </div>
        </div>`;
        html = html + txt;
    }
    $('.container').html(html);

    function comma(num){
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
});


$(document).ready(function(){
    var windowHeight = window.innerHeight;
    var on = false;
    $(window).resize(function(){
        windowHeight = window.windowHeight;
    });

    $(document).on('scroll', window, function(){
        var scrollTop = $(window).scrollTop();
        var scrollBottom = scrollTop + windowHeight;
        console.log(scrollBottom);
        var footerOffsetTop = $('#footer').offset().top;

        if(scrollBottom >= footerOffsetTop){
            if(on){
                return;
            }
            on = true;
            $('.btn_order').removeClass('order_fixed');
        }else{
            if(!on){
                return;
            }
            on = false;
            $('.btn_order').addClass('order_fixed');
        }
    });
});