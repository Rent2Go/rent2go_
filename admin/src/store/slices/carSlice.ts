import { createSlice } from "@reduxjs/toolkit";
import { CarModel } from "../../models/responses/cars/GetCar";

interface CarItem{
    car: CarModel;
}

const carSlice = createSlice({
    name: "car",
    initialState: {
      carItems: (JSON.parse(localStorage.getItem("cart")!) || []) as CarItem[],
    },
    reducers:{

    }
})

export const carReducer = carSlice.reducer;