import React from 'react';
import './Item.css';
import ImageURI from '../globals/ImageURI';

const Item = ({ item: { name, price, src } }) => {
    return (
        <div className="ma_list">
            <div className="ma_item">
                <div className="ma_img">
                    <img src={`${ImageURI[src]}`} />
                </div>
                <div className="ma_name">
                    {name}
                </div>
                <div className="ma_price">
                    <span>{price}</span>원
                </div>
            </div>
            <div className="item_cart">장바구니 담기</div>
        </div>
    );
};

export default Item;