import React, { Suspense, useEffect } from "react";
import { Switch, useHistory } from "react-router-dom";
// import styles from './App.module.css';
import SpinerLoader from "./spinerLoader/SpinerLoader";
import routes from "../routes/routes";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";
import Header from "./Header/Header";
// import { useDispatch, useSelector } from "react-redux";
// import { currentUser } from "../redux/operations/currentUser";
// import { resetToken } from "../redux/slice/tokinSlice";


function App() {
  // const stateToken = useSelector((state) => state.token);
  // const stateUser = useSelector((state) => state.user);
  // const errToken = useSelector((state) => state.errorRequest);
  // const dispatch = useDispatch();
  // const history = useHistory();

  // useEffect(() => {
  //   if (stateToken && Object.keys(stateUser).length == 0) {
  //     dispatch(currentUser());
  //     if (!!(errToken.indexOf("404") + 1)) {
  //       dispatch(resetToken());
  //       history.push("/login");
  //     }
  //   }
  // }, []);

  return (
    <>
      <Header />
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

    </>
  );
}

export default App;
