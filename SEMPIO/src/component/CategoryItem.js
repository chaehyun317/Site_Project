import React, { useState, useEffect } from 'react';

const CategoryItem = ({ onCategory, onType, item: { id, name, type } }) => {
	const [check, setCheck] = useState(false);
	const onChangeCheck = ev => {
		onCategory(type);
	};

	useEffect(() => {
		const flag = onType.some(item => item === type);
		setCheck(flag);
	}, [onType]);

	return (
		<label className="check">
			<input type="checkbox" checked={check} onChange={onChangeCheck} className="checkbox"/>
			<div>{name}</div>
		</label>
	);
};

export default CategoryItem;

//요리에센스 연두 청양초
//샘표 진공 소면
//샘표 김치찌개전용 꽁치
//제품 하나면 화면에 안뜸(저녁7시, 물엿)