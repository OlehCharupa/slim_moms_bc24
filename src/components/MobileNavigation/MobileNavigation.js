import React from "react";
import styles from "./MobileNavigation.module.css";
import arrow from "./images/arrow.svg";

const MobileNavigation = ({ children, isArrow, callback, arrowToggle }) => {
  return (
    <div className={styles.menu}>
      {isArrow && (
        <button
          type="button"
          aria-label="close modal"
          className={styles.btn}
          onClick={() => {
            arrowToggle();
            callback(console.log("close modal"));
          }}
        >
          <img
            src={arrow}
            alt="go back"
            aria-label="go back"
            width="13"
            height="8"
          />
        </button>
      )}
      {children}
    </div>
  );
};

export default MobileNavigation;
