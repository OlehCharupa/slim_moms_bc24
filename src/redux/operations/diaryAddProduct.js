import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { resetErrorRequest, setErrorRequest } from '../slice/errorRequestSlice';
import { loaderOff, loaderOn } from '../slice/loaderSlice';

const addProductRequest = createAction('product/addRequest');
const addProductSuccess = createAction('product/addSuccess');

axios.defaults.baseURL = "http://slimmom-backend.herokuapp.com";

const setToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const addProduct = (singleProduct) => async (dispatch, getState) => {
  try {
    dispatch(loaderOn)
    dispatch(addProductRequest());
    const { token } = getState();

    const result = await axios.post('/day', singleProduct, setToken(token))
    dispatch(addProductSuccess(result));
  } catch (error) {
    dispatch(setErrorRequest(error.message));
  } finally {
    dispatch(loaderOff())
    dispatch(resetErrorRequest());

  }
}
