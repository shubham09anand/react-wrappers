import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     userId: "",
     fullName: "",
     email: "",
     phone: "",
     profileImage: "",
};

export const profileSlice = createSlice({
     name: "auth",
     initialState,
     reducers: {
          login: (state, action) => {
               const {
                    userId,
                    fullName,
                    phone,
                    email,
                    profileImage,
               } = action.payload;

               state.userId = userId;
               state.fullName = fullName;
               state.phone = phone;
               state.email = email;
               state.profileImage = profileImage || "";
          },

          updateProfileImage: (state, action) => {
               state.profileImage = action.payload;
          },

          updateProfile: (state, action) => {
               Object.assign(state, action.payload);
          },

          logout: () => initialState,
     },
});

export const {
     login,
     updateProfileImage,
     updateProfile,
     logout,
} = profileSlice.actions;

export default profileSlice.reducer;