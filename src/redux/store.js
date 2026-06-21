import { configureStore } from "@reduxjs/toolkit";
import authSlice from './slice/authSlice';
import modalSlice from "./slice/modalSlice";
import themeSlice from "./slice/themeSlice";
import profileSlice from './slice/profileSlice';
import networkSlice from "./slice/networkSlice";


export const store = configureStore({
     reducer: {
          authReducer: authSlice,
          modalReducer: modalSlice,
          themeReducer: themeSlice,
          profileReducer: profileSlice,
          networkReducer: networkSlice,
     },
})