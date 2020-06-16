function Bon_detail(){
    var pdt = [
        { id:1, type: 3, name2:"쇠고기야채죽", price2: 9000, src:"img1.jpg", best:true, desc: "소고기와 야채가 만들어내는 완벽한 영양 밸런스", viewOne:"img1.jpg", viewTwo:"img1_2.jpg", detailImg:"img1_3.jpg", 
            summary: "영양만점 소고기와 6가지 야채의 든든함. 신선한 야채와 고단백질 소고기까지 부담 없이 한번에 섭취할 수 있는 균형 잡힌 최고의 한그릇을 자랑합니다.", half1:"img1_4.jpg", half2:"img1_5.jpg",
            b_txt1: "쇠고기와 야채가 만들어내는 완벽한 영양 밸런스<br><strong>쇠고기 야채죽</strong>", b_txt3:"고단백질<br><strong>소고기</strong>", b_txt5:"신선한 야채로<br><strong>균형잡힌 영양소 듬뿍</strong>",
            b_txt2:"영양만점 소고기와 6가지 야채의 든든함.<br>신선한 야채와 고단백질 소고기까지 부담없이 한번에 섭취할 수 있는 균형 잡힌 최고의 한 그릇을 자랑합니다.<br>부드럽고 담백한 맛의 균형까지, 어느것 하나 빠지지 않는 완벽한 식사를 추천합니다.",
            b_txt4:"먹기 좋게 간 소고기를 풍성하게 담아<br>고단백질 영양소가 듬뿍 우러나도록 푹 끓여내었습니다.<br>진하게 우러난 담백하고 고소한<br>부담없이 즐길 수 있는 든든한 영양식을 만나보세요.",
            b_txt6:"감자, 양파, 애호박, 표고버섯, 당근에 슈퍼푸드 브로콜리까지<br>다양하게 들어간 신선한 야채로 균형 잡힌 영양소가 듬뿍!<br>하나 하나 챙겨 먹기 어려운 각종 채소들<br>한번에 섭취하는 가장 가벼운 방법.<br>풍성한 재료에서 우러나온 자연 그대로의 건강한 맛까지<br>쉽고 맛있게 내 몸을 위한 건강한 시간을 즐기세요."},
    ];

    var item = searchItem(item_id);
    var html = '';

    $("#item_img2").attr("src", "img/"+item.src);

    function searchItem(data){
        for(var i in pdt){
            if(data == pdt[i].id){
                return pdt[i];
            }
        }
    }
        html=`
        <div class="container">
            <div class="inner" id="container2">
                <div class="detail_box1">
                    <div class="box1_inner">
                        <div class="img2">
                            <img src="" id="item_img2" class="" alt="">
                        </div>
                        <div class="info">
                            <div class="title2">
                                <div class="best">BEST</div>
                                <div class="name2"></div>
                                <div class="desc"></div>
                                <div class="price_box">
                                    <span id="price2"></span>원
                                </div>
                                <div class="search_box">
                                    <div class="btnMy">MY메뉴</div>
                                    <div class="btnInfo">원산지정보</div>
                                </div>
                            </div>
                            <div class="summary"></div>
                            <div class="view_box">
                                <div class="view1">
                                    <img src="" id="item_viewOne">
                                </div>
                                <div class="view1">
                                    <img src="" id="item_viewTwo">
                                </div>
                            </div>
                            <div class="sns_icon">
                                <div class="fb"></div>
                                <div class="link"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        $('#container2').html(html);

    return html;
};