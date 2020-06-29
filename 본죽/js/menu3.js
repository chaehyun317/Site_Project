$(document).ready(function(){
    var pdt = [
        { id:61, type:4, name:"(세트)짬뽕순두부 도시락", price: 8200, src:"img61.jpg", best:false, new:true, give:false, clickable: true},
        { id:62, type:4, name:"(단품)짬뽕순두부 도시락", price: 5600, src:"img62.jpg", best:false, new:true, give:false, clickable: true},
        { id:63, type:1, name:"대구식매운찜갈비 도시락", price: 15000, src:"img63.jpg", best:false, new:false, give:false, clickable: true},
        { id:64, type:2, name:"(세트)대구식볶음짬뽕 도시락", price: 7900, src:"img64.jpg", best:false,new:true, give:false, clickable: true},

        { id:65, type:2, name:"(단품)대구식볶음짬뽕 도시락", price: 6200, src:"img65.jpg", best:false, new:true, give:false, clickable: true},
        { id:66, type:2, name:"(세트)대구식연탄불고기 도시락", price: 8400, src:"img66.jpg", best:false, new:true, give:false, clickable: true},
        { id:67, type:2, name:"(단품)대구식연탄불고기 도시락", price: 6700, src:"img67.jpg", best:false, new:true, give:false, clickable: true},
        { id:68, type:1, name:"진품닭불고기 도시락", price: 14000, src:"img68.jpg", best:false, new:false, give:false, clickable: true},

        { id:69, type:3, name:"(세트)고추장닭불고기쌈밥 도시락", price: 10200, src:"img69.jpg", best:false, new:false, give:false, clickable: true},
        { id:70, type:3, name:"(단품)고추장닭불고기쌈밥 도시락", price: 8500, src:"img70.jpg", best:false, new:false, give:false, clickable: true},
        { id:71, type:3, name:"(세트)고추장닭불고기 도시락<br>(쌈제외)", price: 8900, src:"img71.jpg", best:false, new:false, give:false, clickable: true},
        { id:72, type:3, name:"(단품)고추장닭불고기 도시락<br>(쌈제외)", price: 7200, src:"img72.jpg", best:false, new:false, give:false, clickable: true},

        { id:73, type:5, name:"새우아보카도 샐러드", price: 6500, src:"img73.jpg", best:false, new:false, give:false, clickable: true},
        { id:74, type:1, name:"일품불고기 도시락", price: 11000, src:"img74.jpg", best:true, new:false, give:false, clickable: true},
        { id:75, type:2, name:"여수꼬막불고기 도시락(세트)", price: 8900, src:"img75.jpg", best:true, new:false, give:false, clickable: true},
        { id:76, type:2, name:"여수꼬막불고기 도시락(단품)", price: 7200, src:"img76.jpg", best:true, new:false, give:false, clickable: true},

        { id:77, type:2, name:"속초식오징어바싹불고기 도시락(세트)", price: 8900, src:"img77.jpg", best:true, new:false, give:false, clickable: true},
        { id:78, type:2, name:"속초식오징어바싹불고기 도시락(단품)", price: 7200, src:"img78.jpg", best:true, new:false, give:false, clickable: true},
        { id:79, type:3, name:"버섯소불고기 도시락(세트-쌈제외)", price: 8400, src:"img79.jpg", best:true, new:false, give:false, clickable: true},
        { id:80, type:3, name:"버섯소불고기 도시락(단품-쌈제외)", price: 6700, src:"img80.jpg", best:true, new:false, give:false, clickable: true},

        { id:81, type:2, name:"우리돼지등심돈까스 도시락(세트)", price: 7900, src:"img81.jpg", best:true, new:false, give:false, clickable: true},
        { id:82, type:2, name:"우리돼지둥신돈까스 도시락(단품)", price: 6200, src:"img82.jpg", best:true, new:false, give:false, clickable: true},
        { id:83, type:3, name:"부추제육볶음 도시락(세트-쌈제외)", price: 7900, src:"img83.jpg", best:true, new:false, give:false, clickable: true},
        { id:84, type:3, name:"부추제육볶음 도시락(단품-쌈제외)", price: 6200, src:"img84.jpg", best:true, new:false, give:false, clickable: true},

        { id:85, type:4, name:"돼지고기묵은지찌개 도시락(세트)", price: 7700, src:"img85.jpg", best:true, new:false, give:false, clickable: true},
        { id:86, type:4, name:"돼지고기묵은지찌개 도시락(단품)", price: 5100, src:"img86.jpg", best:true, new:false, give:false, clickable: true},
        { id:87, type:2, name:"광양식바싹불고기 도시락(세트)", price: 7400, src:"img87.jpg", best:true, new:false, give:false, clickable: true},
        { id:88, type:2, name:"광양식바싹불고기 도시락(단품)", price: 5700, src:"img88.jpg", best:true, new:false, give:false, clickable: true},

        { id:89, type:2, name:"담양식떡갈비 도시락(세트)", price: 6900, src:"img89.jpg", best:true, new:false, give:false, clickable: true},
        { id:90, type:2, name:"담양식떡갈비 도시락(단품)", price: 5200, src:"img90.jpg", best:true, new:false, give:false, clickable: true},
        { id:91, type:7, name:"델리팸김치볶음밥(곱빼기)", price: 5700, src:"img91.jpg", best:true, new:false, give:false, clickable: true},
        { id:92, type:7, name:"델리팸김치볶음밥", price: 5200, src:"img92.jpg", best:true, new:false, give:false, clickable: true},

        { id:93, type:1, name:"궁중한정식 도시락", price: 23000, src:"img93.jpg", best:false, new:false, give:false, clickable: true},
        { id:94, type:1, name:"명품갈비구이 도시락", price: 18000, src:"img94.jpg", best:false, new:false, give:false, clickable: true},
        { id:95, type:1, name:"명이오리구이쌈 도시락", price: 15000, src:"img95.jpg", best:false, new:false, give:false, clickable: true},
        { id:96, type:2, name:"울릉도한상 도시락(세트)", price: 11900, src:"img96.jpg", best:false, new:false, give:false, clickable: true},

        { id:97, type:2, name:"울릉도한상 도시락(단품)", price: 10200, src:"img97.jpg", best:false, new:false, give:false, clickable: true},
        { id:98, type:2, name:"속초식오징어볶음 도시락(세트)", price: 9900, src:"img98.jpg", best:false, new:false, give:false, clickable: true},
        { id:99, type:2, name:"속초식오징어볶음 도시락(단품)", price: 8200, src:"img99.jpg", best:false, new:false, give:false, clickable: true},
        { id:100, type:2, name:"(세트)춘천식닭구이 도시락", price: 8400, src:"img100.jpg", best:false, new:false, give:false, clickable: true},

        { id:101, type:2, name:"(단품)춘천식닭구이 도시락", price: 6700, src:"img101.jpg", best:false, new:false, give:false, clickable: true},
        { id:102, type:2, name:"(세트)의정부식 부대두루치기 도시락", price: 7400, src:"img102.jpg", best:false, new:false, give:false, clickable: true},
        { id:103, type:2, name:"(단품)의정부식 부대두루치기 도시락", price: 5700, src:"img103.jpg", best:false, new:false, give:false, clickable: true},
        { id:104, type:3, name:"(세트)버섯소불고기쌈밥 도시락", price: 9700, src:"img104.jpg", best:false, new:false, give:false, clickable: true},

        { id:105, type:3, name:"(단품)버섯소불고기쌈밥 도시락", price: 8000, src:"img105.jpg", best:false, new:false, give:false, clickable: true},
        { id:106, type:3, name:"(세트)부추제육볶음쌈밥 도시락", price: 9200, src:"img106.jpg", best:false, new:false, give:false, clickable: true},
        { id:107, type:3, name:"(단품)부추제육볶음쌈밥 도시락", price: 7500, src:"img107.jpg", best:false, new:false, give:false, clickable: true},
        { id:108, type:3, name:"(세트)우렁강된장쌈밥 도시락", price: 9200, src:"img108.jpg", best:false, new:false, give:false, clickable: true},
        
        { id:109, type:3, name:"(단품)우렁강된장쌈밥 도시락", price: 7500, src:"img109.jpg", best:false, new:false, give:false, clickable: true},
        { id:110, type:6, name:"갈비 생일상 도시락", price: 20000, src:"img110.jpg", best:false, new:false, give:false, clickable: true},
        { id:111, type:6, name:"소불고기 생일상 도시락", price: 17000, src:"img111.jpg", best:false, new:false, give:false, clickable: true},
        { id:112, type:5, name:"허브닭가슴살소시지 샐러드", price: 6500, src:"img112.jpg", best:false, new:false, give:false, clickable: true},

        { id:113, type:5, name:"고구마닭가슴살 샐러드", price: 5900, src:"img113.jpg", best:false, new:false, give:false, clickable: true},
        { id:114, type:5, name:"고구마견과류 샐러드", price: 4900, src:"img114.jpg", best:false, new:false, give:false, clickable: true},
        { id:115, type:4, name:"얼큰소고기가마솥국밥 도시락(세트)", price: 7900, src:"img115.jpg", best:false, new:false, give:false, clickable: true},
        { id:116, type:4, name:"얼큰소고기가마솥국밥 도시락(단품)", price: 5300, src:"img116.jpg", best:false,new:false, give:false, clickable: true},

        { id:117, type:4, name:"제주모자반쇠고기미역국 도시락(세트)", price: 7700, src:"img117.jpg", best:false, new:false, give:true, clickable: true},
        { id:118, type:4, name:"제주모자반소고기미역국 도시락(단품)", price: 5100, src:"img118.jpg", best:false, new:false, give:true, clickable: true},
        { id:119, type:7, name:"치킨마요(곱빼기)", price: 5400, src:"img119.jpg", best:false, new:false, give:false, clickable: true},
        { id:120, type:7, name:"치킨마요", price: 4900, src:"img120.jpg", best:false, new:false, give:false, clickable: true},

        { id:121, type:7, name:"핫윙", price: 7900, src:"img121.jpg", best:false, new:false, give:false, clickable: true},
        { id:122, type:7, name:"닭강정", price: 7200, src:"img122.jpg", best:false, new:false, give:false, clickable: true},
        { id:123, type:7, name:"참쌍탕수육", price: 6500, src:"img123.jpg", best:false, new:false, give:false, clickable: true},
        { id:124, type:8, name:"짬뽕순두부(국)", price: 4400, src:"img124.jpg",best:false, new:true, give:false, clickable: true},

        { id:125, type:8, name:"대구식볶음짬뽕 반찬", price: 5600, src:"img125.jpg", best:false, new:true, give:false, clickable: true},
        { id:126, type:8, name:"버섯소불고기 반찬", price: 5900, src:"img126.jpg", best:false, new:false, give:false, clickable: true},
        { id:127, type:8, name:"부추제육볶음 반찬", price: 5600, src:"img127.jpg", best:false, new:false, give:false, clickable: true},
        { id:128, type:8, name:"(반찬)속초식오징어바싹불고기", price: 5600, src:"img128.jpg", best:false, new:false, give:false, clickable: true},

        { id:129, type:8, name:"궁중 잡채 반찬", price: 5400, src:"img129.jpg", best:false, new:false, give:false, clickable: true},
        { id:130, type:8, name:"우리돼지등심돈까스 반찬", price: 5400, src:"img130.jpg", best:false, new:false, give:false, clickable: true},
        { id:131, type:8, name:"광양식바싹불고기 반찬", price: 4900, src:"img131.jpg", best:false, new:false, give:false, clickable: true},
        { id:132, type:8, name:"얼큰소고기가마솥국밥(국)", price: 4100, src:"img132.jpg", best:false, new:false, give:false, clickable: true},

        { id:133, type:8, name:"제주모자반쇠고기미역국(국)", price: 3900, src:"img133.jpg",best:false, new:false, give:true, clickable: true},
        { id:134, type:8, name:"돼지고기묵은지찌개(국)", price: 3900, src:"img134.jpg", best:false, new:false, give:false, clickable: true},
        { id:135, type:9, name:"곤드레밥", price: 3500, src:"img135.jpg", best:false, new:false, give:false, clickable: false},
        { id:136, type:9, name:"흑미밥", price: 2000, src:"img136.jpg", best:false, new:false, give:false, clickable: false},

        { id:137, type:9, name:"쌈채소", price: 2000, src:"img137.jpg", best:false, new:false, give:false, clickable: false},
        { id:138, type:9, name:"핫윗 두조각", price: 1800, src:"img138.jpg", best:false, new:false, give:false, clickable: false},
        { id:139, type:9, name:"아이스홍시", price: 1500, src:"img139.jpg", best:false, new:false, give:false, clickable: false},
        { id:140, type:9, name:"단호박 식혜", price: 1000, src:"img140.jpg", best:false, new:true, give:false, clickable: false},

        { id:141, type:9, name:"콜라", price: 1500, src:"img141.jpg", best:false, new:false, give:false, clickable: false},
        { id:142, type:9, name:"사이다", price: 1500, src:"img142.jpg", best:false, new:false, give:false, clickable: false},
        { id:143, type:9, name:"계란후라이추가", price: 1000, src:"img143.jpg", best:false, new:false, give:false, clickable: false},
        { id:144, type:9, name:"델리팸 한조각", price: 700, src:"img144.jpg", best:false, new:false, give:false, clickable: false},

        { id:145, type:9, name:"컵국(미소된장)", price: 600, src:"img145.jpg", best:false, new:false, give:false, clickable: false},
        { id:146, type:9, name:"컵국(미역국)", price: 600, src:"img146.jpg", best:false, new:false, give:false, clickable: false},
        { id:147, type:9, name:"참고소한 김", price: 200, src:"img147.jpg", best:false, new:false, give:false, clickable: false},
    ];

    var id, name, price, src, best2, new2, give2, clickable, className;
    var html = '', txt='';
    var bestTag = '';
    var newTag = '';
    var giveTag = '';
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
        for(var i in viewArr){
            bestTag = '';
            newTag = '';
            giveTag = '';
            id = viewArr[i].id;
            name = viewArr[i].name;
            price = viewArr[i].price;
            src = viewArr[i].src;
            best2 = viewArr[i].best;
            new2 = viewArr[i].new;
            give2 = viewArr[i].give;
            clickable = viewArr[i].clickable;
            className = '';
        
            if (clickable) className = 'onImg';

            if(best2){
                bestTag = `<span class="best">BEST</span>`;
            }

            if(new2){
                newTag = `<span class="new">NEW</span>`;
            }

            if(give2){
                giveTag = `<span class="give">기부메뉴</span>`;
            }
            txt =
            `<div class='item'>`+bestTag+``+newTag+``+giveTag+`
                <input type='hidden' class="item_id" value="${id}">
                <div class='img ${className}'>
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

        $(document).on('click', '.onImg', function(){
            var item_id = $(this).siblings('.item_id')[0].value;
            var price = 3800;
            window.location = "bon_detail3.html?item_id="+item_id+"&price="+price;
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