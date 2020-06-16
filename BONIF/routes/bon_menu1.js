function Bon_menu1(){
    var pdt = [
        { id:1, type: 3, name:"쇠고기야채죽", price: 9000, src:"img1.jpg", clickable: true, best:true},
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

    var id, name, src, price, className;
    var html = '', html2 = '', txt = '';
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
        html2 = '';
        txt = '';
        html = 
        `<div class="subWrap">
            <div class="subVisual bon">
                <div class="innerWrapin">
                    <div class="title">메뉴소개</h2>
                </div>
            </div>
            <div class="totalTabBox">
                <div class="innerWrapin"></div>
            </div>
            <div class="innerWrapin subContents">
                <div class="tabBrand">
                    <div class="tabRow" id="cateList">
                        <a class="menu">모든메뉴</a>
                        <a class="menu">시그니처 죽</a>
                        <a class="menu">보양죽</a>
                        <a class="menu">영양죽</a>
                        <a class="menu">별미죽</a>
                        <a class="menu">전통죽</a>
                        <a class="menu">반찬</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container"></div>`;
        $('#container').html(html);
        
        for(var i in viewArr){
            name = viewArr[i].name;
            id = viewArr[i].id;
            src = viewArr[i].src;
            price = viewArr[i].price;
            className = '';

            txt = `
            <div class='item' onclick="route('Bon_detail')">
                <input type='hidden' class="item_id"  value=`+id+`>
                <div class='img' ${className}>
                    <img src='img/`+src+`'>
                </div>
                <div class='name'>
                    `+name+`
                </div>
                <div class='price'>
                `+comma(price)+`원`+`
                </div>
            </div> `;
            html2 += txt;
        }
        setTimeout(function(){
            $('.container').html(html2);
        }, 100);

    }
    function comma(num){
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    return html;
};
