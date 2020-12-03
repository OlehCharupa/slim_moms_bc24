import { combineReducers } from "redux";

import loaderSlice from "./loaderSlice";
import currentDateInfoSlice from "./currentDateInfoSlice";
import errorRequestSlice from "./errorRequestSlice";
import tokinSlice from './tokinSlice'
import userSlice from './userSlice'

const rootReducer = combineReducers({
  loader: loaderSlice,
  currenDateInfo: currentDateInfoSlice,
  errorRequest: errorRequestSlice,
  token: tokinSlice,
  user: userSlice
});

export default rootReducer;
