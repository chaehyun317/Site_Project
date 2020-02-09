$(document).ready(function(){
    var pdt = [
        { id:148, type:1, name:"백설", price: 8000, src:"img148.jpg", best:true, new:false},
        { id:149, type:1, name:"백설(특)", price: 11000, src:"img149.jpg", best:false, new:false},
        { id:150, type:1, name:"백설면", price: 8000, src:"img150.jpg", best:false, new:false},
        { id:151, type:1, name:"백설만", price: 8000, src:"img151.jpg", best:false, new:false},
        { id:152, type:1, name:"도가니보양설", price: 15000, src:"img152.jpg", best:false, new:false},
        { id:153, type:2,name:"홍설", price: 8500, src:"img153.jpg", best:false, new:false},
        { id:154, type:2, name:"홍설(특)", price: 11500, src:"img154.jpg", best:false, new:false},
        { id:155, type:2,name:"홍설면", price: 8500, src:"img155.jpg", best:true, new:false},
        { id:156, type:2, name:"홍설만", price: 8500, src:"img156.jpg", best:false, new:false},
        { id:157, type:3, name:"황설", price: 8500, src:"img157.jpg", best:false, new:false},
        { id:158, type:3, name:"황설(특)", price: 11500, src:"img158.jpg", best:false, new:false},
        { id:159, type:3, name:"황설면", price: 8500, src:"img159.jpg", best:false, new:false},
        { id:160, type:3, name:"황설만", price: 8500, src:"img160.jpg", best:true, new:false},
        { id:161, type:4, name:"우삼겹곱창전골(2인)", price: 19000, src:"img161.jpg", new:true, best:false},
        { id:162, type:4, name:"우삼겹곱창전골(3인)", price: 25000, src:"img162.jpg", new:true, best:false},
        { id:163, type:4, name:"빼어날수육(소)", price: 20000, src:"img163.jpg", best:false, new:false},
        { id:164, type:4, name:"빼어날수육(대)", price: 28000, src:"img164.jpg", best:false, new:false},
        { id:165, type:4, name:"매콤도가니", price: 18000, src:"img165.jpg", best:false, new:false},
        { id:166, type:5, name:"고추냉이갈비살덮밥", price: 9000, src:"img166.jpg", new:true, best:false},
        { id:167, type:5, name:"양곱창덮밥", price: 9000, src:"img167.jpg", new:true, best:false},
        { id:168, type:6, name:"매콤명태별미면", price: 7500, src:"img168.jpg", new:true, best:false},
        { id:169, type:7, name:"쭈돈불만두(3pcs)", price: 3000, src:"img169.jpg", best:false, new:false},
        { id:170, type:7, name:"쭈돈불만두(6pcs)", price: 5500, src:"img170.jpg", best:false, new:false},
        { id:171, type:7, name:"표고송이만두(3pcs)", price: 3000, src:"img171.jpg", best:false, new:false},
        { id:172, type:7, name:"표고송이만두(6pcs)", price: 5500, src:"img172.jpg", best:false, new:false},
        { id:173, type:7, name:"둥지떡갈비", price: 5000, src:"img173.jpg", best:false, new:false},
        { id:174, type:7, name:"새우황태튀김", price: 6000, src:"img174.jpg", best:false, new:false},
    ];

    var id, name, price, src, best2, new2;
    var html = '';
    var txt = '';
    var bestTag = '';
    var newTag = '';
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
            view = pdt.filter(function(item){
                return item.type === menuIdx;
            });
        }
        console.log(view);
        getItem(view);
    });

    function getItem(viewArr){
        html = '';
        txt = '';

        for(var i in viewArr){
            id = viewArr[i].id;
            name = viewArr[i].name;
            price = viewArr[i].price;
            src = viewArr[i].src;
            best2 = viewArr[i].best;
            new2 = viewArr[i].new;
            
            bestTag = '';
            newTag = '';

            if(best2){
                bestTag = `<span class="best">BEST</span>`;
            }
            if(new2){
                newTag = `<span class="new">NEW</span>`;
            }
        
            txt =
            `<div class='item'>`+bestTag+` `+newTag+`
                <input type='hidden' class="item_id"value="`+id+`">
                <div class='img'>
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

        $(document).on('click', '.img', function(){
            var item_id = $(this).siblings('.item_id')[0].value;
            var price = 3800;
            window.location = "bon_detail4.html?item_id="+item_id+"&price="+price;
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
