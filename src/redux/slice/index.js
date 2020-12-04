import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage"

import loaderSlice from "./loaderSlice";
import currentDateInfoSlice from "./currentDateInfoSlice";
import errorRequestSlice from "./errorRequestSlice";


const dateInfoPersistConfig = {
  key: 'currentDate',
  version: 1,
  storage,
  whitelist: ['currentDate']
}


const rootReducer = combineReducers({
  loader: loaderSlice,
  currentDateInfo: persistReducer(dateInfoPersistConfig,currentDateInfoSlice),
  errorRequest:errorRequestSlice
});

export default rootReducer;
