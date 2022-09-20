import { combineReducers, legacy_createStore as createStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from './usersReducer';

let reducers = combineReducers({
    dialogs: dialogsReducer,
    profile: profileReducer,
    usersPage: usersReducer,
    auth : authReducer
});

let store = createStore(reducers);

export default store;