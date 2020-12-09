import { useState, useEffect } from "react";
import logoStyle from "./Logo.module.css";
import { useSelector } from "react-redux";
import { isLogin } from "./../../redux/selectors/selectors";

// импортировать
import { Redirect } from "react-router-dom";

const Logo = () => {
  const [auth, setAuth] = useState(false);

  // проверка на логин в функции redirectAuth
  const redirectAuth = () => {
    if (auth) {
      <Redirect to="/diary" />;
    } else {
      <Redirect to="/" />;
    }
  };

  const authData = useSelector(isLogin);
  useEffect(() => {
    setAuth(authData);
  }, [isLogin]);
  return <div className={logoStyle.logo_pointer} onClick={redirectAuth}></div>;
};
export default Logo;
