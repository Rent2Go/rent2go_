import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { carReducer } from "./carSlice";
import { loadingReducer } from "./loadingSlice";


const rootReducer = combineReducers({
    car:carReducer,
    loading:loadingReducer

});

export const store = configureStore({ reducer: rootReducer });
export type AppDispatch = typeof store.dispatch;

export default store;
