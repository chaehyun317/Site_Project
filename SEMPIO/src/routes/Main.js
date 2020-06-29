import React from 'react';
import './Main.css';


const Main = () => {

    return (
        <div className="m_wrap">
            <div className="m_banner">
                <div className="m_banner_ani"></div>
            </div>
            <div className="m_manu">
                <ul className="m_list">
                    <li className="m_item m_1">
                        <div className="m_txt">
                            <span className="m_sub">샘표의 비전</span>
                            <h2 className="m_sub2">우리맛으로</h2>
                            <h2 className="m_sub2">세계인을 즐겁게</h2>
                        </div>
                    </li>
                    <li className="m_item m_2">
                        <div className="m_2inner">
                            <div className="m_txt">
                                <span className="m_sub">우리맛 연구</span>
                                <h2 className="m_sub3">우리 식문화 발전을 위한</h2>
                                <h2 className="m_sub3">샘표 우리맛 연구</h2>
                            </div>
                        </div>
                    </li>
                    <li className="m_item m_3">
                        <div className="m_txt">
                            <div className="m_sub">샘표 70년</div>
                            <h2 className="m_sub2">우리 맛을 한결같이 지켜온</h2>
                            <h2 className="m_sub2" >샘표의 역사는 곧 우리 음식</h2>
                            <h2 className="m_sub2">문화의 역사입니다</h2>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="m_news">
                <div className="news_left">
                    <div className="left_box">
                        <h2 className="left_txt">공지사항</h2>
                        <h2 className="left_txt2">2020년 3월 샘표마켓 우수 후기 발표</h2>
                        <div className="left_icon"></div>
                    </div>
                </div>
                <div className="news_right">
                    <div className="left_box">
                        <h2 className="left_txt">이벤트</h2>
                        <h2 className="left_txt2">샘표 유기농참기름 출시 기념 20% 할인 이벤트</h2>
                        <div className="left_icon"></div>
                    </div>
                </div>
            </div>
            <div className="m_box">
                <div className="box_list mb_1">
                    <div className="mb_txt">
                        <div className="m_sub">우리맛 브랜드</div>
                        <h2 className="mb_sub">요리에센스 연두</h2>
                        <h2 className="mb_sub2">재료의 참맛을 살리는</h2>
                        <h2 className="mb_sub2">요리에센스 연두</h2>
                    </div>
                </div>
                <div className="box_list mb_2">
                    <div className="mb_txt">
                        <div className="m_sub">우리맛 체험</div>
                        <div className="mb_sub3">우리맛으로 더 맛있어지는 봄,</div>
                        <div className="mb_sub3">새미네 집밥 레시피 이벤트</div>
                    </div>
                </div>
                <div className="box_list mb_3">
                    <div className="mb_txt">
                        <div className="m_sub">우리맛 공간</div>
                        <div className="mb_sub3">쉽게 맛있게 건강하게</div>
                        <div className="mb_sub3">샘표 우리맛 클래스</div>
                        <div className="mb_sub4">요리 초보부터</div>
                        <div className="mb_sub4">아이 편식 고민 많은 부모님까지!</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
