import React, { useState } from "react";
import styles from "./Header.module.css";
import { NavLink, useLocation } from "react-router-dom";
import viewport from "../../helpers";
// import { useSelector } from "react-redux";
import burger from "./images/burger.svg";
import close from "./images/close.svg";
import MenuModal from "../MenuModal/MenuModal";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import Logo from "../Logo";

const Header = () => {
  //   const Authenticated = useSelector((state) => isAuthenticated(state));
  const Authenticated = true;
  const { pathname } = useLocation();
  const showDesktopNav =
    pathname === "/login" || pathname === "/register" ? false : true;

  const [modal, setModal] = useState(false);
  const [arrow, setArrow] = useState(true);

  const modalHandler = () => setModal(!modal);

  const arrowToggle = () => setArrow(!arrow);

  const arrowCallback = (callback) => {
    return callback;
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Logo />
        </div>
        {!viewport.isDesktop && Authenticated ? (
          <button
            type="button"
            className={styles.btn}
            aria-label="menu"
            onClick={modalHandler}
          >
            {!modal && (
              <img
                src={burger}
                alt="open menu"
                aria-label="open menu"
                width="32"
                height="32"
              />
            )}
            {modal && (
              <img
                src={close}
                alt="close menu"
                aria-label="close menu"
                width="32"
                height="32"
              />
            )}
          </button>
        ) : (
          showDesktopNav && (
            <div className={styles.nav}>
              <NavLink
                to="/login"
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                Вход
              </NavLink>
              <NavLink
                to="/register"
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                Регистрация
              </NavLink>
            </div>
          )
        )}
      </header>
      {viewport.isMobile && (arrow || Authenticated) && (
        <MobileNavigation
          isArrow={arrow}
          callback={arrowCallback}
          arrowToggle={arrowToggle}
        >
          <span>Nick</span>
          <span>Exit</span>
        </MobileNavigation>
      )}
      {modal && (
        <MenuModal>
          <div className={styles.mobileNav}>
            <NavLink
              to="/login"
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Вход
            </NavLink>
            <NavLink
              to="/register"
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Регистрация
            </NavLink>
          </div>
        </MenuModal>
      )}
    </>
  );
};

export default Header;
