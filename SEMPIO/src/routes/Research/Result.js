import React, { useState, useEffect } from 'react';
import './Result.css';
import Item3 from '../../component/Item3';

const ADD = 10;
const NITIAL_VALUE = 6;
const TOTAL = [
	{"id":310, "type":57, "name":"머위", "desc":"까끌까끌한 식감, 풋사과 껍질의 산뜻함, 강한 쓴맛의 봄나물", "sub":"봄나물", "src":"item310"},
    {"id":311, "type":57, "name":"세발나물", "desc":"강한 짠맛과 여린 풀 향, 아삭한 식감이 느껴지는 봄나물", "sub":"봄나물", "src":"item311"},
    {"id":312, "type":57, "name":"원추리", "desc":"옥수수의 고소함과 대파의 단맛이 조화로운 봄나물", "sub":"봄나물", "src":"item312"},
    {"id":313, "type":57, "name":"명이", "desc":"감칠맛과 단맛,파/마늘의 향미가 느껴지는 봄나물", "sub":"봄나물", "src":"item313"},
    {"id":314, "type":57, "name":"곰취", "desc":"후추의 매운맛과 쓴맛,풋사과와 박하향이 매력적인 봄나물", "sub":"봄나물", "src":"item314"},
    {"id":315, "type":57, "name":"방풍나물", "desc":"박하의 화한 향,단맛,레몬의 상큼함이 느껴지는 봄나물", "sub":"봄나물", "src":"item315"},
    {"id":316, "type":57, "name":"쑥", "desc":"국화과 계열 꽃향의 한국 대표 허브,거친 식감의 봄나물", "sub":"봄나물", "src":"item316"},
    {"id":317, "type":57, "name":"비름나물", "desc":"물비린내,젖은 흙향,쌉싸름함,부드러운 식감의 봄나물", "sub":"봄나물", "src":"item317"},
    {"id":318, "type":57, "name":"가죽나물", "desc":"양고기와 같은 감칠맛,후추의 알싸함을 느낄 수 있는 봄나물", "sub":"봄나물", "src":"item318"},
    {"id":319, "type":58, "name":"톳", "desc":"오독한 식감의 약한 짠맛과 쓴맛이 특징적인 식재료", "sub":"해조류", "src":"item319"},
    {"id":320, "type":58, "name":"파래", "desc":"바다향,패류향과 풀향,시트러스향이 조화로운 식재료", "sub":"해조류", "src":"item320"},
    {"id":321, "type":59, "name":"피망/파프리카", "desc":"수분감과 아삭함이 풍부한 단고추", "sub":"열매채소", "src":"item321"},
    {"id":322, "type":60, "name":"당근", "desc":"시트러스한 향미와 수분감이 특징적인 식재료", "sub":"뿌리채소", "src":"item322"},
    {"id":323, "type":58, "name":"김", "desc":"감칠맛 나는 멸치 향의 검은 반도체", "sub":"해조류", "src":"item323"},
    {"id":324, "type":58, "name":"미역", "desc":"미세먼지 때려잡는 생선풍미의 쫀쫀한 초록 풀", "sub":"해조류", "src":"item324"},
    {"id":325, "type":58, "name":"다시마", "desc":"요리의 베이스 단짠 바다채소", "sub":"해조류", "src":"item325"},
    {"id":326, "type":61, "name":"부추", "desc":"몸에 활력을 불어 넣어주는 우리맛 허브", "sub":"잎채소", "src":"item326"},
    {"id":327, "type":62, "name":"새송이버섯", "desc":"쫄깃한 식감,감칠맛과 단맛이 풍부한 버섯", "sub":"버섯", "src":"item327"},
    {"id":328, "type":62, "name":"양송이버섯", "desc":"육수를 머금은 크리미한 버섯", "sub":"버섯", "src":"item328"},
    {"id":329, "type":62, "name":"표고버섯", "desc":"나무에서 자라는 알싸한 향신채같은 버섯", "sub":"버섯", "src":"item329"},
    {"id":330, "type":62, "name":"느타리버섯", "desc":"감칠맛이 뛰어난 촉촉한 버섯", "sub":"버섯", "src":"item330"},
    {"id":331, "type":62, "name":"팽이버섯", "desc":"아삭한 식감이 재미있는 버섯", "sub":"버섯", "src":"item331"},
    {"id":332, "type":57, "name":"냉이", "desc":"입안 가득 퍼지는 독특한 향이 매력적인 봄나물", "sub":"봄나물", "src":"item332"},
    {"id":333, "type":57, "name":"달래", "desc":"아삭함과 쌉싸름함이 매력적인 봄나물", "sub":"봄나물", "src":"item333"},
    {"id":334, "type":57, "name":"참나물", "desc":"사계절 내내 향긋한 나물", "sub":"봄나물", "src":"item334"},
    {"id":335, "type":57, "name":"취나물", "desc":"쌉싸름함과 풋풋한 향으로 입맛돋우는 봄나물", "sub":"봄나물", "src":"item335"},
    {"id":336, "type":57, "name":"돌나물", "desc":"신선함이 톡톡 터지는 초록 봄나물", "sub":"봄나물", "src":"item336"},
    {"id":337, "type":57, "name":"두릅", "desc":"맛과 영양이 가득한 봄나물의 왕", "sub":"봄나물", "src":"item337"},
    {"id":338, "type":57, "name":"봄동", "desc":"가장 먼저 봄을 알리는 달보드레한 봄나물", "sub":"봄나물", "src":"item338"},
    {"id":339, "type":57, "name":"씀바귀", "desc":"매력적인 쓴맛 뒤의 단맛을 즐기는 봄나물", "sub":"봄나물", "src":"item339"},
    {"id":340, "type":59, "name":"가지", "desc":"스펀지 구조의 독특한 과육을 갖고있는 채소", "sub":"열매채소", "src":"item340"},
    {"id":341, "type":59, "name":"오이", "desc":"상쾌함과 고소함이 공존하는 대표적인 여름 채소", "sub":"열매채소", "src":"item341"},
    {"id":342, "type":63, "name":"양파", "desc":"건강한 단맛,천연 설탕 채소", "sub":"줄기채소", "src":"item342"},
    {"id":343, "type":61, "name":"양배추", "desc":"요리별로 부위를 고르면 더 맛있는 채소", "sub":"잎채소", "src":"item343"},
    {"id":344, "type":60, "name":"마늘", "desc":"매운맛 속 단맛과 감칠맛,한국의 필수 향신채소", "sub":"뿌리채소", "src":"item344"},
    {"id":345, "type":60, "name":"감자", "desc":"요리하기 쉬운 듯,어려운 전분 덩어리", "sub":"뿌리채소", "src":"item345"},
    {"id":346, "type":59, "name":"애호박", "desc":"버터의 부드러운 식감과 특징가진 채소", "sub":"열매채소", "src":"item346"},
    {"id":347, "type":59, "name":"고추", "desc":"풋고추부터 고춧가루까지 변신의 귀재", "sub":"열매채소", "src":"item347"},
    {"id":348, "type":60, "name":"무", "desc":"진한 감칠맛을 품고 있는 '땅속의 사골'", "sub":"뿌리채소", "src":"item348"},
    {"id":349, "type":63, "name":"대파", "desc":"알싸하고 청량한 단맛을 내는 향신 채소", "sub":"줄기채소", "src":"item349"},
    {"id":350, "type":61, "name":"배추", "desc":"시원한 감칠맛을 살리는 '밭의 다시마'", "sub":"잎채소", "src":"item350"}
];


const Result = () => {
	const [items, setItems] = useState([]);
    const [view, setView] = useState(NITIAL_VALUE);

    const more = () => {
        setView(view + ADD);
    }

    useEffect(() => {
        const piece = TOTAL.filter((item, index) => index < view );
        setItems(piece);
	}, [view]);
	
    
    return (
        <div className="res_wrap">
            <div className="res_content">
                <div className="res_banner"></div>
                <div className="res_sec">
                    <div className="res_sec_wrap">
                        <div className="res_list_wrap">
                            <div className="res_list">
                                <div className="res_item">
                                    {items.map((item, idx) => (
                                        <div className="res_item2">
                                            <Item3 item={item}/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {view < TOTAL.length ? (
                                <h1 className="res_more" onClick={more}>+</h1>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Result;