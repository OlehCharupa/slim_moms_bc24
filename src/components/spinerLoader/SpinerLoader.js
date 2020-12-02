import React from 'react';
import Loader from 'react-loader-spinner'
import style from './SpinerLoader.module.css'


const SpinerLoader = () => {
    return (
        <Loader
        className={style.loader}
         type="Circles"
         color="#FC842D"
         height={100}
         width={100}
         timeout={5000} //3 secs
 
      />
    );
};

export default SpinerLoader;