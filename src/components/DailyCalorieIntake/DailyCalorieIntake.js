import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styles from "./DailyCalorieIntake.module.css";
import Modal from "../modal/Modal";
import {
  notAllowedProducts,
  dailyRate,
  errorRequest,
} from "../../redux/selectors/selectors";

const DailyCalorieIntake = () => {
  const history = useHistory();
  const products = useSelector((state) => notAllowedProducts(state));
  const ccal = useSelector((state) => dailyRate(state));
  const error = useSelector((state) => errorRequest(state));

  const [isModal, setIsModal] = useState(true);

  const modalHandler = () => setIsModal(false);
  const btnSubmit = () => {
    modalHandler();
    history.push("/registration");
  };

  return (
    <Modal openModal={isModal} toggleModal={modalHandler}>
      {error ? (
        <p className={styles.error}>Произошла ошибка, попробуйте позже!</p>
      ) : (
        <div className={styles.dailyCalorieIntake}>
          <h1 className={styles.title}>
            Ваша рекомендуемая суточная норма калорий составляет
          </h1>
          <p className={styles.info}>
            <span className={styles.ccal}>{ccal}</span> ккал
          </p>
          <div className={styles.mustntEatDiv}>
            <h2 className={styles.mustntEat}>
              Продукты, которые вам <br /> не рекомендуется употреблять
            </h2>
            <ol className={styles.list}>
              {products.map((product) => (
                <li key={product}>{product}</li>
              ))}
            </ol>
          </div>
          <button type="button" className={styles.btn} onClick={btnSubmit}>
            Начать худеть
          </button>
        </div>
      )}
    </Modal>
  );
};

export default DailyCalorieIntake;
