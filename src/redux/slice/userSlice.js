import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    'username': ''
};

const loaderSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, { payload }) {
            return { ...state, ...payload };
        },
        resetUser(state, { payload }) {
            return initialState
        }
    }
})

const { actions, reducer } = loaderSlice;
export const { setUser, resetUser } = actions;

export default reducer;