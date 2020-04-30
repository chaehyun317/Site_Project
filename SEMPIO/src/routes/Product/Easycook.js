import React, { useState, useEffect } from 'react';
import './Easycook.css';
import { CustomSlider } from '../../component';
import SLIDE_IMAGE from '../../jsons/slideImg.json';


const Easycook = () => {
    const [slide, setSlide] = useState([]);

    useEffect(() => {
        const list = SLIDE_IMAGE.filter(item => item.type === 'easycook');
        setSlide(list);
    }, []);

    return (
        <div className="e_wrap">
            <div className="e_content">
                <div className="e_header">
                    <div className="e_header_cover">
                        <div className="e_h_inner">
                            <div className="e_mark"></div>
                            <div className="e_txt">우리 한식 더욱 쉽고 맛있게</div>
                            <div className="e_txt2">샘표 간편·양념</div>
                            <div className="e_social"></div>
                        </div>
                    </div>
                </div>
                <div className="e_sec_wrap">
                    <div className="e_sec1">
                        <div className="e_sec1_wrap">
                            <div className="e_sec1_list">
                                <div className="e_sec1_item">
                                    <div className="e_sec1_item2">
                                        <strong>맛을 아는 샘표의<br/>70년 노하우</strong>
                                        <span>
                                            70년간 우리 장맛을 연구하며 배운 한식비법을 오롯이 담았습니다.
                                        </span>
                                    </div>
                                </div>
                                <div className="e_sec1_item">
                                    <div className="e_sec1_item2">
                                        <strong>재료부터 양념까지<br/>제대로</strong>
                                        <span>
                                            요리에 기본이 되는 장부터, 양념 
                                            재료까지 하나하나 엄선하여 만들었습니다.
                                        </span>
                                    </div>
                                </div>
                                <div className="e_sec1_item">
                                    <div className="e_sec1_item2">
                                        <strong>편하게 즐기는 우리맛</strong>
                                        <span>
                                            집에서도, 야외에서도 제대로 된 
                                            우리의 맛을 편하게 즐길 수 있도록 도와줍니다.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="e_sec2">
                        <div className="e_sec2_wrap">
                            <div className="e_story_list">
                                <div className="e_story_box">
                                    <div className="e_story_box_inner">
                                        <div className="e_story_img">
                                            <div className="e_story_txt3">
                                                <div className="e_story_txt2">
                                                    <span>당신이 기억하는 그 맛</span>
                                                    <p>본고장의 맛과 비결을</p>
                                                    <p>제대로 담은 샘표 요리양념</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="e_story_box2">
                                    <div className="e_story_box_inner">
                                        <div className="e_story_img2">
                                            <div className="e_story_txt3">
                                                <div className="e_story_txt2">
                                                    <span>요리를 더 맛있게</span>
                                                    <div className="txt_w">국시장국 활용레시피</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="e_story_box3">
                                    <div className="e_story_box_inner">
                                        <div className="e_story_img3">
                                            <div className="e_story_txt3">
                                                <div className="e_story_txt4">
                                                    <span>다양한 요리를 더 쉽게</span>
                                                    <div className="txt_w">요리 활용 레시피</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="e_sec4">
                    <div className="e_sec4_wrap">
                        <CustomSlider label={'canSlider'} imgs={slide}  />
                    </div>
                </div>  
            </div>
        </div>
    );
};

export default Easycook;
