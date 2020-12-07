import { createSlice } from "@reduxjs/toolkit";
const initialState = {id:``};

const loaderSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, { payload }) {
            return payload;;
        },
        resetUser(state, { payload }) {
            return null
        }
    }
})

const { actions, reducer } = loaderSlice;
export const { setUser, resetUser } = actions;

export default reducer;