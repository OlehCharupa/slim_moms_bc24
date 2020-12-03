import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from "redux-persist/integration/react"
import App from './components/App';
import styles from './index.module.css';
import { store } from "./redux/store"
import { persistor } from "./redux/store"


ReactDOM.render(
  <Provider store={store} >
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

