import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { carReducer } from "./slices/carSlice";
import { loadingReducer } from "./slices/loadingSlice";
import { filterReducer } from "./slices/filterSlice";


const rootReducer = combineReducers({
    car:carReducer,
    loading:loadingReducer,
    filters:filterReducer,

});

export const store = configureStore({ reducer: rootReducer });
export type AppDispatch = typeof store.dispatch;

export default store;
