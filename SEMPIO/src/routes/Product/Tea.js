import React, { useState, useEffect } from 'react';
import './Tea.css';
import { CustomSlider } from '../../component';
import SLIDE_IMAGE from '../../jsons/slideImg.json';

const Tea = () => {
    const [slide, setSlide] = useState([]);

    useEffect(() => {
        const list = SLIDE_IMAGE.filter(item => item.type === 'tea');
        setSlide(list);
    }, []);

    return (
        <div className="t_wrap">
            <div className="t_content">
                <div className="t_header">
                    <div className="t_header_cover">
                        <div className="t_h_inner">
                            <div className="t_mark"></div>
                            <div className="t_txt">자연의 순수함을 그대로 담은 차</div>
                            <div className="t_txt2">순작</div>
                            <div className="t_social"></div>
                        </div>
                    </div>
                </div>
                <div className="t_sec_wrap">
                    <div className="t_sec1">
                        <div className="t_sec1_wrap">
                            <div className="t_sec1_list">
                                <div className="t_sec1_item">
                                    <div className="t_sec1_item2">
                                        <strong>깨끗한 자연</strong>
                                        <span>
                                            깨끗한 자연에서 온 원재료를 엄선해 담았습니다.
                                        </span>
                                    </div>
                                </div>
                                <div className="t_sec1_item">
                                    <div className="t_sec1_item2">
                                        <strong>최소한의 가공</strong>
                                        <span>
                                            원재료의 맛과 향을 그대로 담기 위해 
                                            최소한의 가공을 지향합니다.
                                        </span>
                                    </div>
                                </div>
                                <div className="t_sec1_item">
                                    <div className="t_sec1_item2">
                                        <strong>쉼을 주는 한 잔</strong>
                                        <span>
                                            순한 맛과 향으로 편안한 휴식을 드립니다.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="t_sec2">
                        <div className="t_sec2_wrap">
                            <div className="t_story_list">
                                <div className="t_story_box">
                                    <div className="t_story_box_inner">
                                        <div className="t_story_img">
                                            <div className="t_story_txt3">
                                                <div className="t_story_txt2">
                                                    <span>브랜드 스토리</span>
                                                    <p>자연의 순수함을</p>
                                                    <p>그대로 담은 차 순작</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="t_story_box2">
                                    <div className="t_story_box_inner">
                                        <div className="t_story_img2">
                                            <div className="t_story_txt">
                                                <div className="t_story_txt2">
                                                    <span>원물차 이야기</span>
                                                    <p>자연의 모습 그대로</p>
                                                    <p>담은 순작 원물차</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="t_sec4">
                        <div className="t_sec4_wrap">
                            <CustomSlider label={'canSlider'} imgs={slide}  />
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Tea;
