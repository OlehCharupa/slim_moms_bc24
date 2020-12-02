import styles from './MobileNavigation.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes/routes';


const MobileNavigation = () => {
  return (
    <nav className={styles.mobileNav}>
      <ul className={styles.mobileNavList}>
        <li className={styles.mobileNavList__item}>
          <NavLink
            to={routes.diary}
            className={styles.mobileNavList__item_link}
            activeClassName={styles.mobileNavList__item_active_link}
          // isPrivate
          >
            Дневник
        </NavLink>
        </li>
        <li className={styles.mobileNavList__item}>
          <NavLink
            to={routes.calculator}
            className={styles.mobileNavList__item_link}
            activeClassName={styles.mobileNavList__item_active_link}
          // isPrivate
          >
            Калькулятор
        </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavigation;