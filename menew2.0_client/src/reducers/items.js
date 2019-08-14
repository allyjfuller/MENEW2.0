const initialState = {
	data: []
}

const items = (state = initialState, action) => {
	switch(action.type) {
		case 'RECEIVE_ITEMS':
		return {
			...state,
			data: action.items	
		}

		case 'DELETE_ITEM':
		const data = state.data.filter(item => item._id !== action.id)
			return {
				...state,
				data: data
			}

		default:
		return state
	}
}

export default items