import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../contexts/AppContext';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import CartItem from '../component/Cartitem';
import './Cart.css';
import { Link } from 'react-router-dom';


const nf = new Intl.NumberFormat();
const DELIVERY = 2500;

const Cart = () => {
    const { state, dispatch } = useContext(AppContext);
    const [totalAmount, setTotalAmount] = useState(0);
    const [billPrice, setBillPrice] = useState(0);

	useEffect(() => {
		const _totalAmount = state.cart.reduce((acc, cur) => {
			acc = acc + cur.price * cur.count;
			return acc;
		}, 0);
		setTotalAmount(_totalAmount);
    }, [state.cart]);
    
    useEffect(() => {
        const _billPrice = state.cart.reduce((acc, cur) => {
            acc = acc + cur.price * cur.count;
            return acc;
        }, 0);
        setBillPrice(_billPrice);
    }, [state.cart]);


    return (
        <div className="cart_wrap">
			<div className="order_header">
                <div className="o_wrap">
                    <h1 className="o_txt">장바구니</h1>
                    <div className="step_shop">
                        <ul>
                            <li>
                                <span className="number">01</span>
                                장바구니
                            </li>
                            <li>
                                <span className="number">02</span>
                                결제하기
                            </li>
                            <li>
                                <span className="number">03</span>
                                주문완료
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="order_content">
                <div className="o_wrap">
                    <div className="o_section">
                        <h2 className="o_txt2">
                            주문 리스트
                            <span className="o_txt2_1">0/{ state.cart.length }</span>
                            개
                        </h2>
                        <div className="list">
                            <div>
                                <div className="order_list">
                                    <div className="order item_head">
                                        <div className="order_inner">
                                            <input type="checkbox" className="o_col checkbox"></input>
                                            <div className="o_col t_title">제품</div>
                                            <div className="o_col t_price">판매가격</div>
                                            <div className="o_col t_volume">수량</div>
                                            <div className="o_col t_amount">주문금액</div>
                                            <div className="o_col t_care"></div>
                                        </div>
                                    </div>
                                    {state.cart.map(item => (
                                        <CartItem key={`CARTITEM${item.id}`} item={item} />
                                    ))}
                                </div>
                                <div className="order_total">
                                    <div className="order_total_item bill">
                                        <div className="b_price">
                                            제품 가격
                                            <b>{nf.format(billPrice)}</b>원
                                        </div>
                                        <div className="b_dc">
                                            <span className="btn_minus"><AiOutlineMinus/></span>
                                            제품 할인
                                            <b>0</b>원
                                        </div>
                                        <div className="b_delivery">
                                            <span className="btn_minus"><AiOutlinePlus/></span>
                                            배달비<b>{nf.format(DELIVERY)}</b>원
                                        </div>
                                    </div>
                                    <div className="order_total_item pay">
                                        <div className="pay_amount">
                                            결제 예정 금액
                                            <span className="pay_red">{nf.format(totalAmount + DELIVERY)}</span>원
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <button onClick={removeAll}>전체삭제</button> */}
                    <div className="order_func">
                        <span>
                            <Link to="/market/1">
                                <button className="func_item1">계속 쇼핑하기</button>
                            </Link>
                            <button className="func_item1">선택제품 주문</button>
                            <button className="func_item2">전체제품 주문</button>
                        </span>
                    </div>
                </div>
            </div>
		</div>
    );
};

export default Cart;
