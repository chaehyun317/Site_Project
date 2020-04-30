import React, { useState, useEffect } from 'react';
import './Can.css';
import { CustomSlider } from '../../component';
import SLIDE_IMAGE from '../../jsons/slideImg.json';

const Can = () => {
    const [slide, setSlide] = useState([]);

    useEffect(() => {
        const list = SLIDE_IMAGE.filter(item => item.type === 'can');
        setSlide(list);
    }, []);

    return(
        <div className="can_wrap">
            <div className="can_content">
                <div className="can_header">
                    <div className="can_header_cover">
                        <div className="can_h_inner">
                            <div className="can_mark"></div>
                            <div className="can_txt">언제 어디서나 우리맛을 느낄 수 있도록</div>
                            <div className="can_txt2">SINCE 1976 샘표 통조림</div>
                            <div className="can_social"></div>
                        </div>
                    </div>
                </div>
                <div className="can_sec_wrap">
                    <div className="can_sec1">
                        <div className="can_sec1_wrap">
                            <div className="can_sec1_list">
                                <div className="can_sec1_item">
                                    <div className="can_sec1_item2">
                                        <strong>원칙을 지켜 제대로</strong>
                                        <span>
                                            가장 맛있는 제철의 좋은 원료만을 엄선해 제대로 만듭니다.
                                        </span>
                                    </div>
                                </div>
                                <div className="can_sec1_item">
                                    <div className="can_sec1_item2">
                                        <strong>40년의 비법으로</strong>
                                        <span>
                                            1976년부터 제대로 된 맛을 담기 위해 
                                            연구하고 쌓아온 최적의 요리 노하우를 담았습니다.
                                        </span>
                                    </div>
                                </div>
                                <div className="can_sec1_item">
                                    <div className="can_sec1_item2">
                                        <strong>간편하게 즐기는한식</strong>
                                        <span>
                                            집에서도, 야외에서도 쉽고 간편한 
                                            요리법으로 한식을 즐길 수 있도록 도와줍니다.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="can_sec2">
                        <div className="can_sec2_wrap">
                            <div className="can_story_list">
                                <div className="can_story_box">
                                    <div className="can_story_box_inner">
                                        <div className="can_story_img">
                                            <div className="can_story_txt3">
                                                <div className="can_story_txt2">
                                                    <span>제대로 40년</span>
                                                    <p>안전한 원료를 정직하게</p>
                                                    <p>담은 샘표 통조림 40년</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="can_story_box2">
                                    <div className="can_story_box_inner">
                                        <div className="can_story_img2">
                                            <div className="can_story_txt">
                                                <div className="can_story_txt2">
                                                    <span>통조림 바로알기</span>
                                                    <p>궁금한 이야기,</p>
                                                    <p>통조림</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="can_story_box3">
                                    <div className="can_story_box_inner">
                                        <div className="can_story_img3">
                                            <div className="can_story_txt">
                                                <div className="can_story_txt2">
                                                    <span>양념이 들어 있어 실패할 걱정 없이</span>
                                                    <p>요리용 통조림</p>
                                                    <p>활용 레시피</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="can_sec4">
                    <div className="can_sec4_wrap">
                        <CustomSlider label={'canSlider'} imgs={slide}  />
                    </div>
                </div>  
            </div>
        </div>
    );
};

export default Can;

