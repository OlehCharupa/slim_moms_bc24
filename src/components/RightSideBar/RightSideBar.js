import React from 'react';
import style from './RightSideBar.module.css';
const RightSideBar = () => {
    return (
        <>
            <div className={style.bgImageLogin}></div>
            <div className={style.right__SideBar}>
                <div className={style.block__left}>
                <h2 className={style.title}>Сводка за 20.06.2020</h2>
                <ul className={style.list}>
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
                </div>
                <div className={style.block__right}>
                <h3 className={style.title}>Нерекомендуемые продукты</h3>
                <ul className={style.list}>
                    <li className={style.list__item}>
                        <p className={style.list__item_text}>Здесь будет отображаться Ваш рацион</p>
                    </li>
                </ul>
                </div>
            </div>
        </>
    );
};

export default RightSideBar;