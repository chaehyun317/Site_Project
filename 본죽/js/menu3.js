$(document).ready(function(){
    var pdt = [
        { id:1, name:"(세트)짬뽕순두부 도시락", price: 8200, src:"63_(세트) 짬뽕순두부 도시락.jpg", new:true},
        { id:2, name:"(단품)짬뽕순두부 도시락", price: 5900, src:"64_(단품) 짬뽕순두부 도시락.jpg", new:true},
        { id:3, name:"대구식매운찜갈비 도시락", price: 15000, src:"65_대구식매운찜갈비 도시락.jpg"},
        { id:4, name:"(세트)대구식볶음짬뽕 도시락", price: 7900, src:"66_(세트) 대구식볶음짬뽕 도시락.jpg", new:true},

        { id:5, name:"(단품)대구식볶음짬뽕 도시락", price: 6200, src:"67_(단품) 대구식볶음짬뽕 도시락.jpg", new:true},
        { id:6, name:"(세트)대구식연탄불고기 도시락", price: 8400, src:"68_(세트) 대구식연탄불고기 도시락.jpg", new:true},
        { id:7, name:"(단품)대구식연탄불고기 도시락", price: 6700, src:"69_(단품) 대구식연탄불고기 도시락.jpg", new:true},
        { id:8, name:"진품닭불고기 도시락", price: 14000, src:"70_진품닭불고기 도시락.jpg"},

        { id:9, name:"(세트)고추장닭불고기쌈밥 도시락", price: 10200, src:"71_(세트) 고추장닭불고기쌈밥 도시락.jpg"},
        { id:10, name:"(단품)고추장닭불고기쌈밥 도시락", price: 8500, src:"72_(단품) 고추장닭불고기쌈밥 도시락.jpg"},
        { id:11, name:"(세트)고추장닭불고기 도시락", price: 8900, src:"73_(세트) 고추장닭불고기 도시락(쌈제외).jpg"},
        { id:12, name:"(단품)고추장닭불고기 도시락", price: 7200, src:"74_(단품) 고추장닭불고기 도시락(쌈제외).jpg"},

        { id:13, name:"새우아보카도 샐러드", price: 6500, src:"75_새우아보카도 샐러드.jpg"},
        { id:14, name:"일품불고기 도시락", price: 11000, src:"76_일품불고기도시락.jpg", best:true},
        { id:15, name:"여수꼬막불고기 도시락(세트)", price: 8900, src:"77_여수꼬막불고기 도시락(세트).jpg", best:true},
        { id:16, name:"여수꼬막불고기 도시락(단품)", price: 7200, src:"78_여수꼬막불고기 도시락(단품).jpg", best:true},

        { id:17, name:"속초식오징어바싹불고기 도시락(세트)", price: 8900, src:"79_속초식오징어바싹불고기 도시락(세트).jpg", best:true},
        { id:18, name:"속초식오징어바싹불고기 도시락(단품)", price: 7200, src:"80_속초식오징어바싹불고기 도시락(단품).jpg", best:true},
        { id:19, name:"버섯소불고기 도시락(세트-쌈제외)", price: 8400, src:"81_버섯소불고기 도시락(세트-쌈제외).jpg", best:true},
        { id:20, name:"버섯소불고기 도시락(단품-쌈제외)", price: 6700, src:"82_버섯소불고기 도시락(단품-쌈제외).jpg", best:true},

        { id:21, name:"우리돼지등심돈까스 도시락(세트)", price: 7900, src:"83_우리돼지등심돈까스도시락(세트).jpg", best:true},
        { id:22, name:"우리돼지둥신돈까스 도시락(단품)", price: 6200, src:"84_우리돼지등심돈까스도시락(단품).jpg", best:true},
        { id:23, name:"부추제육볶음 도시락(세트-쌈제외)", price: 7900, src:"85_부추제육볶음도시락(세트-쌈제외).jpg", best:true},
        { id:24, name:"부추제육볶음 도시락(단품-쌈제외)", price: 6200, src:"86_부추제육볶음도시락(단품-쌈제외).jpg", best:true},

        { id:25, name:"돼지고기묵은지찌개 도시락(세트)", price: 7700, src:"87_돼지고기묵은지찌개도시락(세트).jpg", best:true},
        { id:26, name:"돼지고기묵은지찌개 도시락(단품)", price: 5100, src:"88_돼지고기묵은지찌개도시락(단품).jpg", best:true},
        { id:27, name:"광양식바싹불고기 도시락(세트)", price: 7400, src:"89_광양식바싹불고기도시락(세트).jpg", best:true},
        { id:28, name:"광양식바싹불고기 도시락(단품)", price: 5700, src:"90_광양식바싹불고기도시락(단품).jpg", best:true},

        { id:29, name:"담양식떡갈비 도시락(세트)", price: 6900, src:"91_담양식떡갈비도시락(세트).jpg", best:true},
        { id:30, name:"담양식떡갈비 도시락(단품)", price: 5200, src:"92_담양식떡갈비도시락(단품).jpg", best:true},
        { id:31, name:"델리팸김치볶음밥(곱빼기)", price: 5700, src:"93_델리팸김치볶음밥(곱빼기).jpg", best:true},
        { id:32, name:"델리팸김치볶음밥", price: 5200, src:"94_델리팸김치볶음밥.jpg", best:true},

        { id:33, name:"궁중한정식 도시락", price: 23000, src:"95_궁중한정식도시락.jpg"},
        { id:34, name:"명품갈비구이 도시락", price: 18000, src:"96_명품갈비구이도시락.jpg"},
        { id:35, name:"명이오리구이쌈 도시락", price: 15000, src:"97_명이오리구이쌈도시락.jpg"},
        { id:36, name:"울릉도한상 도시락(세트)", price: 11900, src:"98_울릉도한상도시락(세트).jpg"},

        { id:37, name:"울릉도한상 도시락(단품)", price: 10200, src:"99_울릉도한상도시락(단품).jpg"},
        { id:38, name:"속초식오징어볶음 도시락(세트)", price: 9900, src:"100_속초식오징어볶음도시락(세트).jpg"},
        { id:39, name:"속초식오징어볶음 도시락(단품)", price: 8200, src:"101_속초오징어볶음도시락(단품).jpg"},
        { id:40, name:"(세트)춘천식닭구이 도시락", price: 8400, src:"102_(세트) 춘천식닭구이도시락.jpg"},

        { id:41, name:"(단품)춘천식닭구이 도시락", price: 6700, src:"103_(단품) 춘천식닭구이도시락.jpg"},
        { id:42, name:"(세트)의정부식 부대두루치기 도시락", price: 7400, src:"104_(세트) 의정부식 부대두루치기도시락.jpg"},
        { id:43, name:"(단품)의정부식 부대두루치기 도시락", price: 5700, src:"105_(단품) 의정부식 부대두루치기도시락.jpg"},
        { id:44, name:"(세트)버섯소불고기쌈밥 도시락", price: 9700, src:"106_(세트) 버섯소불고기쌈밥도시락.jpg"},

        { id:45, name:"(단품)버섯소불고기쌈밥 도시락", price: 8000, src:"149_(단품) 버섯소불고기쌈밥도시락.jpg"},
        { id:46, name:"(세트)부추제육볶음쌈밥 도시락", price: 9200, src:"107_(세트)부추제육볶음쌈밥도시락.jpg"},
        { id:47, name:"(단품)부추제육볶음쌈밥 도시락", price: 7500, src:"108_(단품) 부추제육볶음쌈밥도시락.jpg"},
        { id:48, name:"(세트)우렁강된장쌈밥 도시락", price: 9200, src:"109_(세트) 우렁 강된장쌈밥도시락.jpg"},

        { id:49, name:"(단품)우렁강된장쌈밥 도시락", price: 7500, src:"110_(단품) 우렁 강된장쌈밥도시락.jpg"},
        { id:50, name:"갈비 생일상 도시락", price: 20000, src:"111_갈비 생일상 도시락.jpg"},
        { id:51, name:"소불고기 생일상 도시락", price: 17000, src:"112_소불고기 생일상 도시락.jpg"},
        { id:52, name:"허브닭가슴살소시지 샐러드", price: 6500, src:"113_허브닭가슴살소시지 샐러드.jpg"},

        { id:53, name:"고구마닭가슴살 샐러드", price: 5900, src:"114_고구마닭가슴살 샐러드.jpg"},
        { id:54, name:"고구마견과류 샐러드", price: 4900, src:"115_고구마견과류 샐러드.jpg"},
        { id:55, name:"얼큰소고기가마솥국밥 도시락(세트)", price: 7900, src:"116_얼큰소고기가마솥국밥도시락(세트).jpg"},
        { id:56, name:"얼큰소고기가마솥국밥 도시락(단품)", price: 5300, src:"117_얼큰소고기가마솥국밥도시락(단품).jpg"},

        { id:57, name:"제주모자반쇠고기미역국 도시락(세트)", price: 7700, src:"118_제주모자반쇠고기미역국도시락.jpg", give:true},
        { id:58, name:"제주모자반소고기미역국 도시락(단품)", price: 5100, src:"119_제주모자반쇠고기미역국도시락.jpg", give:true},
        { id:59, name:"치킨마요(곱빼기)", price: 5400, src:"120_치킨마요(곱빼기).jpg"},
        { id:60, name:"치킨마요", price: 4900, src:"121_치킨마요.jpg"},

        { id:61, name:"핫윙", price: 7900, src:"122_핫윙.jpg"},
        { id:62, name:"닭강정", price: 7200, src:"123_닭강정.jpg"},
        { id:63, name:"참쌍탕수육", price: 6500, src:"124_찹쌀탕수육.jpg"},
        { id:64, name:"짬뽕순두부(국)", price: 4400, src:"125_짬뽕순두부(국).jpg", new:true},

        { id:65, name:"대구식볶음짬뽕 반찬", price: 5600, src:"126_대구식볶음짬뽕 반찬.jpg", new:true},
        { id:66, name:"버섯소불고기 반찬", price: 5900, src:"127_버섯소불고기 반찬.jpg"},
        { id:67, name:"부추제육볶음 반찬", price: 5600, src:"128_부추제육볶음 반찬.jpg"},
        { id:68, name:"(반찬)속초식오징어바싹불고기", price: 5600, src:"129_(반찬) 속초식오징어바싹불고기.jpg"},

        { id:69, name:"궁중 잡채 반찬", price: 5400, src:"130_궁중 잡채 반찬.jpg"},
        { id:70, name:"우리돼지등심돈까스 반찬", price: 5400, src:"131_우리돼지등심돈까스 반찬.jpg"},
        { id:71, name:"광양식바싹불고기 반찬", price: 4900, src:"132_광양식바싹불고기 반찬.jpg"},
        { id:72, name:"얼큰소고기가마솥국밥(국)", price: 4100, src:"133_얼큰소고기가마솥국밥(국).jpg"},

        { id:73, name:"제주모자반쇠고기미역국(국)", price: 3900, src:"134_제주모자반쇠고기미역국(국).jpg", give:true},
        { id:74, name:"돼지고기묵은지찌개(국)", price: 3900, src:"135_돼지고기묵은지찌개(국).jpg"},
        { id:75, name:"곤드레밥", price: 3500, src:"136_곤드레밥.jpg"},
        { id:76, name:"흑미밥", price: 2000, src:"137_흑미밥.jpg"},

        { id:77, name:"쌈채소", price: 2000, src:"138_쌈채소.jpg"},
        { id:78, name:"핫윗 두조각", price: 1800, src:"139_핫윙 두조각.jpg"},
        { id:79, name:"아이스홍시", price: 1500, src:"140_아이스홍시.jpg"},
        { id:80, name:"단호박 식혜", price: 1000, src:"141_단호박 식혜.jpg", new:true},

        { id:81, name:"콜라", price: 1500, src:"142_콜라.jpg"},
        { id:82, name:"사이다", price: 1500, src:"143_사이다.jpg"},
        { id:83, name:"계란후라이추가", price: 1000, src:"144_계란후라이추가.jpg"},
        { id:84, name:"델리팸 한조각", price: 700, src:"145_델리팸 한 조각.jpg"},

        { id:85, name:"컵국(미소된장)", price: 600, src:"146_컵국(미소된장국).jpg"},
        { id:86, name:"컵국(미역국)", price: 600, src:"147_컵국(미역국).jpg"},
        { id:87, name:"참고소한 김", price: 200, src:"148_참고소한 김.jpg"},
    ];

    var id, name, price, src, best2, new2, give2;
    var html = '';
    var txt = '';
    var bestTag = '';
    var newTag = '';
    var giveTag = '';

    for(var i in pdt){
        bestTag = '';
        newTag = '';
        giveTag = '';
        id = pdt[i].id;
        name = pdt[i].name;
        price = pdt[i].price;
        src = pdt[i].src;
        best2 = pdt[i].best;
        new2 = pdt[i].new;
        give2 = pdt[i].give;
        
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