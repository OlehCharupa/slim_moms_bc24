import styles from './Navigation.module.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes/routes';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {/* {routes.map(route => (
          <NavLink
            exact={route.exact}
            key={route.label}
            to={routes.path}
            className={styles.navList__item_link}
            activeClassName={styles.navList__item_active_link}
          >
            {route.label}
          </NavLink>
        ))} */}
        <li className={styles.navList__item}>
          <NavLink
            to={routes.diary}
            className={styles.navList__item_link}
            activeClassName={styles.navList__item_active_link}
          // isPrivate
          >
            Дневник
          </NavLink>
        </li>
        <li className={styles.navList__item}>
          <NavLink
            to={routes.calculator}
            className={styles.navList__item_link}
            activeClassName={styles.navList__item_active_link}
          // isPrivate
          >
            Калькулятор
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;