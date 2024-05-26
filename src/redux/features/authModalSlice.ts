import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginDialogOpen: false, 
};

const authModalSlice = createSlice({
  name: "authModal",
  initialState,
  reducers: {
    toggleLoginDialog: (state, action) => {
      state.isLoginDialogOpen = action.payload;
    },
    
  },
});

export const {
  toggleLoginDialog,
} = authModalSlice.actions;

export default authModalSlice.reducer;
