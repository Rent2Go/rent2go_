import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { carReducer } from "./slices/carSlice";
import { settingsReducer } from "./slices/settingsSlice";


const rootReducer = combineReducers({
    car:carReducer,
    settings:settingsReducer
});

export const store = configureStore({ reducer: rootReducer });
export type AppDispatch = typeof store.dispatch;

export default store;
