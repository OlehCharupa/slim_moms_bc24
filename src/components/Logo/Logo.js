import { useState, useEffect } from "react";
import logoStyle from "./Logo.module.css";
// import { useSelector } from "react-redux"
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
      <Redirect to="/login" />;
    }
  };
  // useEffect(() => {
  // получаем данные redux о авторизации в authData
  // const authData = useSelector(isLogin)
  // или получать данные из reselect?????????
  // setAuth(authData)
  // }, [isLogin]);
  return (
    <div className={logoStyle.logo_pointer} onClick={redirectAuth}>
      {" "}
    </div>
  );
};
export default Logo;
