import React from 'react';
import style from './RightSideBar.module.css';
import { currentDateSelector } from '../../redux/selectors/dateInfoSelectors';
import { notAllowedProducts } from '../../redux/selectors/selectors';
import { useSelector } from 'react-redux';

const RightSideBar = () => {
    const date = useSelector(state => currentDateSelector(state).split('-').reverse().join('.'));
    const products = useSelector((state) => notAllowedProducts(state));
    const filtredProducts = products.filter((product, index) => index < 5);
    const daySummary = useSelector(state => state.currentDateInfo.daySummary);
    const currenDate = new Date();
    return (
        <>
            <div className={style.right__SideBar}>
                <div className={style.block__left}>
                    <h2 className={style.title}>Сводка за {date ? date : (currenDate.getDate() + '.' + (currenDate.getMonth() + 1) + '.' + currenDate.getFullYear())}</h2>
                    {!!daySummary ? <ul className={style.list}>
                        <li className={style.list__item}>
                            <p className={style.list__item_text}>Осталось
                            <span className={style.list__item_text_right}>
                                    {daySummary.kcalLeft ? (Math.round(daySummary.kcalLeft) + ' ккал') : '000 ккал'}
                                </span></p>
                        </li>
                        <li className={style.list__item}>
                            <p className={style.list__item_text}>Употреблено
                            <span className={style.list__item_text_right}>
                                    {daySummary.kcalConsumed ? (Math.round(daySummary.kcalConsumed) + ' ккал') : '000 ккал'}
                                </span></p>
                        </li>
                        <li className={style.list__item}>
                            <p className={style.list__item_text}>Дневная норма
                            <span className={style.list__item_text_right}>
                                    {daySummary.dailyRate ? (Math.round(daySummary.dailyRate) + ' ккал') : '000 ккал'}
                                </span></p>
                        </li>
                        <li className={style.list__item}>
                            <p className={style.list__item_text}>n% от нормы
                            <span className={style.list__item_text_right}>
                                    {daySummary.percentsOfDailyRate ? (Math.round(daySummary.percentsOfDailyRate) + ' ккал') : '000 ккал'}
                                </span></p>
                        </li>
                    </ul>
                        : <ul className={style.list}>
                            <li className={style.list__item}>
                                <p className={style.list__item_text}>Осталось <span className={style.list__item_text_right}>000 ккал</span></p>
                            </li>
                            <li className={style.list__item}>
                                <p className={style.list__item_text}>Употреблено <span className={style.list__item_text_right}>000 ккал</span></p>
                            </li>
                            <li className={style.list__item}>
                                <p className={style.list__item_text}>Дневная норма <span className={style.list__item_text_right}>000 ккал</span></p>
                            </li>
                            <li className={style.list__item}>
                                <p className={style.list__item_text}>n% от нормы <span className={style.list__item_text_right}>000 ккал</span></p>
                            </li>
                        </ul>
                    }
                </div>
                <div className={style.block__right}>
                    <h3 className={style.title}>Нерекомендуемые продукты</h3>
                    <ul className={style.list}>
                        {!!filtredProducts ? <li className={style.list__item}><p className={style.list__item_text}>{filtredProducts}</p></li>
                            : <li><p>Здесь будет отображаться Ваш рацион</p></li>}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default RightSideBar;