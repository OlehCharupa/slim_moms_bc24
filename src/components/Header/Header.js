import React, { useState } from "react";
import styles from "./Header.module.css";
import { useLocation } from "react-router-dom";
import viewport from "../../helpers";
import { useSelector } from "react-redux";
import burger from "./images/burger.svg";
import close from "./images/close.svg";
import MenuModal from "../MenuModal/MenuModal";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import UserInfo from "../UserInfo/UserInfo";

import { isLogin } from "../../redux/selectors/selectors"; // тестовая логика, пока не заменят.

const Header = () => {
  const Authenticated = useSelector((state) => isLogin(state));
  const { pathname } = useLocation();
  const showDesktopNav =
    pathname === "/login" || pathname === "/registration" ? false : true;

  const [modal, setModal] = useState(false);
  const [arrow, setArrow] = useState(true);

  const body = document.querySelector("body");

  const modalHandler = () => {
    if (!modal) {
      body.classList.add(styles.body);
    } else body.classList.remove(styles.body);
    setModal(!modal);
  };

  const arrowToggle = () => setArrow(!arrow);

  const arrowCallback = (callback) => {
    return callback;
  };

  return (
    <>
      <header className={styles.header}>
        <Logo />
        {!viewport.isDesktop && Authenticated ? (
          <div className={styles.userBar}>
            {Authenticated && viewport.isTablet && <UserInfo />}
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
          </div>
        ) : (
          showDesktopNav && <Navigation />
        )}
      </header>
      {viewport.isMobile && (arrow || Authenticated) && (
        <MobileNavigation
          isArrow={arrow}
          callback={arrowCallback}
          arrowToggle={arrowToggle}
        >
          <UserInfo />
        </MobileNavigation>
      )}
      {modal && (
        <MenuModal>
          <Navigation />
        </MenuModal>
      )}
    </>
  );
};

export default Header;
