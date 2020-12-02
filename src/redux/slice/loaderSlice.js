
import { createSlice } from "@reduxjs/toolkit";
const initialState=false

const loaderSlice=createSlice({
    name:"loader",
    initialState,
    reducers:{
        loaderOn(state, {payload}){
            return true
        },
        loaderOff(state, {payload}){
            return false
        }
    }
})

const { actions, reducer } = loaderSlice;
export const { loaderOn,loaderOff } = actions;

export default reducer;