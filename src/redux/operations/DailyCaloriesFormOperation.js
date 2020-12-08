import axios from "axios";
import { setErrorRequest } from "../slice/errorRequestSlice";
import {DailyCaloriesInfo} from "../slice/DailyCaloriesFormInfoSlice"
import { loaderOff, loaderOn } from "../slice/loaderSlice";

export const DailyCaloriesFormOperation = (requestDate) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const result = await axios.post("http://slimmom-backend.herokuapp.com/daily-rate", requestDate);
    // console.log(result.data);
    dispatch(DailyCaloriesInfo(result.data))
  } catch (error) {
    dispatch(setErrorRequest(error.message));
  } finally {
    dispatch(loaderOff());
  }
};

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const DailyCaloriesFormOperationById = (requestDate, userId, userToken) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const result = await axios.post(`http://slimmom-backend.herokuapp.com/daily-rate/${userId}`, requestDate, token.set(userToken))
    console.log(result);
    dispatch(DailyCaloriesInfo(result.data))
  } catch (error) {
    dispatch(setErrorRequest(error.message));
  } finally {
    dispatch(loaderOff());
  }
};
