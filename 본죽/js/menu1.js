$(document).ready(function(){
    var pdt = [
        { id:1, type: 3, name:"쇠고기야채죽", price: 9000, src:"img1.jpg",clickable: true, best:true},
        { id:2, type: 2, name:"전복죽", price: 11000, src:"img2.jpg",clickable: true, best:true},
        { id:3, type: 2, name:"진전복죽", price: 15000, src:"img3.jpg",clickable: true, best:false },
        { id:4, type: 2, name:"특전복죽", price: 19000, src:"img4.jpg",clickable: true, best:false },
        { id:5, type: 2, name:"삼계죽", price: 11000, src:"img5.jpg",clickable: true, best:true},
        { id:6, type: 2, name:"삼계전복죽", price: 15000, src:"img6.jpg",clickable: true, best:false },
        { id:7, type: 1, name:"트러블전복죽", price: 16000, src:"img7.jpg",clickable: true, best:true},
        { id:8, type: 1, name:"트러블 전복죽(특)", price: 23000, src:"img8.jpg",clickable: true, best:true},
        { id:9, type: 1, name:"홍게 품은 죽(기본)", price: 13000, src:"img9.jpg",clickable: true, best:false },
        { id:10, type: 1, name:"홍게 품은 죽(진)", price: 18000, src:"img10.jpg",clickable: true, best:false },
        { id:11, type: 1, name:"홍게 품은 죽(특)", price: 23000, src:"img11.jpg",clickable: true, best:false },
        { id:12, type: 2, name:"자연송이쇠고기죽", price: 13000, src:"img12.jpg",clickable: true, best:false },
        { id:13, type: 2, name:"특자연송이쇠고기죽", price: 20000, src:"img13.jpg",clickable: true, best:false },
        { id:14, type: 3, name:"쇠고기버섯죽", price: 9000, src:"img14.jpg",clickable: true, best:true},
        { id:15, type: 3, name:"쇠고기미역죽", price: 8500, src:"img15.jpg",clickable: true, best:false },
        { id:16, type: 3, name:"참치야채죽", price: 8500, src:"img16.jpg",clickable: true, best:true},
        { id:17, type: 3, name:"야채죽", price: 8000, src:"img17.jpg",clickable: true, best:true},
        { id:18, type: 3, name:"해물죽", price: 10000, src:"img18.jpg",clickable: true, best:false },
        { id:19, type: 3, name:"특해물죽", price: 13000, src:"img19.jpg",clickable: true, best:false },
        { id:20, type: 3, name:"새우죽", price: 9000, src:"img20.jpg",clickable: true, best:false },
        { id:21, type: 3, name:"특새우죽", price: 12000, src:"img21.jpg",clickable: true, best:false },
        { id:22, type: 3, name:"버섯굴죽", price: 9000, src:"img22.jpg",clickable: true, best:false },
        { id:23, type: 3, name:"특버섯굴죽", price: 12000, src:"img23.jpg",clickable: true, best:false },
        { id:24, type: 4, name:"신짬뽕죽", price: 10000, src:"img24.jpg",clickable: true, best:false },
        { id:25, type: 4, name:"진품 쇠고기 육개장죽", price: 10000, src:"img25.jpg",clickable: true, best:false },
        { id:26, type: 4, name:"낙지김치죽", price: 9500, src:"img26.jpg",clickable: true, best:true},
        { id:27, type: 4, name:"양구 시래기바지락죽", price: 9500, src:"img27.jpg",clickable: true, best:false },
        { id:28, type: 4, name:"불낙죽", price: 11000, src:"img28.jpg",clickable: true, best:true},
        { id:29, type: 4, name:"매생이굴죽", price: 10000, src:"img29.jpg",clickable: true, best:false },
        { id:30, type: 5, name:"잣죽", price: 9500, src:"img30.jpg",clickable: true, best:false },
        { id:31, type: 5, name:"동지팥죽", price: 9000, src:"img31.jpg",clickable: true, best:true},
        { id:32, type: 5, name:"단호박죽", price: 9000, src:"img32.jpg",clickable: true, best:true},
        { id:33, type: 5, name:"흑임자죽", price: 8000, src:"img33.jpg",clickable: true, best:false },
        { id:34, type: 5, name:"녹두죽", price: 8500, src:"img34.jpg",clickable: true, best:false },
        { id:35, type: 6, name:"든든한끼 장조림", price: 2900, src:"img35.jpg",clickable: false, best:false },
    ];


    

    var id, name, price, src, clickable, className;
    var html = '', txt = '';
    var view = [];
    view = pdt;

    getItem(view);

    var menuIdx;

    $(document).on('click', '#cateList .menu', function(){
        menuIdx = $(this).index();
        view = [];
        if(menuIdx === 0){
            view = pdt;
        }else{
            view = pdt.filter((item) => {
                return item.type === menuIdx;
            });
        }
        console.log(view);
        getItem(view);
    });

    function getItem(viewArr){
        html = '';
        txt = '';
        var best = '';
        var bestTag = '';

        for(var i in viewArr){
            id = viewArr[i].id;
            name = viewArr[i].name;
            price = viewArr[i].price;
            src = viewArr[i].src;
            best = viewArr[i].best;
            clickable = viewArr[i].clickable;
            className = '';
            bestTag = '';

            if (clickable) className = 'onImg';
            if (best) bestTag = `<span class="best">BEST</span>`;
        
            txt =
            `<div class='item'>
                ${bestTag}
                <input type='hidden' class="item_id" value=`+id+`>
                <div class='img ${className}'>
                    <img src='img2/`+src+`'>
                </div>
                <div class='name'>
                    `+name+`
                </div>
                <div class='price'>
                    `+comma(price)+`원`+`
                </div>
            </div>`;
            html = html + txt;
        }
        $('.container').html(html);

        $(document).on('click', '.onImg', function(){
            var item_id = $(this).siblings('.item_id')[0].value;
            var price = 3800;
            window.location = "bon_detail.html?item_id="+item_id+"&price="+price;
        });
    }
    
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