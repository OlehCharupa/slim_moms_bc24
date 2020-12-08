import { createSlice } from "@reduxjs/toolkit";

const initialState = {
<<<<<<< HEAD
  "eatenProducts": [],
  "currentDate": '',
  "daySummary": {},
  "addProduct": []
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
    },
    addProductRequest(state, { payload }) {
      return state
    },
    addProductSuccess(state, { payload }) {
      return { ...state, "eatenProducts": [...state.eatenProducts, payload.eatenProduct], "daySummary": payload.daySummary }
    },
  }
=======
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
>>>>>>> dev
})


const { actions, reducer } = currentDateInfoSlice;
<<<<<<< HEAD
export const { getCurrentDay, setDateInfo, addProductRequest, addProductSuccess } = actions;
=======
export const { getCurrentDay, setDateInfo } = actions;
>>>>>>> dev

export default reducer;