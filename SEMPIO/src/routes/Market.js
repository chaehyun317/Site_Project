import React, { useState, useEffect } from 'react';
import './Market.css';
import CustomPagination from '../component/CustomPagination';
import Item from './../component/Item';
import ITEMS from '../jsons/market.json';

const VIEW = 12;

const Market = ({ match, history }) => {
    // const page = match.params.page;
    const { params: { page } } = match;

    const [view, setView] = useState([]);

    const onPage = value => {
        history.push(`/market/${value}`);
    };

    useEffect(() => {
        const malist = ITEMS.filter(item => item.id === 'market');
        setView(malist);
    }, []);

    useEffect(() => {
        const start = (page - 1) * VIEW; 
		const end = start + VIEW > ITEMS.length ? ITEMS.length - 1 : start + VIEW;
		const _items = ITEMS.filter((item, idx) => (start <= idx && idx < end));
		setView(_items);
    }, [page]);
    
    
    return (
        <div className="ma_wrap">
            <div className="ma_content">
                <div className="ma_banner"></div>
                <div className="ma_sec">
                    <div className="ma_product">
                        <div className="ma_list_wrap">
                            <div className="list">
                                {view.map((item) =>(
                                    <Item item={item}/>
                                ))}
                                <CustomPagination page={page} total={ITEMS.length} view={VIEW}/>
                            </div>
                        </div>
                        <div className="finder">
                            <div className="finder_spacer">
                                <div className="finder_top">
                                    <div className="finder_title">
                                        <div className="finder_txt">제품검색</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Market;
