import { combineReducers, legacy_createStore as createStore } from '@reduxjs/toolkit';
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
    dialogs: dialogsReducer,
    profile: profileReducer
});

let store = createStore(reducers);

export default store;