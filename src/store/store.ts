import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { carReducer } from "./slices/carSlice";
import { loadingReducer } from "./slices/loadingSlice";


const rootReducer = combineReducers({
    cars:carReducer,
    loading:loadingReducer

});

export const store = configureStore({ reducer: rootReducer });
export type AppDispatch = typeof store.dispatch;

export default store;
