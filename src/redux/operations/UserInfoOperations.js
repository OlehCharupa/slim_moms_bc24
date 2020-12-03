import axios from "axios";
import { setErrorRequest } from "../slice/errorRequestSlice";
import { loaderOff, loaderOn } from "../slice/loaderSlice";
import { resetToken } from "../slice/userInfoSlice";

export const logOut = (token) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const result = await axios({
      url: "http://slimmom-backend.herokuapp.com/auth/logout",
      method: "post",
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(resetToken());
  } catch (error) {
    dispatch(setErrorRequest(error));
  } finally {
    dispatch(loaderOff());
  }
};
