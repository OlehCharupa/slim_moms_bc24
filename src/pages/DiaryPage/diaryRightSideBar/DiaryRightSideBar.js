import React from 'react';
import style from './DiaryRightSideBar.module.css';
// import { currentDateSelector } from '../../redux/selectors/dateInfoSelectors';
import { useSelector } from 'react-redux';
import { currentDateSelector } from '../../../redux/selectors/dateInfoSelectors';
const DiaryRightSideBar = () => {
    const date = useSelector(state => currentDateSelector(state).split('-').reverse().join('.'));
    const products = useSelector(state => state.user.userData.notAllowedProducts.slice(0, 5).join(', '));
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
                                    {daySummary.kcalLeft && (daySummary.kcalLeft)} ккал
                                </span></p>
                        </li>
                        <li className={style.list__item}>
                            <p className={style.list__item_text}>Употреблено
                            <span className={style.list__item_text_right}>
                                    {daySummary.kcalConsumed && (daySummary.kcalConsumed)} ккал
                                </span></p>
                        </li>
                        <li className={style.list__item}>
                            <p className={style.list__item_text}>Дневная норма
                            <span className={style.list__item_text_right}>
                                    {daySummary.dailyRate && (daySummary.dailyRate)} ккал
                                </span></p>
                        </li>
                        <li className={style.list__item}>
                            <p className={style.list__item_text}>n% от нормы
                            <span className={style.list__item_text_right}>
                                    {daySummary.percentsOfDailyRate && (daySummary.percentsOfDailyRate)} ккал
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
                        {!!products ? <li className={style.list__item}><p className={style.list__item_text}>{products}</p></li> 
                        : <li><p>Здесь будет отображаться Ваш рацион</p></li>}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default DiaryRightSideBar;