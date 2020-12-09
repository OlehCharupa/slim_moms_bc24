import React from 'react';
import { useSelector } from 'react-redux';
import style from './BgImage.module.css';

const BgImage = () => {
  const token = useSelector(state => state.token);

  return (
    <>
      {token ? <div className={style.bgImageLogin}></div> : <div className={style.bgImage}></div>}
    </>
  )
};

export default BgImage;