import React from 'react';
import './Ricevinega.css';
import Slideshow3 from './Slider3';

const Ricevinega = () => {
    return (
        <div className="r_wrap">
            <div className="r_content">
                <div className="r_header">
                    <div className="r_header_cover">
                        <div className="r_h_inner">
                            <div className="r_mark"></div>
                            <div className="r_txt">건강한 백년을 위한 좋은 습관</div>
                            <div className="r_txt2">백년동안</div>
                            <div className="r_social"></div>
                        </div>
                    </div>
                </div>
                <div className="r_sec_wrap">
                    <div className="r_sec1">
                        <div className="r_sec1_wrap">
                            <div className="r_sec1_list">
                                <div className="r_sec1_item">
                                    <div className="r_sec1_item2">
                                        <strong>건강한 재료에<br/>정성과 기술을 더한<br/>건강 식품 브랜드</strong>
                                        <span>
                                            자연에서 온 건강한 재료를 안심하고 
                                            간편하게 먹을 수 있도록 제품으로 만들었습니다.
                                        </span>
                                    </div>
                                </div>
                                <div className="r_sec1_item">
                                    <div className="r_sec1_item2">
                                        <strong>평생 건강을<br/>챙길 수 있게<br/>도와주는 동반자</strong>
                                        <span>
                                            소비자가 걱정하는 건강문제를 함께 
                                            고민하고 해결할 수 있게 도와줍니다.
                                        </span>
                                    </div>
                                </div>
                                <div className="r_sec1_item">
                                    <div className="r_sec1_item2">
                                        <strong>샘표의 70년 기술로<br/>믿을 수 있는<br/>품질과 효능</strong>
                                        <span>
                                            샘표의 노하우로 누구나 안심하고 먹을 
                                            수 있는 제품을 만들기 위해 노력합니다.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="r_sec2">
                        <div className="r_sec2_wrap">
                            <div className="r_story_list">
                                <div className="r_story_box">
                                    <div className="r_story_box_inner">
                                        <div className="r_story_img">
                                            <div className="r_story_txt">
                                                <div className="r_story_txt2">
                                                    <span>브랜드 스토리</span>
                                                    <p>건강한 백년을 위한</p>
                                                    <p>첫 걸음 백년동안</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="r_story_box2">
                                    <div className="r_story_box_inner">
                                        <div className="r_story_img2">
                                            <div className="r_story_txt3">
                                                <div className="r_story_txt2">
                                                    <span>흑초 이야기</span>
                                                    <div className="txt_w">식초의 왕,</div>
                                                    <div className="txt_w">흑초</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="r_story_box3">
                                    <div className="r_story_box_inner">
                                        <div className="r_story_img3">
                                            <div className="r_story_txt3">
                                                <div className="r_story_txt2">
                                                    <span>백년 건강의 비밀</span>
                                                    <p>마이크로발효™ 건강즙</p>
                                                    <p>왜 먹어야 할까요?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="r_sec4">
                        <div className="r_sec4_wrap">
                            <Slideshow3></Slideshow3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ricevinega;
