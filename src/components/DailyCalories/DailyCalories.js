import React from 'react';
import Calories from './DailyCalories.module.css';
import CalculatorCalorieForm from '../CalculatorCalorieForm/CalculatorCalorieForm';
import BgImage from '../BgImage/BgImage';

const DailyCalories = () => {

    return (
        <>
            <BgImage />
            <div className={Calories.block}>
                <h1 className={Calories.title}>Просчитай свою суточную норму калорий прямо сейчас</h1>
                <CalculatorCalorieForm />
            </div>
        </>
    );
};

export default DailyCalories;