import React from 'react';

const CustomProduct = () => {
    return (
        <div className="p_wrap">
            <div className="p_content">
                <div className="p_header">
                    <div className="p_h_cover">
                        <div className="p_h_inner">
                            <div className="p_mark"></div>
                            <div className="p_txt"></div>
                            <div className="p_txt2"></div>
                        </div>
                    </div>
                </div>
                <div className="p_sec_wrap">
                    <div className="p_sec1">
                        <div className="p_sec1_wrap">
                            <div className="p_sec1_list">
                                <div className="p_sec1_item">
                                    <div className="p_sec1_item2">
                                        <strong></strong>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="p_sec1_item">
                                    <div className="p_sec1_item2">
                                        <strong></strong>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="p_sec1_item">
                                    <div className="p_sec1_item2">
                                        <strong></strong>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p_sec2">
                        <div className="p_sec2_wrap">
                            <div className="p_story_list">
                                <div className="p_story_box">
                                    <div className="p_story_box_inner">
                                        <div className="p_story_img">
                                            <div className="p_story_txt">
                                                <div className="p_story_txt2">
                                                    <span></span>
                                                    <p></p>
                                                    <p></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p_story_box2">
                                    <div className="p_story_box_inner">
                                        <div className="p_story_img2">
                                            <div className="p_story_txt3">
                                                <div className="p_story_txt2">
                                                    <span></span>
                                                    <div className="txt_w"></div>
                                                    <div className="txt_w"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p_story_box3">
                                    <div className="p_story_box_inner">
                                        <div className="p_story_img3">
                                            <div className="p_story_txt3">
                                                <div className="p_story_txt2">
                                                    <span></span>
                                                    <p></p>
                                                    <p></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p_sec3">
                        <div className="p_sec3_wrap">
                            <div className="p_sec3_box">
                                <div className="p_sec3_box2">
                                    <div className="p_sec3_box_inner ye1">
                                        <div className="p_sec3_box3">
                                            <div className="p_sec3_box4"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p_sec3_box2">
                                    <div className="p_sec3_box_inner ye2">
                                        <div className="p_sec3_box3">
                                            <div className="p_sec3_box4"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p_sec3_box2">
                                    <div className="p_sec3_box_inner ye3">
                                        <div className="p_sec3_box3">
                                            <div className="p_sec3_box4"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p_sec4">
                        <div className="p_sec4_wrap">
                            <CustomSlider label={'canSlider'} imgs={slide}  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomProduct;