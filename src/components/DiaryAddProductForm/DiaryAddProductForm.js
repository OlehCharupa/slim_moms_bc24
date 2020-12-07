import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './DiaryAddProductForm.module.css';
import { useWindowWidth } from '@react-hook/window-size';
import { addProduct, findProduct } from '../../redux/operations/diaryAddProduct';
import { currentDateSelector } from '../../redux/selectors/dateInfoSelectors';

const diaryAddProductInitialState = {
  product: '',
  weight: ''
}

const DiaryAddProductForm = () => {
  const [diaryForm, setDiaryForm] = useState(diaryAddProductInitialState);
  // const [productError, setProductError] = useState('Введите название продукта. Используйте исключительно буквы кириллицы.');
  // const [gransError, setGramsError] = useState('Введите кол-во грамм цыфрами');
  const [formError, setFormError] = useState('Поле не заполнено. Введите граммы цифрами, Название продукта - буквами')
  const dispatch = useDispatch();
  const onlyWidth = useWindowWidth();
  const date = useSelector(state => currentDateSelector(state));



  const inputHandlerDiaryAddProduct = ({ target }) => {
    const { name, value } = target;
    dispatch(findProduct(value))

    setDiaryForm(state => ({ ...state, [name]: value }))
  }

  const submitHandlerDiaryAddProduct = (e) => {
    e.preventDefault();
    const { product, weight } = diaryForm;

    const singleProduct = {
      product,
      weight,
      date
    }
    // if (product === '' && Number(grams)) {
    //   setFormError(formError: 'Поле не заполнено. Введите граммы цифрами, Название продукта - буквами')
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
            name='weight'
            value={diaryForm.weight}
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