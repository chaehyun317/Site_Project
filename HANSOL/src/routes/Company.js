import React from 'react';
import './Company.css';
import { Link } from 'react-router-dom';

const Company = () => {
    return (
        <div className="wrap">
            <header>
                <div className="logo"></div>
                <div className="gnb">
                    <ul className="nav">
                        <li className="menu1">
                            <span className="label">제품정보</span>
                            <ul className="han_menu">
                                <li className="hansol">바닥재</li>
                                <li className="hansol">벽면재</li>
                                <li className="hansol">도어재</li>
                                <li className="hansol">몰딩재</li>
                                <li className="hansol">시트재</li>
                                <li className="hansol">가구재</li>
                            </ul>
                        </li>
                        <li className="menu1">
                            <span className="label">시공사례</span>
                            <ul className="han_menu">
                                <li className="hansol">테마 갤러리</li>
                                <li className="hansol">시공 갤러리</li>
                                <li className="hansol">전시장 갤러리</li>
                            </ul>
                        </li>
                        <li className="menu1">
                            <span className="label">고객센터</span>
                            <ul className="han_menu">
                                <li className="hansol">고객상담</li>
                                <li className="hansol">대리점찾기</li>
                                <li className="hansol">F&Q</li>
                                <li className="hansol">공지</li>
                                <li className="hansol">뉴스</li>
                                <li className="hansol">자료실</li>
                            </ul>
                        </li>
                        <li className="menu1">
                            <span className="label">기업소개</span>
                            <ul className="han_menu">
                                <li className="hansol">
                                    <Link to="/company">회사개요</Link>
                                </li>
                                <li className="hansol">투자정보</li>
                                <li className="hansol">인사제도</li>
                                <li className="hansol">채용공고</li>
                                <li className="hansol">네트워크</li>
                            </ul>
                        </li>
                        <li className="menu1">
                            <span className="label">사업분야</span>
                            <ul className="han_menu">
                                <li className="hansol">가구 컴포넌트</li>
                                <li className="hansol">인테리어 자재</li>
                                <li className="hansol">
                                    <Link to="/business">연관사업</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="bg"></div>
                </div>
                <div className="gnb2">
                    <ul className="gnb2_list">
                        <li>제품찾기</li>
                        <li>SITEMAP</li>
                        <li>BLOG</li>
                        <li>YOUTUBE</li>
                    </ul>
                </div>
            </header>
            <main>
                <div className="com_container">
                    <div className="navi_area">
                        <div className="navi_area_inner">
                            <div className="navi_icon"></div>
                            <div className="navi_dp1"></div>
                            <div className="navi_dp2"></div>
                        </div>
                    </div>
                    <div className="com_wrap">
                        <div className="com_banner"></div>
                        <div className="com_cont_box">
                            <div className="bg_blue">
                                <div className="layout">
                                    <h4 className="h4_txt">국내 최초에서 최고로의 비상,한솔홈데코</h4>
                                </div>
                            </div>
                            <div className="layout">
                                <p className="txt_par">국내 최초로 해외조림 사업에 진출하여 온실가스 감축에 기여하고 신재생 에너지 발전사업을 확대하는 등 Eco-Friendly 가치관을 기반으로 
                                인테리어 자재사업을 확장하며 국내 최고의 친환경 기업으로 성장하고 있습니다.
                                </p>
                            </div>
                            <div className="bg_blue">
                                <div className="layout">
                                    <h4 className="h4_txt">인테리어 자재 전문기업</h4>
                                </div>
                            </div>
                            <div className="layout">
                                <p className="txt_par">가구소재, 바닥재, 도어/몰딩재, 벽면재 등 아이템을 확대, 
                                인테리어 자재 산업으로 진출하여 세계적인 수준의 품질과 디자인으로 아름다운 공간을 제안하고 있습니다. 
                                </p>
                            </div>
                            <div className="bg_blue">
                                <div className="layout">
                                    <h4 className="h4_txt">목재사업 Value Chain 완성</h4>
                                </div>
                            </div>
                            <div className="layout">
                                <p className="txt_par">목재에 대한 전문 지식과 노하우를 바탕으로 해외조림, 제재목, 가구소재, 인테리어자재 등 
                                지속적인 친환경 제품과 고기능성 제품 개발로 핵심 경쟁력을 강화하고 있습니다. 
                                또한 나무의 가치를 높이는 산림자원 재활용으로 신재생에너지(스팀, 전력)와 첨단 신소재 사업으로의 
                                성장 동력을 발굴하여 미래를 선도하는 초일류 기업으로 성장하고 있습니다.
                                </p>
                                <h5 className="h5_txt">사업분야</h5>
                                <div className="com_wrap_img"></div>
                            </div>
                            <div className="bg_blue">
                                <div className="layout">
                                    <h4 className="h4_txt">이념체계</h4>
                                </div>
                            </div>
                            <div className="layout">
                                <p className="txt_par">미래를 바라보는 기업, 한솔홈데코의 경영방침입니다. 앞으로 나아가는 진취적인 기업으로 늘 함께 하겠습니다.</p>
                                <div className="com_sec_box">
                                    <div className="com_sec_left">
                                        <div className="sec_left_img"></div>
                                    </div>
                                    <div className="com_sec_right">
                                        <dl>
                                            <dt className="value1">우리의 사명</dt>
                                            <dd>우리는 차별화를 통한 경쟁우위를 확보하고 이를 통해 최대 가치를 구현하여 고객과 함께 지속적으로 성장합니다.</dd>
                                            <dt className="value2">한솔 홈데코 비전</dt>
                                            <dd>행복한 공간을 만드는 고객가치 창출기업</dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <div className="footer_top">
                    <div className="footer_t1">
                        <ul className="footer_t1_list">
                            <li>고객상담</li>
                            <li>개인정보처리방침</li>
                            <li>기업지배구조</li>
                            <li>윤리경영</li>
                            <li>HOMEDECOSALESPORTAL</li>
                            <li>E-Purchase</li>
                        </ul>
                        <div className="footer_t2">
                            <div className="footer_t2_l">
                                <span>고객상담 080-777-2299</span>
                                <p>※제품구매 문의는 대리점 찾기에서 가까운 매장을 검색 해 주세요</p>
                            </div>
                            <select className="select2">
                                <option className="sel2_1">FAMILY SITE</option>
                                <option className="sel2_1">한솔그룹</option>
                                <option className="sel2_1">한솔제지</option>
                                <option className="sel2_1">한솔홈데코</option>
                                <option className="sel2_1">한솔케미칼</option>
                                <option className="sel2_1">한솔PNS</option>
                                <option className="sel2_1">한솔EME</option>
                                <option className="sel2_1">한솔로지스티스</option>
                                <option className="sel2_1">한솔인티큐브</option>
                                <option className="sel2_1">Museum SAN</option>
                                <option className="sel2_1">한솔페이퍼텍</option>
                            </select>
                        </div>
                    </div>
                    <div className="footer_bottom">
                        <div className="footer_b_logo"></div>
                        <div className="footer_b_txt1">
                            서울동작구 보라매로5길 15(신대방동, 전문건설회관 27층)
                            <span className="footer_b_txt2">Tel  080-777-2299</span>
                        </div>
                        <div className="footer_b_txt3">Copyright HANSOLHOMEDECO All rights reserved.본 사이트의 콘텐츠는 저작권법의 보호를 받는바무단 전재,복사,배포 등을 금합니다.</div>
                        <div className="sns_box">
                            <div className="sns s_box5"></div>
                            <div className="sns s_box6"></div>
                            <div className="sns s_box7"></div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Company;
