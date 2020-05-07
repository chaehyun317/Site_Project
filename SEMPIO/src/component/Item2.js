import React from 'react';
import './Item.css';
import ImageURI2 from './../globals/ImageURI2';

const Item2 = ({ item: { name, src, desc } }) => {
    return (
        <div className="re_list">
            <div className="re_item">
                <div className="re_inner">
                    <div className="re_img">
                        <img src={`${ImageURI2[src]}`} />
                    </div>
                    <div className="re_desc_wrap">
                        <div className="re_desc">
                            {desc}
                        </div>
                        <div className="re_name">
                            {name}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item2;
