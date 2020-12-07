import React from 'react';
import Calories from './DailyCalories.module.css';
import CalculatorCalorieForm from '../CalculatorCalorieForm/CalculatorCalorieForm';
import { useSelector } from 'react-redux';

const DailyCalories = () => {
    const token = useSelector(state => state.token)
    return (
        <>
            <div className={Calories.block}>
                {token ? <h1 className={Calories.title}>Узнай свою суточную норму калорий</h1> : <h1 className={Calories.title}>Просчитай свою суточную норму калорий прямо сейчас</h1>}
                <CalculatorCalorieForm />
            </div>
        </>
    );
};

export default DailyCalories;