import axios from "axios";
import { resetErrorRequest, setErrorRequest } from "../slice/errorRequestSlice";
import { setDateInfo } from "../slice/currentDateInfoSlice";
import { loaderOff, loaderOn } from "../slice/loaderSlice";

axios.defaults.baseURL = "http://slimmom-backend.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const getDateInfoOperation = (requestDate, persistedToken) => async (dispatch, getState) => {
  try {
    if (getState.errorRequest) {
      dispatch(resetErrorRequest())
    }
    dispatch(loaderOn());
    const result = await axios.post("/day/info", { "date": requestDate }, token.set(persistedToken))
    // dispatch(setDateInfo({"eatenProducts":result.data.eatenProducts, "daySummary":result.data.daySummary}));
 
    dispatch(setDateInfo(result.data))

  } catch (error) {
    dispatch(setErrorRequest(error.message));
  } finally {
    dispatch(loaderOff());
  }
};