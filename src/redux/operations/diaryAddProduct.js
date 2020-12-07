import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { resetErrorRequest, setErrorRequest } from '../slice/errorRequestSlice';
import { loaderOff, loaderOn } from '../slice/loaderSlice';

const addProductRequest = createAction('product/addRequest');
const addProductSuccess = createAction('product/addSuccess');

axios.defaults.baseURL = "http://slimmom-backend.herokuapp.com";

const setToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmNjNTViMDViMjBlNjAwMDQzNGUyNTciLCJzaWQiOiI1ZmNlNTAzZWRjOWQ3NjAwMDQxODcwMWUiLCJpYXQiOjE2MDczNTY0NzgsImV4cCI6MTYwNzM2MDA3OH0.fLyeDzcp5WgfGc8y1XrdJnjIGEYTzYjrwJ5Df0KfXUY`;
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

export const findProduct = (value) => async (dispatch, getState) => {
  const { token } = getState();

  axios.get(`/product?search=${value}`, setToken(token))
    .then(data => console.log(data))
}
