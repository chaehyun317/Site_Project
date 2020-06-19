import React from 'react';
import './Heritage.css';
import { AiOutlineDown } from 'react-icons/ai';
import {RenderAfterNavermapsLoaded, NaverMap, Marker} from 'react-naver-maps';

const CLIENT_ID = process.env.CLIENT_ID;

const Heritage = () => {
    return (
        <div className="he_wrap">
            <div className="he_wrap_inner">
                <div className="he_content">
                    <div className="he_sec1">
                        <div className="he_sec1_banner"></div>
                    </div>
                    <div className="he_sec2">
                        <div className="he_sec2_wrap">
                            <div className="he_sec2_inner">
                                <p>70년을 이어 100년으로 나아가다, 우리맛 샘표</p>
                                <div className="he_sec2_txt">
                                    해방 이후부터 한결같이 우리 식탁에 함께 해 온 샘표. 샘표 헤리티지 스페이스에서는 우리 식문화의 
                                    변화 그리고 그 속에서 항상 함께해 온 샘표 70년의 역사를 이야기합니다. 샘표의 제품, 광고, 연구자료 
                                    등 우리 식문화를 느낄 수 있는 다양한 자료들과 함께한 특별 전시, 그리고 식문화, 음식, 조리 관련 국∙
                                    내외 서적들을 한 자리에서 볼 수 있습니다. 우리 식문화의 근본인 발효, 장(醬)에 대한 신념과 우리 
                                    맛으로 세계인을 즐겁게 하고 싶은 샘표의 100년 미래를 만나보세요.
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
                                                    <span className="selector_txt">샘표 헤리티지 스페이스</span>
                                                    <span className="selector_icon"><AiOutlineDown/></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sec4_cont">
                                            <dl className="sec4_info_box">
                                                <dt className="info_txt1">주소</dt>
                                                <dd className="info_txt2">(우 : 04557) 서울특별시 중구 충무로2 매일경제 별관 10층 샘표 헤리티지</dd>
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
                                                    style={{width: '640px', height: '450px'}}
                                                    
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

export default Heritage;
