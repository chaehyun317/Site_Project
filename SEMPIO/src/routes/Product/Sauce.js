import React, { useState, useEffect } from 'react';
import './Sauce.css';
import { CustomSlider } from '../../component';
import SLIDE_IMAGE from '../../jsons/slideImg.json';

const Sauce = () => {
    const [slide, setSlide] = useState([]);

    useEffect(() => {
        const list = SLIDE_IMAGE.filter(item => item.type === 'sauce');
        setSlide(list);
    }, []);

    return (
        <div className="s_wrap">
            <div className="s_content">
                <div className="s_header">
                    <div className="s_header_cover">
                        <div className="s_h_inner">
                            <div className="s_mark"></div>
                            <div className="s_txt">우리 한식의 감칠맛을 살리는</div>
                            <div className="s_txt2">샘표 기본양념</div>
                            <div className="s_social"></div>
                        </div>
                    </div>
                </div>
                <div className="s_sec_wrap">
                    <div className="s_sec1">
                        <div className="s_sec1_wrap">
                            <div className="s_sec1_list">
                                <div className="s_sec1_item">
                                    <div className="s_sec1_item2">
                                        <strong>샘표만의<br/>특별한 철학</strong>
                                        <span>
                                            항상 최고의 품질을 유지하려는 샘표의 
                                            철학으로, 제대로 만들고 제대로 담았습니다.
                                        </span>
                                    </div>
                                </div>
                                <div className="s_sec1_item">
                                    <div className="s_sec1_item2">
                                        <strong>요리의 기본이라는<br/>신념으로</strong>
                                        <span>
                                            기본의 중요성을 알기에, 안심하고 
                                            먹을 수 있도록 샘표의 노하우를 사용해 만들었습니다.
                                        </span>
                                    </div>
                                </div>
                                <div className="s_sec1_item">
                                    <div className="s_sec1_item2">
                                        <strong>자연의 맛<br/>그대로</strong>
                                        <span>
                                            원재료부터 하나 하나 엄선해 본연의 
                                            맛을 살리고, 요리의 풍미를 더합니다.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="s_sec2">
                        <div className="s_sec2_wrap">
                            <div className="s_story_list">
                                <div className="s_story_box">
                                    <div className="s_story_box_inner">
                                        <div className="s_story_img">
                                            <div className="s_story_txt3">
                                                <div className="s_story_txt2">
                                                    <span>대단한 용기로 변치 않는 맛과 향</span>
                                                    <p>갓 짠 기름의 고소함을</p>
                                                    <p>끝까지 지켜주는</p>
                                                    <p>일편단심 참기름·들기름</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="s_story_box2">
                                    <div className="s_story_box_inner">
                                        <div className="s_story_img2">
                                            <div className="s_story_txt3">
                                                <div className="s_story_txt2">
                                                    <span>알수록 특별한 샘표소금</span>
                                                    <p>한여름에 채염한</p>
                                                    <p>진짜 이유</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="s_sec3">
                        <div className="s_sec3_wrap">
                            <div className="s_sec3_box">
                                <div className="s_sec3_box2">
                                    <div className="s_sec3_box_inner se1">
                                        <div className="s_sec3_box3">
                                            <div className="s_sec3_box4">
                                                알수록 더욱 특별한<br/>일편단심 기름
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="s_sec3_box2">
                                    <div className="s_sec3_box_inner se2">
                                        <div className="s_sec3_box3">
                                            <div className="s_sec3_box4">
                                                궁금한 이야기 소금 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="s_sec3_box2">
                                    <div className="s_sec3_box_inner se3">
                                        <div className="s_sec3_box3">
                                            <div className="s_sec3_box4">
                                                다양한 식초의 활용
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="s_sec4">
                    <div className="s_sec4_wrap">
                        <CustomSlider label={'canSlider'} imgs={slide}  />
                    </div>
                </div>  
            </div>
        </div>
    );
};

export default Sauce;
