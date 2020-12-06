import React from 'react';
import Calories from './DailyCalories.module.css';
import CalculatorCalorieForm from '../CalculatorCalorieForm/CalculatorCalorieForm';
import { useSelector } from 'react-redux';
import BgImage from "../BgImage/BgImage";

const DailyCalories = () => {
    const token = useSelector(state => state.token)
    return (
        <>
            <BgImage />
            <div className={Calories.block}>
                {token ? <h1 className={Calories.title}>Узнай свою суточную норму калорий</h1> : <h1 className={Calories.title}>Просчитай свою суточную норму калорий прямо сейчас</h1>}
                <CalculatorCalorieForm />
            </div>
        </>
    );
};

export default DailyCalories;