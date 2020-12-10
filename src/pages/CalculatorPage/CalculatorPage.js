import React from 'react';
import { useWindowWidth } from "@react-hook/window-size";
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import BgImage from '../../components/BgImage/BgImage';
import DailyCalories from "../../components/DailyCalories/DailyCalories";
import Container from "../../components/Container/Container";
import style from './CalculatorPage.module.css';

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
                        <DailyCalories />
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