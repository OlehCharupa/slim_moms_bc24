import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const addProductRequest = createAction('product/addRequest');
export const addProductSuccess = createAction('product/addSuccess');
export const addProductError = createAction('product/addError');

axios.defaults.baseURL = "http://slimmom-backend.herokuapp.com";

const setToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const addProduct = (singleProduct) => async (dispatch, getState) => {
  try {
    dispatch(addProductRequest());
    const { token } = getState();
    const result = await axios.post('/day', singleProduct, setToken(token))
    dispatch(addProductSuccess(result));
  } catch (error) {
    dispatch(addProductError(error));
  }
}
