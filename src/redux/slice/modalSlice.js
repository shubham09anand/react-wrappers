import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     message: "",
     title: "",
     button_1_lable: "",
     button_2_lable: "",
     open: false,
     onConfirm: null,
     onCancel: null,
     confirmLoading: false,
};

const modalSlice = createSlice({
     name: "modal-slice",
     initialState,
     reducers: {
          openModal: (state, action) => {
               state.open = true;

               if (action?.payload) {
                    state.title = action.payload.title ?? "";
                    state.message = action.payload.message ?? "";
                    state.button_1_lable = action.payload.button_1_lable ?? "";
                    state.button_2_lable = action.payload.button_2_lable ?? "";
                    state.onConfirm = action.payload.onConfirm ?? null;
                    state.onCancel = action.payload.onCancel ?? null;
                    state.confirmLoading = action.payload.confirmLoading ?? false;
               }
          },
          closeModal: (state) => {
               state.open = false;
               state.title = "";
               state.message = "";
               state.button_1_lable = "";
               state.button_2_lable = "";
               state.onConfirm = null;
               state.onCancel = null;
               state.confirmLoading = false;
          },
          setModalConfirmLoading: (state, action) => {
               state.confirmLoading = Boolean(action.payload);
          },
          resetModal: () => initialState,
     },
});

export const { openModal, closeModal, setModalConfirmLoading, resetModal } = modalSlice.actions;
export default modalSlice.reducer;
