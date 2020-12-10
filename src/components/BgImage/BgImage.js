import React from 'react';
import style from './BgImage.module.css';

const BgImage = ({children}) => {
    return <div className={style.bgImageLogin}>{children}</div>;
};

export default BgImage;