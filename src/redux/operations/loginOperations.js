import axios from "axios";
import { setErrorRequest } from "../slice/errorRequestSlice";
import { loaderOff, loaderOn } from "../slice/loaderSlice";
import { setToken } from './../slice/tokinSlice'
import { setUser } from './../slice/userSlice'

axios.defaults.baseURL = "http://slimmom-backend.herokuapp.com";

export const loginOperations = (obj) => async (dispatch) => {
    try {
        dispatch(loaderOn());
        const result = await axios.post("/auth/login", { ...obj });
        console.log("login", result);
        dispatch(setToken(result.data.accessToken))
        dispatch(setUser(result.data.user))

    } catch (error) {
        console.log(error);
    } finally {
        dispatch(loaderOff());
    }
};