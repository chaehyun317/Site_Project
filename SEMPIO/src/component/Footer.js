import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="f_list">
                <div className="fl_inner">
                    <div className="fl_inner2">
                        <div className="fl_link">
                            <ul className="link_left">
                                <li className="li_l">오시는길</li>
                                <li className="li_l">네트워크</li>
                                <li className="li_l">공고</li>
                                <li className="li_l">멤버십 혜택</li>
                                <li className="li_l">사이트맵</li>
                                <li className="li_l">이용약관</li>
                            </ul>
                            <ul className="link_right">
                                <li className="li_r"><b>개인정보처리방침</b></li>
                                <li className="li_r">이메일무단수집거부</li>
                                <li className="li_r">공시정보관리규정</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="f_bottom">
                <div className="fb_inner">
                    <div className="fb_inner2">
                        <div className="fb_utils">
                            <div className="fb_select">관련사이트</div>
                            <div className="fb_select">한국어</div>
                        </div>
                        <div className="fb_social"></div>
                        <div className="fb_contact">
                            <div className="fb_contact_inner">
                                <h2 className="fb_txt">고객지원실</h2>
                                <ul>
                                    <li className="fb_txt2">상담시간 평일: 08:30~17:30</li>
                                    <li className="fb_txt2">TEL: 080-996-7777</li>
                                    <li className="fb_txt2">FAX: 070-4275-5285</li>
                                    <li className="fb_txt2">1:1 온라인 문의: 고객의 소리</li>
                                </ul>
                            </div>
                        </div>
                        <div className="fb_contact2">
                            <div className="contact2_top">
                                <h2 className="fb_txt3">샘표식품 주식회사</h2>
                                <ul>
                                    <li className="fb_txt4">주소: (04557) 서울특별시 중구 충무로2  대표번호: 02-3393-5500 대표이사: 박진선 사업자 번호: 446-87-00473</li>
                                    <li className="fb_txt4">통신판매업신고번호: 제 2016-서울중구-1160호 개인정보 보호책임자: 박광배 사업자정보 확인</li>
                                </ul>
                            </div>
                            <div className="contact2_bottom">
                                <h2 className="fb_txt3">㈜ 이니시스 구매안전서비스</h2>
                                <li className="fb_txt4">고객님의 안전거래를 위해 현금 거래에 대해 이니페이 에스크로 서비스를 이용하실 수 있습니다. 서비스 가입사실 확인</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="copyright_inner">
                    <div className="copyright_inner2">
                        <div className="fb_txt5">(C) 1946-2018 Sempio</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
