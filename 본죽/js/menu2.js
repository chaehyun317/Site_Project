$(document).ready(function(){
    var pdt = [
        { id:1, name:"쇠고기야채죽", price: 9000, src:"1_쇠고기야채죽.jpg", best:true},
        { id:2, name:"전복죽", price: 11000, src:"2_전복죽.jpg", best:true},
        { id:3, name:"진전복죽", price: 15000, src:"3_진전복죽.jpg"},
        { id:4, name:"특전복죽", price: 19000, src:"4_특전복죽.jpg"},
        { id:5, name:"삼계죽", price: 11000, src:"5_삼계죽.jpg", best:true},
        { id:6, name:"삼계전복죽", price: 15000, src:"6_삼계전복죽.jpg"},
        { id:7, name:"치즈불닭죽", price: 12000, src:"7_치즈불닭죽.jpg"},
        { id:8, name:"신불닭죽", price: 10000, src:"8_신불닭죽.jpg"},
        { id:9, name:"새꼬막톳비빔밥", price: 11000, src:"38_새꼬막톳비빔밥.jpg", new:true},
        { id:10, name:"곤드레떡갈비한상", price: 11000, src:"39_곤드레떡갈비한상.jpg", best:true, new:true},
        { id:11, name:"트러블 전복죽", price: 16000, src:"9_트러블전복죽.jpg", best:true},
        { id:12, name:"트러블 전복죽(특)", price: 23000, src:"10_트러블 전복죽(특).jpg", best:true},
        { id:13, name:"홍게 품은 죽(기본)", price: 13000, src:"11_홍게 품은 죽(기본).jpg"},
        { id:14, name:"홍게 품은 죽(진)", price: 18000, src:"12_홍게 품은 죽(진).jpg"},
        { id:15, name:"홍게 품은 죽(특)", price: 23000, src:"13_홍게 품은 죽(특).jpg"},
        { id:16, name:"자연송이쇠고기죽", price: 13000, src:"14_자연송이쇠고기죽.jpg"},
        { id:17, name:"특자연송이쇠고기죽", price: 20000, src:"15_특자연송이쇠고기죽.jpg"},
        { id:18, name:"쇠고기버섯죽", price: 9000, src:"16_쇠고기버섯죽.jpg", best:true},
        { id:19, name:"참치야채죽", price: 8500, src:"18_참치야채죽.jpg"},
        { id:20, name:"신짬뽕죽", price: 10000, src:"26_신짬뽕죽.jpg"},
        { id:21, name:"야채죽", price: 8000, src:"19_야채죽.jpg", best:true},
        { id:22, name:"해물죽", price: 10000, src:"20_해물죽.jpg"},
        { id:23, name:"버섯굴죽", price: 9000, src:"24_버섯굴죽.jpg"},
        { id:24, name:"새우죽", price: 9000, src:"22_새우죽.jpg"},
        { id:25, name:"특해물죽", price: 13000, src:"21_특해물죽.jpg"},
        { id:26, name:"특버섯굴죽", price: 12000, src:"25_특버섯굴죽.jpg"},
        { id:27, name:"특새우죽", price: 12000, src:"23_특새우죽.jpg"},
        { id:28, name:"진품 쇠고기 육개장죽", price: 10000, src:"27_진품 쇠고기 육개장죽.jpg"},
        { id:29, name:"매생이굴죽", price: 10000, src:"31_매생이굴죽.jpg"},
        { id:30, name:"불낙죽", price: 11000, src:"30_불낙죽.jpg"},
        { id:31, name:"양구 시래기바지락죽", price: 9500, src:"29_양구 시래기바지락죽.jpg"},
        { id:32, name:"낙지김치죽", price: 9500, src:"28_낙지김치죽.jpg", best:true},
        { id:33, name:"단호박죽", price: 9000, src:"34_단호박죽.jpg", best:true},
        { id:34, name:"동지팥죽", price: 9000, src:"33_동지팥죽.jpg", best:true},
        { id:35, name:"녹두죽", price: 8500, src:"36_녹두죽.jpg"},
        { id:36, name:"곤드레비빔밥", price: 7500, src:"40_곤드레비빔밥.jpg", new:true},
        { id:37, name:"새꼬막비빔밥", price: 10000, src:"41_새꼬막비빔밥.jpg", best:true, new:true},
        { id:38, name:"매콤차돌시래기비빔밥", price: 9500, src:"42_매콤차돌시래기비빔밥.jpg"},
        { id:39, name:"버섯불고기 비빔밥", price: 9000, src:"43_버섯불고기 비빔밥.jpg", best:true},
        { id:40, name:"차돌강된장 비빔밥", price: 9000, src:"44_차돌강된장 비빔밥.jpg"},
        { id:41, name:"매콤낙지 비빔밥", price: 8500, src:"45_매콤낙지 비빔밥.jpg", best:true},
        { id:42, name:"참치김치 비빔밥", price: 7500, src:"46_참치김치 비빔밥.jpg"},
        { id:43, name:"본나물 비빔밥", price: 7000, src:"47_본나물 비빔밥.jpg", best:true},
        { id:44, name:"매콤차돌시래기 돌솥비빔밥", price: 10500, src:"48_매콤차돌시래기 돌솥비빔밥.jpg", best:true},
        { id:45, name:"버섯불고기 돌솥비빔밥", price: 10000, src:"49_버섯불고기 돌솥비빔밥.jpg"},
        { id:46, name:"차돌강된장 돌솥비빔밥", price: 10000, src:"50_차돌강된장 돌솥비빔밥.jpg"},
        { id:47, name:"매콤낙지 돌솥비빔밥", price: 9500, src:"51_매콤낙지 돌솥비빔밥.jpg"},
        { id:48, name:"참치김치 돌솥비빔밥", price: 8500, src:"52_참치김치 돌솥비빔밥.jpg"},
        { id:49, name:"본나물 돌솥비빔밥", price: 8000, src:"53_본나물 돌솥비빔밥.jpg"},
        { id:50, name:"불낙 뚝배기", price: 9500, src:"54_불낙 뚝배기.jpg"},
        { id:51, name:"진품 쇠고기 육개장", price: 9000, src:"55_진품 쇠고기 육개장.jpg"},
        { id:52, name:"해물 뚝배기", price: 9000, src:"56_해물 뚝배기.jpg"},
        { id:53, name:"통영 굴뚝배기", price: 8500, src:"57_통영 굴뚝배기.jpg"},
        { id:54, name:"특해물 뚝배기", price: 12000, src:"58_특해물 뚝배기.jpg"},
        { id:55, name:"특통영 뚝배기", price: 11500, src:"59_특통영 굴뚝배기.jpg"},
        { id:56, name:"담양식숯불떡갈비", price: 4000, src:"60_담양식숯불떡갈비.jpg", new:true},
        { id:57, name:"육즙가득 알새우만두", price: 5000, src:"61_육즙가득 알새우만두.jpg"},
        { id:58, name:"쫄깃감자 찐만두", price: 5000, src:"62_쫄깃감자 찐만두.jpg"},
        { id:59, name:"든든한끼 장조림", price: 2900, src:"37_든든한 장조림.jpg"},
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