import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';
import { loadAuthToken } from './local-storage'
import authReducer from './reducers/auth'
import protectedDataReducer from './reducers/protected-data'
import items from './reducers/items';
import searchItems from './reducers/search-items';
import { setAuthToken, refreshAuthToken } from './actions/auth'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
        form: formReducer,
        auth: authReducer,
        protectedData: protectedDataReducer,
        items: items,
        searchItems: searchItems

    }),
  composeEnhancer(applyMiddleware(thunk)),
);

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store