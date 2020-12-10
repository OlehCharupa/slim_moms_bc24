import { createSlice } from "@reduxjs/toolkit";
const initialState = false

const loaderSlice=createSlice({
    name:"loader",
    initialState,
    reducers:{
        // loaderOn(state, {payload}){
        loaderOn(){
            return true
        },
        // loaderOff(state, {payload}){
        loaderOff(){
            return false
        }
    }
})

const { actions, reducer } = loaderSlice;
export const { loaderOn,loaderOff } = actions;

export default reducer;