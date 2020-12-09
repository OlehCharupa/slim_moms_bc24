import axios from "axios";
import { resetErrorRequest, setErrorRequest } from "../slice/errorRequestSlice";
import { loaderOff, loaderOn } from "../slice/loaderSlice";
import { setUser } from './../slice/userSlice'

axios.defaults.baseURL = "http://slimmom-backend.herokuapp.com";

export const currentUser = () => async (dispatch) => {
    try {
        dispatch(loaderOn());
        dispatch(resetErrorRequest())
        const result = await axios.get("/user");
        dispatch(setUser(result.data.user))

    } catch (error) {
        dispatch(setErrorRequest(error.message));
    } finally {
        dispatch(loaderOff());
    }
};

