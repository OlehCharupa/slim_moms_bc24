import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './DiaryAddProductForm.module.css';
import { useWindowWidth } from '@react-hook/window-size';
import { addProduct } from '../../redux/operations/diaryAddProduct';

const diaryAddProductInitialState = {
  product: '',
  grams: ''
}

const DiaryAddProductForm = () => {
  const [diaryForm, setDiaryForm] = useState(diaryAddProductInitialState);
  // const [productError, setProductError] = useState('Введите название продукта. Используйте исключительно буквы кириллицы.');
  // const [gransError, setGramsError] = useState('Введите кол-во грамм цыфрами');
  const [formError, setFormError] = useState('Поле не заполнено. Введите граммы цифрами, Название продукта - буквами')
  const dispatch = useDispatch();
  const onlyWidth = useWindowWidth();

  const inputHandlerDiaryAddProduct = ({ target }) => {
    const { name, value } = target;

    setDiaryForm(state => ({ ...state, [name]: value }))
  }

  const submitHandlerDiaryAddProduct = (e) => {
    e.preventDefault();
    const { product, grams } = diaryForm;

    const singleProduct = {
      product,
      grams,
    }
    // if (product === '' && Number(grams)) {
    //   setFormError('Поле не заполнено. Введите граммы цифрами, Название продукта - буквами')
    // }

    dispatch(addProduct(singleProduct));

    setDiaryForm({ ...diaryAddProductInitialState });
    // console.log(singleProduct);
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