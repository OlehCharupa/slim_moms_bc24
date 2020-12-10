import axios from "axios";
import { resetErrorRequest, setErrorRequest } from "../slice/errorRequestSlice";
import { loaderOff, loaderOn } from "../slice/loaderSlice";
import { loginOperations } from './loginOperations'

axios.defaults.baseURL = "https://slimmom-backend.herokuapp.com";


export const registrationOperations = (obj) => async (dispatch) => {
    try {
        dispatch(resetErrorRequest());
        dispatch(loaderOn());
        await axios.post("/auth/register", { ...obj });
        dispatch(loginOperations({ email: obj.email, password: obj.password }))

    } catch (error) {

        dispatch(setErrorRequest(error.message));
    } finally {
        dispatch(loaderOff());
    }
};