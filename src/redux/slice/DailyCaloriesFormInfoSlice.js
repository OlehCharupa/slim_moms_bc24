import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  dailyRate: "",
  notAllowedProducts: [],
};

const DailyCaloriesFormInfoSlice = createSlice({
  name: "DailyCaloriesFormInfo",
  initialState,
  reducers: {
    DailyCaloriesInfo(state, { payload }) {
      const { dailyRate, notAllowedProducts } = payload;
      return { dailyRate, notAllowedProducts };
    },
    resetDailyCaloriesInfo(state, { payload }) {
      return initialState
    }
  },
});

const { actions, reducer } = DailyCaloriesFormInfoSlice;
export const { DailyCaloriesInfo, resetDailyCaloriesInfo } = actions;

export default reducer;
