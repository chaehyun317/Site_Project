import React from 'react';
import './Item.css';
import ImageURI from './../globals/ImageURI';

const Item3 = ({ item: { src, sub, name, desc } }) => {
    return (
        <div className="res_item2">
            <div className="res_inner">
                <div className="res_img">
                    <img src={`${ImageURI[src]}`}/>
                </div>
                <div className="res_desc_wrap">
                    <div className="res_sub">{sub}</div>
                    <div className="res_name">{name}</div>
                    <div className="res_desc">{desc}</div>
                </div>
            </div>
        </div>
    );
};

export default Item3;