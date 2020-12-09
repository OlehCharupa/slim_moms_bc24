import React from "react";
import DailyCalories from "../../components/DailyCalories/DailyCalories";
import style from "./MainPage.module.css";
import Container from "../../components/Container/Container"
const MainPage = () => {
  return (
    <Container>
      <div className={style.form__wrapper}>
        <div className={style.main__background_wrapper}></div>
        <DailyCalories />
      </div>
    </Container>
  );
};

export default MainPage;
