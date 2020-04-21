import React from 'react';
import './Week.css';

const Week = () => {
    return (
        <div className="w_wrap">
            <div className="w_wrap_inner">
                <div className="w_content">
                    <div className="w_sec1">
                        <div className="w_sec1_banner"></div>
                    </div>
                    <div className="w_sec2">
                        <div className="w_sec2_wrap">
                            <div className="w_sec2_inner">
                                <div className="w_sec2_txt">
                                    <p>우리맛 위크 온라인 캠페인</p>
                                    <div className="w_sec2_txt2">우리맛 위크 온라인 캠페인<br/>새미네 집밥</div>
                                    <div className="w_sec2_txt3">기간 : 2020년 4월 3일(금) ~ 4월 23일(목) / 샘표 인스타그램(@sempioculinary)</div>
                                    <div className="w_sec2_txt3">
                                        우리맛연구 결과를 활용한 다양한 집밥 레시피를 따라하고,나의 SNS계정에 자랑해주세요!참여자 전원에게 샘표 집밥 
                                        꾸러미는 물론, 100만원 마켓 상품권의 기회까지!
                                    </div>
                                    <div className="w_sec2_txt3">(자세한 사항은 '접수 중인 프로그램 보기' 클릭 또는 샘표 인스타그램 방문 후, 이벤트 게시물 참조)</div>
                                </div>
                                <ul className="w_sec2_result">
                                    <li>
                                        <div className="result_thumb we1"></div>
                                        <h3 className="result_txt">참가자</h3>
                                        <div className="result_num"><b>942</b>명</div>
                                    </li>
                                    <li>
                                        <div className="result_thumb we2"></div>
                                        <h3 className="result_txt">함께한 사람들</h3>
                                        <div className="result_num"><b>82</b>명</div>
                                    </li>
                                    <li>
                                        <div className="result_thumb we3"></div>
                                        <h3 className="result_txt">우리맛 연구 식재료</h3>
                                        <div className="result_num"><b>55</b>개</div>
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

export default Week;