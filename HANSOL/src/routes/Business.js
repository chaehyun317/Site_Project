import React from 'react';
import './Business.css';
import { Link } from 'react-router-dom';

const Business = () => {
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
                    <div className="com_title">
                        <h2 className="h2_title">연관사업</h2>
                    </div>
                    <div className="layout2 cont_box2">
                        <div className="com_tab2">
                            <ul>
                                <li>
                                    <a href="#menu1">해외조림</a>
                                </li>
                                <li>
                                    <a href="#menu2">Green&Recyling</a>
                                </li>
                                <li>
                                    <a href="#menu3">제재목</a>
                                </li>
                                <li>
                                    <a href="#menu4">목분</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Business;
