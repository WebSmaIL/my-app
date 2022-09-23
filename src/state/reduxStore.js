import { combineReducers, legacy_createStore as createStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from './usersReducer';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './reducer';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

let reducers = combineReducers({
    dialogs: dialogsReducer,
    profile: profileReducer,
    usersPage: usersReducer,
    auth : authReducer
});

let store = createStore(reducers, composedEnhancer);

export default store;