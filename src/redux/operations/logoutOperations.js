import axios from "axios";
import { setErrorRequest } from "../slice/errorRequestSlice";
import { loaderOff, loaderOn } from "../slice/loaderSlice";
import { resetToken } from "../slice/tokinSlice";
import { resetUser } from "../slice/userSlice";

export const logOut = (token) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const result = await axios({
      url: "http://slimmom-backend.herokuapp.com/auth/logout",
      method: "post",
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(resetToken());
    dispatch(resetUser());
  } catch (error) {
    dispatch(setErrorRequest(error));
  } finally {
    dispatch(loaderOff());
  }
};
