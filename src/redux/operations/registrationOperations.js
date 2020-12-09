import axios from "axios";
import { setErrorRequest } from "../slice/errorRequestSlice";
import { loaderOff, loaderOn } from "../slice/loaderSlice";
import { loginOperations } from './loginOperations'

axios.defaults.baseURL = "http://slimmom-backend.herokuapp.com";


export const registrationOperations = (obj) => async (dispatch) => {
    try {
        dispatch(loaderOn());
        await axios.post("/auth/register", { ...obj });
        dispatch(loginOperations({ email: obj.email, password: obj.password }))

    } catch (error) {
        console.log(error);
        dispatch(setErrorRequest(error.message));
    } finally {
        dispatch(loaderOff());
    }
};