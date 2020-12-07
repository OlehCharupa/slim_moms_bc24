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
      return { dailyRate, notAllowedProducts};
    },
  },
});

const { actions, reducer } = DailyCaloriesFormInfoSlice;
export const { DailyCaloriesInfo } = actions;

export default reducer;
