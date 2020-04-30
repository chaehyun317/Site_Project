import React, { useState, useEffect } from 'react';
import './Jang.css';
import { CustomSlider } from '../../component';
import SLIDE_IMAGE from '../../jsons/slideImg.json';


const Jang = () => {
    const [slide, setSlide] = useState([]);

    useEffect(() => {
        const list = SLIDE_IMAGE.filter(item => item.type === 'jang');
        setSlide(list);
    }, []);
    
    return (
        <div className="j_wrap">
            <div className="j_content">
                <div className="j_header">
                    <div className="j_header_cover">
                        <div className="j_h_inner">
                            <div className="j_mark"></div>
                            <div className="j_txt">70년 발효기술로 진짜 장(醬)맛을 찾다</div>
                            <div className="j_txt2">샘표 장류</div>
                            <div className="j_social"></div>
                        </div>
                    </div>
                </div>
                <div className="j_sec_wrap">
                    <div className="j_sec1">
                        <div className="j_sec1_wrap">
                            <div className="j_sec1_list">
                                <div className="j_sec1_item">
                                    <div className="j_sec1_item2">
                                        <strong>콩을 제일 잘 아니까<br/>발효를 제일 잘 아니까</strong>
                                        <span> 
                                            1946년부터 샘표는 된장과 간장을 
                                            만들며 70여 년간 콩발효 노하우를 
                                            쌓아왔습니다. 콩을 제일 잘 알기에 
                                            발효의 깊은 맛을 제일 잘 압니다.
                                        </span>
                                    </div>
                                </div>
                                <div className="j_sec1_item">
                                    <div className="j_sec1_item2">
                                        <strong>옛 전통에서 배워<br/>우리 장맛 제대로</strong>
                                        <span>
                                            전국의 맛있는 장을 찾아 장 맛 지도를 
                                            구축하고, 전통 절구 방식, 
                                            콩알발효비법 등 전통에서 찾은 장맛의 
                                            비법을 구현해 진짜 맛있는 장맛을 완성합니다.
                                        </span>
                                    </div>
                                </div>
                                <div className="j_sec1_item">
                                    <div className="j_sec1_item2">
                                        <strong>원료 하나하나<br/>깐깐하게</strong>
                                        <span>
                                            청정지역 충청북도 영동에서 전 제품을 
                                            생산합니다. 청정 지하 암반수, 7번 
                                            선별한 콩, 깨끗한 바다의 천일염 등 
                                            모든 재료를 엄격한 원칙으로 고릅니다.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="j_sec2">
                        <div className="j_sec2_wrap">
                            <div className="j_story_list">
                                <div className="j_story_box">
                                    <div className="j_story_box_inner">
                                        <div className="j_story_img">
                                            <div className="j_story_txt">
                                                <div className="j_story_txt2">
                                                    <span>백일된장 이야기</span>
                                                    <p>전통에서 찾은 옛 방식을</p>
                                                    <p>연구한 진짜 맛있는</p>
                                                    <p>된장 이야기</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="j_story_box2">
                                    <div className="j_story_box_inner">
                                        <div className="j_story_img2">
                                            <div className="j_story_txt3">
                                                <div className="j_story_txt2">
                                                    <span>샘표 된장 제조과정</span>
                                                    <p>샘표 된장은 어떻게</p>
                                                    <p>만들어지나요?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="j_story_box3">
                                    <div className="j_story_box_inner">
                                        <div className="j_story_img3">
                                            <div className="j_story_txt3">
                                                <div className="j_story_txt2">
                                                    <span>나에게 꼭 맞는 된장 찾기</span>
                                                    <p>나에게 맞는 샘표 된장으로</p>
                                                    <p>다양하고 맛있게 요리하세요.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="j_sec2_2">
                        <div className="j_sec2_wrap2">
                            <div className="j_story_list2">
                                <div className="j_story_box4">
                                    <div className="j_story_box_inner">
                                        <div className="j_story_img4">
                                            <div className="j_story_txt3">
                                                <div className="j_story_txt2">
                                                    <span>오늘의 테마 레시피</span>
                                                    <p>눈과 입이 즐거운</p>
                                                    <p>4색 된장 쌈밥</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="j_story_box4">
                                    <div className="j_story_box_inner">
                                        <div className="j_story_img5">
                                            <div className="j_story_txt3">
                                                <div className="j_story_txt2">
                                                    <span>비빔장 활용 레시피</span>
                                                    <p>새콤달콤 입맛 돋우는</p>
                                                    <p>별미 요리</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="j_sec4">
                    <div className="j_sec4_wrap">
                        <CustomSlider label={'canSlider'} imgs={slide}  />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jang;