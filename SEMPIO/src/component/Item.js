import React, { useContext, useState } from 'react';
import './Item.css';
import ImageURI from '../globals/ImageURI';
import { Link } from 'react-router-dom';
import AppContext from '../contexts/AppContext';

const nf = new Intl.NumberFormat();

const Item = ({ item, item: { id, name, price, src, best, gift } }) => {
    const { state, dispatch } = useContext(AppContext);
    
    const onCart = () => {
        dispatch({ type: 'ADD_CART', data: {...item, count: 1}});
    };

    return (
        <div className="ma_list">
            <Link to={`/detail/${id}`}>
                <div className="ma_item">
                    <div className="ma_img">
                        <img src={`${ImageURI[src]}`} />
                        <div className="best">
                            <div className="best_icon">BEST{best}</div>
                        </div>
                        <div className="gift">
                            GIFT{gift}
                        </div>
                    </div>
                    <div className="ma_name">
                        {name}
                    </div>
                    <div className="ma_price">
                        <span>{nf.format(price)}</span>원
                    </div>
                </div>
            </Link>
            <button className="item_cart" onClick={onCart}>장바구니 담기</button>
        </div>
    );
};

export default Item;