function Bon_menu2(){
    var pdt = [
        { id:1, type:4, name:"쇠고기야채죽", price: 9000, src:"img1.jpg", best:true, new:false},
        { id:2, type:3, name:"전복죽", price: 11000, src:"img2.jpg", best:true, new:false},
        { id:3, type:3, name:"진전복죽", price: 15000, src:"img3.jpg", best:false, new:false},
        { id:4, type:3, name:"특전복죽", price: 19000, src:"img4.jpg", best:false, new:false},
        { id:5, type:3, name:"삼계죽", price: 11000, src:"img5.jpg", best:true, new:false},
        { id:6, type:3, name:"삼계전복죽", price: 15000, src:"img6.jpg", best:false, new:false},
        { id:36, type:2, name:"새꼬막톳비빔밥", price: 11000, src:"img36.jpg", best:false, new:true},
        { id:37, type:7, name:"곤드레떡갈비한상", price: 11000, src:"img37.jpg", best:true, new:true},
        { id:7, type:1, name:"트러블 전복죽", price: 16000, src:"img7.jpg", best:true, new:false},
        { id:8, type:1, name:"트러블 전복죽(특)", price: 23000, src:"img8.jpg", best:true, new:false},
        { id:9, type:1, name:"홍게 품은 죽(기본)", price: 13000, src:"img9.jpg", best:false, new:false},
        { id:10, type:1, name:"홍게 품은 죽(진)", price: 18000, src:"img10.jpg", best:false, new:false},
        { id:11, type:1, name:"홍게 품은 죽(특)", price: 23000, src:"img11.jpg", best:false, new:false},
        { id:12, type:3, name:"자연송이쇠고기죽", price: 13000, src:"img12.jpg", best:false, new:false},
        { id:13, type:3, name:"특자연송이쇠고기죽", price: 20000, src:"img13.jpg", best:false, new:false},
        { id:14, type:4, name:"쇠고기버섯죽", price: 9000, src:"img14.jpg", best:true, new:false},
        { id:16, type:4, name:"참치야채죽", price: 8500, src:"img16.jpg", best:false, new:false},
        { id:24, type:5, name:"신짬뽕죽", price: 10000, src:"img24.jpg", best:false, new:false},
        { id:17, type:4, name:"야채죽", price: 8000, src:"img17.jpg", best:true, new:false},
        { id:18, type:4, name:"해물죽", price: 10000, src:"img18.jpg", best:false, new:false},
        { id:22, type:4, name:"버섯굴죽", price: 9000, src:"img22.jpg", best:false, new:false},
        { id:20, type:4, name:"새우죽", price: 9000, src:"img20.jpg", best:false, new:false},
        { id:19, type:4, name:"특해물죽", price: 13000, src:"img19.jpg", best:false, new:false},
        { id:23, type:4, name:"특버섯굴죽", price: 12000, src:"img23.jpg", best:false, new:false},
        { id:21, type:4, name:"특새우죽", price: 12000, src:"img21.jpg", best:false, new:false},
        { id:25, type:5, name:"진품 쇠고기 육개장죽", price: 10000, src:"img25.jpg", best:false, new:false},
        { id:29, type:5, name:"매생이굴죽", price: 10000, src:"img29.jpg", best:false, new:false},
        { id:28, type:5, name:"불낙죽", price: 11000, src:"img28.jpg", best:false, new:false},
        { id:27, type:5, name:"양구 시래기바지락죽", price: 9500, src:"img27.jpg", best:false, new:false},
        { id:26, type:5, name:"낙지김치죽", price: 9500, src:"img26.jpg", best:true, new:false},
        { id:32, type:6, name:"단호박죽", price: 9000, src:"img32.jpg", best:true, new:false},
        { id:31, type:6, name:"동지팥죽", price: 9000, src:"img31.jpg", best:true, new:false},
        { id:34, type:6, name:"녹두죽", price: 8500, src:"img34.jpg", best:false, new:false},
        { id:38, type:7, name:"곤드레비빔밥", price: 7500, src:"img38.jpg", best:false, new:true},
        { id:39, type:2, name:"새꼬막비빔밥", price: 10000, src:"img39.jpg", best:true, new:true},
        { id:40, type:7, name:"매콤차돌시래기비빔밥", price: 9500, src:"img40.jpg", best:false, new:false},
        { id:41, type:7, name:"버섯불고기 비빔밥", price: 9000, src:"img41.jpg", best:true, new:false},
        { id:42, type:7, name:"차돌강된장 비빔밥", price: 9000, src:"img42.jpg", best:false, new:false},
        { id:43, type:7, name:"매콤낙지 비빔밥", price: 8500, src:"img43.jpg", best:true, new:false},
        { id:44, type:7, name:"참치김치 비빔밥", price: 7500, src:"img44.jpg", best:false, new:false},
        { id:45, type:7, name:"본나물 비빔밥", price: 7000, src:"img45.jpg", best:true, new:false},
        { id:46, type:7, name:"매콤차돌시래기 돌솥비빔밥", price: 10500, src:"img46.jpg", best:true, new:false},
        { id:47, type:7, name:"버섯불고기 돌솥비빔밥", price: 10000, src:"img47.jpg", best:false, new:false},
        { id:48, type:7, name:"차돌강된장 돌솥비빔밥", price: 10000, src:"img48.jpg", best:false, new:false},
        { id:49, type:7, name:"매콤낙지 돌솥비빔밥", price: 9500, src:"img49.jpg", best:false, new:false},
        { id:50, type:7, name:"참치김치 돌솥비빔밥", price: 8500, src:"img50.jpg", best:false, new:false},
        { id:51, type:7, name:"본나물 돌솥비빔밥", price: 8000, src:"img51.jpg", best:false, new:false},
        { id:52, type:8, name:"불낙 뚝배기", price: 9500, src:"img52.jpg", best:false, new:false},
        { id:53, type:8, name:"진품 쇠고기 육개장", price: 9000, src:"img53.jpg", best:false, new:false},
        { id:54, type:8, name:"해물 뚝배기", price: 9000, src:"img54.jpg", best:false, new:false},
        { id:55, type:8, name:"통영 굴뚝배기", price: 8500, src:"img55.jpg", best:false, new:false},
        { id:56, type:8, name:"특해물 뚝배기", price: 12000, src:"img56.jpg", best:false, new:false},
        { id:57, type:8, name:"특통영 뚝배기", price: 11500, src:"img57.jpg", best:false, new:false},
        { id:58, type:9, name:"담양식숯불떡갈비", price: 4000, src:"img58.jpg", best:false, new:true},
        { id:59, type:9, name:"육즙가득 알새우만두", price: 5000, src:"img59.jpg", best:false, new:false},
        { id:60, type:9, name:"쫄깃감자 찐만두", price: 5000, src:"img60.jpg", best:false, new:false},
        { id:35, type:9, name:"든든한끼 장조림", price: 2900, src:"img35.jpg", best:false, new:false},
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
                        <a class="menu">시그니처 비빔밥</a>
                        <a class="menu">보양죽</a>
                        <a class="menu">영양죽</a>
                        <a class="menu">별미죽</a>
                        <a class="menu">전통죽</a>
                        <a class="menu">비빔밥</a>
                        <a class="menu">뚝배기</a>
                        <a class="menu">곁들임메뉴</a>
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
            <div class='item'>
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
}