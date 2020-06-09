function Bon_menu1(){
    var pdt = [
        { id:1, type: 3, name:"쇠고기야채죽", price: 9000, src:"img1.jpg", clickable: true, best:true},
        { id:2, type: 2, name:"쇠고기야채죽", price: 9000, src:"img2.jpg", clickable: true, best:true},
        { id:3, type: 2, name:"쇠고기야채죽", price: 9000, src:"img2.jpg", clickable: true, best:true},
    ];

    var id, name, src, price, className;
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
        
        for(var i in viewArr){
            name = viewArr[i].name;
            id = viewArr[i].id;
            src = viewArr[i].src;
            price = viewArr[i].price;
            className = '';

      
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
            <div class="container">
                <div class='item'>
                    <input type='hidden' value=`+id+`>
                        <div class='img' ${className}>
                            <img src='img/`+src+`'>
                        </div>
                        <div class='name'>
                            `+name+`
                        </div>
                        <div class='price'>
                        `+comma(price)+`원`+`
                        </div>
                    </input>
                </div>
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
                </div>
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
                </div>
            </div>`;
            }
            $('.container').html(html);
    }
    function comma(num){
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    return html;
};
