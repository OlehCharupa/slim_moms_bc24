import React, { Suspense } from 'react';
import { Switch } from "react-router-dom";
// import { useSelector } from 'react-redux';
// import { useWindowWidth } from '@react-hook/window-size';

import styles from './App.module.css';
import SpinerLoader from "./spinerLoader/SpinerLoader";
import routes from '../routes/routes';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import Header from "./Header/Header"

function App() {

  // const token = useSelector(state => state.token);
  // const onlyWidth = useWindowWidth();

  return (
    <>
      <Header />
      {/* <div className={styles.container}> */}

        {/*для відображення сторінок Не видаляти! */}
        <Suspense fallback={<SpinerLoader />}>
          <Switch>
            {routes.map((route) => {
              return route.private ? (
                <PrivateRoute key={route.label} {...route} />
              ) : (
                  <PublicRoute key={route.label} {...route} />
                );
            })}
          </Switch>
        </Suspense>
        {/* <RightSideBar /> */}
      {/* </div> */}
    </>
  );
}

export default App;
