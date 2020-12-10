import React from 'react';
import Calories from './DailyCalories.module.css';
import CalculatorCalorieForm from '../CalculatorCalorieForm/CalculatorCalorieForm';

const DailyCalories = () => {
    return (
        <>

            <div className={Calories.box}>
                <h1 className={Calories.title}>Просчитай свою суточную норму калорий прямо сейчас</h1>
                <CalculatorCalorieForm />
            </div>

        </>
    );
};

export default DailyCalories;