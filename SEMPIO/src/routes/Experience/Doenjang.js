import React from 'react';
import './Doenjang.css';

const Doenjang = () => {
    return (
        <div className="d_wrap">
            <div className="d_wrap_inner">
                <div className="d_content">
                    <div className="d_sec1">
                        <div className="d_sec1_banner"></div>
                    </div>
                    <div className="d_sec2">
                        <div className="d_sec2_wrap">
                            <div className="d_sec2_inner">
                                <div className="d_sec2_txt">세살 먹은 된장, 여든까지 간다</div>
                                <div className="d_sec2_txt2">
                                    샘표 된장학교는 2006년 샘표 60주년을 맞이하여 기획된 샘표 우리맛 캠페인의 일환으로, ‘우리 장(醬), 우리 발효에 
                                    대한 가치와 장(醬) 담그는 방법에 대한 강의’로 구성된 1일 교육 프로그램입니다. 우리 전통 발효 음식의 소중함과 
                                    필요성을 알리고, 우리 식문화의 깊은 이해와 올바른 식습관의 중요성에 대해 전달하고자 합니다. 우리 장(醬), 우리 
                                    발효에 대해 제대로 경험하고 싶다면, 샘표 된장학교와 함께하세요.
                                </div>
                                <ul className="d_sec2_result">
                                    <li>
                                        <div className="result_thumb de1"></div>
                                        <h3 className="result_txt">교육 참가자</h3>
                                        <div className="result_num"><b>19,860</b>명</div>
                                    </li>
                                    <li>
                                        <div className="result_thumb de2"></div>
                                        <h3 className="result_txt">된장학교</h3>
                                        <div className="result_num"><b>566</b>회</div>
                                    </li>
                                    <li>
                                        <div className="result_thumb de3"></div>
                                        <h3 className="result_txt">된장학교에서 만든 메주 수</h3>
                                        <div className="result_num"><b>765</b>장</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="d_sec3">
                        <div className="d_sec3_wrap">
                            <div className="d_sec3_inner">
                                <h2 className="d_sec3_txt">
                                    <span>프로그램</span>
                                </h2>
                                <ul className="d_sec3_list">
                                    <li className="d_sec3_item">
                                        <div className="d_item_inner">
                                            <div className="d_item_thumb de4"></div>
                                            <div className="d_item_cont">
                                                <h4 className="d_item_txt">샘표 된장학교</h4>
                                                <div className="d_more">자세히보기</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="d_sec3_item">
                                        <div className="d_item_inner">
                                            <div className="d_item_thumb de5"></div>
                                            <div className="d_item_cont">
                                                <h4 className="d_item_txt">샘표 찾아가는 된장학교</h4>
                                                <div className="d_more">자세히보기</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="d_sec4">
                        <div className="d_sec4_wrap">
                            <div className="d_sec4_inner">
                                <div className="d_sec4_txt">
                                    <span>참여신청</span>
                                </div>
                                <div className="d_sec4_box">
                                    <div className="d_sec4_img"></div>
                                    <div className="d_sec4_txt2">샘표 찾아가는 된장학교</div>
                                    <div className="d_sec4_txt3">[단체] 샘표 찾아가는 된장학교
                                        <div className="state state-ing">접수중</div>
                                    </div>
                                    <div className="d_sec4_txt4">신청 기간: 상시접수</div>
                                    <div className="d_sec4_btn">자세히 보기</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doenjang;
