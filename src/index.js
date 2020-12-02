import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import styles from './index.module.css';
import { store } from './redux/store';

ReactDOM.render(
  <Provider store={store}>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

