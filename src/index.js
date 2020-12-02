import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';

=======
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from "redux-persist/integration/react"
import App from './components/App';
>>>>>>> dev
import styles from './index.module.css';
import { store } from "./redux/store"
import { persistor } from "./redux/store"

import App from './components/App';

ReactDOM.render(
<<<<<<< HEAD
  <BrowserRouter>
    <App />
  </BrowserRouter>,
=======
  <Provider store={store} >
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
>>>>>>> dev
  document.getElementById('root')
);

