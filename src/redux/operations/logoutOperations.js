import axios from "axios";
import { persistor } from "../store";
import { resetcurrentDateInfoSlice } from "../slice/currentDateInfoSlice";
import { resetDailyCaloriesInfo } from "../slice/DailyCaloriesFormInfoSlice";
import { resetErrorRequest, setErrorRequest } from "../slice/errorRequestSlice";
import { loaderOff, loaderOn } from "../slice/loaderSlice";
import { resetToken } from "../slice/tokinSlice";
import { resetUser } from "../slice/userSlice";

export const logOut = (token) => async (dispatch) => {
  try {
    dispatch(resetErrorRequest())
    dispatch(loaderOn());
    await axios({
      url: "http://slimmom-backend.herokuapp.com/auth/logout",
      method: "post",
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(resetToken());
    dispatch(resetcurrentDateInfoSlice())
    dispatch(resetDailyCaloriesInfo())
    dispatch(resetUser());
  } catch (error) {
    dispatch(setErrorRequest(error.message));
  } finally {
    dispatch(loaderOff());
  }
};
