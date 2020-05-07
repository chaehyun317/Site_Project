import React, { useState, useEffect } from 'react';
import './Recipe.css';
import CustomPagination from '../../component/CustomPagination';
import ITEMS from '../../jsons/recipe.json'
import Item2 from '../../component/Item2';

const VIEW = 12;

const Recipe = ({ match }) => {
    const { params: { page } } = match;
    
    const [view, setView] = useState([]);

    useEffect(() => {
        const relist = ITEMS.filter(item => item.id === 'recipe');
        setView(relist);
    }, []);

    useEffect(() => {
        const start =  (page -1) * VIEW;
        const end = start + VIEW > ITEMS.length ? ITEMS.length - 1 : start + VIEW;
        const _items = ITEMS.filter((item, idx) => (start <= idx && idx < end));
        setView(_items);
    }, [page]);

    return (
        <div className="re_wrap">
            <div className="re_content">
                <div className="re_banner"></div>
                <div className="re_sec">
                    <div className="re_sec_wrap">
                        <div className="re_list_wrap"> 
                            <div className="list2">
                                {view.map((item) =>(
                                    <Item2 item={item}/>
                                ))}
                                <CustomPagination path={'recipe'} page={page} total={ITEMS.length} view={VIEW}/>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;
