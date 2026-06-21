import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     userId: "",
     token: "",
     userName: "",
};

export const authSlice = createSlice({
     name: "auth",
     initialState,
     reducers: {
          login: (state, action) => {
               const { userId, userName, token } = action.payload;

               state.userId = userId;
               state.userName = userName;
               state.token = token;
          },

          updateProfile: (state, action) => {
               Object.assign(state, action.payload);
          },

          logout: () => initialState,
     },
});

export const { login, logout, updateProfile } = authSlice.actions;

export default authSlice.reducer;