import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from "redux-persist/integration/react"
import App from './Components/App';
import styles from './index.module.css';
import store from "./redux/store"

ReactDOM.render(
  <Provider store={store} >
    <PersistGate >
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

