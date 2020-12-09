import React from 'react';
import { useWindowWidth } from "@react-hook/window-size";
import style from './CalculatorPage.module.css';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import BgImage from '../../components/BgImage/BgImage';
import DailyCalories from "../../components/DailyCalories/DailyCalories";
import Container from "../../components/Container/Container";

const CalculatorPage = () => {
    const onlyWidth = useWindowWidth();

    return (
        <div className={style.block}>
            <div className={style.currentDate__wrapper}>
                {onlyWidth < 1279 ? (
                    <Container>
                        <DailyCalories />
                    </Container>
                ) : (
                        <div className={style.block} >
                            <DailyCalories />
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

export default CalculatorPage;