import React from 'react';
import './Market.css';
import CustomPagination from '../component/CustomPagination';
import Pagination from '../routes/Pagination';



const Market = () => {
    return (
        <div className="ma_wrap">
            <div className="ma_content">
                <div className="ma_banner"></div>
                <div className="ma_sec">
                    <div className="ma_product">
                        <div className="ma_list_wrap">
                              
                            {/* <ul className="ma_list">
                                <li className="ma_item">
                                    <div className="item_spacer"></div>
                                    <div className="item_cart">장바구니 담기</div>
                                </li>
                                <li className="ma_item">
                                    <div className="item_spacer"></div>
                                </li>
                                <li className="ma_item">
                                    <div className="item_spacer"></div>
                                </li>
                            </ul> */}
                        </div>
                        <div className="finder">
                            <div className="finder_spacer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Market;
