import React from 'react';
import './Ganjang.css';
import Slideshow11 from './Slider11';

const Ganjang = () => {
    return (
        <div className="g_wrap">
            <div className="g_content">
                <div className="g_header">
                    <div className="g_header_cover">
                        <div className="g_h_inner">
                            <div className="g_mark"></div>
                            <div className="g_txt">우리 맛의 기본, 간장</div>
                            <div className="g_txt2">대한민국 1등 간장 샘표 간장</div>
                            <div className="g_social"></div>
                        </div>
                    </div>
                </div>
                <div className="g_sec_wrap">
                    <div className="g_sec1">
                        <div className="g_sec1_wrap">
                            <div className="g_sec1_list">
                                <div className="g_sec1_item">
                                    <div className="g_sec1_item2">
                                        <strong>원료부터<br/>제대로 선별하고</strong>
                                        <span>
                                            맛있는 간장을 만들기 위한 첫걸음은 
                                            까다로운 원료 선별입니다. 100여가지 
                                            품질검사를 통과한 콩, 청정지역의 
                                            맑은 물, 깨끗한 소금이 모여 샘표 간장이 됩니다.
                                        </span>
                                    </div>
                                </div>
                                <div className="g_sec1_item">
                                    <div className="g_sec1_item2">
                                        <strong>제대로 발효하여</strong>
                                        <span>
                                            메주 발효로 제대로, 저온 발효로 
                                            제대로, 유산균 발효로 제대로, 효모 
                                            발효로 제대로, 숙성 발효로 제대로
                                        </span>
                                    </div>
                                </div>
                                <div className="g_sec1_item">
                                    <div className="g_sec1_item2">
                                        <strong>제대로 만듭니다</strong>
                                        <span>
                                            '내 가족이 먹지 못하는 것은 만들지도 
                                            팔지도 않는다'는 창업주의 정신 
                                            그대로 발효에 대한 샘표의 고집과 신념은 남다릅니다.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="g_sec2">
                        <div className="g_sec2_wrap">
                            <div className="g_story_list">
                                <div className="g_story_box">
                                    <div className="g_story_box_inner">
                                        <div className="g_story_img">
                                            <div className="g_story_txt">
                                                <div className="g_story_txt2">
                                                    <span>샘표 간장 최초의 기록</span>
                                                    <p>70년 동안 변치 않는 1등</p>
                                                    <p>샘표 간장</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="g_story_box2">
                                    <div className="g_story_box_inner">
                                        <div className="g_story_img2">
                                            <div className="g_story_txt">
                                                <div className="g_story_txt2">
                                                    <span>간장 이야기</span>
                                                    <p>궁금한 이야기,</p>
                                                    <p>간장</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="g_sec3">
                        <div className="g_sec3_wrap">
                            <div className="g_sec3_box">
                                <div className="g_sec3_box2">
                                    <div className="g_sec3_box_inner ge1">
                                        <div className="g_sec3_box3">
                                            <div className="g_sec3_box4">
                                                간장의 종류와<br/>용도별 간장<br/>고르기
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="g_sec3_box2">
                                    <div className="g_sec3_box_inner ge2">
                                        <div className="g_sec3_box3">
                                            <div className="g_sec3_box4">
                                                샘표 간장의<br/>특별한 만능간장<br/>황금 비율
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="g_sec3_box2">
                                    <div className="g_sec3_box_inner ge3">
                                        <div className="g_sec3_box3">
                                            <div className="g_sec3_box4">
                                                요리를 더 맛있게<br/>향신간장<br/>활용 레시피
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="g_sec4">
                    <div className="g_sec4_wrap">
                        <Slideshow11></Slideshow11>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Ganjang;
