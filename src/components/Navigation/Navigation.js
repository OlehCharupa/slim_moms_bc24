import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Navigation.module.css'

import routes from '../../routes/routes';

import { isLogin } from '../../redux/selectors/selectors'; // тестовая логика, пока не заменят.

const filterPublicRoutes = (routes) => routes.filter(route => !route.private)
const filterPrivateRoutes = (routes) => routes.filter(route => route.private || !route.restricted)

const Navigation = () => {
  const filteredRoutes = useSelector(isLogin)
    ? filterPrivateRoutes(routes)
    : filterPublicRoutes(routes);
    

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>

        {filteredRoutes.map(route => (
          <NavLink
            exact={route.exact}
            key={route.label}
            to={route.path}
            className={styles.navList__item_link}
            activeClassName={styles.navList__item_active_link}
          >
            {route.label}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;