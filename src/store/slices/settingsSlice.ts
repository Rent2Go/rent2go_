import { SettingsModel } from './../../../admin/src/models/responses/settings/SettingsModel';
import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        setting: null,

    },
    reducers:{
        setPageSettings: (state, action) => {
            state.setting = action.payload;
          },

    }
   
 })

 export const { setPageSettings } = settingsSlice.actions;

 export const settingsReducer = settingsSlice.reducer;
