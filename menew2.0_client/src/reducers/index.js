import { combineReducers } from 'redux'
import { reducer as modal } from 'react-redux-modal-flex'
import items from './items'
import searchItems from './search-items'


const rootReducer = combineReducers({
	items,
	searchItems
})

export default rootReducer