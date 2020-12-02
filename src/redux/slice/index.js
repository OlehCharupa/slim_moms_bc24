import { combineReducers } from "redux";


import loaderSlice from "./loaderSlice";



const rootReducer=combineReducers({
   
    loader:loaderSlice,
    
})

export default rootReducer