import React from "react";

import DailyCalories from "../../components/DailyCalories/DailyCalories";
import style from "./MainPage.module.css";

const MainPage = () => {
  return (
    <>
      <DailyCalories />
      <div className={style.main__wrapper}>
        <div className={style.form__wrapper}>
        </div>
        {/* <h2 className={style.main__title}>Просчитай свою суточную норму калорий прямо сейчас</h2> */}
      </div>
    </>
  );
};

export default MainPage;
