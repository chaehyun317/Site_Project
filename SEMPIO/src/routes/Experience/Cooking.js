import React from 'react';
import './Cooking.css';

const Cooking = () => {
    return (
        <div className="c_wrap">
            <div className="c_wrap_inner">
                <div className="c_content">
                    <div className="c_sec1">
                        <div className="c_sec1_banner"></div>
                    </div>
                    <div className="c_sec2">
                        <div className="c_sec2_wrap">
                            <div className="c_sec2_inner">
                                <h2 className="c_sec2_txt">
                                    <div>우리맛 연구원이 알려주는</div>
                                    <div>‘새로운 우리맛’ 이야기를 함께 나누고 체험하는 공간</div>
                                </h2>
                                <div className="c_sec2_txt2">
                                    <div>오늘의 식탁은 어떤 모습일까? 내일은, 혹은 10년 후에 우리의 식탁은 어떻게 변화할까? 요리가 우리 일상에 새로움이
                                     될 수 있도록 익숙한 맛부터 새로운 맛까지 ‘우리맛 연구’를 통해 제대로 된 우리맛을 연구하고 있습니다.</div>
                                     <div>샘표 우리맛 공간은 요리와 관련된 다양한 프로그램으로 쉽고 맛있고 건강하게</div>
                                     <div>식생활을 즐길 수 있는 방법을 공유하는 공간입니다.</div>
                                </div>
                                <div className="c_sec2_txt3">
                                    <div>우리맛공간은 2003년 오픈한 샘표 식문화연구소 ‘지미원’이</div>
                                    <div>더 다양한 프로그램과 함께 새롭게 오픈된 공간입니다.</div>
                                </div>
                                <ul className="c_sec2_result">
                                    <li>
                                        <div className="result_thumb re1"></div>
                                        <h3 className="result_txt">함께한 사람들</h3>
                                        <div className="result_num"><b>35,541</b>명</div>
                                    </li>
                                    <li>
                                        <div className="result_thumb re2"></div>
                                        <h3 className="result_txt">함께 만든 요리</h3>
                                        <div className="result_num"><b>4,703</b>가지</div>
                                    </li>
                                    <li>
                                        <div className="result_thumb re3"></div>
                                        <h3 className="result_txt">우리맛 레시피</h3>
                                        <div className="result_num"><b>1,800</b>건</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="c_sec3">
                        <div className="c_sec3_wrap">
                            <div className="c_sec3_inner">
                                <h2 className="c_sec3_txt">
                                    <span>프로그램</span>
                                </h2>
                                <ul className="c_sec3_list">
                                    <li className="sec3_item">
                                        <div className="item_inner">
                                            <div className="item_thumb pr1"></div>
                                            <div className="item_cont">
                                                <h4 className="item_txt">우리맛 미식회</h4>
                                                <div className="more">자세히보기</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="sec3_item">
                                        <div className="item_inner">
                                            <div className="item_thumb pr2"></div>
                                            <div className="item_cont">
                                                <h4 className="item_txt">우리맛 클래스</h4>
                                                <div className="more">자세히보기</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="sec3_item">
                                        <div className="item_inner">
                                            <div className="item_thumb pr3"></div>
                                            <div className="item_cont">
                                                <h4 className="item_txt">우리맛 위크</h4>
                                                <div className="more">자세히보기</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="sec3_item">
                                        <div className="item_inner">
                                            <div className="item_thumb pr4"></div>
                                            <div className="item_cont">
                                                <h4 className="item_txt">우리맛 팝업</h4>
                                                <div className="more">자세히보기</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="sec3_item">
                                        <div className="item_inner">
                                            <div className="item_thumb pr5"></div>
                                            <div className="item_cont">
                                                <h4 className="item_txt">우리맛 특강</h4>
                                                <div className="more">자세히보기</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cooking;