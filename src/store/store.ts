import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { carReducer } from "./slices/carSlice";
import { loadingReducer } from "./slices/loadingSlice";
import { filterReducer } from "./slices/filterSlice";
import { settingsReducer } from "./slices/settingsSlice";
import { dateReducer } from "./slices/dateSlice";


const rootReducer = combineReducers({
    car:carReducer,
    loading:loadingReducer,
    filters:filterReducer,
    settings:settingsReducer,
    rentalDate:dateReducer

});

export const store = configureStore({ reducer: rootReducer });
export type AppDispatch = typeof store.dispatch;

export default store;
