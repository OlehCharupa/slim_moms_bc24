import { createSlice } from "@reduxjs/toolkit";
const initialState={
    "eatenProducts":[],
    "currentDate":'',
    "daySummary":{}
}

const currentDateInfoSlice=createSlice({
    name:"currenDateInfo",
    initialState,
    reducers:{
        getCurrentDay(state, {payload}){
            return {...state, "currentDate":payload}
        },
       
    }
})

const { actions, reducer } = currentDateInfoSlice;
export const { getCurrentDay } = actions;

export default reducer;