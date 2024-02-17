
import { PriceCardModel } from '../../models/requests/reservation/PriceCardModel';
import { DiscountModel } from '../../models/responses/discounts/DiscountModel';
import { UserModel } from '../../models/user/UserModel';
import { CarModel } from './../../models/responses/cars/GetCar';
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: {} as UserModel,
  startDate: null,
  endDate: null,
  car: {} as CarModel,
  rentalDays: 0,
  discount:{} as DiscountModel,
  priceCard: {} as PriceCardModel,
 
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
