import React from 'react';
import './Ziller.css';
import Slideshow4 from './Slider4';

const Ziller = () => {
    return (
        <div className="z_wrap">
            <div className="z_content">
                <div className="z_header">
                    <div className="z_header_cover">
                        <div className="z_h_inner">
                            <div className="z_mark"></div>
                            <div className="z_txt">기쁠 때도, 슬플 때도</div>
                            <div className="z_txt2">지르고 싶은 순간, 질러</div>
                            <div className="z_social"></div>
                        </div>
                    </div>
                </div>
                <div className="z_sec_wrap">
                    <div className="z_sec1">
                        <div className="z_sec1_wrap">
                            <div className="z_sec1_list">
                                <div className="z_sec1_item">
                                    <div className="z_sec1_item2">
                                        <strong>언제나 즐거운 스낵<br/>브랜드</strong>
                                        <span>
                                        지르고 싶은 순간, 질러!
                                        입안에서 펼쳐지는 유쾌한 즐거움으로 스트레스를 날려보세요.
                                        </span>
                                    </div>
                                </div>
                                <div className="z_sec1_item">
                                    <div className="z_sec1_item2">
                                        <strong>새로운 시도와 도전</strong>
                                        <span>
                                            질러는 기존의 방식을 벗어나 새로운 
                                            원물, 새로운 컨셉의 상품 출시를 위해 
                                            늘 끊임없이 시도하고 도전합니다.
                                        </span>
                                    </div>
                                </div>
                                <div className="z_sec1_item">
                                    <div className="z_sec1_item2">
                                        <strong>우수한 품질관리</strong>
                                        <span>
                                            자사 육포공장을 갖추고 있어 
                                            품질관리가 우수하며, 믿고 먹을 수 
                                            있는 식품을 위해 늘 좋은 품질의 원재료를 사용합니다.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="z_sec2">
                        <div className="z_sec2_wrap">
                            <div className="z_story_list">
                                <div className="z_story_box">
                                    <div className="z_story_box_inner">
                                        <div className="z_story_img">
                                            <div className="z_story_txt">
                                                <div className="z_story_txt2">
                                                    <span>브랜드 스토리</span>
                                                    <p>지르고 싶은 질러</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="z_story_box2">
                                    <div className="z_story_box_inner">
                                        <div className="z_story_img2">
                                            <div className="z_story_txt3">
                                                <div className="z_story_txt2">
                                                    <span>우수한 품질</span>
                                                    <p>믿고 먹을 수 있는 질러</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="z_sec4">
                        <div className="z_sec4_wrap">
                            <Slideshow4></Slideshow4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ziller;
