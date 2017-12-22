import { combineReducers } from 'redux'
import {createStore,applyMiddleware} from 'redux';

import thunk from 'redux-thunk'
import articalListReducer from './articalList'
import collectionReducer from './collection'
const reducers=combineReducers({
    collectionInfo:collectionReducer,
    articalList:articalListReducer
})
const middleware = [ thunk ]
const store=createStore(reducers,applyMiddleware(...middleware));
export default store;
