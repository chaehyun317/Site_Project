import React from 'react';
import './Main.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Main = () => {
    return (
        <BrowserRouter>
                <div className="main_banner">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide slide1"></div>
                            {/* <div className="swiper-slide slide2"></div> */}
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
                <div className="event_bannerwrap">
                    <div className="e_bannerinner1 eimg1">
                        <b>뭉쳐야 싸다!</b>
                        <div>낱개보다 싸게싸게</div>
                        <div>나눠쓰고 쟁겨두고 쓰기 좋은 묶음상품 특가전!</div>
                    </div>
                    <div className="e_bannerinner2 eimg2">
                        <b>하나 사면 하나 더!</b>
                        <div>아트박스 보조배터리를 구입하시면</div>
                        <div>1개를 더 드립니다.</div>
                    </div>
                </div>
                <div className="bestwrap">
                    <div className="besttitle">
                        BEST ITEM
                        <span className="more"></span>
                    </div>
                    <div className="bestlist">
                        <ul>
                            <li>
                                <div className="b_item">
                                    <span className="b_number num1">01</span>
                                    <span className="b_bg"></span>
                                    <div className="best_item itemimage1"></div>
                                    <span className="b_name">카키 웰시코기 13인치 노트북파우치 (37002785)</span>
                                    <span className="b_price1">25,000원</span>
                                </div>
                            </li>
                            <li>
                                <div className="b_item">
                                    <span className="b_number">02</span>
                                    <span className="b_bg"></span>
                                    <div className="best_item itemimage2"></div>
                                    <span className="b_name">신학기 노트 700 SET (10권) (네이비시바 외 9종) (03008126)</span>
                                    <span className="b_price1 red">4,900원 [30%]</span>
                                </div>
                            </li>
                            <li>
                                <div className="b_item">
                                    <span className="b_number">03</span>
                                    <span className="b_bg"></span>
                                    <div className="best_item itemimage3"></div>
                                    <span className="b_name">나뭇잎새 모그쿠션 (34008214)</span>
                                    <span className="b_price1">15,000원</span>
                                </div>
                            </li>
                            <li>
                                <div className="b_item">
                                    <span className="b_number">04</span>
                                    <span className="b_bg"></span>
                                    <div className="best_item itemimage4"></div>
                                    <span className="b_name">하늘그라데이션 6공다이어리 기획 세트(A6) (04009554)</span>
                                    <span className="b_price1 red">8,500원 [51%]</span>
                                </div>
                            </li>
                            <li>
                                <div className="b_item">
                                    <span className="b_number">05</span>
                                    <span className="b_bg"></span>
                                    <div className="best_item itemimage5"></div>
                                    <span className="b_name">무선고데기_블랙올리버 (26017514)</span>
                                    <span className="b_price1">39,000원</span>
                                </div>
                            </li>
                            <li>
                                <div className="b_item">
                                    <span className="b_number">06</span>
                                    <span className="b_bg"></span>
                                    <div className="best_item itemimage6"></div>
                                    <span className="b_name">빅슬롯 머신 (53009087)</span>
                                    <span className="b_price1">29,900원</span>
                                </div>
                            </li>
                            <li>
                                <div className="b_item">
                                    <span className="b_number">07</span>
                                    <span className="b_bg"></span>
                                    <div className="best_item itemimage7"></div>
                                    <span className="b_name">실리콘필통 브라운시바 (17003861)</span>
                                    <span className="b_price1">13,500원</span>
                                </div>
                            </li>
                            <li>
                                <div className="b_item">
                                    <span className="b_number">08</span>
                                    <span className="b_bg"></span>
                                    <div className="best_item itemimage8"></div>
                                    <span className="b_name">라이트 다색 볼펜 시바 (15007003)</span>
                                    <span className="b_price1">2,500원</span>
                                </div>
                            </li>
                            <li>
                                <div className="b_item">
                                    <span className="b_number">09</span>
                                    <span className="b_bg"></span>
                                    <div className="best_item itemimage9"></div>
                                    <span className="b_name">[팝마트코리아 정품 공식판매처] 몰리-스쿨라이프 시리즈_랜덤(26019817)</span>
                                    <span className="b_price1">11,000원</span>
                                </div>
                            </li>
                            <li>
                                <div className="b_item">
                                    <span className="b_number">10</span>
                                    <span className="b_bg"></span>
                                    <div className="best_item itemimage10"></div>
                                    <span className="b_name">프레임우드시계 대 우드 (14002925)</span>
                                    <span className="b_price1">19,900원</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="newwrap">
                    <div className="newtitle">
                        NEW ARRIVAL
                        <span className="more"></span>
                    </div>
                    <div className="newlist">
                        <div className="new_inner n_item1">
                            <b>진짜 빛나는 펜을 보여줄게!</b>
                            워터스틱 라이트볼펜 (2 Types)
                        </div>
                        <div className="new_inner n_item2">
                            <b>예쁘게 뽑아먹어요</b>
                            캔디크레인 (2 Types)
                        </div>
                        <div className="new_inner2 n_item3">
                            <b>종류별로 착착착!</b>
                            인덱스 도큐먼트 파일 (4 Types)
                        </div>
                    </div>
                </div>
                <div className="epwrap">
                    <div className="ep_bg"></div>
                    <div className="eplist">
                        <ul className="ep_list">
                            <li>
                                <div className="ep_inner">
                                    <div className="ep_item1"></div>
                                    <div className="ep_name">미니금고 저금통 아끼면돈된다 (53010113)</div>
                                    <div className="b_price1">19,000원</div>
                                </div>
                            </li>
                            <li>
                                <div className="ep_inner">
                                    <div className="ep_item2"></div>
                                    <div className="ep_name">미니 슬롯머신 저금통 (53008614)</div>
                                    <div className="b_price1">14,9000원</div>
                                </div>
                            </li>
                            <li>
                                <div className="ep_inner">
                                    <div className="ep_item3"></div>
                                    <div className="ep_name">미니금고_민트 올리버 (53008554)</div>
                                    <div className="b_price1">15,000원</div>
                                </div>
                            </li>
                            <li>
                                <div className="ep_inner">
                                    <div className="ep_item4"></div>
                                    <div className="ep_name">고양이저금통그레이프그레이(20007785)</div>
                                    <div className="b_price1">12,900원</div>
                                </div>
                            </li>
                            <li>
                                <div className="ep_inner">
                                    <div className="ep_item5"></div>
                                    <div className="ep_name">노래하는 저금통 핑크 (53009704)</div>
                                    <div className="b_price1">19,900원</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="designwrap"></div>
                <div className="chwrap">
                    <div className="menu_ch"></div>
                    <div className="list_ch"></div>
                    <div className="about_ch">
                        <div className="about_ch_inner"></div>
                    </div>
                </div>
                <div className="artwrap">
                    <div className="art_inner"></div>
                </div>
                <div className="inwrap">
                    <div className="in_list">
                        <div className="in_title">
                        INSTAGRAM 
                        <span className="in_title2">@artbox_kr_official</span> 
                        </div>
                        <ul className="in_ul">
                            <li>
                                <div className="in_inner in_item1"></div>
                            </li>
                            <li>
                                <div className="in_inner in_item2"></div>
                            </li>
                            <li>
                                <div className="in_inner in_item3"></div>
                            </li>
                            <li>
                                <div className="in_inner in_item4"></div>
                            </li>
                            <li>
                                <div className="in_inner in_item5"></div>
                            </li>
                            <li>
                                <div className="in_inner in_item6"></div>
                            </li>
                        </ul>
                    </div>
                    <div className="in_list2">
                        <div className="in_title">EVENT</div>
                        <div className="in_event">
                            <div className="in_event_inner">
                                <div className="in_event_inner2"></div>
                                <div className="in_txt">
                                    이벤트 기간
                                    <div>2020-03-23 ~ 2020-04-05</div>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tbwrap">
                    <div className="tb1wrap">
                        <div className="tb1">
                            <h1>ARTBOX MEMBERSHIP</h1>
                            <h2>할인에 적립까지-
                                <div>아트박스의 모든 브랜드 혜택을 한 번에!</div>
                            </h2>
                            <h3>아트박스 통합 멤버십, 지금 바로 가입하세요~</h3>
                        </div>
                    </div>
                    <div className="tb2wrap">
                        <div className="tb2">
                            <h1>WALL PAPER</h1>
                            <h2>
                                <span className="iso"></span>
                                <span className="android"></span>
                                <span className="desktop"></span>
                            </h2>
                        </div>
                    </div>
                    <div className="tb3wrap">
                        <div className="tb3">
                            <h1>ARTBOX
                                <div>OFFLINE STORE</div>
                            </h1>
                        </div>
                    </div>
                </div>
        </BrowserRouter>
    );
    
};

export default Main;
