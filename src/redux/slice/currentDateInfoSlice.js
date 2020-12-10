import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eatenProducts: [],
  currentDate: "",
  daySummary: {},
  dayID: "",
};

const currentDateInfoSlice = createSlice({
  name: "currentDateInfo",
  initialState,
  reducers: {
    getCurrentDay(state, { payload }) {
      return { ...state, currentDate: payload };
    },
    setDateInfo(state, { payload }) {
      return {
        ...state,
        eatenProducts: payload.eatenProducts ? payload.eatenProducts : [],
        daySummary: payload.daySummary ? payload.daySummary : {},
        dayID: payload.id,
      };
    },

    addProductSuccess(state, { payload }) {
      return {
        ...state,
        eatenProducts: [...state.eatenProducts, payload.eatenProduct],
        daySummary: payload.daySummary,
        dayID: payload.day ? payload.day.id : payload.newDay.id,
      };
    },
    deleteItems(state, { payload }) {
      console.log("payload", payload);
      return {
        ...state,
        eatenProducts: state.eatenProducts.filter(
          (item) => item.id !== payload.id
        ),
        daySummary: payload.newDaySummary,
      };
    },
  },
});

const { actions, reducer } = currentDateInfoSlice;
export const {
  getCurrentDay,
  setDateInfo,
  addProductRequest,
  addProductSuccess,
  deleteItems,
} = actions;

export default reducer;
