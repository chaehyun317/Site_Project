import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../contexts/AppContext';


const Header = () => {
    const { state, dispatch } = useContext(AppContext);
    return (
        <header>
            <div className="h_wrap">
                <div className="h_inner">
                    <div className="h_content">
                        <Link to="/">
                            <div className="logo">
                                <div className="logo_img"></div>
                            </div>
                        </Link>
                        <div className="nav">
                            <ul className="sem_menu">
                                <li className="topMenu">
                                    <div className="label">우리맛 연구</div>
                                    <ul className="submenu">
                                        <li className="menuLink mL">
                                            <Link to="/intro">소개</Link>
                                        </li>
                                        <li className="menuLink">
                                            <Link>프로세스</Link>
                                        </li>
                                        <li className="menuLink">
                                            <Link to="/result">연구결과</Link>
                                        </li>
                                        <li className="menuLink">
                                            <Link to="/recipe/1">레시피</Link>
                                        </li>
                                        <li className="menuLink">
                                            <Link>글로벌 장 프로젝트</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="topMenu">
                                    <div className="label">우리맛 체험</div>
                                    <ul className="submenu">
                                        <li className="menuLink mL2">
                                            <Link>샘표 우리맛 공간</Link>
                                        </li>
                                        <li className="menuLink">
                                            <Link>우리맛 워크</Link>
                                        </li>
                                        <li className="menuLink">
                                            <Link>맛있는 추억을 그리다</Link>
                                        </li>
                                        <li className="menuLink">
                                            <Link>된장학교</Link>
                                        </li>
                                        <li className="menuLink">
                                            <Link to="/fermentation">발효학교</Link>
                                        </li>
                                        <li className="menuLink">
                                            <Link>우리맛 주니어 연구원</Link>
                                        </li>
                                        <li className="menuLink">
                                            <Link>우리맛 특강</Link>
                                        </li>
                                        <li className="menuLink">
                                            <Link to="/heritage">샘표 헤리티지 스페이스</Link>
                                        </li>
                                        <li className="menuLink">
                                            <Link>샘표 스페이스</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="topMenu">
                                    <div className="label">샘표 소개</div>
                                    <ul className="submenu">
                                        <li className="menuLink mL3">
                                            <Link>샘표</Link>
                                        </li>
                                        <li className="menuLink">
                                            <Link>샘표 70년</Link>
                                        </li>
                                        <li className="menuLink">
                                            <Link>샘표 CI</Link>
                                        </li>
                                        <li className="menuLink">
                                            <Link>샘표소식</Link>
                                        </li>
                                        <li className="menuLink">
                                            <Link>영상</Link>
                                        </li>
                                        <li className="menuLink">
                                            <Link>공지사항</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="topMenu">
                                    <div className="label">제품 소개</div>
                                    <ul className="submenu">
                                        <li className="menuLink mL4">
                                            <Link>연두</Link>
                                        </li>
                                        <li className="menuLink">
                                            <Link to="/fontana">폰타나</Link>
                                        </li>
                                        <li className="menuLink">
                                            <Link>백년동안</Link>
                                        </li>
                                        <li className="menuLink">
                                            <Link>질러</Link>
                                        </li>
                                        <li className="menuLink">
                                            <Link to="/tea">순작</Link>
                                        </li>
                                        <li className="menuLink">
                                            <Link>샘표 장류</Link>
                                        </li>
                                        <li className="menuLink">
                                            <Link>샘표 국수</Link>
                                        </li>
                                        <li className="menuLink">
                                            <Link>샘표 통조림</Link>
                                        </li>
                                        <li className="menuLink">
                                            <Link>샘표 기본양념</Link>
                                        </li>
                                        <li className="menuLink">
                                            <Link>샘표 간편·양념</Link>
                                        </li>
                                        <li className="menuLink">
                                            <Link to="/ganjang">샘표 간장</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="topMenu">
                                    <div className="label">
                                        <Link to="/market/1">
                                            마켓
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="utility">
                            <ul className="u_list u_left">
                                <li>채용</li>
                                <li>고객센터</li>
                                <li>이벤트</li>
                            </ul>
                            <div className="u_right">
                                <ul className="u_list">
                                    <li className="u_r">로그인</li>
                                    <li className="u_r">회원가입</li>
                                    <li className="u_r ed">
                                        <Link to="/cart">
                                            장바구니 
                                            <span className="red">{ state.cart.length }</span>
                                        </Link>
                                    </li>
                                    <li className="u_search"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
