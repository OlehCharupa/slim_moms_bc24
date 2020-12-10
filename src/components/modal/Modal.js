import React, { useEffect } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import style from "./Modal.module.css";

const Modal = ({ children, openModal, toggleModal }) => {
  //   у компоненті, який викликає модальне вікно, потрібно стоврити локальний стейт:
  //   const [openModal, setOpenModal]= useState(false)
  //   та прописати логіку тогла (закриття/відкриття модального вікна):
  //   const toggleModal=()=>{
  //    setOpenModal(!openModal)
  //  }
  //  та передати їх пропсами

  const onlyWidth = useWindowWidth();
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.body.className = openModal ? style.open : style.close;
    //  document.body.style.overflow=openModal?"hidden":"visible";
  }, [openModal]);

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
            <button
              className={
                onlyWidth < 768 ? style.arrowCloseButton : style.closeButton
              }
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
