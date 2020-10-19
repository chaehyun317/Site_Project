$(document).ready(function(){
    var pdt = [
        { id:1, type:2, name:"머니건 SUPER FLEX 블랙", price:14900, src:"img1.jpg", newN:true },
        { id:2, type:2, name:"머니건 알잖아 내 클래스 레드", price:14900, src:"img2.jpg",  newN:true },
        { id:3, type:1, name:"늘어나는 가짜 혓바닥", price:2500, src:"img3.jpg", newN:true },
        { id:4, type:1, name:"지폐 장난감 말리", price:3800, src:"img4.jpg", newN:true },
        { id:5, type:2, name:"파티커튼 로즈골드", price:4900, src:"img5.jpg", newN:true },
        { id:6, type:2, name:"파티커튼 홀로그램", price:4900, src:"img6.jpg", newN:true },
        { id:7, type:2, name:"파티풍선 로즈골드 9호일풍선", price:1000, src:"img7.jpg", newN:true },
        { id:8, type:2, name:"파티풍선 로즈골드 8호일풍선", price:1000, src:"img8.jpg", newN:true },
        { id:9, type:2, name:"파티풍선 로즈골드 7호일풍선", price:1000, src:"img9.jpg", newN:true },
        { id:10, type:2, name:"파티풍선 로즈골드 6호일풍선", price:1000, src:"img10.jpg", newN:true },
        { id:11, type:2, name:"파티풍선 로즈골드 5호일풍선", price:1000, src:"img11.jpg", newN:true },
        { id:12, type:2, name:"파티풍선 로즈골드 4호일풍선", price:1000, src:"img12.jpg", newN:true },
        { id:13, type:2, name:"파티풍선 로즈골드 3호일풍선", price:1000, src:"img13.jpg", newN:true },
        { id:14, type:2, name:"파티풍선 로즈골드 2호일풍선", price:1000, src:"img14.jpg", newN:true },
        { id:15, type:2, name:"파티풍선 로즈골드 1호일풍선", price:1000, src:"img15.jpg", newN:true },
        { id:16, type:2, name:"파티풍선 로즈골드 0호일풍선", price:1000, src:"img16.jpg", newN:true },
        { id:17, type:3, name:"쿠션인형 엎드린 고깔 고슴도치", price:12800, src:"img17.jpg", newN:true },
        { id:18, type:3, name:"쿠션인형 엎드린 보따리 악어", price:12800, src:"img18.jpg", newN:true },
        { id:19, type:3, name:"쿠션인형 엎드린 반달곰", price:12800, src:"img19.jpg", newN:true },
        { id:20, type:3, name:"쿠션인형 엎드린 메롱 베이지시바", price:12800, src:"img20.jpg", newN:true },
        { id:21, type:3, name:"쿠션인형 엎드린 하마", price:12800, src:"img21.jpg", newN:true },
        { id:22, type:1, name:"별 미니탬버린 블루", price:3200, src:"img22.jpg", newN:true },
        { id:23, type:1, name:"별 미니탬버린 옐로", price:3200, src:"img23.jpg", newN:true },
        { id:24, type:1, name:"페이크 비밀금고 파라다이스 책금고", price:13500, src:"img24.jpg", newN:true },
        { id:25, type:2, name:"파티안경 하트 퍼플", price:2900, src:"img25.jpg", newN:true },
        { id:26, type:2, name:"파티안경 하트 진핑크", price:2900, src:"img26.jpg", newN:true },
        { id:27, type:1, name:"페이크 비밀금고 블루버드 책금고", price:13500, src:"img27.jpg", newN:true },
        { id:28, type:1, name:"페이크 미니게임 틀린그림찾기", price:3500, src:"img28.jpg", newN:true },
        { id:29, type:1, name:"원카드 카드게임 시바버전", price:5900, src:"img29.jpg", newN:true },
        { id:30, type:2, name:"레인보우초 올리버", price:2500, src:"img30.jpg", newN:true },
        { id:31, type:2, name:"레인보우초 보스", price:2500, src:"img31.jpg", newN:true },
        { id:32, type:2, name:"파티용품 해피벌스데이안경 생일초", price:3500, src:"img32.jpg", newN:true },
    ];

    var id, name, price, src;
    var html = '', txt='';
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
        var newN = '';
        var newIcon = '';

        for(var i in viewArr){
            id = viewArr[i].id;
            name = viewArr[i].name;
            price = viewArr[i].price;
            src = viewArr[i].src;
            newN = viewArr[i].newN;
            newIcon = '';

            if (newN) newIcon = `<div class="newN"></div>`;

            txt =
            `<div class='item'>
                <input type='hidden' class="item_id" value=`+id+`>
                <div class='img'>
                    <img src='img/`+src+`'>
                </div>
                <div class='info'>
                    <div class='name'>
                        `+name+`
                    </div>
                    <div class='price'>
                        `+comma(price)+`원`+`
                    </div>
                    <div class='newIcon'>
                        ${newIcon}
                    </div>
                </div>
            </div>`;
            html = html + txt;
        }
        $('.container').html(html);
    }
      
    function comma(num){
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
});