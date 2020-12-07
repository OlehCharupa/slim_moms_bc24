import routes from "../routes/routes";
import React, { Suspense } from "react";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";
import styles from "./App.module.css";
import SpinerLoader from "./spinerLoader/SpinerLoader";
import { Switch } from "react-router-dom";
import RightSideBar from './RightSideBar/RightSideBar';
function App() {
  
  return (
    <>
      <div className={styles.container}>
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
        <RightSideBar />
      </div>


    </>
  );
}

export default App;
