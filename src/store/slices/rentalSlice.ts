import { CarModel } from './../../models/responses/cars/GetCar';
import { createSlice } from '@reduxjs/toolkit';

// Yukarıda oluşturduğumuz initialState objesi
const initialState = {
  name: '',
  email: '',
  phone: '',
  startDate: null,
  endDate: null,
  car: {} as CarModel,
  rentalDays: 0,
  discount: '',
  tax: '',
  totalPrice: '',
};

const sliceName = 'rentalInfoSlice';

const rentalInfoSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setAction: (state, action) => {
    
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setAction } = rentalInfoSlice.actions;

export const rentalReducer = rentalInfoSlice.reducer;
