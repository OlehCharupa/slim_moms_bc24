import { combineReducers } from "redux";

import loaderSlice from "./loaderSlice";
import currentDateInfoSlice from "./currentDateInfoSlice";
import errorRequestSlice from "./errorRequestSlice";

const rootReducer = combineReducers({
  loader: loaderSlice,
  currenDateInfo: currentDateInfoSlice,
  errorRequest:errorRequestSlice
});

export default rootReducer;
