import { createSlice } from "@reduxjs/toolkit";
const initialState = null

const loaderSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        setToken(state, { payload }) {
            return payload
        },
        resetToken(state, { payload }) {
            return null
        }
    }
})

const { actions, reducer } = loaderSlice;
export const { setToken, resetToken } = actions;

export default reducer;