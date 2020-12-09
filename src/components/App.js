import React, { Suspense, useEffect } from "react";
import { Switch } from "react-router-dom";
// import styles from './App.module.css';
import SpinerLoader from "./spinerLoader/SpinerLoader";
import routes from "../routes/routes";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";
import Header from "./Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../redux/operations/currentUser";
import DiaryProductsList from "./DiaryProductsList/DiaryProductsList";

function App() {
  const stateToken = useSelector((state) => state.token);
  const stateUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (stateToken && !stateUser) {
      dispatch(currentUser());
    }
  });

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
        <DiaryProductsList />
      </div>
    </>
  );
}

export default App;
