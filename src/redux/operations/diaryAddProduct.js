import axios from 'axios';
import { setErrorRequest, resetErrorRequest } from '../slice/errorRequestSlice';
import { loaderOff, loaderOn } from '../slice/loaderSlice';
import { addProductSuccess, addProductRequest } from '../slice/currentDateInfoSlice';

axios.defaults.baseURL = "http://slimmom-backend.herokuapp.com";

const setToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}


export const addProduct = (singleProduct) => async (dispatch, getState) => {
  try {
    if (getState.errorRequest) {
      dispatch(resetErrorRequest())
    }
    dispatch(loaderOn);
    // dispatch(addProductRequest());
    const { token } = getState();

    const result = await axios.post('/day', singleProduct, setToken(token));

    dispatch(addProductSuccess(result.data));
  } catch (error) {
    dispatch(setErrorRequest(error.message));
  } finally {
    dispatch(loaderOff());

  }
}

// export const getProducts =(search,setProducts) => async(dispatch, getState) =>{
//   try {
//     const { token } = getState();
//     dispatch(resetErrorRequest())
//     dispatch(loaderOn());
//     const { data } = await axios.get(`/product?search=${search}`, setToken(token));
//     setProducts(data);

//   } catch (error) {
//     dispatch(setErrorRequest(error.message));
//   } finally {
//     dispatch(loaderOff());
//     }
// }

