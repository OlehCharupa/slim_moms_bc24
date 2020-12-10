import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useWindowWidth } from '@react-hook/window-size';
import debounce from "lodash.debounce";
import axios from 'axios';

import styles from './DiaryAddProductForm.module.css';

import { loaderOff, loaderOn } from '../../redux/slice/loaderSlice';
import { resetErrorRequest, setErrorRequest } from '../../redux/slice/errorRequestSlice';
import { addProduct } from '../../redux/operations/diaryAddProduct';
import { currentDateSelector } from '../../redux/selectors/dateInfoSelectors';

const initialState = {
  title: '',
  weight: '',

}

const useDebounce = (callback, delay) => useCallback(
  debounce(callback, delay),
  [delay],
);

const DiaryAddProductForm = () => {
  const [products, setProducts] = useState([]);
  const date = useSelector(state => currentDateSelector(state));
  const token = useSelector(state => state.token);
  const [currentValue, setCurrentValue] = useState({ ...initialState })

  const dispatch = useDispatch();
  const onlyWidth = useWindowWidth();
 

  const setToken = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  const getProducts = async (search) => {
    try {
      dispatch(resetErrorRequest())
      dispatch(loaderOn());
      const { data } = await axios.get(`/product?search=${search}`, setToken(token));
      setProducts(data);

    } catch (error) {
      dispatch(setErrorRequest(error.message));
    } finally {
      dispatch(loaderOff());
      }
  }

  const debouncedGetProducts = useDebounce(getProducts, 500);

  const inputHandlerDiaryAddProduct = ({ target }) => {
    const { name, value } = target;
    if (target.dataset.id) {
      setCurrentValue({ ...products.find(el => el._id === target.dataset.id) });
      return;
    }
    if (name === 'title' && value !== '') {
      debouncedGetProducts(value);
    }

    setCurrentValue({ ...currentValue, [name]: value })
  }


  const submitHandlerDiaryAddProduct = (e) => {
    e.preventDefault();

    const singleProduct = products.find(el => el.title.ru === currentValue.title)
    dispatch(addProduct({ date, productId: singleProduct._id, weight: Number(currentValue.weight) }
    ));

  }

  return (
    <div>
      <form className={styles.diaryAddProductForm} onSubmit={submitHandlerDiaryAddProduct}>
        <label className={styles.diaryAddProductForm_label} >

          <input
            onChange={inputHandlerDiaryAddProduct}
            className={styles.diaryAddProductForm_inputProduct}
            placeholder='Введите название продукта'
            type='text'
            name='title'
            value={currentValue.title}
          >
          </input>
        </label>

        <label className={styles.diaryAddProductForm_label}>
          <input
            onChange={inputHandlerDiaryAddProduct}
            className={styles.diaryAddProductForm_inputGrams}
            placeholder='Граммы'
            type='text'
            name='weight'
            value={currentValue.weight}
          >
          </input>
        </label>
        <button
          type='submit'
          className={styles.diaryAddProductForm_button}
        >
          {onlyWidth <= 767 ? 'Добавить' : ''}
        </button>

      </form>
      <select name='title' value={currentValue?.title?.ru} onChange={inputHandlerDiaryAddProduct}>
  
        {products.map(product => (
          <option data-id={product._id} value={product?.title?.ru} key={product._id} name={product?.title?.ru} >{product?.title?.ru}</option>
        ))}
      </select>
    </div>
  );
};

export default DiaryAddProductForm;