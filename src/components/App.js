import React from 'react';
import styles from './App.module.css';
import Modal from './modal/Modal';
import SpinerLoader from './spinerLoader/SpinerLoader';



function App() {
 
  return (
    <div>
      <Modal>
      {/* вказуємо потрібний компонент children */}
      {/* ==================видалити!====================== */}
      <div>
      <h2>Ваша рекомендуемая суточная норма калорий составляет</h2>
        <p>
        2800 ккал
        </p>
        <ul>Продукты, которые вам не рекомендуется употреблять:
          <li>1. Мучные продукты </li>
          <li>2. Молоко</li>
          <li>3. Красное мясо</li>
          <li>4. Копчености</li>
        </ul>
        <button>Начать худеть</button>
        </div>
        {/* =================================================== */}
      </Modal>
<SpinerLoader/>
  </div> 
  );
}

export default App;
