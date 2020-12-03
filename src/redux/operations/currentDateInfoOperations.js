import axios from "axios";
import { setErrorRequest } from "../slice/errorRequestSlice";
import { loaderOff, loaderOn } from "../slice/loaderSlice";

// axios.defaults.baseURL = "http://slimmom-backend.herokuapp.com";

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = "";
//   },
// };

export const getDateInfoOperation = (requestDate) => async (dispatch) => {
    try {
      dispatch(loaderOn());
      const result = await axios.post("/day/info",requestDate);
  // console.log(result);
      
    } catch (error) {
      dispatch(setErrorRequest(error.message));
    } finally {
      dispatch(loaderOff());
    }
};