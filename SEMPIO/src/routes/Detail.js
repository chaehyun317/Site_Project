import React, { useEffect, useState, useContext } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import './Detail.css';
import AppContext from '../contexts/AppContext';
import {API, FILE} from '../globals/api';
import Axios from 'axios';

const nf = new Intl.NumberFormat();

const Detail = ({ match: { params: { productId }}}) => {
    const { state, dispatch } = useContext(AppContext);
    const [count, setcount] = useState('1');
    const [item, setItem] = useState("");
    const [price, setPrice] = useState(0);
    const [unit, setUnit] = useState('');
    const [img, setImg] = useState([]);
    const [type, setType] = useState(1);
    const [description, setDescripton] = useState("");

    
    const getItems = () => {
        Axios.post(`${API}/SP_detailItem`, { id: productId }).then(res => {
            const { data: { result, data } } = res;
            if (result) {
                // setTotal(data);
                setItem(data);
                setImg(data.img1);
                setPrice(data.price1);
                setUnit(data.unit1);
                setType(1);
                setDescripton(data.description);
            } else {
                alert('네트워크 오류 발생!');
            }
        });
    };

    const onChangecount = ev => {
        const { target: { value } } = ev;
        setcount(value);
    };

    const plus = () => {
        if (Number(count) > 98) {
            return;
        }
        setcount(String(Number(count) + 1));
    };

    const minus = () => {
        if (Number(count) === 1) {
            return;
        }
        setcount(String(Number(count) - 1));
    };

    const onCart = ()  => {
        dispatch({ type: 'ADD_CART', data: {...item, id: type === 1 ? item.id : item.id + 10000, price, img, unit, description,  count: Number(count)}});
    };

    const changeUnit = val => {
      setType(val);
      if (val === 1) {
        setImg(item.img1);
        setPrice(item.price1);
        setUnit(item.unit1);
        setType(1);
    } else {
        setImg(item.img2);
        setPrice(item.price2);
        setUnit(item.unit2);
        setType(2);
      }
    };

    useEffect(() => {
        getItems();
    }, [])

    // useEffect(() => {
    //     getItems()
    // }, []);
    return(
        <div className="wrap">
            <div className="sec">
                <div className="inner">
                    <div className="summary_box">
                        <div className="summary_inner">
                            <div className="summary_img_box">
                                <div className="summary_img" style={{backgroundImage: `url(${FILE}/${img})`}}></div>
                            </div>
                            <div className="summary_content">
                                <div className="summary_title">
                                    <div className="summary_name">{item.name}</div>
                                    <div className="summary_desc">{item.description}</div>
                                </div>
                                <div className="summary_shipping">30,000원 미만 구매 시 배송료 2,500원</div>
                                <div className="summary_option">
                                    <div className="option_checkbox">
                                        <h3 className="option_name">용량</h3>
                                        <button className="option_left" onClick={() => changeUnit(1)}>{item.unit1}</button>
                                        {item.unit2 !== '' && (
                                            <button className="option_right" onClick={() => changeUnit(2)}>{item.unit2}</button>
                                        )}
                                    </div>
                                    <div className="option_count">
                                        <h3 className="option_name">수량</h3>
                                        <div className="count_box">
                                            <span className="count_l" onClick={minus}>
                                                <AiOutlineMinus/>
                                            </span>
                                                <input className="count_num" type="text" value={count} onChange={onChangecount}></input>
                                            <span className="count_r" onClick={plus}>
                                                <AiOutlinePlus/>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="summary_price_box">
                                    <strong className="summary_price">
                                        {nf.format(price * count)}
                                    </strong>
                                </div>
                                <div className="summary_btn">
                                    <button className="btn_basket" onClick={onCart}>장바구니</button>
                                    <button className="btn_right">구매</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content_nav">
                <div className="inner">
                    <ul className="nav_list">
                        <li className="nav_item">상품정보</li>
                        <li className="nav_item">고객후기</li>
                        <li className="nav_item">구매정보</li>
                    </ul>
                </div>
            </div>
            <div className="sec2">
                <div className="inner">
                    <div className="info_inner">
                        <div className="info_banner"></div>
                        <div className="info_sec1">
                            <div className="info_sec1_inner">
                                <h2>특장점</h2>
                                <ul className="sec1_list">
                                    <li>
                                        <span className="sec1_sym">1</span>
                                        <p className="sec1_txt">세계 각 지역 정통의 맛을 재현했습니다.</p>
                                        세계 각 지역의 특색을 담은 오리지널 레시피로 본고장 정통 수프의 맛을 재현했습니다.
                                    </li>
                                    <li>
                                        <span className="sec1_sym">2</span>
                                        <p className="sec1_txt">정통 '루(roux)'방식으로 만들었습니다.</p>
                                        수프의 기본인 정통 '루(roux)' 방식부터 제대로 하여, 깊고 진한 홈메이드식 수프의 맛을 느낄 수 있습니다.<br/>
                                        *루(roux)란? 밀가루를 물 없이 버터에 볶아 만드는 서양 요리의 기본이 되는 소스입니다.
                                    </li>
                                    <li>
                                        <span className="sec1_sym">3</span>
                                        <p className="sec1_txt">진한 크림 풍미가 가득한 덴마크 스타일 크림수프입니다.</p>
                                        유크림과 크림치즈, 체다치즈 등 치즈가 풍부하게 들어있어 깊고 부드러운 맛이 특징인 덴마크 스타일 크림 수프입니다.
                                    </li>
                                    <li>
                                        <span className="sec1_sym">4</span>
                                        <p className="sec1_txt">무첨가로 더욱 건강합니다.</p>
                                        엄선된 고급 원재료만을 사용하고, 가공유크림, 혼합식용유, 착색료 등을 무첨가하여 건강하게 즐길 수 있습니다.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="info_sec1">
                            <div className="info_sec1_inner">
                                <h2>사용법</h2>
                                <ul className="sec1_list">
                                    <li>
                                        <p className="sec1_txt2">어떻게 조리하나요? (정통 조리 방식)</p>
                                        <div className="inner_list">
                                            <div className="sec1_txt3">1. 냄비에 수프 1봉을 넣습니다.</div>
                                            <div className="sec1_txt3">2. 물이나 우유 200 ml를 넣고 잘 풀어줍니다.</div>
                                            <div className="sec1_txt3">3. 불에 올려놓고 잘 저으면서 가열합니다. 끓기 시작하면, 불을 약하게 하십시오.</div>
                                            <div className="sec1_txt3">4. 바닥에 눌지 않도록 잘 저어주면서 2분간 끓입니다.</div>
                                            <div className="sec1_txt3">※ 요리팁! 기호에 따라 물이나 우유의 양을 조절하십시오.</div>
                                        </div>
                                    </li>
                                    <li>
                                        <p className="sec1_txt2">어떻게 조리하나요? (간편 조리 방식)</p>
                                        <div className="inner_list">
                                            <div className="sec1_txt3">1. 컵이나 보울에 수프 1봉을 넣습니다.</div>
                                            <div className="sec1_txt3">2. 뜨거운 물 180ml를 넣고 잘 풀어줍니다.</div>
                                            <div className="sec1_txt3">3. 전자레인지(700W)에서 1분간 가열합니다. (찬물을 사용하는 경우는 2분간 가열)</div>
                                            <div className="sec1_txt3">※ 주의! 봉지 그대로 전자레인지에 넣지 마십시오. 뜨거울 수 있으니 조심하십시오.</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec3">
                <div className="inner">
                    <div className="review_inner">
                        <div className="review_count">
                            총<strong className="reviewCnt">25</strong>건의 구매후기가 있습니다.
                        </div>
                        <ul className="comments">
                            <li className="comment">
                                <div className="review_icon">★★★★★</div>
                                <p className="review_txt">고소하고 풍미가 너무 좋아요. 개량해서 파스타 소스로 사용해도 너무 좋습니다.</p>
                                <span className="review_writer">eun****</span>
                                <span className="review_data">2020.04.28</span>
                            </li>
                            <li className="comment">
                                <div className="review_icon">★★★★★</div>
                                <p className="review_txt">오리지널의 힘!! 역시나에요~ 요즘 아침마다 수프로 하루를 열고 있는데 그중에서 가장 기본이지만 가장 마음에 들어요 속도 편하고 든든하고 게다가 맛까지 좋아서 늘 쟁여두고 있어요!</p>
                                <span className="review_writer">kmj***</span>
                                <span className="review_data">2020.03.06</span>
                            </li>
                            <li className="comment">
                                <div className="review_icon">★★★★★</div>
                                <p className="review_txt">걸죽해서 하나 먹음 든든해요</p>
                                <span className="review_writer">bab****</span>
                                <span className="review_data">2020.02.28</span>
                            </li>
                            <li className="comment">
                                <div className="review_icon">★★★★★</div>
                                <p className="review_txt">가장 무난한 맛을 지닌 폰타나 데니쉬 오리지널 크림 스프는 정말 어느 것과도 다 잘어울
                                    리는 장점이 있습니다. 은은한 양파 향이 근사해 지고, 먹으면 먹을 수록 스프 담은 그릇의 
                                    밑바닥이 보이는게 슬플 정도로 맛나게 먹게 된답니다. 요즘 들어 하루 한끼는 스프로 잘 
                                    해결하는데 빵은 물론이고, 과자, 호떡, 심지어 붕어 빵과도 잘 어울려서 외출 후에는 빵이
                                    나 군것질 거리 사다가 커피 대신에 꼭 스프를 대신한답니다. 꽈배기나 핫도그와도 잘 어
                                    울려서 동네 지인이 놀려 오면 함께 스프랑 내 놓고 하는데, 얼마나 좋아하는지 몰라요!
                                </p>
                                <span className="review_writer">ini**</span>
                                <span className="review_data">2020.01.03</span>
                            </li>
                            <li className="comment">
                                <div className="review_icon">★★★★★</div>
                                <p className="review_txt">폰타나 제품은 늘 옳은 선택입니다 진하고 맛있어요</p>
                                <span className="review_writer">app****</span>
                                <span className="review_data">2019.12.29</span>
                            </li>
                            <li className="comment">
                                <div className="review_icon">★★★★★</div>
                                <p className="review_txt">바쁜 아침 ~ 아침에 먹으려고 해요 시간 절약 되고 좋아요</p>
                                <span className="review_writer">cjs********</span>
                                <span className="review_data">2019.12.02</span>
                            </li>
                            <li className="comment">
                                <div className="review_icon">★★★★★</div>
                                <p className="review_txt">폰타나 스프종류 다 먹어봤는데 풍부하고 크리미한 맛이 일품입니다</p>
                                <span className="review_writer">pas*****</span>
                                <span className="review_data">2019.10.05</span>
                            </li>
                            <li className="comment">
                                <div className="review_icon">★★★★★</div>
                                <p className="review_txt">양도 적당하고 맛있어요. 또 먹고 싶어요!</p>
                                <span className="review_writer">yoo********</span>
                                <span className="review_data">2019.07.06</span>
                            </li>
                            <li className="comment">
                                <div className="review_icon">★★★★★</div>
                                <p className="review_txt">양도 적당하고 맛있어요. 또 먹고 싶어요!</p>
                                <span className="review_writer">yoo********</span>
                                <span className="review_data">2019.07.06</span>
                            </li>
                            <li className="comment">
                                <div className="review_icon">★★★★★</div>
                                <p className="review_txt">맛있어서 자주 먹고 있어요 폰타나</p>
                                <span className="review_writer">nur****</span>
                                <span className="review_data">2019.05.07</span>
                            </li>
                            <li className="comment">
                                <div className="review_icon">★★★★★</div>
                                <p className="review_txt">안전하고 빠른 배송 감사드려요~안전하고 신속하게 잘 받았습니다.</p>
                                <span className="review_writer">moa****</span>
                                <span className="review_data">2016.09.01</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="sec4">
                <div className="inner">
                    <div className="purchase_info">
                        <h2 className="pur_txt1">제품상세정보</h2>
                        <div className="purchase_spec">
                            <h3 className="pur_txt2">제품</h3>
                            <div className="pur_list">
                                <div className="pur_txt3">제품명</div>
                                <div className="pur_txt4">폰타나 데니쉬 오리지널 크림 수프 ( 30g / 90g )</div>
                                <div className="pur_txt3">식품의 유형</div>
                                <div className="pur_txt4">즉석조리식품</div>
                                <div className="pur_txt3">원재료명 및 함량</div>
                                <div className="pur_txt4">밀가루(밀/미국산, 호주산), 덱스트린, 분말유크림[유크림(호주산), 유당(미국산), 산도조절제, 
                                                        유화제, 정제소금], 전지분유(미국산), 감자분말, 크림치즈분말(크림치즈분/호주산), 정제소금, 
                                                        설탕, 마아가린, 양파분말, 비프브로스분말, 치즈분말(체다치즈, 로마노치즈), 효모추출물, 백후추분말, 건파슬리<br/>
                                                        * 우유, 대두, 밀, 쇠고기 함유</div>
                                <div className="pur_txt3">표준의 번호 및 명칭</div>
                                <div className="pur_txt4">해당없음</div>
                                <div className="pur_txt3">등급</div>
                                <div className="pur_txt4">해당없음</div>
                                <div className="pur_txt3">인증번호</div>
                                <div className="pur_txt4">해당없음</div>
                                <div className="pur_txt3">인증기관</div>
                                <div className="pur_txt4">해당없음</div>
                                <div className="pur_txt3">영업허가번호</div>
                                <div className="pur_txt4">해당없음</div>
                                <div className="pur_txt3">총 질소(T.N)함량</div>
                                <div className="pur_txt4">해당없음</div>
                                <div className="pur_txt3">품목보고번호</div>
                                <div className="pur_txt4">19690364004558</div>
                                <div className="pur_txt3">영양성분</div>
                                <div className="pur_txt4">해당없음</div>
                                <div className="pur_txt3">유전자 재조합 식품 여부</div>
                                <div className="pur_txt4">해당없음</div>
                                <div className="pur_txt3">표시광고 사전심의번호</div>
                                <div className="pur_txt4">해당없음</div>
                                <div className="pur_txt3">수입식품 여부</div>
                                <div className="pur_txt4">해당없음</div>
                                <div className="pur_txt3">유의사항</div>
                                <div className="pur_txt4">- 우유, 대두, 밀, 쇠고기, 조개류(홍합) 함유<br/>
                                                        - 본 제품은 난류, 메밀, 땅콩, 고등어, 게, 새우, 돼지고기, 복숭아, 토마토, 호두, 닭고기, 오징어, 조개류(굴, 전복 포함)를 사용한 제품과 같은 제조시설에서 제조하고 있습니다.<br/>
                                                        - 직사광선을 피하고 건조한 실온에 보관하시고, 개봉 후에는 가능한 빨리 드십시오.</div>
                            </div>
                        </div>
                        <div className="purchase_spec">
                            <h3 className="pur_txt2">제조</h3>
                            <div className="pur_list">
                                <div className="pur_txt3">제조일자 또는 유통기한</div>
                                <div className="pur_txt4">제조일로부터 18개월<br/>수령일 기준, 유통기한 최소 6개월 이상의 제품이 배송됩니다.</div>
                                <div className="pur_txt3">제조원</div>
                                <div className="pur_txt4">한국에스비식품㈜/경기도 화성시 황계남길 118(송산동).</div>
                                <div className="pur_txt3">판매원</div>
                                <div className="pur_txt4">샘표식품주식회사 / 본사 : 서울시 중구 충무로 2</div>
                            </div>
                        </div>
                        <div className="purchase_spec">
                            <h3 className="pur_txt2">포장</h3>
                            <div className="pur_list">
                                <div className="pur_txt3">포장 단위별 용량 및 수량</div>
                                <div className="pur_txt4">30g*1 / 90g(30g*3)</div>
                                <div className="pur_txt3">포장재질</div>
                                <div className="pur_txt4">(내면)폴리에틸렌</div>
                            </div>
                        </div>
                        <div className="purchase_spec">
                            <h3 className="pur_txt2">문의 방법</h3>
                            <div className="pur_list">
                                <div className="pur_txt3">반품 및 교환처</div>
                                <div className="pur_txt4">본사 및 구입처</div>
                                <div className="pur_txt3">부정ㆍ불량식품 신고</div>
                                <div className="pur_txt4">국번 없이 1399</div>
                                <div className="pur_txt3">관련 문의</div>
                                <div className="pur_txt4">- 제품 문의: 080-996-7777 (수신자부담)<br/>
                                                        - 배송 및 주문 문의: 02-3393-5938<br/>
                                                        - 운영 시간: 평일 오전 8시 30분 ~ 오후 5시 30분</div>
                            </div>
                        </div>
                        <h2 className="pur_txt1">배송정보</h2>
                        <div className="purchase_spec2">
                            <div className="pur_txt5">30,000원 이상 구매하시면 무료배송입니다.</div>
                            <div className="pur_txt5">구매금액이 30,000원 이하일 경우 배송료(2,500원)를 부담하셔야 합니다.</div>
                            <div className="pur_txt5">도서지역(제주 등)은 추가로 2,500원(총 30,000원 이하인 경우 5,000원)이 부과됩니다.</div>
                            <div className="pur_txt5">구매자 사정으로 교환이나 환불을 할 경우 왕복 배송료 5,000원은 구매자 부담이며, 제품에 이상이 있거나 잘못 배송이 된 경우에는 왕복 배송료를 샘표에서 부담합니다.</div>
                            <div className="pur_txt5">상품은 주문일로 부터 2~4일(도서지역 제외) 이내에 배달하는 것을 원칙적으로 하고 있으며, 제품 배송상태는 마이페이지 > 구매내역에서 확인하실 수 있습니다.</div>
                            <div className="pur_txt5">당일발송: 해당일 오전 11시 전까지 결제완료 주문분은 당일 오후에 발송됩니다.<br/>오전 11시 이후 결제완료 주문은 익일 발송되며 출고 특성상 지정일 배송은 불가능합니다</div>
                            <div className="pur_txt5">공휴일, 기타 휴무일에는 배송되지 않으며, 천재지변에 의한 기간은 배송기간에서 제외합니다.</div>
                            <div className="pur_txt5">배송은 결제 확인 후 진행됩니다.</div>
                        </div>
                        <h2 className="pur_txt1">환불,교환안내</h2>
                        <div className="purchase_spec2">
                            <div className="pur_txt5">상품의 불량 또는 오배송 등의 샘표 책임사유의 교환인 경우는 배송료를 샘표에서 부담합니다. (단순 변심으로는 교환이 되지않습니다.)</div>
                            <div className="pur_txt5">반품은 '전자상거래 등에서의 소비자보호에 관한 법률'에 의거하여, 물품 수령 후 7일 이내에 가능합니다. 단, 유통기한이 짧거나 냉장제품인 식품의 경우에는 교환이 불가합니다.</div>
                            <div className="pur_txt5">반품접수 후 제품입고가 확인 된 후에 환불절차가 진행됩니다.</div>
                            <div className="pur_txt5">결제 방법에 따라 환불절차가 다르게 진행되며 소요기간도 달라질 수 있습니다.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
