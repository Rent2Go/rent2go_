// store.js
import {  createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        body: [] as string[],
        gear: [] as string[],
        fuel: [] as string[],
    },
    reducers: {
        setBodyFilter: (state, action) => {
            state.body = [...state.body, action.payload];
        },
        removeBodyFilter: (state, action) => {
            state.body = state.body.filter((item) => item !== action.payload);
        },

        setGearFilter: (state, action) => {
            state.gear = [...state.gear, action.payload];
        },
        removeGearFilter: (state, action) => {
            state.gear = state.gear.filter((item) => item !== action.payload);
        },

        setFuelFilter: (state, action) => {
            state.fuel = [...state.fuel, action.payload];
        },
        removeFuelFilter: (state, action) => {
            state.fuel = state.fuel.filter((item) => item !== action.payload);
        },

    },
});

export const filterReducer = filtersSlice.reducer;
export const { setBodyFilter, removeBodyFilter, setGearFilter,removeGearFilter, setFuelFilter,removeFuelFilter} = filtersSlice.actions;

// ...

