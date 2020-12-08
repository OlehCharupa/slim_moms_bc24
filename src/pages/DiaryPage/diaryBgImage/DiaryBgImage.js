import React from 'react';
import { useSelector } from 'react-redux';
import style from './DiaryBgImage.module.css';

const DiaryBgImage = () => {
  const token = useSelector(state => state.token);

  return (
    <>
      {token ? <div className={style.bgImageLogin}></div> : <div className={style.bgImage}></div>}
    </>
  )
};

export default DiaryBgImage;