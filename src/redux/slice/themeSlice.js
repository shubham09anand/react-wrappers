import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     font: "normal",
     baseFontMultiplier: 16,
     mode: "normal",
};

export const themeSlice = createSlice({
     name: "theme-slice",
     initialState,
     reducers: {
          setFont: (state, action) => {
               state.font = action.payload;
          },

          setBaseFontMultiplier: (state, action) => {
               state.baseFontMultiplier = action.payload;
          },

          setMode: (state, action) => {
               state.mode = action.payload;
          },
     },
});

export const {
     setFont,
     setBaseFontSize,
     setMode,
} = themeSlice.actions;

export default themeSlice.reducer;