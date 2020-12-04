import { useState, useEffect } from "react";
import logoStyle from "./Logo.module.css";
// импортировать
import {Redirect } from 'react-router-dom'

const Logo = () => {
  const [auth, setAuth] = useState(false);

  // проверка на логин в функции redirectAuth
  const redirectAuth = () => {
    if (auth) {
      <Redirect to="/diary" />
    } else {
      <Redirect to="/login" />
    }
  };
  useEffect(() => {
    // получаем данные redux о авторизации в authData
    // const authData = useSelector(state => state.auth)
    // setAuth(authData)
  }, []);
  return (
    <div className={logoStyle.logo_pointer} onClick={redirectAuth}>
      {" "}
    </div>
  );
};
export default Logo;
