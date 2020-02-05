$(document).ready(function(){
    var pdt = [
        { id:61, type:4, name:"(세트)짬뽕순두부 도시락", price: 8200, src:"img61.jpg", new:true},
        { id:62, type:4, name:"(단품)짬뽕순두부 도시락", price: 5600, src:"img62.jpg", new:true},
        { id:63, type:1, name:"대구식매운찜갈비 도시락", price: 15000, src:"img63.jpg"},
        { id:64, type:2, name:"(세트)대구식볶음짬뽕 도시락", price: 7900, src:"img64.jpg", new:true},
        { id:65, type:2, name:"(단품)대구식볶음짬뽕 도시락", price: 6200, src:"img65.jpg", new:true},
        { id:66, type:2, name:"(세트)대구식연탄불고기 도시락", price: 8400, src:"img66.jpg", new:true},
        { id:67, type:2, name:"(단품)대구식연탄불고기 도시락", price: 6700, src:"img67.jpg", new:true},
        { id:68, type:1, name:"진품닭불고기 도시락", price: 14000, src:"img68.jpg"},
        { id:69, type:3, name:"(세트)고추장닭불고기쌈밥 도시락", price: 10200, src:"img69.jpg"},
        { id:70, type:3, name:"(단품)고추장닭불고기쌈밥 도시락", price: 8500, src:"img70.jpg"},
        { id:71, type:3, name:"(세트)고추장닭불고기 도시락<br>(쌈제외)", price: 8900, src:"img71.jpg"},
        { id:72, type:3, name:"(단품)고추장닭불고기 도시락<br>(쌈제외)", price: 7200, src:"img72.jpg"},
        { id:73, type:5, name:"새우아보카도 샐러드", price: 6500, src:"img73.jpg"},
        { id:74, type:1, name:"일품불고기 도시락", price: 11000, src:"img74.jpg", best:true},
        { id:75, type:2, name:"여수꼬막불고기 도시락(세트)", price: 8900, src:"img75.jpg", best:true},
        { id:76, type:2, name:"여수꼬막불고기 도시락(단품)", price: 7200, src:"img76.jpg", best:true},
        { id:77, type:2, name:"속초식오징어바싹불고기 도시락(세트)", price: 8900, src:"img77.jpg", best:true},
        { id:78, type:2, name:"속초식오징어바싹불고기 도시락(단품)", price: 7200, src:"img78.jpg", best:true},
        { id:79, type:3, name:"버섯소불고기 도시락(세트-쌈제외)", price: 8400, src:"img79.jpg", best:true},
        { id:80, type:3, name:"버섯소불고기 도시락(단품-쌈제외)", price: 6700, src:"img80.jpg", best:true},
        { id:81, type:2, name:"우리돼지등심돈까스 도시락(세트)", price: 7900, src:"img81.jpg", best:true},
        { id:82, type:2, name:"우리돼지둥신돈까스 도시락(단품)", price: 6200, src:"img82.jpg", best:true},
        { id:83, type:3, name:"부추제육볶음 도시락(세트-쌈제외)", price: 7900, src:"img83.jpg", best:true},
        { id:84, type:3, name:"부추제육볶음 도시락(단품-쌈제외)", price: 6200, src:"img84.jpg", best:true},
        { id:85, type:4, name:"돼지고기묵은지찌개 도시락(세트)", price: 7700, src:"img85.jpg", best:true},
        { id:86, type:4, name:"돼지고기묵은지찌개 도시락(단품)", price: 5100, src:"img86.jpg", best:true},
        { id:87, type:2, name:"광양식바싹불고기 도시락(세트)", price: 7400, src:"img87.jpg", best:true},
        { id:88, type:2, name:"광양식바싹불고기 도시락(단품)", price: 5700, src:"img88.jpg", best:true},
        { id:89, type:2, name:"담양식떡갈비 도시락(세트)", price: 6900, src:"img89.jpg", best:true},
        { id:90, type:2, name:"담양식떡갈비 도시락(단품)", price: 5200, src:"img90.jpg", best:true},
        { id:91, type:7, name:"델리팸김치볶음밥(곱빼기)", price: 5700, src:"img91.jpg", best:true},
        { id:92, type:7, name:"델리팸김치볶음밥", price: 5200, src:"img92.jpg", best:true},
        { id:93, type:1, name:"궁중한정식 도시락", price: 23000, src:"img93.jpg"},
        { id:94, type:1, name:"명품갈비구이 도시락", price: 18000, src:"img94.jpg"},
        { id:95, type:1, name:"명이오리구이쌈 도시락", price: 15000, src:"img95.jpg"},
        { id:96, type:2, name:"울릉도한상 도시락(세트)", price: 11900, src:"img96.jpg"},

        { id:97, type:2, name:"울릉도한상 도시락(단품)", price: 10200, src:"img97.jpg"},
        { id:98, type:2, name:"속초식오징어볶음 도시락(세트)", price: 9900, src:"img98.jpg"},
        { id:99, type:2, name:"속초식오징어볶음 도시락(단품)", price: 8200, src:"img99.jpg"},
        { id:40, type:2, name:"(세트)춘천식닭구이 도시락", price: 8400, src:"102_(세트) 춘천식닭구이도시락.jpg"},

        { id:41, type:2, name:"(단품)춘천식닭구이 도시락", price: 6700, src:"103_(단품) 춘천식닭구이도시락.jpg"},
        { id:42, type:2, name:"(세트)의정부식 부대두루치기 도시락", price: 7400, src:"104_(세트) 의정부식 부대두루치기도시락.jpg"},
        { id:43, type:2, name:"(단품)의정부식 부대두루치기 도시락", price: 5700, src:"105_(단품) 의정부식 부대두루치기도시락.jpg"},
        { id:44, type:3, name:"(세트)버섯소불고기쌈밥 도시락", price: 9700, src:"106_(세트) 버섯소불고기쌈밥도시락.jpg"},

        { id:45, type:3, name:"(단품)버섯소불고기쌈밥 도시락", price: 8000, src:"149_(단품) 버섯소불고기쌈밥도시락.jpg"},
        { id:46, type:3, name:"(세트)부추제육볶음쌈밥 도시락", price: 9200, src:"107_(세트)부추제육볶음쌈밥도시락.jpg"},
        { id:47, type:3, name:"(단품)부추제육볶음쌈밥 도시락", price: 7500, src:"108_(단품) 부추제육볶음쌈밥도시락.jpg"},
        { id:48, type:3, name:"(세트)우렁강된장쌈밥 도시락", price: 9200, src:"109_(세트) 우렁 강된장쌈밥도시락.jpg"},

        { id:49, type:3, name:"(단품)우렁강된장쌈밥 도시락", price: 7500, src:"110_(단품) 우렁 강된장쌈밥도시락.jpg"},
        { id:50, type:6, name:"갈비 생일상 도시락", price: 20000, src:"111_갈비 생일상 도시락.jpg"},
        { id:51, type:6, name:"소불고기 생일상 도시락", price: 17000, src:"112_소불고기 생일상 도시락.jpg"},
        { id:52, type:5, name:"허브닭가슴살소시지 샐러드", price: 6500, src:"113_허브닭가슴살소시지 샐러드.jpg"},

        { id:53, type:5, name:"고구마닭가슴살 샐러드", price: 5900, src:"114_고구마닭가슴살 샐러드.jpg"},
        { id:54, type:5, name:"고구마견과류 샐러드", price: 4900, src:"115_고구마견과류 샐러드.jpg"},
        { id:55, type:4, name:"얼큰소고기가마솥국밥 도시락(세트)", price: 7900, src:"116_얼큰소고기가마솥국밥도시락(세트).jpg"},
        { id:56, type:4, name:"얼큰소고기가마솥국밥 도시락(단품)", price: 5300, src:"117_얼큰소고기가마솥국밥도시락(단품).jpg"},

        { id:57, type:4, name:"제주모자반쇠고기미역국 도시락(세트)", price: 7700, src:"118_제주모자반쇠고기미역국도시락.jpg", give:true},
        { id:58, type:4, name:"제주모자반소고기미역국 도시락(단품)", price: 5100, src:"119_제주모자반쇠고기미역국도시락.jpg", give:true},
        { id:59, type:7, name:"치킨마요(곱빼기)", price: 5400, src:"120_치킨마요(곱빼기).jpg"},
        { id:60, type:7, name:"치킨마요", price: 4900, src:"121_치킨마요.jpg"},

        { id:61, type:7, name:"핫윙", price: 7900, src:"122_핫윙.jpg"},
        { id:62, type:7, name:"닭강정", price: 7200, src:"123_닭강정.jpg"},
        { id:63, type:7, name:"참쌍탕수육", price: 6500, src:"124_찹쌀탕수육.jpg"},
        { id:64, type:8, name:"짬뽕순두부(국)", price: 4400, src:"125_짬뽕순두부(국).jpg", new:true},

        { id:65, type:8, name:"대구식볶음짬뽕 반찬", price: 5600, src:"126_대구식볶음짬뽕 반찬.jpg", new:true},
        { id:66, type:8, name:"버섯소불고기 반찬", price: 5900, src:"127_버섯소불고기 반찬.jpg"},
        { id:67, type:8, name:"부추제육볶음 반찬", price: 5600, src:"128_부추제육볶음 반찬.jpg"},
        { id:68, type:8, name:"(반찬)속초식오징어바싹불고기", price: 5600, src:"129_(반찬) 속초식오징어바싹불고기.jpg"},

        { id:69, type:8, name:"궁중 잡채 반찬", price: 5400, src:"130_궁중 잡채 반찬.jpg"},
        { id:70, type:8, name:"우리돼지등심돈까스 반찬", price: 5400, src:"131_우리돼지등심돈까스 반찬.jpg"},
        { id:71, type:8, name:"광양식바싹불고기 반찬", price: 4900, src:"132_광양식바싹불고기 반찬.jpg"},
        { id:72, type:8, name:"얼큰소고기가마솥국밥(국)", price: 4100, src:"133_얼큰소고기가마솥국밥(국).jpg"},

        { id:73, type:8, name:"제주모자반쇠고기미역국(국)", price: 3900, src:"134_제주모자반쇠고기미역국(국).jpg", give:true},
        { id:74, type:8, name:"돼지고기묵은지찌개(국)", price: 3900, src:"135_돼지고기묵은지찌개(국).jpg"},
        { id:75, type:9, name:"곤드레밥", price: 3500, src:"136_곤드레밥.jpg"},
        { id:76, type:9, name:"흑미밥", price: 2000, src:"137_흑미밥.jpg"},

        { id:77, type:9, name:"쌈채소", price: 2000, src:"138_쌈채소.jpg"},
        { id:78, type:9, name:"핫윗 두조각", price: 1800, src:"139_핫윙 두조각.jpg"},
        { id:79, type:9, name:"아이스홍시", price: 1500, src:"140_아이스홍시.jpg"},
        { id:80, type:9, name:"단호박 식혜", price: 1000, src:"141_단호박 식혜.jpg", new:true},

        { id:81, type:9, name:"콜라", price: 1500, src:"142_콜라.jpg"},
        { id:82, type:9, name:"사이다", price: 1500, src:"143_사이다.jpg"},
        { id:83, type:9, name:"계란후라이추가", price: 1000, src:"144_계란후라이추가.jpg"},
        { id:84, type:9, name:"델리팸 한조각", price: 700, src:"145_델리팸 한 조각.jpg"},

        { id:85, type:9, name:"컵국(미소된장)", price: 600, src:"146_컵국(미소된장국).jpg"},
        { id:86, type:9, name:"컵국(미역국)", price: 600, src:"147_컵국(미역국).jpg"},
        { id:87, type:9, name:"참고소한 김", price: 200, src:"148_참고소한 김.jpg"},
    ];

    var id, name, price, src, best2, new2, give2;
    var html = '';
    var txt = '';
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

        $(document).on('click', '.img', function(){
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