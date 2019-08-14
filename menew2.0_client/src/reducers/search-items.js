import {
    SEARCH_ITEMS_REQUEST,
    SEARCH_ITEMS_SUCCESS,
    SEARCH_ITEMS_ERROR
} from '../actions/index';

const initialState = {
	items: [],
	loading: false,
	error: null
};

export default function searchItems(state = initialState, action) {
	if (action.type === SEARCH_ITEMS_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
			error: null
		});
	}
	else if (action.type === SEARCH_ITEMS_SUCCESS) {
		return Object.assign({}, state, {
			items: action.items,
			loading: false,
			error: null
		});
	}
	else if (action.type === SEARCH_ITEMS_ERROR) {
		return Object.assign({}, state, {
			error: action.error,
			loading: false
		});
	}
	return state;
}