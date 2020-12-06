import React, { useState } from 'react';
import styles from './DiaryAddProductForm.module.css';
import { viewportFunction } from '../../helpers/index';
import { useWindowWidth } from '@react-hook/window-size';
const diaryAddProductInitialState = {
  product: '',
  grams: ''
}

const DiaryAddProductForm = () => {

  const [diaryForm, setDiaryForm] = useState(diaryAddProductInitialState);
  const onlyWidth = useWindowWidth();
  const inputHandlerDiaryAddProduct = ({ target }) => {
    const { name, value } = target;
    setDiaryForm(state => ({ ...state, [name]: value }))
  }

  const submitHandlerDiaryAddProduct = (e) => {
    e.preventDefault();
    console.log(diaryForm);
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
            name='product'
            value={diaryForm.product}
          >
          </input>
        </label>
        <label className={styles.diaryAddProductForm_label}>
          <input
            onChange={inputHandlerDiaryAddProduct}
            className={styles.diaryAddProductForm_inputGrams}
            placeholder='Граммы'
            type='text'
            name='grams'
            value={diaryForm.grams}
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
    </div>
  );
};

export default DiaryAddProductForm;