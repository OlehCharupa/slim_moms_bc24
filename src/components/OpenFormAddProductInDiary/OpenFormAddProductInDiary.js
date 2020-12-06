import React from 'react';
import styles from './OpenFormAddProductInDiary.module.css';
import Modal from '../modal/Modal';
import DiaryAddProductForm from '../DiaryAddProductForm/DiaryAddProductForm';

const OpenFormAddProductInDiary = () => {

  return (
    <>
      <button type='button' className={styles.openAddProductForm}></button>
    </>
  );
};

export default OpenFormAddProductInDiary;