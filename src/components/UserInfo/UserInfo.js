import React from "react";
import { NavLink } from "react-router-dom";
import style from "./UserInfo.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/operations/UserInfoOperations";

const UserInfo = () => {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logOut(token));
  };
  return (
    <div className={style.mainInfo}>
      <NavLink to="/" className={style.userInfoLink}>
        User
      </NavLink>
      <NavLink onClick={logout} to="/" className={style.exitInfoLink}>
        Выйти
      </NavLink>
    </div>
  );
};

export default UserInfo;
