import React, { useState, useEffect } from 'react';
import './Noodles.css';
import { CustomSlider } from '../../component';
import SLIDE_IMAGE from '../../jsons/slideImg.json';


const Noodles = () => {
    const [slide, setSlide] = useState([]);

    useEffect(() => {
        const list = SLIDE_IMAGE.filter(item => item.type === 'Noodles');
        setSlide(list);
    }, []);

    return (
        <div className="n_wrap">
            <div className="n_content">
                <div className="n_header">
                    <div className="n_header_cover">
                        <div className="n_h_inner">
                            <div className="n_mark"></div>
                            <div className="n_txt">소박하게 즐기던 따뜻하고 맛있는 그때 그 맛</div>
                            <div className="n_txt2">오리지날 1977 샘표 국수</div>
                            <div className="n_social"></div>
                        </div>
                    </div>
                </div>
                <div className="n_sec_wrap">
                    <div className="n_sec1">
                        <div className="n_sec1_wrap">
                            <div className="n_sec1_list">
                                <div className="n_sec1_item">
                                    <div className="n_sec1_item2">
                                        <strong>오리지날 면 브랜드</strong>
                                        <span>
                                            1977년부터 제대로 된 국수맛을 내기 
                                            위해 연구하고 쌓아온 최적의 요리 노하우를 담았습니다.
                                        </span>
                                    </div>
                                </div>
                                <div className="n_sec1_item">
                                    <div className="n_sec1_item2">
                                        <strong>그때 그 마음 그대로</strong>
                                        <span>
                                            모두가 배불리 먹기를 바라는 마음에 
                                            시작한 샘표국시, 건강하고 맛있는 면 
                                            요리를 즐길 수 있도록 그때 그 마음 
                                            그대로 만듭니다.
                                        </span>
                                    </div>
                                </div>
                                <div className="n_sec1_item">
                                    <div className="n_sec1_item2">
                                        <strong>다양한 면 요리를<br/>손쉽게</strong>
                                        <span>
                                            우리나라 고유의 다양한 면 요리를 
                                            보다 손쉽고 맛있게 즐길 수 있도록 도와줍니다.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="n_sec2">
                        <div className="n_sec2_wrap">
                            <div className="n_story_list">
                                <div className="n_story_box">
                                    <div className="n_story_box_inner">
                                        <div className="n_story_img">
                                            <div className="n_story_txt">
                                                <div className="n_story_txt2">
                                                    <span>제대로 40년</span>
                                                    <p>정성을 다해 제대로</p>
                                                    <p>만든 국수, 샘표국시</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="n_story_box2">
                                    <div className="n_story_box_inner">
                                        <div className="n_story_img2">
                                            <div className="n_story_txt3">
                                                <div className="n_story_txt2">
                                                    <span>그때 그 추억</span>
                                                    <div className="txt_w">국수 한 그릇에 담긴</div>
                                                    <div className="txt_w">그때 그 추억</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="n_story_box3">
                                    <div className="n_story_box_inner">
                                        <div className="n_story_img3">
                                            <div className="n_story_txt3">
                                                <div className="n_story_txt4">
                                                    <span>샘표국시의 비밀</span>
                                                    <div className="txt_w">옛 방식에서 배운</div>
                                                    <div className="txt_w">면발의 맛</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="n_sec4">
                    <div className="n_sec4_wrap">
                        <CustomSlider label={'canSlider'} imgs={slide}  />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Noodles;
