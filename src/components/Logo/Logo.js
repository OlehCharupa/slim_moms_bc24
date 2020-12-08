import React from "react";
import logoStyle from "./Logo.module.css";
import { useSelector } from "react-redux";
import { isLogin } from "./../../redux/selectors/selectors";

// импортировать
import { Link } from "react-router-dom";

const Logo = () => {
  const islogin = useSelector(isLogin);

  return (
    <>
      {islogin
        ? <Link to="/diary">
          <div className={logoStyle.logo_pointer} >
            {" "}
          </div>
        </Link >
        : <Link to="/">
          <div className={logoStyle.logo_pointer} >
            {" "}
          </div>
        </Link >}
    </>
  );
};
export default Logo;
