import React, { useState, useEffect } from 'react';

const CategoryItem = ({ onCategory, item: { id, name, type } }) => {
	const [check, setCheck] = useState(false);
	const onChangeCheck = ev => {
		const { target: { checked } } = ev;
		setCheck(checked);
		onCategory(type);
	};

	return (
		<label className="check">
			<input type="checkbox" checked={check} onChange={onChangeCheck} className="checkbox"/>
			<div>{name}</div>
		</label>
	);
};

export default CategoryItem;