import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import viewport from "../../helpers";

import styles from "./Navigation.module.css";

import routes from "../../routes/routes";

import { isLogin } from "../../redux/selectors/selectors"; // тестовая логика, пока не заменят.

const filterPublicRoutes = (routes) => routes.filter((route) => !route.private);
const filterPrivateRoutes = (routes) =>
  routes.filter((route) => route.private || !route.restricted);

const Navigation = ({ onModalClose }) => {
  const Authenticated = useSelector((state) => isLogin(state));

  const filteredRoutes = useSelector(isLogin)
    ? filterPrivateRoutes(routes)
    : filterPublicRoutes(routes);

  return (
    <nav
      className={
        viewport.isDesktop
          ? styles.nav
          : Authenticated
          ? styles.mobileNav
          : styles.nav
      }
    >
      {filteredRoutes.map((route) => (
        <NavLink
          exact={route.exact}
          key={route.label}
          to={route.path}
          className={styles.navList__item_link}
          activeClassName={styles.navList__item_active_link}
          onClick={() => onModalClose()}
        >
          {route.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
