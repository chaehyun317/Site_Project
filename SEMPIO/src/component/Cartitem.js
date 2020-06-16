import React, { useContext, useState } from 'react';
import AppContext from '../contexts/AppContext';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import '../routes/Cart.css';
import { FILE } from '../globals/api';

const nf = new Intl.NumberFormat();

const CartItem = ({ item }) => {
    const { state, dispatch } = useContext(AppContext);

    const onChangeCount = ev => {
		const { target: { value } } = ev;
		dispatch({ type: 'SET_COUNT', data: {...item, count: Number(value)}});
	};

	const plus = () => {
        if (item.count > 98) {
            return;
        }
        dispatch({ type: 'SET_COUNT', data: {...item, count: item.count + 1 }});
    };

    const minus = () => {
        if (item.count === 1) {
            return;
        }
        dispatch({ type: 'SET_COUNT', data: {...item, count: item.count - 1 }});
    };

	const remove = () => {
		dispatch({ type: 'REMOVE_ITEM', data: { id: item.id } });
	};

	return (
		<div>
			<div className="order item_cont">
				<div className="order_inner">
					<input type="checkbox" className="o_col checkbox"></input>
					<div className="o_col t_title">
						<div className="td_thumb" style={{backgroundImage: `url(${FILE}/${item.img})`}}></div>
						<div className="td_cont">
							<div className="m_name">{item.name}</div>
							<div className="m_capacity">용량: {item.unit}</div>
						</div>
					</div>
					<div className="o_col t_price">
						<div className="td_cont2">
							{nf.format(item.price)}원
						</div>
					</div>
					<div className="o_col t_volume">
						<div className="count_box2">
							<span className="count_l" onClick={minus}>
								<AiOutlineMinus/>
							</span>
							<input className="count_num2" type="text" value={item.count} onChange={onChangeCount}></input>
							<span className="count_r" onClick={plus}>
								<AiOutlinePlus/>
							</span>
						</div>
					</div>
					<div className="o_col t_amount">{nf.format(item.price * item.count)}원</div>
					<div className="o_col t_care">
						<button className="btn_s">바로 구매</button>
						<button className="btn_d" onClick={remove}>삭제</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItem;