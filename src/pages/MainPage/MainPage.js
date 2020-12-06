import React from "react";

import DailyCalories from "../../components/DailyCalories/DailyCalories";
import style from "./MainPage.module.css";

const MainPage = () => {
  return (
    
    <div className={style.form__wrapper}>
      <div className={style.main__background_wrapper}></div>
      <DailyCalories />
    </div>
      
  );
};

export default MainPage;
