import React, { useEffect } from "react";

import style from "./Modal.module.css";

const Modal = ({ children, arrowVisible = false, callback, openModal, toggleModal }) => {

  useEffect(() => {
    arrowVisible && callback(toggleModal);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      toggleModal();
    }
  };
  const handleClick = (e) => {
    if (e.target.dataset.name !== "overlay") {
      return;
    }
    toggleModal();
  };

  return (
    <>
      {/* ============ button для тестування=Видалити!!!!===================== */}
      {/* <button type="button" onClick={toggleModal}> Modal </button>  */}
      {/* ================================================================= */}
      {openModal && (
        <div
          className={style.overlay}
          onClick={handleClick}
          data-name="overlay"
        >
          <div className={style.modal} data-name="modal">
            {!arrowVisible && <button
              className={style.closeButton}
              type="button"
              onClick={toggleModal}
            ></button>}
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
