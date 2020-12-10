import axios from "axios";
import { setErrorRequest } from "../slice/errorRequestSlice";
import { DailyCaloriesInfo } from "../slice/DailyCaloriesFormInfoSlice";
import { loaderOff, loaderOn } from "../slice/loaderSlice";
// import { resetUser } from "../slice/userSlice";


export const DailyCaloriesFormOperation = (requestDate, modalToggler) => async (dispatch) => {

  try {
    dispatch(loaderOn());
    const result = await axios.post("https://slimmom-backend.herokuapp.com/daily-rate", requestDate);
    dispatch(DailyCaloriesInfo(result.data))
  } catch (error) {
    dispatch(setErrorRequest(error.message));
  } finally {
    modalToggler(true)
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

export const DailyCaloriesFormOperationById = (
  requestDate,
  userId,
  userToken,
  modalToggler
) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const result = await axios.post(
      `https://slimmom-backend.herokuapp.com/daily-rate/${userId}`,
      requestDate,
      token.set(userToken)
    );
    dispatch(DailyCaloriesInfo(result.data));
  } catch (error) {
    dispatch(setErrorRequest(error.message));
  } finally {
    dispatch(loaderOff());
    modalToggler(true)
  }
};
