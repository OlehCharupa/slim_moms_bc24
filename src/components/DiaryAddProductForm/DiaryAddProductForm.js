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
  id: '',
}

const useDebounce = (callback, delay) => useCallback(
  debounce(callback, delay),
  [delay],
);

const DiaryAddProductForm = ({ toggleModal }) => {
  const [products, setProducts] = useState([]);
  const [currentValue, setCurrentValue] = useState({ ...initialState })
  const date = useSelector(state => currentDateSelector(state));
  const token = useSelector(state => state.token);

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

  // console.log("products", products);
  const debouncedGetProducts = useDebounce(getProducts, 500);

  const inputHandlerDiaryAddProduct = ({ target }) => {
    const { name, value } = target;

    if (name === 'title' && value !== '') {
      debouncedGetProducts(value);
    }

    setCurrentValue({ ...currentValue, [name]: value });
  }

  const selectHandler = ({ target }) => {
    setProducts([]);
    const { id } = target.firstElementChild.dataset;
    setCurrentValue({ ...currentValue, title: target.value, id });
  }

  const submitHandlerDiaryAddProduct = (e) => {
    e.preventDefault();
    const { title, weight, id } = currentValue;
    if (title === '' || weight === '') {
      alert("заполни все поля")
      return
    }
    if (isNaN(Number(weight))) {
      alert("введите числа")
      return
    }

    dispatch(addProduct({ date, productId: id, weight: Number(weight) }));

    if (onlyWidth < 767) {
      toggleModal();
      return;
    }

    setCurrentValue({ ...initialState });
  }

  const clearInputProduct = () => {
    setCurrentValue({ ...currentValue, title: '' });
  }

  const clearInputWeight = () => {
    setCurrentValue({ ...currentValue, weight: '' });
  }

  return (
    <div className={styles.diaryAddProductForm_wrapper}>
      <form className={styles.diaryAddProductForm} onSubmit={submitHandlerDiaryAddProduct}>
        <label className={styles.diaryAddProductForm_label} >

          <input
            onChange={inputHandlerDiaryAddProduct}
            className={styles.diaryAddProductForm_inputProduct}
            placeholder='Введите название продукта'
            type='text'
            name='title'
            value={currentValue.title}
          />
          <span className={styles.clearInputText} onClick={clearInputProduct}>&#215;</span>
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
          <span className={styles.clearInputText} onClick={clearInputWeight}>&#215;</span>

        </label>
        <button
          type='submit'
          className={styles.diaryAddProductForm_button}
        >
          {onlyWidth <= 767 ? 'Добавить' : ''}
        </button>

      </form>
      {products.length !== 0 ? (<div className={styles.selectWrapper}>
        <select name='title' value={currentValue?.title?.ru} onChange={selectHandler}>
          {products.map(product => (
            <option data-id={product._id} value={product?.title?.ru} key={product._id} name={product?.title?.ru} >{product?.title?.ru}</option>
          ))}
        </select>
      </div>) : null}
    </div>
  );
};

export default DiaryAddProductForm;
