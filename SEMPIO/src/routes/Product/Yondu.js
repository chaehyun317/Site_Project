import React, { useState, useEffect } from 'react';
import './Yondu.css';
import { CustomSlider } from '../../component';
import SLIDE_IMAGE from '../../jsons/slideImg.json';

const Yondu = () => {
    const [slide, setSlide] = useState([]);

    useEffect(() => {
        const list = SLIDE_IMAGE.filter(item => item.type === 'yondu');
        setSlide(list);
    }, []);

    return (
        <div className="y_wrap">
            <div className="y_content">
                <div className="y_header">
                    <div className="y_header_cover">
                        <div className="y_h_inner">
                            <div className="y_mark"></div>
                            <div className="y_txt">쉽게 맛있게 건강하게 이렇게 쉬운 연두요리법</div>
                            <div className="y_txt2">요리에센스 연두</div>
                            <div className="y_social"></div>
                        </div>
                    </div>
                </div>
                <div className="y_sec_wrap">
                    <div className="y_sec1">
                        <div className="y_sec1_wrap">
                            <div className="y_sec1_list">
                                <div className="y_sec1_item">
                                    <div className="y_sec1_item2">
                                        <strong>재료의 참맛이<br/>살아나야<br/>진짜 맛있는 요리</strong>
                                        <span>과다한 양념과 조미료에 길들여져 진짜 
                                            맛있는 맛의 의미를 잊고 있었다면, 
                                            요리에센스 연두로 재료의 진정한 
                                            참맛을 느껴보세요.
                                        </span>
                                    </div>
                                </div>
                                <div className="y_sec1_item">
                                    <div className="y_sec1_item2">
                                        <strong>순식물성<br/>콩발효 에센스</strong>
                                        <span>우리 맛의 근본인 장(醬), 그 맛의 
                                            핵심은 바로 콩 발효입니다. 70년 
                                            발효연구 노하우의 집약체, 연두는 
                                            콩을 100% 자연 발효한 콩 발효 액과 
                                            국산 야채 우린 물로 만들었습니다.
                                        </span>
                                    </div>
                                </div>
                                <div className="y_sec1_item">
                                    <div className="y_sec1_item2">
                                        <strong>요리를 요리답게</strong>
                                        <span>에센스가 피부 본연의 아름다움을 
                                            살려주듯 요리에센스 연두는 재료의 
                                            참맛을 살려 요리 본연의 맛을 
                                            찾아줍니다.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="y_sec2">
                        <div className="y_sec2_wrap">
                            <div className="y_story_list">
                                <div className="y_story_box">
                                    <div className="y_story_box_inner">
                                        <div className="y_story_img">
                                            <div className="y_story_txt">
                                                <div className="y_story_txt2">
                                                    <span>브랜드 스토리</span>
                                                    <p>재료의 참맛을 살리는</p>
                                                    <p>요리에센스 연두</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="y_story_box2">
                                    <div className="y_story_box_inner">
                                        <div className="y_story_img2">
                                            <div className="y_story_txt3">
                                                <div className="y_story_txt2">
                                                    <span>연두 바로알기</span>
                                                    <div className="txt_w">연두는 어떻게</div>
                                                    <div className="txt_w">만들어지나요?</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="y_story_box3">
                                    <div className="y_story_box_inner">
                                        <div className="y_story_img3">
                                            <div className="y_story_txt3">
                                                <div className="y_story_txt2">
                                                    <span>연두 / 연두 순 / 연두 우리콩 / 연두 청양초</span>
                                                    <p>연두,재료와 조리법에</p>
                                                    <p>따라 선택하세요!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="y_sec3">
                        <div className="y_sec3_wrap">
                            <div className="y_sec3_box">
                                <div className="y_sec3_box2">
                                    <div className="y_sec3_box_inner ye1">
                                        <div className="y_sec3_box3">
                                            <div className="y_sec3_box4">
                                                연두와 궁합이 잘 맞는,<br/>재료가 주인공이 되는 <br/>레시피 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="y_sec3_box2">
                                    <div className="y_sec3_box_inner ye2">
                                        <div className="y_sec3_box3">
                                            <div className="y_sec3_box4">
                                                아이도,혼자도,가족도<br/>모두가 즐거운<br/>레시피 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="y_sec3_box2">
                                    <div className="y_sec3_box_inner ye3">
                                        <div className="y_sec3_box3">
                                            <div className="y_sec3_box4">
                                                스페인 알리시아 및<br/>국내외 셰프들의<br/>연두레시피 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="y_sec4">
                        <div className="y_sec4_wrap">
                            <CustomSlider label={'canSlider'} imgs={slide}  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Yondu;