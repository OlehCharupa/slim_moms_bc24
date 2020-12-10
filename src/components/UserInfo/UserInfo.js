import React from "react";
import { NavLink } from "react-router-dom";
import style from "./UserInfo.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/operations/logoutOperations";

const UserInfo = () => {
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user?.username);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logOut(token));
  };
  return (
    <div className={style.mainInfo}>
      <NavLink to="/" className={style.userInfoLink}>
        {user}
      </NavLink>
      <NavLink onClick={logout} to="/" className={style.exitInfoLink}>
        Выйти
      </NavLink>
    </div>
  );
};//;;;;;

export default UserInfo;
