import React from 'react';
import CurrentDate from '../../components/currentDate/CurrentDate';
import DiaryAddProductForm from '../../components/DiaryAddProductForm/DiaryAddProductForm';
import OpenFormAddProductInDiary from '../../components/OpenFormAddProductInDiary/OpenFormAddProductInDiary';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import style from './DiaryPage.module.css'
import { useWindowWidth } from "@react-hook/window-size";
import BgImage from '../../components/BgImage/BgImage';
import DiaryBgImage from './diaryBgImage/DiaryBgImage';

const DiaryPage = () => {
    const onlyWidth = useWindowWidth();
    return (
        <div className={style.page__wrapper}>
            <div className={style.diaryItems__wrapper}>
                <CurrentDate />
                {/* <DiaryAddProductForm/> */}
                {onlyWidth < 768 ? <OpenFormAddProductInDiary /> : <DiaryAddProductForm />}
            </div>
            <DiaryBgImage/>
            <RightSideBar />
          
        
        </div>
    );
};

export default DiaryPage;