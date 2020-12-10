import React from "react";
import CurrentDate from "../../components/currentDate/CurrentDate";
import DiaryAddProductForm from "../../components/DiaryAddProductForm/DiaryAddProductForm";
import OpenFormAddProductInDiary from "../../components/OpenFormAddProductInDiary/OpenFormAddProductInDiary";
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import style from "./DiaryPage.module.css";
import { useWindowWidth } from "@react-hook/window-size";
import BgImage from '../../components/BgImage/BgImage';
// import DiaryBgImage from "./diaryBgImage/DiaryBgImage";
// import DiaryRightSideBar from "./diaryRightSideBar/DiaryRightSideBar";
import Container from "../../components/Container/Container";
import DiaryProductsList from "../../components/DiaryProductsList/DiaryProductsList";

const DiaryPage = () => {
  const onlyWidth = useWindowWidth();
  return (
    <div className={style.page__wrapper}>
      <div className={style.currentDate__wrapper}>
        {onlyWidth < 1279 ? (
          <Container>
            <div className={style.diaryItems__wrapper}>
              <CurrentDate />
              <div className={style.forDeleteElement}>
                  <DiaryProductsList/>
              </div>
              {onlyWidth < 768 ? (
                <OpenFormAddProductInDiary />
              ) : (
                <DiaryAddProductForm />
              )}
            </div>
          </Container>
        ) : (
          <div className={style.diaryItems__wrapper}>
            <CurrentDate />
            <div className={style.forDeleteElement}>
            <DiaryProductsList/>
            </div>
            {onlyWidth < 768 ? (
              <OpenFormAddProductInDiary />
            ) : (
              <DiaryAddProductForm />
            )}
          </div>
        )}
      </div>
      <BgImage>
        {onlyWidth < 1279 ? (
          <Container>
            <RightSideBar />
          </Container>
        ) : (
          <RightSideBar />
        )}
     
      </BgImage>
    </div>
  );
};

export default DiaryPage;
