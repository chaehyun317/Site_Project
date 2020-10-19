import React from 'react';
import './Main.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';


const Main = () => {
    const setting = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToSroll: 1,
        autopaly: true,
        autoSpeed: 3000,
        cssEase: "linear"
    };

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
                <div className="sec1">
                    <div className="banner">
                        <div className="banner_ani"></div>
                    </div>
                </div>
                <div className="sec2">
                    <div className="sec2_list">
                        <div className="sec2_box">
                            <div className="box sec2_img1"></div>
                            <p className="sec2_txt">바닥재</p>
                        </div>
                        <div className="sec2_box">
                            <div className="box sec2_img2"></div>
                            <p className="sec2_txt">벽면재</p>
                        </div>
                        <div className="sec2_box">
                            <div className="box sec2_img3"></div>
                            <p className="sec2_txt">도어재</p>
                        </div>
                        <div className="sec2_box">
                            <div className="box sec2_img4"></div>
                            <p className="sec2_txt">몰딩재</p>
                        </div>
                        <div className="sec2_box">
                            <div className="box sec2_img5"></div>
                            <p className="sec2_txt">시트재</p>
                        </div>
                        <div className="sec2_box">
                            <div className="box sec2_img6"></div>
                            <p className="sec2_txt">가구재</p>
                        </div>
                    </div>
                </div>
                <div className="sec3">
                    <div className="sec3_inner">
                        <div className="han_txt1">한솔 매거진</div>
                        <div className="sec3_txt1">한솔홈데코의 다양한 제품을 만나보세요.</div>
                        <div className="sec3_content">
                            <div className="sec3_inner2">
                                <div className="sec3_inner2_img"></div>
                                <div className="sec3_inner2_txt">
                                    <div className="txt_box">
                                        <div className="txt_box2 sec3_img1"></div>
                                        <div className="sec3_txt2">퍼펙트 여닫이 도어</div>
                                        <div className="sec3_txt3">퍼펙트 여닫이 도어</div>
                                    </div>
                                    <div className="txt_box">
                                        <div className="txt_box2 sec3_img2"></div>
                                        <div className="sec3_txt2">도어재 알루미늄시스템 스윙도어</div>
                                        <div className="sec3_txt3">퍼펙트 스윙도어</div>
                                    </div>
                                    <div className="txt_box">
                                        <div className="txt_box2 sec3_img3"></div>
                                        <div className="sec3_txt2">도어재 알루미늄시스템 슬림슬라이딩</div>
                                        <div className="sec3_txt3">퍼펙트 원슬라이딩</div>
                                    </div>
                                    <div className="txt_box">
                                        <div className="txt_box2 sec3_img4"></div>
                                        <div className="sec3_txt2">도어재 알루미늄시스템 3연동</div>
                                        <div className="sec3_txt3">퍼펙트 연동</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sec4">
                    <div className="sec4_inner">
                        <div className="han_txt1">한솔홈데코 블로그</div>
                        <div className="sec4_box">
                            <Slider {...setting}>
                                <div className="slide">
                                    <div className="s_box_inner">
                                        <div className="s_box">
                                            <div className="s_content img4_1"></div>
                                            <div className="sec4_txt">
                                                <p className="sec4_txt2">곡선의 부드러움이 느껴지는 인테리어</p>
                                                <p className="sec4_txt3"><span>시공공간</span>거실</p>
                                                <p className="sec4_txt3"><span>사용제품</span>마루(SB스톤)</p>
                                                <p className="sec4_txt3"><span>인테리어</span>가우디인테리어(대전T.010-4785-4636)</p>
                                                <p className="sec4_txt3"><span>한솔대리점</span>우드앤(대전T.010-5544-2832)</p>
                                            </div>
                                        </div>
                                        <div className="s_box">
                                            <div className="s_content img4_2"></div>
                                            <div className="sec4_txt">
                                                <p className="sec4_txt2">웨인스코딩이 돋보이는 모던프렌치 스타일 인테리어</p>
                                                <p className="sec4_txt3"><span>시공공간</span>거실,방</p>
                                                <p className="sec4_txt3"><span>사용제품</span>마루(헤링본,스톤,우드)</p>
                                                <p className="sec4_txt3"><span>한솔대리점</span>가나상사(인천T.032-571-1896)</p>
                                            </div>
                                        </div>
                                        <div className="s_box">
                                            <div className="s_content img4_3"></div>
                                            <div className="sec4_txt">
                                                <p className="sec4_txt2">일체감 있는 도어와 바닥재로 아늑한 인테리어 완성</p>
                                                <p className="sec4_txt3"><span>시공공간</span>거실,방,화장실</p>
                                                <p className="sec4_txt3"><span>사용제품</span>마루,방문,화장실도어</p>
                                                <p className="sec4_txt3"><span>인테리어점</span>가우디인테리어(대전T.010-4785-4636)</p>
                                                <p className="sec4_txt3"><span>한솔대리점</span>우드앤(대전T.010-5544-2832)</p>
                                            </div>
                                        </div>
                                        <div className="s_box">
                                            <div className="s_content img4_4"></div>
                                            <div className="sec4_txt">
                                                <p className="sec4_txt2">오크결이 돋보이는 내추럴하고 아늑한 인테리어</p>
                                                <p className="sec4_txt3"><span>시공공간</span>거실</p>
                                                <p className="sec4_txt3"><span>사용제품</span>마루,스토리월</p>
                                                <p className="sec4_txt3"><span>인테리어점</span>가우디인테리어(대전T.010-4785-4636)</p>
                                                <p className="sec4_txt3"><span>한솔대리점</span>우드앤(대전T.010-5544-2832)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide">
                                    <div className="s_box_inner">
                                        <div className="s_box">
                                            <div className="s_content img4_5"></div>
                                            <div className="sec4_txt">
                                                <p className="sec4_txt2">이국적인 분위기의 프렌치 스타일 인테리어</p>
                                                <p className="sec4_txt3"><span>시공공간</span>거실</p>
                                                <p className="sec4_txt3"><span>사용제품</span>마루</p>
                                                <p className="sec4_txt3"><span>인테리어점</span>가우디인테리어(대전T.010-4785-4636)</p>
                                                <p className="sec4_txt3"><span>한솔대리점</span>우드앤(대전T.010-5544-2832)</p>
                                            </div>
                                        </div>
                                        <div className="s_box">
                                            <div className="s_content img4_6"></div>
                                            <div className="sec4_txt">
                                                <p className="sec4_txt2">화이트 컬러의 대리석 인테리어로 꾸민 우아한 분위기의 집</p>
                                                <p className="sec4_txt3"><span>시공공간</span>거실</p>
                                                <p className="sec4_txt3"><span>사용제품</span>마루,스토리월,몰딩</p>
                                                <p className="sec4_txt3"><span>한솔대리점</span>태흥상사(대구 서구T.053-559-7600)</p>
                                            </div>
                                        </div>
                                        <div className="s_box">
                                            <div className="s_content img4_7"></div>
                                            <div className="sec4_txt">
                                                <p className="sec4_txt2">대리석 마루로 시공한 화이트 모던 인테리어</p>
                                                <p className="sec4_txt3"><span>시공공간</span>거실</p>
                                                <p className="sec4_txt3"><span>사용제품</span>마루</p>
                                                <p className="sec4_txt3"><span>인테리어점</span>가우디인테리어(대전T.010-4785-4636)</p>
                                                <p className="sec4_txt3"><span>한솔대리점</span>우드앤(대전T.010-5544-2832)</p>
                                            </div>
                                        </div>
                                        <div className="s_box">
                                            <div className="s_content img4_8"></div>
                                            <div className="sec4_txt">
                                                <p className="sec4_txt2">일체감 있는 도어와 바닥재로 아늑한 인테리어 완성</p>
                                                <p className="sec4_txt3"><span>시공공간</span>거실,방,화장실</p>
                                                <p className="sec4_txt3"><span>사용제품</span>마루,방문,화장실도어</p>
                                                <p className="sec4_txt3"><span>인테리어점</span>가우디인테리어(대전T.010-4785-4636)</p>
                                                <p className="sec4_txt3"><span>한솔대리점</span>우드앤(대전T.010-5544-2832)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide">
                                    <div className="s_box_inner">
                                        <div className="s_box">
                                            <div className="s_content img4_9"></div>
                                            <div className="sec4_txt">
                                                <p className="sec4_txt2">전원주택 SB마루 골든오크 시공후기</p>
                                                <p className="sec4_txt3"><span>시공공간</span>거실</p>
                                                <p className="sec4_txt3"><span>사용제품</span>마루</p>
                                                <p className="sec4_txt3"><span>한솔대리점</span>(주)신안(경기 시흥T.031-405-4588)</p>
                                            </div>
                                        </div>
                                        <div className="s_box">
                                            <div className="s_content img4_10"></div>
                                            <div className="sec4_txt">
                                                <p className="sec4_txt2">화이트 톤의 40평대 인테리어</p>
                                                <p className="sec4_txt3"><span>시공공간</span>거실</p>
                                                <p className="sec4_txt3"><span>사용제품</span>마루</p>
                                                <p className="sec4_txt3"><span>한솔대리점</span>태흥상사(대구 서구T.053-559-7600)</p>
                                            </div>
                                        </div>
                                        <div className="s_box">
                                            <div className="s_content img4_11"></div>
                                            <div className="sec4_txt">
                                                <p className="sec4_txt2">화이트 인테리어에 골드 컬러 입히기</p>
                                                <p className="sec4_txt3"><span>시공공간</span>방,화장실</p>
                                                <p className="sec4_txt3"><span>사용제품</span>방문,화장실도어</p>
                                                <p className="sec4_txt3"><span>인테리어점</span>가우디인테리어(대전T.010-4785-4636)</p>
                                                <p className="sec4_txt3"><span>한솔대리점</span>우드앤(대전T.010-5544-2832)</p>
                                            </div>
                                        </div>
                                        <div className="s_box">
                                            <div className="s_content img4_12"></div>
                                            <div className="sec4_txt">
                                                <p className="sec4_txt2">3연동 중문 도어로 여심을 사로잡는 인테리어</p>
                                                <p className="sec4_txt3"><span>시공공간</span>거실,방,화장실</p>
                                                <p className="sec4_txt3"><span>사용제품</span>마루,방문,화장실도어</p>
                                                <p className="sec4_txt3"><span>인테리어점</span>가우디인테리어(대전T.010-4785-4636)</p>
                                                <p className="sec4_txt3"><span>한솔대리점</span>우드앤(대전T.010-5544-2832)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide">
                                    <div className="s_box_inner">
                                        <div className="s_box">
                                            <div className="s_content img4_13"></div>
                                            <div className="sec4_txt">
                                                <p className="sec4_txt2">무채색 계열의 모던하고 세련된 인테리어</p>
                                                <p className="sec4_txt3"><span>시공공간</span>방,화장실</p>
                                                <p className="sec4_txt3"><span>사용제품</span>방문,화장실도어</p>
                                                <p className="sec4_txt3"><span>인테리어점</span>가우디인테리어(대전T.010-4785-4636)</p>
                                                <p className="sec4_txt3"><span>한솔대리점</span>우드앤(대전T.010-5544-2832)</p>
                                            </div>
                                        </div>
                                        <div className="s_box">
                                            <div className="s_content img4_14"></div>
                                            <div className="sec4_txt">
                                                <p className="sec4_txt2">3연동 중문 도어의 화이트 인테리어로 집을 더 환하게!</p>
                                                <p className="sec4_txt3"><span>시공공간</span>거실,방</p>
                                                <p className="sec4_txt3"><span>사용제품</span>마루,방문,도어락</p>
                                                <p className="sec4_txt3"><span>한솔대리점</span>아티아뜨디자인(대전T.053-965-5137)</p>
                                            </div>
                                        </div>
                                        <div className="s_box">
                                            <div className="s_content img4_15"></div>
                                            <div className="sec4_txt">
                                                <p className="sec4_txt2">화이트 인테리어 속 올리브 그린 도어가 포인트 되는 곳!</p>
                                                <p className="sec4_txt3"><span>시공공간</span>거실,방,욕실</p>
                                                <p className="sec4_txt3"><span>사용제품</span>마루,방문,중문</p>
                                                <p className="sec4_txt3"><span>인테리어점</span>가우디인테리어(대전T.010-4785-4636)</p>
                                                <p className="sec4_txt3"><span>한솔대리점</span>우드앤(대전T.010-5544-2832)</p>
                                            </div>
                                        </div>
                                        <div className="s_box">
                                            <div className="s_content img4_16"></div>
                                            <div className="sec4_txt">
                                                <p className="sec4_txt2">다크한 블랙톤에 빈티지한 무늬결이 엣지있는 공간 연출</p>
                                                <p className="sec4_txt3"><span>시공공간</span>거실,방</p>
                                                <p className="sec4_txt3"><span>사용제품</span>마루(SB엠보)</p>
                                                <p className="sec4_txt3"><span>인테리어점</span>더홈(대전T.010-8004-7137)</p>
                                                <p className="sec4_txt3"><span>한솔대리점</span>라임플로링(대전T.042-320-9432)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide">
                                    <div className="s_box_inner">
                                        <div className="s_box">
                                            <div className="s_content img4_17"></div>
                                            <div className="sec4_txt">
                                                <p className="sec4_txt2">빈티지 스타일의 비즈니스 복합공간 완성</p>
                                                <p className="sec4_txt3"><span>시공공간</span>복합공간</p>
                                                <p className="sec4_txt3"><span>사용제품</span>월,도어,흡음판</p>
                                                <p className="sec4_txt3"><span>한솔대리점</span>선우상재(시흥Tel.031-402-1930)</p>
                                            </div>
                                        </div>
                                        <div className="s_box">
                                            <div className="s_content img4_18"></div>
                                            <div className="sec4_txt">
                                                <p className="sec4_txt2">공간마다 색다른 느낌을 살린 캐주얼 모던 인테리어</p>
                                                <p className="sec4_txt3"><span>시공공간</span>현관,거실,방</p>
                                                <p className="sec4_txt3"><span>사용제품</span>마루,중문,도어/몰딩</p>
                                                <p className="sec4_txt3"><span>한솔대리점</span>명한우드(서울T.031-796-5583)</p>
                                            </div>
                                        </div>
                                        <div className="s_box">
                                            <div className="s_content img4_19"></div>
                                            <div className="sec4_txt">
                                                <p className="sec4_txt2">자연적 요소와 절제된 라인이 감각적으로 살아나는 30평대 인테리어</p>
                                                <p className="sec4_txt3"><span>시공공간</span>현관,거실,방</p>
                                                <p className="sec4_txt3"><span>사용제품</span>마루,중문,도어,몰딩</p>
                                                <p className="sec4_txt3"><span>한솔대리점</span>원창목재(서울T.02-384-0020)</p>
                                            </div>
                                        </div>
                                        <div className="s_box">
                                            <div className="s_content img4_20"></div>
                                            <div className="sec4_txt">
                                                <p className="sec4_txt2">모던 공간에 컬러로 포인트 준 유쾌하고 밝은 집 인테리어</p>
                                                <p className="sec4_txt3"><span>시공공간</span>현관,거실,방</p>
                                                <p className="sec4_txt3"><span>사용제품</span>마루,도어,중문</p>
                                                <p className="sec4_txt3"><span>한솔대리점</span>가나상사(인천T.032-571-1896)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide">
                                    <div className="s_box_inner">
                                        <div className="s_box">
                                            <div className="s_content img4_21"></div>
                                            <div className="sec4_txt">
                                                <p className="sec4_txt2">대리석 마루로 꾸민 모던 프렌치 스타일의 이쁜집</p>
                                                <p className="sec4_txt3"><span>시공공간</span>거실</p>
                                                <p className="sec4_txt3"><span>사용제품</span>마루(SB대리석)</p>
                                                <p className="sec4_txt3"><span>인테리어점</span>디자인하는집그리다(대전T.042-320-9432)</p>
                                                <p className="sec4_txt3"><span>한솔대리점</span>라임플로링(대전T.042-320-9432)</p>
                                            </div>
                                        </div>
                                        <div className="s_box">
                                            <div className="s_content img4_22"></div>
                                            <div className="sec4_txt">
                                                <p className="sec4_txt2">따뜻하고 부드러운 화이트 모던 인테리어</p>
                                                <p className="sec4_txt3"><span>시공공간</span>거실,방</p>
                                                <p className="sec4_txt3"><span>사용제품</span>마루(SB)</p>
                                                <p className="sec4_txt3"><span>한솔대리점</span>(주)신안(시흥T.031-405-4588)</p>
                                            </div>
                                        </div>
                                        <div className="s_box">
                                            <div className="s_content img4_23"></div>
                                            <div className="sec4_txt">
                                                <p className="sec4_txt2">프렌치 클래식과 모던 스타일의 복합 컨셉</p>
                                                <p className="sec4_txt3"><span>시공공간</span>거실,방</p>
                                                <p className="sec4_txt3"><span>사용제품</span>마루(헤링본),도어</p>
                                                <p className="sec4_txt3"><span>인테리어점</span>가우디인테리어(대전T.010-4785-4636)</p>
                                                <p className="sec4_txt3"><span>한솔대리점</span>우드앤(대전T.010-5544-2832)</p>
                                            </div>
                                        </div>
                                        <div className="s_box">
                                            <div className="s_content img4_24"></div>
                                            <div className="sec4_txt">
                                                <p className="sec4_txt2">SB마루 병원 인테리어</p>
                                                <p className="sec4_txt3"><span>시공공간</span>병원</p>
                                                <p className="sec4_txt3"><span>사용제품</span>마루</p>
                                                <p className="sec4_txt3"><span>인테리어점</span>디자인하는집그리다(대전T.010-3431-3920)</p>
                                                <p className="sec4_txt3"><span>한솔대리점</span>라임플로링(대전T.042-320-9432)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="sec5">
                    <div className="sec5_inner">
                        <div className="han_txt1">한솔홈데코 유튜브[알쓸인잡]</div>
                        <div className="sec5_box">
                            <Slider {...setting}>
                                <div className="slide2">
                                    <div className="s_box_inner">
                                        <div className="s_box2">
                                            <div className="s_content2 img5_1"></div>
                                            <div className="sec5_txt">마루판매 1등이 알려주는 SB강마루_엠보마루의 모든것!</div>
                                        </div>
                                        <div className="s_box2">
                                            <div className="s_content2 img5_2"></div>
                                            <div className="sec5_txt">불에 타지 않는 디자인 마감재 한솔 준불연 패널</div>
                                        </div>
                                        <div className="s_box2">
                                            <div className="s_content2 img5_3"></div>
                                            <div className="sec5_txt">시공 현장에서 sb마루에 숨겨진 비밀을 파헤치다.</div>
                                        </div>
                                        <div className="s_box2">
                                            <div className="s_content2 img5_4"></div>
                                            <div className="sec5_txt">마루 공사 후 남은 자재로 냄비받침 만들기DIY 1탄[한솔홈데코]</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide2">
                                    <div className="s_box_inner">
                                        <div className="s_box2">
                                            <div className="s_content2 img5_5"></div>
                                            <div className="sec5_txt">마루 공사 후 생겼던 문제! 이 마루로 해결했어요</div>
                                        </div>
                                        <div className="s_box2">
                                            <div className="s_content2 img5_6"></div>
                                            <div className="sec5_txt">[한솔SB마루 리얼영상 제4탄]우리 집에서 트리플악셀?</div>
                                        </div>
                                        <div className="s_box2">
                                            <div className="s_content2 img5_7"></div>
                                            <div className="sec5_txt">[한솔SB마루 리얼영상 제3탄]나도 모르는 발자국이 우리집에..?</div>
                                        </div>
                                        <div className="s_box2">
                                            <div className="s_content2 img5_8"></div>
                                            <div className="sec5_txt">[한솔SB마루 리얼영상 제2탄]통장과 함께 상처난 우리집 마루보수</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide2">
                                    <div className="s_box_inner">
                                        <div className="s_box2">
                                            <div className="s_content2 img5_9"></div>
                                            <div className="sec5_txt">[한솔SB마루 리얼영상 제1탄]우리집에 워터파트가 있었다고?</div>
                                        </div>
                                        <div className="s_box2">
                                            <div className="s_content2 img5_10"></div>
                                            <div className="sec5_txt">우리집 거실을 대리석으로? 벽 인테리어는 한솔 스토리월!</div>
                                        </div>
                                        <div className="s_box2">
                                            <div className="s_content2 img5_11"></div>
                                            <div className="sec5_txt">30평대 아파트 인테리어 시공사례</div>
                                        </div>
                                        <div className="s_box2">
                                            <div className="s_content2 img5_12"></div>
                                            <div className="sec5_txt">기생충 제시카송 패러디-마루가 고민일때 한솔SB마루</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide2">
                                    <div className="s_box_inner">
                                        <div className="s_box2">
                                            <div className="s_content2 img5_13"></div>
                                            <div className="sec5_txt">신혼부부 인테리어,1인가구 여성 취향 프렌치 모던스타일</div>
                                        </div>
                                        <div className="s_box2">
                                            <div className="s_content2 img5_14"></div>
                                            <div className="sec5_txt">우리집에 어울리는 중문 선택하기!</div>
                                        </div>
                                        <div className="s_box2">
                                            <div className="s_content2 img5_15"></div>
                                            <div className="sec5_txt">온돌난방에 최적화된 SB강마루,허수석도 반한 포인트?</div>
                                        </div>
                                        <div className="s_box2">
                                            <div className="s_content2 img5_16"></div>
                                            <div className="sec5_txt">하자일까,아닐까 헷갈리는 마루 시공사례</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide2">
                                    <div className="s_box_inner">
                                        <div className="s_box2">
                                            <div className="s_content2 img5_17"></div>
                                            <div className="sec5_txt">2020평형대별 인테리어 트렌드 Interior Trend</div>
                                        </div>
                                        <div className="s_box2">
                                            <div className="s_content2 img5_18"></div>
                                            <div className="sec5_txt">중문종류4-한솔 스윙도어</div>
                                        </div>
                                        <div className="s_box2">
                                            <div className="s_content2 img5_19"></div>
                                            <div className="sec5_txt">강마루로 거실 인테리어를 더 예쁘게 하는 인기 패턴</div>
                                        </div>
                                        <div className="s_box2">
                                            <div className="s_content2 img5_20"></div>
                                            <div className="sec5_txt">예쁜집 마루 인테리어!Best3(강마루,강화마루,SB마루)</div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="sec6">
                    <div className="sec6_inner">
                        <div className="sec6_box">
                            <div className="sec6_img">
                                <p>대리점찾기</p>
                            </div>
                        </div>
                        <div className="sec6_box">
                            <h2>공지사항</h2>
                            <div className="icon"></div>
                            <ul className="sec6_list">
                                <li>
                                    <p>습기와 찍힘에 강한 'SB마루' 리뉴얼</p>
                                    <p className="p2">2020-06-05</p>
                                </li>
                                <li>
                                    <p>강하고 아름다운 강마루<br/>'ULTRA(울트라)'리뉴얼</p>
                                    <p className="p2">2020-06-03</p>
                                </li>
                            </ul>
                        </div>
                        <div className="sec6_box">
                            <h2>뉴스</h2>
                            <div className="icon"></div>
                            <ul className="sec6_list">
                                <li>
                                    <p>입체감 높인'웨인스코딩 도어'<br/>신제품 출시</p>
                                    <p className="p2">2020-07-08</p>
                                </li>
                                <li>
                                    <p>강마루'울트라'신제품 출시</p>
                                    <p className="p2">2020-06-23</p>
                                </li>
                            </ul>
                        </div>
                        <div className="sec6_box box_color">
                            <h2>제품찾기</h2>
                            <select className="select1">
                                <option className="sel1_2">제품 전체 검색</option>
                                <option className="sel1_2">바닥재</option>
                                <option className="sel1_2">벽면재</option>
                                <option className="sel1_2">도어재</option>
                                <option className="sel1_2">몰딩재</option>
                                <option className="sel1_2">시트재</option>
                                <option className="sel1_2">가구재</option>
                            </select>
                            <input type="text" className="sec6_box2" placeholder="모델명을 입력하세요."></input>
                            <button type="submit">검색하기</button>
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
            </footer>
        </div>      
    );
};

export default Main;