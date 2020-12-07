import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const deleteItem = createSlice({
  name: "deleteItem",
  initialState,
  reducers: {
    deleteItem(state, { payload }) {
      return state.filter((items) => items.id !== action.payload);
    },
  },
});

const { actions, reducer } = deleteItem;
export const { deleteItem } = actions;

export default reducer;
