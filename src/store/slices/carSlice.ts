import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CarModel } from "../../models/responses/cars/GetCar";
import CarService from "../../services/CarService";



export const fetchCarData = createAsyncThunk("fetchCarData", async (args, thunkAPI) => {

  const state: any = thunkAPI.getState();

  if (state.car.cars.length > 0 && !(new Date().getTime() - state.car.lastFetch > 1000 * 60 * 60)) {
    return state.car.cars;
  }

  const response = await CarService.getAll();

  return response.data.data;

});

const carSlice = createSlice({
  name: "cars",
  initialState: { loading: "", cars: [] as CarModel[], lastFetch: new Date().getTime() },
  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchCarData.pending, state => {
      state.loading = "Loading cars"


    });
    builder.addCase(fetchCarData.fulfilled, (state, action) => {
      state.loading = "loaded";
      state.cars = action.payload;

    });
    builder.addCase(fetchCarData.rejected, state => {
      state.loading = "Errors"

    });

  }
})

export const carReducer = carSlice.reducer;
