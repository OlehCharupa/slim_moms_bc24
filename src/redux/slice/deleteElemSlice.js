import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const deleteItem = createSlice({
  name:'deletItem',
  initialState,
  reducers:{
      deleteItems(state,{payload}){
          return payload
      },
  }
})

const {actions,reducer} = deleteItem
export const{deleteItems}=actions

export default reducer

// const deleteItem = createSlice({
//   name: "deleteItems",
//   initialState,
//   reducers: {
//     deleteItem(state, { payload }) {
//       return state.filter((item) => item.id !== actions.payload);
//     },
//   },
// });

// const { actions, reducer } = deleteItem;
// export const { deleteItems } = actions;

// export default reducer;
