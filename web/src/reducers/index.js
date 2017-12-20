import { combineReducers } from 'redux'
import {createStore,applyMiddleware} from 'redux';

import thunk from 'redux-thunk'
import homeReducer from './home'
import userInfoReducer from './userInfo.js'
const reducers=combineReducers({
    userInfoReducer,
    homeReducer
})
const middleware = [ thunk ]
const store=createStore(reducers,applyMiddleware(...middleware));
export default store;
