import React, { useEffect, useState } from 'react';
import './Pagination.css';
import CustomPagination from '../component/CustomPagination';

const VIEW = 12;
const ITEMS = [];

const Pagination = ({ history, match: { params: { page } } }) => {
	const [viewItem, setViewItem] = useState([]);

	useEffect(() => {
		const start = (page - 1) * VIEW; 
		const end = start + VIEW > ITEMS.length ? ITEMS.length - 1 : start + VIEW;
		const _items = ITEMS.filter((item, idx) => (start <= idx && idx < end));
		setViewItem(_items);
	}, [page]);

	return (
		<div className="pageContainer">
			<div className="pageList">
				{viewItem.map((item, index) => (
					<div key={`ITEM${index}`} className="pageItem">
						{item.name}
					</div>
				))}
			</div>
			<CustomPagination total={ITEMS.length} view={12} page={page} />
		</div>
	);
};

export default Pagination;

