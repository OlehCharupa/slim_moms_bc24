import { useState, useEffect } from "react";
import logoStyle from "./Logo.module.css";
// импортировать
import { Redirect } from 'react-router-dom'
import { useSelector } from "react-redux";

const Logo = () => {
  const [auth, setAuth] = useState(false);

  // проверка на логин в функции redirectAuth
  const redirectAuth = () => {
    if (auth) {
      <Redirect to="/diary" />
    } else {
      <Redirect to="/" />
    }
  };
  const authData = useSelector(state => !!state.token)
  useEffect(() => {
    // получаем данные redux о авторизации в authData
    setAuth(authData)
  }, []);
  return (
    <div className={logoStyle.logo_pointer} onClick={redirectAuth}>
      {" "}
    </div>
  );
};
export default Logo;
