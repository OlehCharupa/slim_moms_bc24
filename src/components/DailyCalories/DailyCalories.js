import React from 'react';
import Calories from './DailyCalories.module.css';
import CalculatorCalorieForm from '../CalculatorCalorieForm/CalculatorCalorieForm';
import { useSelector } from 'react-redux';
import BgImage from "../BgImage/BgImage";
import RightSideBar from '../RightSideBar/RightSideBar';
import style from '../App.module.css';
const DailyCalories = () => {
    const token = useSelector(state => state.token)
    return (
        <>


            { token ?
                (<>
                        <div className={Calories.block} >
                            <div className={Calories.box}>
                                <section className={style.container}>
                                    <h1 className={Calories.title}>Узнай свою суточную норму калорий</h1>
                                    <CalculatorCalorieForm />
                                </section>
                            </div>
                    <BgImage>
                            <section className={style.container}>

                            <RightSideBar />
                            </section>
                    </BgImage>
                        </div>
                </>)
                :
                (<div className={Calories.box}>
                    <h1 className={Calories.title}>Просчитай свою суточную норму калорий прямо сейчас</h1>
                    <CalculatorCalorieForm />
                </div>)
            }
        </>
    );
};

export default DailyCalories;