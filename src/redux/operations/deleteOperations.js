import axios from "axios";
import { setErrorRequest } from "../slice/errorRequestSlice";
import { loaderOff, loaderOn } from "../slice/loaderSlice";
import { deleteElem } from "../slice/deleteElemSlice";

export const deleteElement = (id, token) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const result = await axios({
      url: "http://slimmom-backend.herokuapp.com/day",
      method: "delete",
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(deleteElem());
  } catch (error) {
    dispatch(setErrorRequest(error));
  } finally {
    dispatch(loaderOff());
  }
};
