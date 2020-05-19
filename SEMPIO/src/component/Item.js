import React from 'react';
import './Item.css';
import ImageURI from '../globals/ImageURI';
import { Link } from 'react-router-dom';

const Item = ({ item: { id, name, price, src, best, gift } }) => {
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
                        <span>{price}</span>원
                    </div>
                </div>
            </Link>
            <div className="item_cart">장바구니 담기</div>
        </div>
    );
};

export default Item;