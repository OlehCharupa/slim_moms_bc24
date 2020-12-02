import React, { useState, useEffect } from "react";
import style from "./Modal.module.css";

const Modal = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
    // setOpenModal(!openModal)
    setOpenModal((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyDown = (e) => {
    // console.log(e);
    if (e.code === "Escape") {
      setOpenModal(false);
      //   toggleModal();
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
      <button type="button" onClick={toggleModal}> Modal </button> 
      {/* ================================================================= */}
      {openModal && (
        <div
          className={style.overlay}
          onClick={handleClick}
          data-name="overlay"
        >
          <div className={style.modal} data-name="modal">
            <button
              className={style.closeButton}
              type="button"
              onClick={toggleModal}
            ></button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
