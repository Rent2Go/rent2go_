
import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        setting: {
            "id": 1,
            "title": "Rent2go",
            "url": "http://localhost:3000/",
            "logo": "http://res.cloudinary.com/dmusx2nmy/image/upload/v1707746759/rent2go/1.png",
            "tabLogo": "http://res.cloudinary.com/dmusx2nmy/image/upload/v1707954081/rent2go/2.png",
            "phoneNumber": "02163314800",
            "email": "support@rento2go.com",
            "address": "Kavacık, Rüzgarlıbahçe Mah. Çampınarı Sok. No:4 Smart Plaza B Blok Kat:3 34805, Beykoz,İstanbul",
            "linkedin": "https://www.linkedin.com/company/tobeto/",
            "instagram": "https://www.instagram.com/tobeto_official/",
            "github": "https://github.com/Rent2Go"
        },

    },
    reducers:{
        setPageSettings: (state, action) => {
            state.setting = action.payload;
          },

    }
   
 })

 export const { setPageSettings } = settingsSlice.actions;

 export const settingsReducer = settingsSlice.reducer;
