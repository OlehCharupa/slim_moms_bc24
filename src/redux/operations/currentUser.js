import axios from "axios";
import { resetErrorRequest, setErrorRequest } from "../slice/errorRequestSlice";
import { loaderOff, loaderOn } from "../slice/loaderSlice";
import { setUser } from "../slice/userSlice";
// import { setUser } from './../slice/userSlice'

axios.defaults.baseURL = "https://slimmom-backend.herokuapp.com";
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const currentUser = (userToken) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    dispatch(resetErrorRequest())
    const result = await axios.get("/user", token.set(userToken));

    dispatch(setUser(result.data))
    // console.log(result.data);

  } catch (error) {
    dispatch(setErrorRequest(error.message));
  } finally {
    dispatch(loaderOff());
  }
};

