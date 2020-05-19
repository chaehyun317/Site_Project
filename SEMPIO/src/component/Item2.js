import React from 'react';
import './Item.css';
import ImageURI from './../globals/ImageURI';
import { Link } from 'react-router-dom';

const Item2 = ({ item: { id, name, src, desc } }) => {
    return (
        <div className="re_list">
            <Link to={`/detail2/${id}`}>
                <div className="re_item">
                    <div className="re_inner">
                        <div className="re_img">
                            <img src={`${ImageURI[src]}`} />
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
            </Link>
        </div>
    );
};

export default Item2;
