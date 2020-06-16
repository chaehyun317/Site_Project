import React from 'react';
import './Fermentation.css';
import { AiOutlineDown } from 'react-icons/ai';
import {RenderAfterNavermapsLoaded, NaverMap, Marker} from 'react-naver-maps';

const CLIENT_ID = process.env.CLIENT_ID;

const Fermentation = () => {
    console.log(CLIENT_ID);
    return (
        <div className="fer_wrap">
            <div className="fer_wrap_inner">
                <div className="fer_content">
                    <div className="fer_sec1">
                        <div className="fer_sec1_banner"></div>
                    </div>
                    <div className="fer_sec2">
                        <div className="fer_sec2_wrap">
                            <div className="fer_sec2_txt">
                                <h2>우리 발효가 우리 건강입니다</h2>
                                <div className="fer_sec2_txt2">
                                    장(醬)은 우리 발효의 중심이자 우리 식문화의 근본입니다.알고 있었지만 제대로 몰랐던 장(醬)의 유익한 
                                    이야기,우리맛 그리고 우리 발효 속에 숨어있던 다양하고 신비로운 이야기를 들려드립니다.
                                    단순히 맛있는 장(醬)을 담그는 법이 아닌 다양한 전문가들의 견해와 깊이 있는 커리큘럼이 구성되어있어 우리 
                                    식문화 속에서의 우리 장(醬),우리 발효에 담긴 진정한 가치를 배울 수 있습니다.
                                </div>
                                <div className="fer_sec2_txt2">
                                    * 우리맛 발효학교는 격주 목요일 오후 2시~5시에 진행됩니다.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fer_sec3">
                        <div className="fer_sec3_wrap">
                            <div className="fer_sec3_inner">
                                <div className="fer_sec2_txt">
                                    <h2>주차별 커리큘럼 및 강사진 소개</h2>
                                    <div className="fer_sec3_box">
                                        <div className="fer_sec3_txt2">*강의일정 및 시간은 일부 조정될 수 있습니다.</div>
                                        <ul className="fer_sec3_list">
                                            <li className="fer_sec3_item">
                                                <div className="fer_item">
                                                    <div className="fer_item_num">
                                                        1회
                                                        <span className="fer_num_date">11월 21일</span>
                                                    </div>
                                                    <div className="fer_item_title">
                                                        <div className="fer_title_inner">
                                                            <div className="fer_sec3_txt3">
                                                                세 살 때 먹은 된장 여든까지 간다
                                                            <div className="fer_sec3_inner2">
                                                                <ul>
                                                                    <li className="fer_sec3_txt4">우리에게 장이란?</li>
                                                                    <li className="fer_sec3_txt4">우리 장의 역할과 의미</li>
                                                                </ul>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="fer_sec3_img fer1"></div>
                                                    <div className="fer_sec3_name">
                                                        <b>김정수</b>
                                                        <span>우리맛 학교 교장</span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="fer_sec3_item">
                                                <div className="fer_item">
                                                    <div className="fer_item_num">
                                                        2회
                                                        <span className="fer_num_date">12월 5일</span>
                                                    </div>
                                                    <div className="fer_item_title">
                                                        <div className="fer_title_inner">
                                                            <div className="fer_sec3_txt3">
                                                                우리가 주목해야 할 식품 트렌드
                                                            <div className="fer_sec3_inner2">
                                                                <ul>
                                                                    <li className="fer_sec3_txt4">우리가 주목해야 할 농산물 가공분야 트렌드</li>
                                                                    <li className="fer_sec3_txt4">농산물 가공 분야에서의 비즈니스 기회 탐색</li>
                                                                </ul>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="fer_sec3_img fer2"></div>
                                                    <div className="fer_sec3_name">
                                                        <b>문정훈</b>
                                                        <span>서울대학교 농경제</span>
                                                        <span>사회학부 교수</span>
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="fer_sec3_item">
                                                <div className="fer_item">
                                                    <div className="fer_item_num">
                                                        3회
                                                        <span className="fer_num_date">12월 9일</span>
                                                    </div>
                                                    <div className="fer_item_title">
                                                        <div className="fer_title_inner">
                                                            <div className="fer_sec3_txt3">
                                                                (실습1) 장 담그기_메주 만들기
                                                            <div className="fer_sec3_inner2">
                                                                <ul>
                                                                    <li className="fer_sec3_txt4">장 명인에게 배우는 전통장 담그기</li>
                                                                    <li className="fer_sec3_txt4">메주 만들기 실습</li>
                                                                </ul>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="fer_sec3_item">
                                                <div className="fer_item">
                                                    <div className="fer_item_num">
                                                        4회
                                                        <span className="fer_num_date">1월 2일</span>
                                                    </div>
                                                    <div className="fer_item_title">
                                                        <div className="fer_title_inner">
                                                            <div className="fer_sec3_txt3">
                                                                우리 발효, 우리맛의 중요성
                                                            <div className="fer_sec3_inner2">
                                                                <ul>
                                                                    <li className="fer_sec3_txt4">우리 발효, 우리 장의 중요성</li>
                                                                    <li className="fer_sec3_txt4">우리맛을 연구하는 요리과학적 방법</li>
                                                                </ul>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="fer_sec3_img fer3"></div>
                                                    <div className="fer_sec3_name">
                                                        <b>최정윤</b>
                                                        <span>샘표 연구원</span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="fer_sec3_item">
                                                <div className="fer_item">
                                                    <div className="fer_item_num">
                                                        5회
                                                        <span className="fer_num_date">1월 16일</span>
                                                    </div>
                                                    <div className="fer_item_title">
                                                        <div className="fer_title_inner">
                                                            <div className="fer_sec3_txt3">
                                                                우리 발효, 그 깊은 속내
                                                            <div className="fer_sec3_inner2">
                                                                <ul>
                                                                    <li className="fer_sec3_txt4">장에서 생성되는 신비한 미생물</li>
                                                                    <li className="fer_sec3_txt4">미생물과 장(醬)의 관계</li>
                                                                </ul>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="fer_sec3_img fer4"></div>
                                                    <div className="fer_sec3_name">
                                                        <b>김문석</b>
                                                        <span>샘표 연구원</span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="fer_sec3_item">
                                                <div className="fer_item">
                                                    <div className="fer_item_num">
                                                        6회
                                                        <span className="fer_num_date">1월 30일</span>
                                                    </div>
                                                    <div className="fer_item_title">
                                                        <div className="fer_title_inner">
                                                            <div className="fer_sec3_txt3">
                                                                발효의 비밀
                                                            <div className="fer_sec3_inner2">
                                                                <ul>
                                                                    <li className="fer_sec3_txt4">곰팡이의 정의, 구성과 역할</li>
                                                                    <li className="fer_sec3_txt4">우리 메주에 들어있는 곰팡이</li>
                                                                </ul>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="fer_sec3_img fer5"></div>
                                                    <div className="fer_sec3_name">
                                                        <b>홍승범</b>
                                                        <span>국립농업과학원 박사</span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="fer_sec3_item">
                                                <div className="fer_item">
                                                    <div className="fer_item_num">
                                                        7회
                                                        <span className="fer_num_date">2월 13일</span>
                                                    </div>
                                                    <div className="fer_item_title">
                                                        <div className="fer_title_inner">
                                                            <div className="fer_sec3_txt3">
                                                                (실습2) 장 담그기
                                                            <div className="fer_sec3_inner2">
                                                                <ul>
                                                                    <li className="fer_sec3_txt4">간장, 된장, 고추장 실습</li>
                                                                </ul>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="fer_sec3_item">
                                                <div className="fer_item">
                                                    <div className="fer_item_num">
                                                        8회
                                                        <span className="fer_num_date">8월 20일</span>
                                                    </div>
                                                    <div className="fer_item_title">
                                                        <div className="fer_title_inner">
                                                            <div className="fer_sec3_txt3">
                                                                우리 장(醬) 온고지신
                                                            <div className="fer_sec3_inner2">
                                                                <ul>
                                                                    <li className="fer_sec3_txt4">장이 만들어지는 공정(계량,재래) 심화과정</li>
                                                                    <li className="fer_sec3_txt4">전통 공정과 현대 공정의 비교 분석</li>
                                                                </ul>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="fer_sec3_img fer6"></div>
                                                    <div className="fer_sec3_name">
                                                        <b>최용호</b>
                                                        <span>샘표 연구원</span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="fer_sec3_item">
                                                <div className="fer_item">
                                                    <div className="fer_item_num">
                                                        9회
                                                        <span className="fer_num_date">9월 3일</span>
                                                    </div>
                                                    <div className="fer_item_title">
                                                        <div className="fer_title_inner">
                                                            <div className="fer_sec3_txt3">
                                                                천천히 제대로 느껴보는 우리 발효
                                                            <div className="fer_sec3_inner2">
                                                                <ul>
                                                                    <li className="fer_sec3_txt4">관능 평가란 무엇인가</li>
                                                                    <li className="fer_sec3_txt4">오감으로 느끼는 장(醬)의 신비</li>
                                                                    <li className="fer_sec3_txt4">장(醬) 테이스팅 방법</li>
                                                                </ul>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="fer_sec3_img fer7"></div>
                                                    <div className="fer_sec3_name">
                                                        <b>서동순</b>
                                                        <span>샘표 마케팅 본부장</span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="fer_sec3_item">
                                                <div className="fer_item">
                                                    <div className="fer_item_num">
                                                        10회
                                                        <span className="fer_num_date">9월 17일</span>
                                                    </div>
                                                    <div className="fer_item_title">
                                                        <div className="fer_title_inner">
                                                            <div className="fer_sec3_txt3">
                                                                (실습3)장 가르기/ 수료식
                                                            <div className="fer_sec3_inner2">
                                                                <ul>
                                                                    <li className="fer_sec3_txt4">장 가르기 실습 (간장, 된장)</li>
                                                                    <li>※ 발효학교 실습 중 직접 담근 장(간장, 된장)은 수강생 모두 함께 나눕니다.</li>
                                                                </ul>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="fer_sec3_item">
                                                <div className="fer_item">
                                                    <div className="fer_item_num">
                                                        미니강의
                                                    </div>
                                                    <div className="fer_item_title">
                                                        <div className="fer_title_inner">
                                                            <div className="fer_sec3_txt3">
                                                                우리맛 이야기
                                                            <div className="fer_sec3_inner2">
                                                                <ul>
                                                                    <li className="fer_sec3_txt4">우리맛, 아는 만큼 맛있다.</li>
                                                                    <li className="fer_sec3_txt4">우리맛 연구를 통해 알게 된 다양한 우리맛</li>
                                                                </ul>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="fer_sec3_img fer8"></div>
                                                    <div className="fer_sec3_name">
                                                        <b>이홍란</b>
                                                        <span>샘표 연구원</span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fer_sec4">
                        <div className="fer_sec4_wrap">
                            <div className="fer_sec4_inner">
                                <div className="fer_sec2_txt">
                                    <div className="fer_sec4_box2">
                                        <div className="sec4_header">
                                            <div className="sec4_h_inner">
                                                <div className="selector">
                                                    <span className="selector_title">장소명</span>
                                                    <span className="selector_txt">우리맛 발효학교</span>
                                                    <span className="selector_icon"><AiOutlineDown/></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sec4_cont">
                                            <dl className="sec4_info_box">
                                                <dt className="info_txt1">주소</dt>
                                                <dd className="info_txt2">(우 : 04557) 서울특별시 중구 충무로2 매일경제 별관 1층 샘표 우리맛 공간</dd>
                                            </dl>
                                            <dl className="sec4_info_box">
                                                <dt className="info_txt1">전화번호</dt>
                                                <dd className="info_txt2">02) 3393-5357</dd>
                                            </dl>
                                            <dl className="sec4_info_box">
                                                <dt className="info_txt1">오시는 길</dt>
                                                <dd className="info_txt2">지하철 이용시:</dd>
                                                <dd className="info_txt3">지하철 3, 4호선 충무로역 7번출구 앞</dd>
                                                <dd className="info_txt4">버스이용시 :</dd>
                                                <dd className="info_txt3">대한극장 앞 (충무로역 2번 출구) 버스노선 104, 421, 463, 507, N16</dd>
                                                <dd className="info_txt3">퇴계로 3가. 한옥마을. 한국의 집(충무로역 4번 출구)104, 421, 463, 507</dd>
                                                <dd className="info_txt3">퇴계로 3가. 한옥마을. 한국의 집(충무로역 4번 출구)104, 421, 463, 507, N1퇴계로 3가. 한옥마을. 한국의 집 (충무로역 5번 출구) 104, 105, 140, 421, 463, 507, 604, N16</dd>
                                                <dd className="info_txt3">구)매일경제 앞 (충무로역 7번 출구) 버스노선 604, 7011</dd>
                                            </dl>
                                        </div>
                                        <div className="sec4_map">
                                        <RenderAfterNavermapsLoaded ncpClientId ={CLIENT_ID}>
                                            <NaverMap 
                                                id='maps-getting-started-controlled' 
                                                style={{width: '100%', height: '450px'}}
                                                
                                                // uncontrolled zoom
                                                defaultZoom={16}

                                                // controlled center
                                                // Not defaultCenter={this.state.center}
                                                center={{lat: 37.561676, lng: 126.993374}}
                                                >
                                                <Marker 
                                                    position={{lat: 37.561676, lng: 126.993374}}
                                                />
                                            </NaverMap>
                                        </RenderAfterNavermapsLoaded>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fermentation;
