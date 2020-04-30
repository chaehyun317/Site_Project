import React, { useEffect, useState } from 'react';
import './Pagination.css';

const VIEW = 12;
const ITEMS =[
    {"id": 1, "name": "[한정판]맛있는 추억간장(샘표 양조간장 501)", "price": 7220, "type": 42}
]

const Pagination = ({ history, match: { params: { page } } }) => {
    const [viewItem, setViewItem] = useState([]);
    const [total, setTotal] = useState(0);

    const CustomPagination = ({ totalPage }) => {
        let pages = [];
        for (let i = 1; i <= totalPage; i++) {
            pages = pages.concat(i);
        }
        return (
            <ul className="pagination">
                {pages.map((item) => (
                    <li
                        key={`PAGE${item}`}
                        onClick={() => history.push(`/list/${item}`)}
                        className={item === Number(page) ? 'activePage' : ''}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        );
    };

    useEffect(() => {
        const start = (page - 1) * VIEW;
        const end = start + VIEW > ITEMS.length ? ITEMS.length - 1 : start + VIEW;
        const _items = ITEMS.filter((item, idx) => (start <= idx && idx < end));
        setViewItem(_items);
    }, [page]);

    useEffect(() => {
        const ct = Math.ceil(ITEMS.length / VIEW);
        setTotal(ct);
    }, []);

    return (
        <div className="pageContainer">
            <div className="pageList">
                {viewItem.map((item, index) => (
                    <div key={`ITEM${index}`} className="pageItem">
                        {item.name}
                    </div>
                ))}
            </div>
            <CustomPagination totalPage={total} />
        </div>
    );
};

export default Pagination;

