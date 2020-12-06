import React from 'react';
import styles from './OpenFormAddProductInDiary.module.css';
import Modal from '../modal/Modal';
import DiaryAddProductForm from '../DiaryAddProductForm/DiaryAddProductForm';

const OpenFormAddProductInDiary = () => {
  let toggleModal;
  const toggle = () => {
    toggleModal();
  }

  return (
    <>
      <button type='button' className={styles.openAddProductForm} onClick={toggle}></button>
      <Modal
        arrowVisible={true}
        callback={(toggle) => {
          toggleModal = toggle;
        }}
      >
        <DiaryAddProductForm />
      </Modal>
    </>
  );
};

export default OpenFormAddProductInDiary;
