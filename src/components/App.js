import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
// import styles from './App.module.css';
import SpinerLoader from "./spinerLoader/SpinerLoader";
import routes from "../routes/routes";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";
import Header from "./Header/Header";

function App() {
  return (
    <>
      <Header />
      <div>
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
      </div>
    </>
  );
}

export default App;
