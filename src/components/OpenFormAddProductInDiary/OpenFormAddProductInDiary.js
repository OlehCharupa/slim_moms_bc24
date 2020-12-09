import React, { useState } from 'react';
import styles from './OpenFormAddProductInDiary.module.css';
import Modal from '../modal/Modal';
import DiaryAddProductForm from '../DiaryAddProductForm/DiaryAddProductForm';

const OpenFormAddProductInDiary = () => {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <>
      <button type='button' className={styles.openAddProductForm} onClick={toggleModal}></button>
      <Modal
        arrowVisible
        toggleModal={toggleModal}
        openModal={openModal}
      // callback={() => { }}
      >
        <DiaryAddProductForm />
      </Modal>
    </>
  );
};

export default OpenFormAddProductInDiary;
