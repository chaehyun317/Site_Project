const CartReducer = (state, {type, data}) => {
    switch(type) {
        case 'ADD_CART': {
            const flag = state.cart.some(item => item.id === data.id);
            let after = [];
            if (flag) {
                after = state.cart.map(item => (
                    item.id === data.id ? ({ ...item, count: item.count + data.count}) : item
                ));
            } else {
				// console.log(data);
                after = state.cart.concat(data)
			}
            state.cart = after;
            return { ...state };
        }

        case 'REMOVE_CHECK': {
			const after = state.cart.filter(item => !item.chcek);
			state.cart = after;
			return { ...state };
		}

		case 'REMOVE_ALL': {
			state.cart = [];
			return { ... state };
		}

        case 'SET_COUNT': {
			const after = state.cart.map(item => (
				item.id === data.id ? ({ ...item, count: data.count }) : item
			));
			state.cart = after;
			return {...state};
		}
		
		case 'REMOVE_ITEM': {
			const after = state.cart.filter(item => item.id !== data.id);
			state.cart = after;
			return { ...state };
		}
    }
};

export default CartReducer;