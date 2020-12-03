import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const exitInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    resetToken: (state, action) => {
      return null;
    },
  },
});

const { actions, reducer } = exitInfoSlice;
export const { resetToken } = actions;

export default reducer;
