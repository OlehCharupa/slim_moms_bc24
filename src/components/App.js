import React from 'react';
import styles from './App.module.css';
import Modal from './modal/Modal';
import SpinerLoader from './spinerLoader/SpinerLoader';


function App() {
 
  return (
    <div>
      <Modal>
      <h2>Modal title</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
          aliquam, similique asperiores voluptates eos expedita modi
          pariatur ipsa necessitatibus fuga harum! Animi, facilis
          reiciendis nesciunt alias quo unde tempora. Natus eum delectus
          porro placeat, praesentium, harum maiores sunt explicabo quidem,
          excepturi nam repellendus officiis distinctio minima enim magnam
          et accusamus.
        </p>
      </Modal>
 {/* <SpinerLoader/> */}
  </div> 
  );
}

export default App;
