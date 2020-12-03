import axios from "axios";
import { setErrorRequest } from "../slice/errorRequestSlice";
import { loaderOff, loaderOn } from "../slice/loaderSlice";
import { loginOperations } from './loginOperations'
axios.defaults.baseURL = "http://slimmom-backend.herokuapp.com";

// const token = {
//     set(token) {
//         axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//     },
//     unset() {
//         axios.defaults.headers.common.Authorization = "";
//     },
// };

export const registrationOperations = (obj) => async (dispatch) => {
    try {
        dispatch(loaderOn());
        const result = await axios.post("/auth/register", { ...obj });
        console.log('reg', result);
        dispatch(loginOperations({ email: obj.email, password: obj.password }))

    } catch (error) {
        console.log(error);
    } finally {
        dispatch(loaderOff());
    }
};