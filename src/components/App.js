import routes from "../routes/routes";
import React from "react";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";
import styles from "./App.module.css";
import RegistrationPage from "./FormRegistration";
import BgImage from "./BgImage/BgImage";
import Header from "./Header/Header";
import ValidationPage from "./FormValidation";

function App() {
  return (
    <>
      
      <BgImage />
      <div className={styles.container}>
        {routes.map((route) => {
          return route.private ? (
            <PrivateRoute key={route.label} {...route} />
          ) : (
              <PublicRoute key={route.label} {...route} />
            );
        })}
      </div>
    </>
  );
}

export default App;
