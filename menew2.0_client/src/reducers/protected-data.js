import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR
} from '../actions/protected-data';
import {
    ADD_ITEM,
    DELETE_ITEM
} from '../actions/index';

const initialState = {
    data: [],
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    else if (action.type === ADD_ITEM) {
        return {
            ...state,
            data: [...state.data, action.input]
        }
        
    }
    else if (action.type === DELETE_ITEM) {
    const data = state.data.filter(item => item._id !== action.id)
        return {
                ...state,
                data: data
            }
    }

    return state;
}