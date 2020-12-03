import { createSlice } from "@reduxjs/toolkit";
const initialState=''

 const errorRequestSlice=createSlice({
    name:'errorRequest',
    initialState,
    reducers:{
        setErrorRequest(state,{payload}){
            return payload
        },
        resetErrorRequest(state,{payload}){
            return initialState
        }
    }
})

const {actions,reducer} = errorRequestSlice
export const{setErrorRequest,resetErrorRequest}=actions

export default reducer