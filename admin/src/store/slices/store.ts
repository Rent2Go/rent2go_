import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { carReducer } from "./carSlice";


const rootReducer = combineReducers({
    car:carReducer,

});

export const store = configureStore({ reducer: rootReducer });
export type AppDispatch = typeof store.dispatch;

export default store;
