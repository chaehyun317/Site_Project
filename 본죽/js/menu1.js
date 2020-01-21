$(document).ready(function(){
    var pdt = [
        { id:1, type: 3, name:"쇠고기야채죽", price: 9000, src:"1_쇠고기야채죽.jpg", best:true},
        { id:2, type: 2, name:"전복죽", price: 11000, src:"2_전복죽.jpg", best:true},
        { id:3, type: 2, name:"진전복죽", price: 15000, src:"3_진전복죽.jpg"},
        { id:4, type: 2, name:"특전복죽", price: 19000, src:"4_특전복죽.jpg"},
        { id:5, type: 2, name:"삼계죽", price: 11000, src:"5_삼계죽.jpg", best:true},
        { id:6, type: 2, name:"삼계전복죽", price: 15000, src:"6_삼계전복죽.jpg"},
        { id:7, type: 1, name:"치즈불닭죽", price: 12000, src:"7_치즈불닭죽.jpg"},
        { id:8, type: 1, name:"신불닭죽", price: 10000, src:"8_신불닭죽.jpg",},
        { id:9, type: 1, name:"트러블전복죽", price: 16000, src:"9_트러블전복죽.jpg", best:true},
        { id:10, type: 1, name:"트러블 전복죽(특)", price: 23000, src:"10_트러블 전복죽(특).jpg", best:true},
        { id:11, type: 1, name:"홍게 품은 죽(기본)", price: 13000, src:"11_홍게 품은 죽(기본).jpg"},
        { id:12, type: 1, name:"홍게 품은 죽(진)", price: 18000, src:"12_홍게 품은 죽(진).jpg"},
        { id:13, type: 1, name:"홍게 품은 죽(특)", price: 23000, src:"13_홍게 품은 죽(특).jpg"},
        { id:14, type: 2, name:"자연송이쇠고기죽", price: 13000, src:"14_자연송이쇠고기죽.jpg"},
        { id:15, type: 2, name:"특자연송이쇠고기죽", price: 20000, src:"15_특자연송이쇠고기죽.jpg"},
        { id:16, type: 3, name:"쇠고기버섯죽", price: 9000, src:"16_쇠고기버섯죽.jpg", best:true},
        { id:17, type: 3, name:"쇠고기미역죽", price: 8500, src:"17_쇠고기미역죽.jpg"},
        { id:18, type: 3, name:"참치야채죽", price: 8500, src:"18_참치야채죽.jpg", best:true},
        { id:19, type: 3, name:"야채죽", price: 8000, src:"19_야채죽.jpg", best:true},
        { id:20, type: 3, name:"해물죽", price: 10000, src:"20_해물죽.jpg"},
        { id:21, type: 3, name:"특해물죽", price: 13000, src:"21_특해물죽.jpg"},
        { id:22, type: 3, name:"새우죽", price: 9000, src:"22_새우죽.jpg"},
        { id:23, type: 3, name:"특새우죽", price: 12000, src:"23_특새우죽.jpg"},
        { id:24, type: 3, name:"버섯굴죽", price: 9000, src:"24_버섯굴죽.jpg"},
        { id:25, type: 3, name:"특버섯굴죽", price: 12000, src:"25_특버섯굴죽.jpg"},
        { id:26, type: 4, name:"신짬뽕죽", price: 10000, src:"26_신짬뽕죽.jpg"},
        { id:27, type: 4, name:"진품 쇠고기 육개장죽", price: 10000, src:"27_진품 쇠고기 육개장죽.jpg"},
        { id:28, type: 4, name:"낙지김치죽", price: 9500, src:"28_낙지김치죽.jpg", best:true},
        { id:29, type: 4, name:"양구 시래기바지락죽", price: 9500, src:"29_양구 시래기바지락죽.jpg"},
        { id:30, type: 4, name:"불낙죽", price: 11000, src:"30_불낙죽.jpg", best:true},
        { id:31, type: 4, name:"매생이굴죽", price: 10000, src:"31_매생이굴죽.jpg"},
        { id:32, type: 5, name:"잣죽", price: 9500, src:"32_잣죽.jpg"},
        { id:33, type: 5, name:"동지팥죽", price: 9000, src:"33_동지팥죽.jpg", best:true},
        { id:34, type: 5, name:"단호박죽", price: 9000, src:"34_단호박죽.jpg", best:true},
        { id:35, type: 5, name:"흑임자죽", price: 8000, src:"35_흑임자죽.jpg"},
        { id:36, type: 5, name:"녹두죽", price: 8500, src:"36_녹두죽.jpg"},
        { id:37, type: 6, name:"든든한 장조림", price: 2900, src:"37_든든한 장조림.jpg"},
    ];

    var id, name, price, src, best2;
    var html = '';
    var txt = '';
    var bestTag = ''; 

    for(var i in pdt){
        bestTag = '';
        id = pdt[i].id;
        name = pdt[i].name;
        price = pdt[i].price;
        src = pdt[i].src;
        best2 = pdt[i].best;

        if(best2){
            bestTag = `<span class="best">BEST</span>`;
        }

        txt =
        `<div class='item'>`+bestTag+`
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