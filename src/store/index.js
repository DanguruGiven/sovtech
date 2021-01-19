import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { categoriesReducer, jokeReducer } from './reducers';

const rootReducer = combineReducers({ categoriesReducer, jokeReducer })

const store = createStore( rootReducer, applyMiddleware(thunk) )

export default store;