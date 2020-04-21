import React from 'react';
import './Fontana.css';
import Slideshow2 from './Slider2';

const Fontana = () => {
    return (
        <div className="f_wrap">
            <div className="f_content">
                <div className="f_header">
                    <div className="f_header_cover">
                        <div className="f_h_inner">
                            <div className="f_mark"></div>
                            <div className="f_txt">맛으로 떠나는 여행</div>
                            <div className="f_txt2">폰타나</div>
                            <div className="f_social"></div>
                        </div>
                    </div>
                </div>
                <div className="f_sec_wrap">
                    <div className="f_sec1">
                        <div className="f_sec1_wrap">
                            <div className="f_sec1_list">
                                <div className="f_sec1_item">
                                    <div className="f_sec1_item2">
                                        <strong>식문화의 원천,<br/>샘을 찾다</strong>
                                        <span>
                                            폰타나는 각 나라의 '샘'을 찾아가는 
                                            여행을 통해, 그 나라의 역사와 문화를 
                                            담고 있는 고유의 음식문화를 찾아가고 
                                            있습니다.
                                        </span>
                                    </div>
                                </div>
                                <div className="f_sec1_item">
                                    <div className="f_sec1_item2">
                                        <strong>세계 각 나라의<br/>전통의 맛을 담다</strong>
                                        <span>
                                            폰타나는 세계 각 지역의 '진짜 맛'을 
                                            경험할 수 있도록 엄선된 원재료를 
                                            사용하고 지역별 정통 레시피를 
                                            응용하여 '정통의 맛'을 담아냅니다.
                                        </span>
                                    </div>
                                </div>
                                <div className="f_sec1_item">
                                    <div className="f_sec1_item2">
                                        <strong>본고장의 맛을<br/>우리 식탁에 전하다</strong>
                                        <span>
                                            여행의 추억과 감성을 그대로 느끼며
                                            간편하게 현지의 맛을 우리의 식탁에서 
                                            즐길 수 있도록 본고장의 맛은 물론 
                                            음식문화까지 전하고자 합니다.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="f_sec2">
                        <div className="f_sec2_wrap">
                            <div className="f_story_list">
                                <div className="f_story_box">
                                    <div className="f_story_box_inner">
                                        <div className="f_story_img">
                                            <div className="f_story_txt">
                                                <div className="f_story_txt2">
                                                    <span>브랜드 스토리</span>
                                                    <p>맛으로 떠나는 여행</p>
                                                    <p>폰타나</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="f_story_box2">
                                    <div className="f_story_box_inner">
                                        <div className="f_story_img2">
                                            <div className="f_story_txt3">
                                                <div className="f_story_txt2">
                                                    <span>맛으로 떠나는 이탈리아</span>
                                                    <p>폰타나 맛으로</p>
                                                    <p>이탈리아를 사랑하다</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="f_story_box3">
                                    <div className="f_story_box_inner">
                                        <div className="f_story_img3">
                                            <div className="f_story_txt3">
                                                <div className="f_story_txt2">
                                                    <span>식재료 이야기</span>
                                                    <p>궁금한 이야기,</p>
                                                    <p>발사믹</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="f_sec4">
                        <div className="f_sec4_wrap">
                            <Slideshow2></Slideshow2>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Fontana;
