$(document).ready(function(){
    var pdt = [
        {id:148, type: 1, name:"백설", price: 8000, src:"img148.jpg", best:true, new:false, desc: "순백의 정성", viewOne:"img148.jpg", viewTwo:"img148_2.jpg", detailImg:"img148_3.jpg", 
            summary: "오랜 시간 끓여낸 순백의 정성. 깊고 진한 한우 사골 국물에 구운<br>밀면의 쫄깃함과 고소함이 어우러졌습니다.", half1:"img148_4.jpg", half2:"img148_5.jpg",
            b_txt1:"순백의 정성<br><strong>백설</strong>",
            b_txt2:"오랜 시간 끓여낸 순백의 정성.<br>깊고 진한 한우 사골 국물에 구운 밀면의<br>쫄깃함과 고소함이 어우러졌습니다.<br>속 깊은 곳까지 든든한 백설을 만나보세요.",},
        {id:149, type: 1, name:"백설(특)", price: 11000, src:"img149.jpg", best:false, new:false, desc: "순백의 정성", viewOne:"img149.jpg", viewTwo:"img149_2.jpg", detailImg:"img149_3.jpg", 
            summary: "오랜 시간 끓여낸 순백의 정성. 깊고 진한 한우 사골 국물에 구운<br>밀면의 쫄깃함과 고소함이 어우러졌습니다.", half1:"img148_4.jpg", half2:"img148_5.jpg",
            b_txt1:"순백의 정성<br><strong>백설(특)</strong>",
            b_txt2:"오랜 시간 끓여낸 순백의 정성.<br>깊고 진한 한우 사골 국물에 구운 밀면의<br>쫄깃함과 고소함이 어우러졌습니다.<br>속 깊은 곳까지 든든한 백설을 만나보세요.",},
        {id:150, type: 1, name:"백설면", price: 8000, src:"img150.jpg", best:false, new:false, desc: "깔끔 담백 국물과 고소한 밀면의 만남", viewOne:"img150.jpg", viewTwo:"img150_2.jpg", detailImg:"img150_3.jpg", 
            summary: "오랜 시간 끓인 순백의 정성, 깊고 진한 한우 사골로부터 태어난<br>순백의 빛깔. 여기에 구운 밀면의 쫄깃함과 고소함을 더했습니다.", half1:"img148_4.jpg", half2:"img150_4.jpg",
            b_txt1:"깔끔 담백 국물과 고소한 밀면의 만남<br><strong>백설면</strong>", 
            b_txt2:"오랜 시간 끓인 순백의 정성.<br>깊고 진한 한우 사골로부터 태어난 순백의 빛깔,<br>여기에 구운 밀면의 쫄깃함과 고소함을 더했습니다.<br>부드러운 국물과 아삭한 숙주에 고소한 우삼겹, 탱글탱글 밀면의 조화,<br>백설면만의 솔직 담백한 맛을 만나보세요.",},
        {id:151, type: 1, name:"백설만", price: 8000, src:"img151.jpg", best:false, new:false, desc: "깔끔 담백 국물과 육즙 가득 만두의 조화", viewOne:"img151.jpg", viewTwo:"img151_2.jpg", detailImg:"img151_3.jpg", 
            summary: "오랜 시간 끓여낸 순백의 정성. 깊고 진한 한우 사골로부터 태어난<br>순백의 빛깔, 뽀얀 국물이 육즙 가득한 만두에 배여 더 다채로운 맛을<br>즐기실 수 있습니다.", half1:"img148_4.jpg", half2:"img151_4.jpg",
            b_txt1:"깔끔 담백 국물과 육즙 가득 만두의 조화<br><strong>백설만</strong>",
            b_txt2:"오랜 시간 끓여낸 순백의 정성.<br>깊고 진한 한우 사골로부터 태어난 순백의 빛깔,<br>뽀얀 국물이 육즙 가득한 만두에 배여<br>더 다채로운 맛을 즐기실 수 있습니다.<br>쫀득쫀득한 떡국떡이 더해져 식감까지 특별한 새로운 설렁탕을 만나세요.",},
        {id:152, type: 1, name:"도가니보양설", price: 15000, src:"img152.jpg", best:false, new:false, desc: "기운 돋우는 활력 보양식", viewOne:"img152.jpg", viewTwo:"img152_2.jpg", detailImg:"img152_3.jpg", 
            summary: "깊고 진한 한우 사골 육수에 탱글탱글 탄력있는 쫀득한 도가니가<br>듬뿍!", half1:"img152_2.jpg", half2:"img152_4.jpg",
            b_txt1:"기운 돋우는 활력 보양식<br><strong>도가니보양설</strong>",
            b_txt2:"깊고 진한 한우 사골 육수에 탱글탱글 탄력있는 쫀득한 도가니가 듬뿍!<br>백하고 깔끔한 국물에 구수하고 진한 맛이 더해져 맛은 물론 영양까지 풍요로운 완벽한 보양설렁탕으로 활력을 선물합니다.<br>입맛은 물론 기운까지 돋우는 보양식을 만나보세요.",},
        {id:153, type: 2, name:"홍설", price: 8500, src:"img153.jpg", best:false, new:false, desc: "입맛 당기는 매콤한 매력", viewOne:"img153.jpg", viewTwo:"img153_2.jpg", detailImg:"img153_3.jpg", 
            summary: "청양고추와 본설만의 특제 양념으로 탄생한 입맛 당기는 매콤한<br>매력에 풍덩!", half1:"img153_4.jpg", half2:"img148_5.jpg",
            b_txt1:"입맛 당기는 매콤한 매력<br><strong>홍설</strong>", 
            b_txt2:"청양고추와 본설만의 특제 양념으로 탄생한 입맛 당기는 매콤한 매력에 풍덩!<br>깊고 진한 여운으로 얼큰 칼칼 속 풀이에 딱 좋은<br>색다른 맛의 세계에 빠져보세요.",},
        {id:154, type: 2, name:"홍설(특)", price: 11500, src:"img154.jpg", best:false, new:false, desc: "입맛 당기는 매콤한 매력", viewOne:"img154.jpg", viewTwo:"img154_2.jpg", detailImg:"img154_3.jpg", 
            summary: "청양고추와 본설만의 특제 양념으로 탄생한 입맛 당기는 매콤한<br>매력에 풍덩!", half1:"img153_4.jpg", half2:"img148_5.jpg",
            b_txt1:"입맛 당기는 매콤한 매력<br><strong>홍설(특)</strong>",
            b_txt2:"청양고추와 본설만의 특제 양념으로 탄생한 입맛 당기는 매콤한 매력에 풍덩!<br>깊고 진한 여운으로 얼큰 칼칼 속 풀이에 딱 좋은<br>색다른 맛의 세계에 빠져보세요.",},
        {id:155, type: 2, name:"홍설면", price: 8500, src:"img155.jpg", best:true, new:false, desc: "얼큰 칼칼 육수와 쫄깃 탱글 밀면의 만남", viewOne:"img155.jpg", viewTwo:"img155_2.jpg", detailImg:"img155_3.jpg", 
            summary: "청양고추와 본설만의 특제 양념으로 탄생한 맛있게 매콤한 육수와<br>쫄깃한 밀면의 조화!", half1:"img153_4.jpg", half2:"img150_4.jpg",
            b_txt1:"얼큰 칼칼 육수와 쫄깃 탱글 밀면의 만남<br><strong>홍설면</strong>",
            b_txt2:"청양고추와 본설만의 특제 양념으로 탄생한 맛있게 매콤한 육수와 쫄깃한 밀면의 조화!<br>짬뽕, 라멘보다 깊고 진한 국물과 아삭한 숙주, 고소한 우삼겹에 탱탱한 밀면이 만나 이루는 색다른 맛의 세계에 빠져보세요.<br>속을 확 풀어주는 얼큰 칼칼한 깊은 맛의 매력을 만나실 수 있습니다.",},
        {id:156, type: 2, name:"홍설만", price: 8500, src:"img156.jpg", best:false, new:false, desc: "얼큰 칼칼한 육수에 육즙 촉촉한 만두가 풍덩!", viewOne:"img156.jpg", viewTwo:"img156_2.jpg", detailImg:"img156_3.jpg", 
            summary: "청양고추와 본설만의 특제 양념으로 탄생한 맛있게 매콤한 육수에<br>육즙 풍부한 만두가 만나 최고의 감칠맛을 탄생시켰습니다.", half1:"img153_4.jpg", half2:"img151_4.jpg",
            b_txt1:"얼큰 칼칼한 육수에 육즙 촉촉한 만두가 풍덩!<br><strong>홍설만</strong>",
            b_txt2:"청양고추와 본설만의 특제 양념으로 탄생한 맛있게 매콤한 육수에 육즙 풍부한 만두가 만나 최고의 감칠맛을 탄생시켰습니다.<br>얼큰한 국물과 고소한 만두의 조화로 더욱 풍부한 맛을 경험해보세요.<br>속까지 확 풀리는 얼큰 칼칼한 감칠맛을 즐기실 수 있습니다.",},
        {id:157, type: 3, name:"황설", price: 8500, src:"img157.jpg", best:false, new:false, desc: "진한 풍미의 깊은 감칠맛", viewOne:"img157.jpg", viewTwo:"img157_2.jpg", detailImg:"img157_3.jpg", 
            summary: "최적의 비율로 최고의 조화를! 3가지 발효 된장으로 구수하고 진한<br>풍미를 자랑합니다.", half1:"img157_4.jpg", half2:"img148_5.jpg",
            b_txt1:"진한 풍미의 깊은 감칠맛<br><strong>황설</strong>",
            b_txt2:"최적의 비율로 최고의 조화를!<br>3가지 발효 된장으로 구수하고 진한 풍미를 자랑합니다.<br>입안 가득 퍼지는 풍미와 감칠맛을 자랑하는<br>부담없이 속 편안한 한 그릇을 즐겨 보세요.",},
        {id:158, type: 3, name:"황설(특)", price: 11500, src:"img158.jpg", best:false, new:false, desc: "진한 풍미의 깊은 감칠맛", viewOne:"img158.jpg", viewTwo:"img158_2.jpg", detailImg:"img158_3.jpg", 
            summary: "최적의 비율로 최고의 조화를! 3가지 발효 된장으로 구수하고 진한<br>풍미를 자랑합니다.", half1:"img157_4.jpg", half2:"img148_5.jpg",
            b_txt1:"진한 풍미의 깊은 감칠맛<br><strong>황설(특)</strong>",
            b_txt2:"최적의 비율로 최고의 조화를!<br>3가지 발효 된장으로 구수하고 진한 풍미를 자랑합니다.<br>입안 가득 퍼지는 풍미와 감칠맛을 자랑하는<br>부담없이 속 편안한 한 그릇을 즐겨 보세요.",},
        {id:159, type: 3, name:"황설면", price: 8500, src:"img159.jpg", best:false, new:false, desc: "구수한 된장과 고소한 밀면의 환상궁합", viewOne:"img159.jpg", viewTwo:"img159_2.jpg", detailImg:"img159_3.jpg", 
            summary: "최적의 비율로 최고의 조화를! 3가지 발효 된장으로 진한 풍미를<br>자랑하는 구수한 육수와 쫄깃한 구운 밀면의 고소함이 만났습니다.", half1:"img157_4.jpg", half2:"img150_4.jpg",
            b_txt1:"구수한 된장과 고소한 밀면의 환상궁합<br><strong>황설면</strong>",
            b_txt2:"최적의 비율로 최고의 조화를!<br>3가지 발효 된장으로 진한 풍미를 자랑하는 구수한 육수와 쫄깃한 구운 밀면의 고소함이 만났습니다.<br>부드러운 국물의 풍미와 아삭한 숙주, 고소한 우삼겹, 탱글탱글 밀면의 식감까지 더해진 입 안 가득 최고의 궁합을 느껴보세요.<br>부담없이 속 편안한 한 그릇을 즐겨 보세요.",},       
        {id:160, type: 3, name:"황설만", price: 8500, src:"img160.jpg", best:true, new:false, desc: "구수한 된장과 촉촉한 만두의 환상궁합", viewOne:"img160.jpg", viewTwo:"img160_2.jpg", detailImg:"img160_3.jpg", 
            summary: "최적의 비율로 최고의 조화를! 3가지 발효 된장으로 감칠맛 도는<br>구수한 육수에 육즙 가득한 만두로 고소함을 더했습니다.", half1:"img157_4.jpg", half2:"img151_4.jpg",
            b_txt1:"구수한 된장과 촉촉한 만두의 환상궁합<br><strong>황설만</strong>", 
            b_txt2:"최적의 비율로 최고의 조화를!<br>3가지 발효 된장으로 감칠맛 도는 구수한 육수에 육즙 가득한 만두로 고소함을 더했습니다.<br>부드러운 국물에 촉촉한 만두, 쫄깃한 떡국떡까지 어우러져 풍미는 물론 식감까지 다채롭습니다.<br>부담없이 속 편안한 한 그릇을 즐겨 보세요.",},          
        {id:161, type: 4, name:"황설만우삼겹곱창전골(2인)", price: 19000, src:"img161.jpg", best:false, new:true, desc: "우삼겹·양·곱창을 홍설육수로 끓여낸 얼큰하고 진한 맛", viewOne:"img161.jpg", viewTwo:"img161_2.jpg", detailImg:"img161_3.jpg", 
            summary: "우삼겹·양·곱창을 산처럼 높게 쌓아<br>매콤한 홍설육수로 진하게 끓여낸 본설 특별요리", half1:"img153_4.jpg", half2:"img161_4.jpg",
            b_txt1:"끓여야 더 진한 곱창의 맛<br><strong>우삼겹 곱창전골 (2인)</strong>",
            b_txt2:"정말 곱창을 좋아하는 분들은 알고 있어요<br>곱창은 끓여야 진짜 맛이 있다는 것을요.<br><br>쫄깃하고 고소한 곱창과 부드럽고 풍미가 좋은 우삼겹을<br>매콤한 홍설육수에 넣어 푹 끓여내면 곱창의 고소한 맛과<br>우삼겹의 풍미가 어우러져 술안주는 물론 해장용으로도<br>안성맞춤인 특별한 요리가 됩니다.<br><br>하루를 마무리하는 소중한 저녁시간<br>소중한 사람들과 본설의 우삼겹 곱창전골과 함께<br>진한 맛과 추억을 느껴보세요. ",},
        {id:162, type: 4, name:"황설만우삼겹곱창전골(3인)", price: 25000, src:"img162.jpg", best:false, new:true, desc: "우삼겹·양·곱창을 홍설육수로 끓여낸 얼큰하고 진한 맛", viewOne:"img162.jpg", viewTwo:"img162_2.jpg", detailImg:"img162_3.jpg", 
            summary: "우삼겹·양·곱창을 산처럼 높게 쌓아<br>매콤한 홍설육수로 진하게 끓여낸 본설 특별요리", half1:"img153_4.jpg", half2:"img161_4.jpg",
            b_txt1:"끓여야 더 진한 곱창의 맛<br><strong>우삼겹 곱창전골 (3인)</strong>",
            b_txt2:"정말 곱창을 좋아하는 분들은 알고 있어요<br>곱창은 끓여야 진짜 맛이 있다는 것을요.<br><br>쫄깃하고 고소한 곱창과 부드럽고 풍미가 좋은 우삼겹을<br>매콤한 홍설육수에 넣어 푹 끓여내면 곱창의 고소한 맛과<br>우삼겹의 풍미가 어우러져 술안주는 물론 해장용으로도<br>안성맞춤인 특별한 요리가 됩니다.<br><br>하루를 마무리하는 소중한 저녁시간<br>소중한 사람들과 본설의 우삼겹 곱창전골과 함께<br>진한 맛과 추억을 느껴보세요. ",},        
        {id:163, type: 4, name:"황설빼어날수육(소)", price: 20000, src:"img163.jpg", best:false, new:false, desc: "어디에도 없는 빼어난 맛", viewOne:"img163.jpg", viewTwo:"img163_2.jpg", detailImg:"img163_3.jpg", 
            summary: "사태,양지,뽈살,편육,도가니. 다양한 부위로 구성되어 더 다채로운<br>맛의 즐거움을 주는 모듬 수육!",
            b_txt1:"어디에도 없는 빼어난 맛<br><strong>빼어날수(秀)육(소)</strong>",
            b_txt2:"사태, 양지, 뽈살, 편육, 도가니.<br>다양한 부위로 구성되어 더 다채로운 맛의 즐거움을 주는 모듬 수육!<br>된장 베이스의 특제 소스를 더해 더 특별한 맛을 자랑합니다.<br>느끼함을 꽉 잡아주는 알싸한 와사비드레싱을 더한 영양부추샐러드와 곁들이면<br>술 안주로도, 별미로도 손색없는<br>어디에서도 맛볼 수 없는 빼어난 맛을 만나보실 수 있습니다.",},          
        {id:164, type: 4, name:"황설빼어날수육(대)", price: 28000, src:"img164.jpg", best:false, new:false, desc: "어디에도 없는 빼어난 맛", viewOne:"img164.jpg", viewTwo:"img164_2.jpg", detailImg:"img164_3.jpg", 
            summary: "사태,양지,뽈살,편육,도가니. 다양한 부위로 구성되어 더 다채로운<br>맛의 즐거움을 주는 모듬 수육!",
            b_txt1:"어디에도 없는 빼어난 맛<br><strong>빼어날수(秀)육(대)</strong>",
            b_txt2:"사태, 양지, 뽈살, 편육, 도가니.<br>다양한 부위로 구성되어 더 다채로운 맛의 즐거움을 주는 모듬 수육!<br>된장 베이스의 특제 소스를 더해 더 특별한 맛을 자랑합니다.<br>느끼함을 꽉 잡아주는 알싸한 와사비드레싱을 더한 영양부추샐러드와 곁들이면<br>술 안주로도, 별미로도 손색없는 어디에서도 맛볼 수 없는 빼어난 맛을 만나보실 수 있습니다.",},
        {id:165, type: 4, name:"매콤도가니", price: 18000, src:"img165.jpg", best:false, new:false, desc: "중독성 깊은 매콤 쫀득한 맛", viewOne:"img165.jpg", viewTwo:"img165_2.jpg", detailImg:"img165_3.jpg", 
            summary: "입맛 도는 매콤한 양념이 맛있게 스며든 탱글탱글 쫀득쫀득 도가니<br>볶음!",
            b_txt1:"중독성 깊은 매콤 쫀득한 맛<br><strong>매콤도가니</strong>",
            b_txt2:"입맛 도는 매콤한 양념이 맛있게 스며든 탱글탱글 쫀득쫀득 도가니 볶음!<br>와사비 드레싱과 곁들이는 파채와 부추는 감칠맛을 더해 중독성 깊은 매콤한 맛을 완성합니다.<br>고소한 맛의 구운 밀면까지 함께 하면 더욱 다채로운 맛으로 즐기실 수 있습니다.",},     
        {id:166, type: 5, name:"고추냉이갈비살덮밥", price: 9000, src:"img166.jpg", best:false, new:true, desc: "마늘갈비소스로 양념해 더욱 맛있는 맛", viewOne:"img166.jpg", viewTwo:"img166_2.jpg", detailImg:"img166_3.jpg", 
            summary: "소갈비살에 고추냉이와 마늘갈비 소스를 더해<br>맛의 어울림이 완벽한 특별한 덮밥",
            b_txt1:"마늘갈비소스로 양념해 더 맛있는<br><strong>고추냉이갈비살 덮밥</strong>",
            b_txt2:"어린아이부터 어르신까지 모두가 좋아하는 갈비<br>덮밥으로 더 맛있게 즐길 수 있다는 사실 알고 계신가요?<br><br>마늘갈비소스로 푹 재운 두툼한 갈비살을 정성스럽게 구워<br>알싸한 고추냉이와 함께 고슬고슬한 밥 위에 얹어<br>맛의 어울림이 완벽한 고추냉이갈비살 덮밥을 즐겨보세요!",},      
        {id:167, type: 5, name:"양곱창덮밥", price: 9000, src:"img167.jpg", best:false, new:true, desc: "들깨막장소스로 양념해 깔끔하고 고소한 맛", viewOne:"img167.jpg", viewTwo:"img167_2.jpg", detailImg:"img167_3.jpg", 
            summary: "푸짐한 소의 양과 곱창에 고소한 들깨막장소스를<br>더해 본설에서만 맛볼 수 있는 특제 덮밥",
            b_txt1:"들깨막장소스로 양념해 깔끔하고 고소한<br><strong>양·곱창 덮밥</strong>",
            b_txt2:"좋아하는 사람들은 없어서 못 먹는다는 양·곱창<br>덮밥으로 즐기면 더 고소하고 맛있다는 사실 알고 계신가요?<br><br>잡내가 나지 않도록 깨끗하게 씻어서 손질한 양·곱창을<br>들깨와 막장을 섞은 특별소스로 양념해 잘 지은 밥 위에 얹어<br>고소하면서도 느끼하지 않은 양·곱창 덮밥을 즐겨보세요!",},     
        {id:168, type: 6, name:"매콤명태별미면", price: 7500, src:"img168.jpg", best:false, new:true, desc: "매콤새콤한 명태회와 쫄깃한 면의 맛깔나는 만남", viewOne:"img168.jpg", viewTwo:"img168_2.jpg", detailImg:"img168_3.jpg", 
            summary: "별미소스와 쫄깃한 명태회를 버무려<br>매콤 새콤한 맛이 일품인 특별 면요리",
            b_txt1:"매콤 새콤한 맛이 별미인<br><strong>매콤명태별미면</strong>",
            b_txt2:"시간과 정성을 들여 잘 말린 명태는 쫀득쫀득한 식감으로<br>튀기지 않아 쫄깃한 구운 밀면과 찰떡궁합 입니다.<br><br>잘 말린 명태회를 본설의 특별한 양념으로 무쳐<br>쫀득하면서도 매콤새콤한 맛이 별미인<br>시원한 매콤명태별미면을 즐겨보세요!",},   
        {id:169, type: 7, name:"쭈돈불만두(3pcs)", price: 3000, src:"img169.jpg", best:false, new:false, desc: "겉은 바삭 속은 촉촉, 매콤 달콤 육즙 가득", viewOne:"img169.jpg", viewTwo:"img169_2.jpg", detailImg:"img169_3.jpg", 
            summary: "바삭바삭한 만두피 속 매콤 달콤한 육즙이 가득! 쭈꾸미와<br>돼지고기가 만나 쫄깃한 식감까지!",
            b_txt1:"겉은 바삭 속은 촉촉, 매콤 달콤 육즙 가득<br><strong>쭈돈불만두(3pcs)</strong>",
            b_txt2:"바삭바삭한 만두피 속 매콤 달콤한 육즙이 가득!<br>쭈꾸미와 돼지고기가 만나 쫄깃한 식감까지!<br>와사비 드레싱에 버무려진<br>파채와 부추는 알싸한 감칠맛을 더합니다.<br>한 번 맛보면 계속 먹고 싶은 중독성 강한 화끈한 불만두, 오직 본설에서만 만나보실 수 있습니다.",},   
        {id:170, type: 7, name:"쭈돈불만두(6pcs)", price: 5500, src:"img169.jpg", best:false, new:false, desc: "겉은 바삭 속은 촉촉, 매콤 달콤 육즙 가득", viewOne:"img170.jpg", viewTwo:"img169_2.jpg", detailImg:"img169_3.jpg", 
            summary: "바삭바삭한 만두피 속 매콤 달콤한 육즙이 가득! 쭈꾸미와<br>돼지고기가 만나 쫄깃한 식감까지!",
            b_txt1:"겉은 바삭 속은 촉촉, 매콤 달콤 육즙 가득<br><strong>쭈돈불만두(6pcs)</strong>",
            b_txt2:"바삭바삭한 만두피 속 매콤 달콤한 육즙이 가득!<br>쭈꾸미와 돼지고기가 만나 쫄깃한 식감까지!<br>와사비 드레싱에 버무려진<br>파채와 부추는 알싸한 감칠맛을 더합니다.<br>한 번 맛보면 계속 먹고 싶은 중독성 강한 화끈한 불만두, 오직 본설에서만 만나보실 수 있습니다.",},   
        {id:171, type: 7, name:"표고송이만두(3pcs)", price: 3000, src:"img171.jpg", best:false, new:false, desc: "버섯 향을 그대로 간직한 속 꽉~찬 한 입", viewOne:"img171.jpg", viewTwo:"img171_2.jpg", detailImg:"img171_3.jpg", 
            summary: "3가지의 다채로운 버섯으로 탱글탱글하고 쫄깃한 식감까지 한층<br>풍요로워진 식사를 만나보세요.",
            b_txt1:"버섯 향을 그대로 간직한 속 꽉~찬 한 입<br><strong>표고송이만두 (3pcs)</strong>",
            b_txt2:"향긋한 육즙을 간직한 표고송이만두!<br>탱글탱글 탄력있는 식감은 덤!<br>야들야들 보드라운 만두 피로 감싼 실하게 꽉 채운 만두 속.",},  
        {id:172, type: 7, name:"표고송이만두(6pcs)", price: 5500, src:"img172.jpg", best:false, new:false, desc: "버섯 향을 그대로 간직한 속 꽉~찬 한 입", viewOne:"img171.jpg", viewTwo:"img171_2.jpg", detailImg:"img171_3.jpg", 
            summary: "3가지의 다채로운 버섯으로 탱글탱글하고 쫄깃한 식감까지 한층<br>풍요로워진 식사를 만나보세요.",
            b_txt1:"버섯 향을 그대로 간직한 속 꽉~찬 한 입<br><strong>표고송이만두 (6pcs)</strong>",
            b_txt2:"향긋한 육즙을 간직한 표고송이만두!<br>탱글탱글 탄력있는 식감은 덤!<br>야들야들 보드라운 만두 피로 감싼 실하게 꽉 채운 만두 속.",},
        {id:173, type: 7, name:"둥지떡갈비", price: 5000, src:"img173.jpg", best:false, new:false, desc: "육즙 가득, 두툼한 행복", viewOne:"img173.jpg", viewTwo:"img173_2.jpg", detailImg:"img173_3.jpg", 
            summary: "씹는 맛이 살아있는 두툼한 떡갈비는베어 무는 순간 입안 가득<br>만족스런 행복감을 차오르게 합니다.",
            b_txt1:"육즙 가득, 두툼한 행복<br><strong>둥지떡갈비</strong>",
            b_txt2:"씹는 맛이 살아있는 두툼한 떡갈비는 베어 무는 순간 입안 가득 만족스런 행복감을 차오르게 합니다.<br>갈비 소스가 자작히 배여 감칠맛을 더하고 풍부한 육즙은 입 안 가득 맴도는 풍미를 가져옵니다.<br>와사비 드레싱에 버무린 영양부추샐러드는 느끼함 없이 마지막 한 입까지 즐겁게 만드는 비결입니다.<br>파마산 치즈까지 더해져 먹는 재미가 있는 특별한 떡갈비, 지금 바로 본설에서 만나보세요!",},
        {id:174, type: 7, name:"새우황태튀김", price: 6000, src:"img174.jpg", best:false, new:false, desc: "두 배의 고소함, 별미 중의 별미", viewOne:"img174.jpg", viewTwo:"img174_2.jpg", detailImg:"img174_3.jpg", 
            summary: "노릇노릇 바삭바삭 새우와 황태를 튀겨 고소함을 두 배로!",
            b_txt1:"두 배의 고소함, 별미 중의 별미<br><strong>새우황태튀김</strong>",
            b_txt2:"노릇노릇 바삭바삭 새우와 황태를 튀겨 고소함을 두 배로!<br>구운양파소스에 찍어 함께 먹으면 상큼함이 더해져 더 다채롭게 즐기실 수 있습니다.<br>설렁탕과 함께 먹어도, 맥주 안주로도 딱 좋은 본설이 자신있게 추천하는 별미 중의 별미를 만나보세요.",},
    ];
    
    var item_id = getUrlParameter('item_id');
    var item = searchItem(item_id);
    
    if(item.best){
        $('.best').addClass('On_b');
    }
    if(item.new){
        $('.new').addClass('On_n');
    }

    $("#item_img").attr("src", "img2/"+item.src);
    $(".name").html(item.name);
    $(".desc").html(item.desc);
    $("#price").html(comma(item.price));
    $(".summary").html(item.summary);
    $("#item_viewOne").attr("src", "img2/"+item.viewOne);
    $("#item_viewTwo").attr("src", "img2/"+item.viewTwo);
    $("#item_detail").attr("src", "img2/"+item.detailImg);
    $(".b_txt1").html(item.b_txt1);
    $(".b_txt2").html(item.b_txt2);

    function searchItem(data){
        for(var i in pdt){
            if(data == pdt[i].id){
                return pdt[i];
            }
        }
    }


    function getUrlParameter(key){
        var pageUrl = window.location.search.substring(1);
        var urlVariables = pageUrl.split("&");
        var parameterName;
        for(var i in urlVariables){
            parameterName = urlVariables[i].split("=");
            if(parameterName[0] === key){
                return parameterName[1];
            }
        }
    }

    function comma(num){
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
});

$(document).ready(function(){
    $(document).on('click', '.view1', function(){
        var src = $(this).children('img').attr('src');
        console.log(src);
        $('#item_img').attr('src', src);
    })
    
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
    