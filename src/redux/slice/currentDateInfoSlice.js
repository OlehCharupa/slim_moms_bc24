import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "eatenProducts": [],
    "currentDate": '',
    "daySummary": {}
}

const currentDateInfoSlice = createSlice({
    name: "currentDateInfo",
    initialState,
    reducers: {
        getCurrentDay(state, { payload }) {
            return { ...state, "currentDate": payload }
        },
        setDateInfo(state, { payload }) {
            return { ...state, "eatenProducts": payload.eatenProducts, "daySummary": payload.daySummary }
        }


    }
})


const { actions, reducer } = currentDateInfoSlice;
export const { getCurrentDay, setDateInfo } = actions;

export default reducer;