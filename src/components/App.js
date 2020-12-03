import React from "react";
import styles from "./App.module.css";
import Modal from "./modal/Modal";

function App() {
  return (
    <div>
      <Modal> {/*вказуємо потрібний компонент children, передаємо arrowVisible=false/true, callback - на закриття модлки*/} </Modal>
    </div>
  );
}

export default App;
