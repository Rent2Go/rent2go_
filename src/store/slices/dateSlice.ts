// store.js
import { getTodayDate } from '@mui/x-date-pickers/internals';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const dateSlice = createSlice({
  name: 'dates',
  initialState: {
      startDate: null, // Bugünün tarihini zaman damgası olarak ayarla
      endDate: null, 
   
    
  },
  reducers: {
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
     
    },
    clearDates: (state) => {
      state.startDate =null;
      state.endDate =null;
    },
  },
});

export const { setStartDate, setEndDate, clearDates } = dateSlice.actions;

export const dateReducer = dateSlice.reducer;
