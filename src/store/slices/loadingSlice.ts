import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice(
    {
        name: 'loadingSlice',
        initialState: {requestCount:0 },
        reducers: {

            increaseRequestCount:state => {
                state.requestCount++;
            },
            decreaseRequestCount:state => {
                state.requestCount--;
            }


        }
    });
    export const loadingReducer = loadingSlice.reducer;
    export const{increaseRequestCount,decreaseRequestCount} = loadingSlice.actions; 
