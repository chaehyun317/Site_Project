import React, { useState, useEffect } from 'react';
import './Market.css';
import CustomPagination from '../component/CustomPagination';
import Item from './../component/Item';
import CATEGORY from '../jsons/category.json';
import { BsArrowClockwise } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import CategoryItem from '../component/CategoryItem';
import {API} from '../globals/api';
import Axios from 'axios';

const VIEW = 12;

const Market = ({ match, history }) => {
    const { params: { page } } = match;
    const [view, setView] = useState([]);
    const [items, setItems] = useState([]);
    const [dataList, setDataList] = useState([]);
    const [category, setCategory] = useState([]);
    const [onType, setOnType] = useState([]);
    const [keyword, setKeyword] = useState('');


    const onSubmenu = type => {
        const after = category.map(item => item.id === type ? ({...item, view: !item.view}) : item );
        setCategory(after);
    };

    const onCategory = type => {
        const flag = onType.some(item => item === type);
        if (flag) {
            const types = onType.filter(item => item !== type);
            setOnType(types);
        } else {
            const types = onType.concat(type);
            setOnType(types);
        }
    };

    const onchangekeyword = ev => {
        const { target: { value } } = ev;
        setKeyword(value);
    };

    const searchItem = () => {
        Axios.post(`${API}/SP_searchItem`,{keyword}).then(res => {
            const { data: { result, data, error } } = res;
            if (result) {
                setItems(data);
                setOnType([]);
            } else {
                console.log(error);
                alert('네트워크 오류 발생!');
            }
        });
    };

    const getItems = () => {
        Axios.get(`${API}/SP_getItem`).then(res => {
            const { data: { result, data } } = res;
            if (result) {
                setDataList(data);
                setItems(data);
            } else {
                alert('네트워크 오류 발생!');
            }
        });
    };

    const getCategoryItem = () => {
        Axios.post(`${API}/SP_getCategory`, {list: onType}).then(res => {
            const { data: { result, data, sql } } = res;
            if (result) {
                setItems(data);
                history.push('/market/1');
            } else {
                alert('네크워크 오류 발생');
            }
        });
    };
    
    useEffect(() => {
        const add = CATEGORY.map(item => ({...item, view: false}));
        setCategory(add);
    }, []);
    
    useEffect(() => {
        if (onType.length === 0) {
            if (keyword === '') {
                setItems(dataList);
            } else {
                setKeyword('');
                setCategory([]);
                const add = CATEGORY.map(item => ({...item, view: false}));
                setCategory(add);
            }
        } else {
            getCategoryItem();
        }
    }, [onType]);

    useEffect(() => {
        const start = (page - 1) * VIEW; 
        const end = start + VIEW > items.length ? items.length : start + VIEW;
        const _items = items.filter((item, idx) => (start <= idx && idx < end));
        setView(_items);
    }, [items, page]);

    useEffect(() => {
        getItems()
    }, []);
    
    
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
                            </div>
                            <CustomPagination path={'market'} page={page} total={items.length} view={VIEW}/>
                        </div>
                        <div className="finder">
                            <div className="finder_spacer">
                                <div className="finder_top">
                                    <div className="finder_title">
                                        <div className="finder_txt">제품검색</div>
                                    </div>
                                    <div className="searchbox">
                                        <div className="search_option">
                                            <p className="search_total">
                                                총 213개
                                            </p>
                                            <div className="search_icon">
                                                <span><BsArrowClockwise/></span>
                                            </div>
                                        </div>
                                        <div className="input_box">
                                            <input placeholder="검색어 입력" value={keyword} onChange={onchangekeyword} className="search_input"></input>
                                            <button className="input_icon" onClick={searchItem}><AiOutlineSearch onClick={onclick}/></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="categorys">
                                    {category.map(item => (
                                        <div className="categoryItem">
                                            <h1 onClick={() => onSubmenu(item.id)}>{item.label}</h1>
                                            {/* {item.view && ( */}
                                                <div className="small" style={{ display: item.view ? 'block' : 'none'}}>
                                                    {item.small.map(smallItem => (
                                                        <CategoryItem item={smallItem} onCategory={onCategory} onType={onType}/>
                                                    ))}
                                                </div>
                                            {/* )} */}
                                        </div>
                                    ))}
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
