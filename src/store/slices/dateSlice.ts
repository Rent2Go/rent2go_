// store.js

import {createSlice } from '@reduxjs/toolkit';

const dateSlice = createSlice({
  name: 'dates',
  initialState: {
      startDate: new Date().getTime(), 
      endDate:  new Date((new Date()).getTime() + 24 * 60 * 60 * 1000).getTime() 

  },
  reducers: {
    setStartDate: (state, action) => {
      state.startDate = action.payload;
      sessionStorage.setItem('selectedStartDate', action.payload);
   
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
      sessionStorage.setItem('selectedEndDate',action.payload)
     
    },
    clearDates: (state:any) => {
     state.startDate = new Date().getTime();
      state.endDate=  new Date((new Date()).getTime() + 24 * 60 * 60 * 1000) ;
    },
  },
});

export const { setStartDate, setEndDate, clearDates } = dateSlice.actions;

export const dateReducer = dateSlice.reducer;
