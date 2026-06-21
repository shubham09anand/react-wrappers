import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     online: null,
     showToast: null,
};

const networkSlice = createSlice({
     name: "network-slice",
     initialState,
     reducers: {
          updateNetworkStatus: (state, action) => {
               const { online, showToast } = action.payload;
               state.online = online;
               state.showToast = showToast;
          },
     },
});

export const { updateNetworkStatus } = networkSlice.actions;

export default networkSlice.reducer;