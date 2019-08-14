import {API_BASE_URL} from '../config';

export const DELETE_ITEM = 'DELETE_ITEM'
 const deleteAnItem = (id) => ({
	type: DELETE_ITEM,
	id
})

export const ADD_ITEM = 'ADD_ITEM'
export const addAnItem = (input) => ({
	type: ADD_ITEM,
	input
})

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
 const receiveItems = (items) => ({
	type: RECEIVE_ITEMS,
	items
})

export const SEARCH_ITEMS_REQUEST = 'SEARCH_ITEMS_REQUEST';
export const searchItemsRequest = () => ({
	type: SEARCH_ITEMS_REQUEST
});

export const SEARCH_ITEMS_SUCCESS = 'SEARCH_ITEMS_SUCCESS';
export const searchItemsSuccess = (items) => ({
    type: SEARCH_ITEMS_SUCCESS,
    items
});

export const SEARCH_ITEMS_ERROR = 'SEARCH_ITEMS_ERROR';
export const searchItemsError = (error) => ({
    type: SEARCH_ITEMS_ERROR,
    error
});

export const saveItem = (item) => {
	return dispatch => {
		fetch(`${API_BASE_URL}/item/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(item)
		})
		.then(response => response.json())
		.then(json => dispatch(addAnItem(json)))
		.catch(err => console.log(err))
	}
}

export const getItems = (email) => {
	return dispatch => {
		fetch(`${API_BASE_URL}/item/${email}`, {
			method: 'GET'
		})
		.then(response => response.json())
		.then(json => dispatch(receiveItems(json)))
		.catch(err => console.log(err))
	}
}

export const getAllItems = (item) => {
	return dispatch => {
		fetch(`${API_BASE_URL}/item/`, {
			method: 'GET',
		})
		.then(response => response.json())
		.then(json => dispatch(receiveItems(json)))
		.catch(err => console.log(err))
	}
}

export const deleteItem = (_id) => {
	return dispatch => {
		fetch(`${API_BASE_URL}/item/${_id}`, {
			method: 'DELETE'
		})
		.then(response => response.json())
		.then(json => dispatch(deleteAnItem(json._id)))
		.catch(err => console.log(err))
	}
}

export const searchItems = (itemName) => {
    return dispatch => {
    	fetch(`${API_BASE_URL}/item/find/${itemName}`, {
			method: 'GET'
		})
		.then(response => response.json())
		.then(json => dispatch(receiveItems(json)))
		.catch(err => console.log(err))
    }
};